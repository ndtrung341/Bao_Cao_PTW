<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = array(
            array('id' => '1', 'name' => 'Adults Welcome',  'slug' => '/categories/adults-welcome', 'created_at' => '2022-05-01 06:37:22', 'updated_at' => '2022-05-01 06:37:22'),
            array('id' => '2', 'name' => 'Animals',  'slug' => '/categories/animals', 'created_at' => '2022-05-01 06:37:22', 'updated_at' => '2022-05-01 06:37:22'),
            array('id' => '3', 'name' => 'Buildings',  'slug' => '/categories/buildings', 'created_at' => '2022-05-01 06:37:22', 'updated_at' => '2022-05-01 06:37:22'),
            array('id' => '4', 'name' => 'Cars',  'slug' => '/categories/cars', 'created_at' => '2022-05-01 06:37:22', 'updated_at' => '2022-05-01 06:37:22'),
            array('id' => '5', 'name' => 'Dragons',  'slug' => '/categories/dragons', 'created_at' => '2022-05-01 06:37:23', 'updated_at' => '2022-05-01 06:37:23'),
            array('id' => '6', 'name' => 'Fantasy',  'slug' => '/categories/fantasy', 'created_at' => '2022-05-01 06:37:23', 'updated_at' => '2022-05-01 06:37:23'),
            array('id' => '7', 'name' => 'Movies',  'slug' => '/categories/movies', 'created_at' => '2022-05-01 06:37:23', 'updated_at' => '2022-05-01 06:37:23'),
            array('id' => '8', 'name' => 'Gaming',  'slug' => '/categories/gaming', 'created_at' => '2022-05-01 06:37:23', 'updated_at' => '2022-05-01 06:37:23'),
            array('id' => '9', 'name' => 'Home Decor',  'slug' => '/categories/home-decor', 'created_at' => '2022-05-01 06:37:23', 'updated_at' => '2022-05-01 06:37:23'),
            array('id' => '10', 'name' => 'Learn to build', 'slug' => '/categories/learn-to-build', 'created_at' => '2022-05-01 06:37:24', 'updated_at' => '2022-05-01 06:37:24'),
            array('id' => '11', 'name' => 'Ninjas',  'slug' => '/categories/ninjas', 'created_at' => '2022-05-01 06:37:24', 'updated_at' => '2022-05-01 06:37:24'),
            array('id' => '12', 'name' => 'Preschool',  'slug' => '/categories/preschool', 'created_at' => '2022-05-01 06:37:24', 'updated_at' => '2022-05-01 06:37:24'),
            array('id' => '13', 'name' => 'Princesses',  'slug' => '/categories/princesses', 'created_at' => '2022-05-01 06:37:24', 'updated_at' => '2022-05-01 06:37:24'),
            array('id' => '14', 'name' => 'Real-Life Heroes',  'slug' => '/categories/real-life-heroes', 'created_at' => '2022-05-01 06:37:24', 'updated_at' => '2022-05-01 06:37:24'),
            array('id' => '15', 'name' => 'Seasonal',  'slug' => '/categories/seasonal', 'created_at' => '2022-05-01 06:37:25', 'updated_at' => '2022-05-01 06:37:25'),
            array('id' => '16', 'name' => 'Space',  'slug' => '/categories/space', 'created_at' => '2022-05-01 06:37:25', 'updated_at' => '2022-05-01 06:37:25'),
            array('id' => '17', 'name' => 'Sports',  'slug' => '/categories/sports', 'created_at' => '2022-05-01 06:37:25', 'updated_at' => '2022-05-01 06:37:25'),
            array('id' => '18', 'name' => 'Trains',  'slug' => '/categories/trains', 'created_at' => '2022-05-01 06:37:25', 'updated_at' => '2022-05-01 06:37:25'),
            array('id' => '19', 'name' => 'Travel',  'slug' => '/categories/travel', 'created_at' => '2022-05-01 06:37:25', 'updated_at' => '2022-05-01 06:37:25'),
            array('id' => '20', 'name' => 'TV Shows',  'slug' => '/categories/tv-shows', 'created_at' => '2022-05-01 06:37:26', 'updated_at' => '2022-05-01 06:37:26'),
            array('id' => '21', 'name' => 'Vehicles',  'slug' => '/categories/vehicles', 'created_at' => '2022-05-01 06:37:26', 'updated_at' => '2022-05-01 06:37:26')
        );
        if (DB::table('categories')->count() === 0) {
            DB::table('categories')->insert($categories);
        }
    }
}
