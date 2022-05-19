<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CategoriesSeeder::class,
            BrandsSeeder::class,
            FileUploadSeeder::class,
            ProductSeeder::class,
            ProductImageSeeder::class,
            ProductCategorySeeder::class
        ]);
    }
}
