<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Http\Services\ProductService;
use App\Http\Services\UploadService;
use App\Models\Brand;
use App\Models\Category;
use App\Models\FileUpload;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductImage;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $urlKey = $request->query('urlKey', '');

            $query = Product::with(['categories', 'brand']);

            if (Str::startsWith($urlKey, '/categories')) {
                $category = Category::where('slug', $urlKey)->firstOrFail();
                $query = $query->whereHas('categories', function (Builder $q) use ($category) {
                    $q->where('categories.id', $category->id);
                });
            } else if (Str::startsWith($urlKey, '/themes')) {
                $brand = Brand::where('slug', $urlKey)->firstOrFail();
                $query = Product::where('brand_id', $brand->id);
            }

            $filters = ProductService::getFilterOptions($query->get());

            $paginateResult = ProductService::paginate($request, $query);

            return new ProductCollection($paginateResult, $filters);
        } catch (\Throwable $th) {
            if ($th instanceof ModelNotFoundException) {
                return response()->json(['message' => 'Not found'], 404);
            }
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $product = Product::create([
                "name" => $request->name,
                "sale_price" => $request->salePrice,
                "price" => $request->price,
                "brand_id" => $request->brand,
                "quantity" => $request->quantity,
                "description" => $request->description,
                "status" => $request->status || true,
                "thumbnail" => $request->images[0]['url'],
                "slug" => Str::slug($request->name),
                "created_at" => Carbon::now()->timestamp
            ]);

            $images = [];
            foreach ($request->images as $image) {
                $images[] = ['product_id' => $product->id, 'public_id' => $image['public_id']];
            }
            ProductImage::insert($images);


            $categories = [];
            foreach ($request->categories as $category_id) {
                $categories = ['product_id' => $product->id, 'category_id' => $category_id];
            }
            ProductCategory::insert($categories);

            DB::commit();
            return response()->json(['status' => 'success', 'message' => 'Thêm mới sản phẩm thành công'], 201);
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json(['status' => 'failed', 'message' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        // return response()->json($product->categories);
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        DB::beginTransaction();
        try {
            $product->name = $request->name;
            $product->brand_id = $request->brand;
            $product->price = $request->price;
            $product->sale_price = $request->salePrice;
            $product->quantity = $request->quantity;
            $product->description = $request->description;
            $product->thumbnail = $request->images[0]['url'];
            $product->save();

            foreach ($request->images as $image) {
                ProductImage::updateOrCreate(['product_id' => $product->id, 'public_id' => $image['public_id']]);
            }

            foreach ($request->categories as $category_id) {
                ProductCategory::updateOrCreate(['product_id' => $product->id, 'category_id' => $category_id]);
            }

            DB::commit();

            return response()->json(['status' => 'success', 'message' => 'Cập nhật sản phẩm thành công'], 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['status' => 'failed', 'message' => $th->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        try {
            DB::beginTransaction();
            // delete product images
            $imageIdList = $product->images()->pluck('public_id');
            $product->delete(); // delete product
            foreach ($imageIdList as $id) {
                UploadService::destroy($id);
            }
            DB::commit();
            return response()->json(['message' => 'Xóa thành công'], 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    public function deleteImage(Request $request)
    {
        try {
            $product_id = $request->productId;
            $public_id = $request->publicId;

            UploadService::destroy($public_id);
            ProductImage::where([['product_id', '=', $product_id], ['public_id', '=', $public_id]])->delete();

            return response()->json(['message' => 'ok'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    public function getRelated(Product $product)
    {
        $category_list = [];
        foreach ($product->categories as $item) {
            $category_list[] = $item->id;
        }

        $productList = Product::with('categories')
            ->where([
                ['brand_id', '=', $product->brand_id],
                // ['id', '<>', $product->id]
            ])
            ->whereHas('categories', function ($query) use ($category_list) {
                $query->whereIn('categories.id', $category_list)->distinct();
            })->inRandomOrder()->limit(8)->get();

        return ProductResource::collection($productList);
    }

    public function insert(Request $request)
    {
        $images = [];
        foreach ($request->images as $url) {
            $contents = file_get_contents($url);
            $id = md5(\uniqid(rand(), true));
            $ext = '.png';
            $path = 'upload/' . $id . $ext;
            Storage::disk('local')->put($path, $contents);
            $images[] =  ['id' => $id, 'url' => URL::asset($path)];

            // store db
            $uploadFile = new FileUpload;
            $uploadFile->id = $id;
            $uploadFile->url = URL::asset($path);
            $uploadFile->save();
        }

        $product = Product::create([
            "name" => $request->name,
            "sale_price" => $request->salePrice,
            "price" => $request->price,
            "brand_id" => $request->brand,
            "quantity" => $request->quantity,
            "description" => $request->description,
            "status" => $request->status || true,
            "thumbnail" => $images[0]['url'],
            "slug" => Str::slug($request->name),
            "created_at" => Carbon::now()->timestamp
        ]);

        $imgs = [];
        foreach ($images as $image) {
            $imgs[] = ['product_id' => $product->id, 'public_id' => $image['id']];
        }
        ProductImage::insert($imgs);

        $categories = [];
        foreach ($request->categories as $category_id) {
            $categories[] = ['product_id' => $product->id, 'category_id' => $category_id];
        }

        ProductCategory::insert($categories);

        return response()->json($product, 201);
    }

    public function getLatest()
    {
        $productList = Product::orderByDesc('created_at')->take(4)->get();
        return ProductResource::collection($productList);
    }

    public function getTopSeller()
    {
        $productList =
            Product::orderByDesc('sale_price')->take(6)->get();
        return ProductResource::collection($productList);
    }
}
