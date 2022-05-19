<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product_images = array(
            array('id' => '1', 'product_id' => '1', 'public_id' => 'dcff4c74e0275aa47cb378080605a92f', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '2', 'product_id' => '2', 'public_id' => '9ff3547c80a9f902d3a91f3e62060cae', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '3', 'product_id' => '3', 'public_id' => 'dd07de9f2f20481d15390d10fde53e0e', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '4', 'product_id' => '4', 'public_id' => '15e3c514842f45f7617ed1bfaf379604', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '5', 'product_id' => '5', 'public_id' => '68d774b746e90240c5b88160f2e9b519', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '6', 'product_id' => '6', 'public_id' => '0a224aef716d0d80220dba6558f8b05a', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '7', 'product_id' => '7', 'public_id' => 'd52730ed3b2e94f387660716182a8315', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '8', 'product_id' => '8', 'public_id' => '92c97f03b82c2012fbc39c3a3a2f63d5', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '9', 'product_id' => '9', 'public_id' => '37cbcac9a7f57d933bdc70cfa402078c', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '10', 'product_id' => '10', 'public_id' => '1bdd41622fce74b844a2c58cd061ef74', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '11', 'product_id' => '11', 'public_id' => 'f6bf59a85d393107df48d50524d61272', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '12', 'product_id' => '12', 'public_id' => '73bef4940b92a615a8cb0c96b2c1af5e', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '13', 'product_id' => '13', 'public_id' => 'b6f7cac9c9b1b8502b293a2284bf4053', 'created_at' => NULL, 'updated_at' => NULL),
            array('id' => '14', 'product_id' => '14', 'public_id' => 'b8ca68c85ee0a6aa4bafdaee22869245', 'created_at' => NULL, 'updated_at' => NULL)
        );
        if (DB::table('product_images')->count() === 0) {
            DB::table('fproduct_images')->insert($product_images);
        }
    }
}
