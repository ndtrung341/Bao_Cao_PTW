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
            array('id' => '9', 'product_id' => '4', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '10', 'product_id' => '5', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '11', 'product_id' => '5', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '12', 'product_id' => '6', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '13', 'product_id' => '6', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '14', 'product_id' => '7', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '15', 'product_id' => '7', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '16', 'product_id' => '8', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '17', 'product_id' => '8', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '18', 'product_id' => '9', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '19', 'product_id' => '9', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '20', 'product_id' => '10', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '21', 'product_id' => '10', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '22', 'product_id' => '11', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '23', 'product_id' => '12', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '24', 'product_id' => '12', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '25', 'product_id' => '12', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '26', 'product_id' => '13', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '27', 'product_id' => '13', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '28', 'product_id' => '14', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '29', 'product_id' => '14', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '30', 'product_id' => '15', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '31', 'product_id' => '16', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '32', 'product_id' => '17', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '33', 'product_id' => '17', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '34', 'product_id' => '18', 'category_id' => '12', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '35', 'product_id' => '18', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '36', 'product_id' => '18', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '37', 'product_id' => '19', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '38', 'product_id' => '19', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '39', 'product_id' => '20', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '40', 'product_id' => '20', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '41', 'product_id' => '20', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '42', 'product_id' => '21', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '43', 'product_id' => '21', 'category_id' => '16', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '44', 'product_id' => '21', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '45', 'product_id' => '22', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '46', 'product_id' => '22', 'category_id' => '18', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '47', 'product_id' => '23', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '48', 'product_id' => '23', 'category_id' => '16', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '49', 'product_id' => '24', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '50', 'product_id' => '24', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '51', 'product_id' => '24', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '52', 'product_id' => '25', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '53', 'product_id' => '25', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '54', 'product_id' => '25', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '55', 'product_id' => '26', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '56', 'product_id' => '27', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '57', 'product_id' => '27', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '58', 'product_id' => '27', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '59', 'product_id' => '28', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '60', 'product_id' => '28', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '61', 'product_id' => '29', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '62', 'product_id' => '30', 'category_id' => '2', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '63', 'product_id' => '30', 'category_id' => '15', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '64', 'product_id' => '31', 'category_id' => '5', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '65', 'product_id' => '31', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '66', 'product_id' => '31', 'category_id' => '6', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '67', 'product_id' => '32', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '68', 'product_id' => '33', 'category_id' => '4', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '69', 'product_id' => '33', 'category_id' => '21', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '70', 'product_id' => '34', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '71', 'product_id' => '35', 'category_id' => '16', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '72', 'product_id' => '36', 'category_id' => '2', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '73', 'product_id' => '37', 'category_id' => '2', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '74', 'product_id' => '37', 'category_id' => '15', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '75', 'product_id' => '38', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '76', 'product_id' => '38', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '77', 'product_id' => '39', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '78', 'product_id' => '40', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '79', 'product_id' => '40', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '80', 'product_id' => '41', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '81', 'product_id' => '41', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '82', 'product_id' => '42', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '83', 'product_id' => '42', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '84', 'product_id' => '43', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '85', 'product_id' => '43', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '86', 'product_id' => '43', 'category_id' => '15', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '87', 'product_id' => '44', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '88', 'product_id' => '44', 'category_id' => '16', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '89', 'product_id' => '45', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '90', 'product_id' => '45', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '91', 'product_id' => '45', 'category_id' => '14', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '92', 'product_id' => '46', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '93', 'product_id' => '46', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL)
        );
        if (DB::table('product_categories')->count() === 0) {
            DB::table('product_categories')->insert($product_categories);
        }
    }
}
