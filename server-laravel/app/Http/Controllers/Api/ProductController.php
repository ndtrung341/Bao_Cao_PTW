<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
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
            $pathname = $request->post('pathname');
            $slug = Str::match('/[^\/]+$/', $pathname);

            $query = Product::with(['categories', 'brand']);

            if (Str::startsWith($pathname, '/categories')) {
                $category = Category::where('slug', $slug)->firstOrFail();
                $query = $query->whereHas('categories', function (Builder $q) use ($category) {
                    $q->where('categories.id', $category->id);
                });
            } else if (Str::startsWith($pathname, '/brands')) {
                $brand = Brand::where('slug', $slug)->firstOrFail();
                $query = Product::where('brand_id', $brand->id);
            }

            $filters = $this->getFilterOptions($query->get());

            $paginateResult = $this->getPaginate($request, $query);

            return new ProductCollection($paginateResult, $filters);
        } catch (\Throwable $th) {
            if ($th instanceof ModelNotFoundException) {
                return response()->json(['message' => 'Not found'], 404);
            }
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }
    public function getFilterOptions($productList)
    {
        $categoryList = collect();
        $brandList = collect();

        $productList->each(function ($product) use (&$categoryList, &$brandList) {
            foreach ($product->categories as $category) {
                if (!$categoryList->contains('id', $category->id)) {
                    $categoryList->push($category);
                }
            }

            if (!$brandList->contains('id', $product->brand->id)) {
                $brandList->push($product->brand);
            }
        });

        return [
            'categories' => $categoryList->sortBy('name'),
            'brands' => $brandList->sortBy('name')
        ];
    }

    public function getPaginate(Request $request, Builder $query)
    {

        $page = (int) $request->query('page', 1);
        $limit = (int) $request->query('limit', 12);
        $sort = $request->query('sort', 'id');
        $order = $request->query('order', 'desc');
        $minPrice = $request->query('minPrice');
        $maxPrice = $request->query('maxPrice');
        $brands = $request->query('brands', []);
        $categories = $request->query('categories', []);

        $result = $query->when(($minPrice !== null && $maxPrice !== null), function ($q) use ($minPrice, $maxPrice) {
            $q->whereBetween('sale_price', [(int) $minPrice, (int) $maxPrice]);
        })
            ->orderBy(Str::snake($sort), $order)
            ->paginate($limit, ['*'], '_page', $page);

        return $result;
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
        //
    }

    public function deleteImage(Request $request)
    {
        try {
            $product_id = $request->productId;
            $public_id = $request->publicId;

            // UploadService::destroyCloudinary($media_id);
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
}
