<?php

namespace Database\Seeders;

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
        ]);
    }
}
// $users = array(
//   array('id' => '1','fullname' => 'Duy Trung','email' => 'duytrung341@gmail.com','email_verified_at' => NULL,'password' => '$2y$10$1iUgidNbPYhSY91A53IdbOg.LQRjrm7ZU6AdhegXeMun4mOVJtlrG','avatar' => NULL,'role' => 'admin','remember_token' => NULL,'created_at' => '2022-05-10 09:20:48','updated_at' => '2022-05-10 09:20:48'),
//   array('id' => '2','fullname' => 'Duy Trung','email' => '19004222@st.vlute.edu.vn','email_verified_at' => NULL,'password' => '$2y$10$c2bcSQVqI31mwayn8VrUPuUBicmGxV55g.2X7udqbH/4BsY1k4TES','avatar' => NULL,'role' => 'user','remember_token' => NULL,'created_at' => '2022-05-13 11:21:31','updated_at' => '2022-05-13 11:21:31')
// );

// $products = array(
//     array('id' => '5', 'name' => 'Thor\'s Hammer', 'brand_id' => '2', 'price' => '30000', 'sale_price' => '30000', 'quantity' => '3', 'description' => '<p>gsdfsdf</p>', 'status' => '1', 'thumbnail' => 'http://localhost:8000/upload/01ca2c97288df48593a090045f0410b5.png', 'slug' => 'thors-hammer', 'created_at' => '2022-05-11 07:43:04', 'updated_at' => '2022-05-14 03:20:46'),
//     array('id' => '6', 'name' => 'The Goat Boat', 'brand_id' => '2', 'price' => '25000', 'sale_price' => '20000', 'quantity' => '3', 'description' => '<p>fdsffsd</p>', 'status' => '1', 'thumbnail' => 'http://localhost:8000/upload/398ec47995680939209192ac232363e3.png', 'slug' => 'the-goat-boat', 'created_at' => '2022-05-14 03:13:09', 'updated_at' => '2022-05-14 03:20:46')
// );

// $product_images = array(
//     array('id' => '6', 'product_id' => '5', 'public_id' => '01ca2c97288df48593a090045f0410b5', 'created_at' => '2022-05-11 11:41:46', 'updated_at' => '2022-05-11 11:41:46'),
//     array('id' => '7', 'product_id' => '5', 'public_id' => '71169368bed2e9272166c54f793b0336', 'created_at' => '2022-05-11 11:41:46', 'updated_at' => '2022-05-11 11:41:46'),
//     array('id' => '8', 'product_id' => '6', 'public_id' => '398ec47995680939209192ac232363e3', 'created_at' => NULL, 'updated_at' => NULL),
//     array('id' => '9', 'product_id' => '6', 'public_id' => 'b00c6cdcc91cdd58a3b8360a59ecea07', 'created_at' => NULL, 'updated_at' => NULL)
// );

// $product_categories = array(
//     array('id' => '1', 'product_id' => '5', 'category_id' => '1', 'created_at' => NULL, 'updated_at' => NULL),
//     array('id' => '2', 'product_id' => '5', 'category_id' => '6', 'created_at' => '2022-05-11 10:55:50', 'updated_at' => '2022-05-11 10:55:50'),
//     array('id' => '3', 'product_id' => '6', 'category_id' => '3', 'created_at' => NULL, 'updated_at' => NULL)
// );
