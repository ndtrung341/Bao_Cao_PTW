<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product_categories = array(
            array('id' => '1', 'product_id' => '1', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '2', 'product_id' => '1', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '3', 'product_id' => '2', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '4', 'product_id' => '2', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '5', 'product_id' => '3', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '6', 'product_id' => '3', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '7', 'product_id' => '3', 'category_id' => '15', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '8', 'product_id' => '4', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '9', 'product_id' => '4', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '10', 'product_id' => '5', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '11', 'product_id' => '5', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '12', 'product_id' => '5', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '13', 'product_id' => '6', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '14', 'product_id' => '7', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '15', 'product_id' => '7', 'category_id' => '16', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '16', 'product_id' => '8', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '17', 'product_id' => '8', 'category_id' => '18', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '18', 'product_id' => '9', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '19', 'product_id' => '10', 'category_id' => '5', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '20', 'product_id' => '10', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '21', 'product_id' => '10', 'category_id' => '6', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '22', 'product_id' => '11', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '23', 'product_id' => '11', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '24', 'product_id' => '12', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '25', 'product_id' => '12', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '26', 'product_id' => '13', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '27', 'product_id' => '14', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '28', 'product_id' => '14', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL)
        );
        if (DB::table('product_categories')->count() === 0) {
            DB::table('product_categories')->insert($product_categories);
        }
    }
}
