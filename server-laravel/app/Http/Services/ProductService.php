<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use \Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use \Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class ProductService
{
   static function getFilterOptions(Collection $productList)
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
         'categories' => $categoryList->sortBy('name')->values(),
         'brands' => $brandList->sortBy('name')->values()
      ];
   }

   static function paginate(Request $request, Builder $query)
   {
      $page = (int) $request->query('page', 1);
      $limit = (int) $request->query('limit', 12);
      $sort = $request->query('sort', 'id');
      $order = $request->query('order', 'desc');
      $minPrice = $request->query('minPrice');
      $maxPrice = $request->query('maxPrice');
      $brands = $request->query('brands');
      $categories = $request->query('categories');

      // filter brand
      $query = $query->when($brands, function (Builder $q, $brands) {
         $q->whereIn('brand_id', explode(',', $brands));
      });

      // filter categories
      $query = $query->when($categories, function (Builder $q, $categories) {
         $q->whereHas('categories', function ($q) use ($categories) {
            $q->where('categories.id', explode(',', $categories));
         });
      });

      // filter price
      $query = $query->when(($minPrice && $maxPrice), function (Builder $q) use ($minPrice, $maxPrice) {
         $q->whereBetween('sale_price', [(int) $minPrice, (int) $maxPrice]);
      });

      // sort
      $query = $query->orderBy(Str::snake($sort), $order);

      // paginate
      $result = $query->paginate($limit, ['*'], '_page', $page);

      return $result;
   }
}
