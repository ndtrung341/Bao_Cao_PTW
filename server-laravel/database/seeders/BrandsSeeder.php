<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $brands = array(
            array('id' => '1', 'name' => 'Creator Expert', 'slug' => 'creator-expert', 'created_at' => '2022-05-01 06:37:03', 'updated_at' => '2022-05-01 06:37:03'),
            array('id' => '2', 'name' => 'Architecture', 'slug' => 'architecture', 'created_at' => '2022-05-01 06:37:04', 'updated_at' => '2022-05-01 06:37:04'),
            array('id' => '3', 'name' => 'Batman™', 'slug' => 'batman', 'created_at' => '2022-05-01 06:37:04', 'updated_at' => '2022-05-01 06:37:04'),
            array('id' => '4', 'name' => 'City', 'slug' => 'city', 'created_at' => '2022-05-01 06:37:04', 'updated_at' => '2022-05-01 06:37:04'),
            array('id' => '5', 'name' => 'Creator 3-in-1', 'slug' => 'creator-3-in-1', 'created_at' => '2022-05-01 06:37:04', 'updated_at' => '2022-05-01 06:37:04'),
            array('id' => '6', 'name' => 'DC', 'slug' => 'dc', 'created_at' => '2022-05-01 06:37:05', 'updated_at' => '2022-05-01 06:37:05'),
            array('id' => '7', 'name' => 'Disney™', 'slug' => 'disney', 'created_at' => '2022-05-01 06:37:05', 'updated_at' => '2022-05-01 06:37:05'),
            array('id' => '8', 'name' => 'Friends', 'slug' => 'friends', 'created_at' => '2022-05-01 06:37:05', 'updated_at' => '2022-05-01 06:37:05'),
            array('id' => '9', 'name' => 'Harry Potter™', 'slug' => '/harry-potter', 'created_at' => '2022-05-01 06:37:05', 'updated_at' => '2022-05-01 06:37:05'),
            array('id' => '10', 'name' => 'Ideas', 'slug' => 'ideas', 'created_at' => '2022-05-01 06:37:05', 'updated_at' => '2022-05-01 06:37:05'),
            array('id' => '11', 'name' => 'Jurassic World™', 'slug' => 'jurassic-world', 'created_at' => '2022-05-01 06:37:05', 'updated_at' => '2022-05-01 06:37:05'),
            array('id' => '12', 'name' => 'LEGO® Super Mario™', 'slug' => 'lego-super-mario', 'created_at' => '2022-05-01 06:37:06', 'updated_at' => '2022-05-01 06:37:06'),
            array('id' => '13', 'name' => 'Marvel', 'slug' => '/marvel', 'created_at' => '2022-05-01 06:37:06', 'updated_at' => '2022-05-01 06:37:06'),
            array('id' => '14', 'name' => 'Minecraft®', 'slug' => 'minecraft', 'created_at' => '2022-05-01 06:37:06', 'updated_at' => '2022-05-01 06:37:06'),
            array('id' => '15', 'name' => 'Monkie Kid™', 'slug' => 'monkie-kid', 'created_at' => '2022-05-01 06:37:06', 'updated_at' => '2022-05-01 06:37:06'),
            array('id' => '16', 'name' => 'NINJAGO®', 'slug' => 'ninjago', 'created_at' => '2022-05-01 06:37:06', 'updated_at' => '2022-05-01 06:37:06'),
            array('id' => '17', 'name' => 'Speed Champions', 'slug' => 'speed-champions', 'created_at' => '2022-05-01 06:37:07', 'updated_at' => '2022-05-01 06:37:07'),
            array('id' => '18', 'name' => 'Spider-Man', 'slug' => 'spider-man', 'created_at' => '2022-05-01 06:37:07', 'updated_at' => '2022-05-01 06:37:07'),
            array('id' => '19', 'name' => 'Star Wars™', 'slug' => 'star-wars', 'created_at' => '2022-05-01 06:37:07', 'updated_at' => '2022-05-01 06:37:07'),
            array('id' => '20', 'name' => 'Technic™', 'slug' => 'technic', 'created_at' => '2022-05-01 06:37:07', 'updated_at' => '2022-05-01 06:37:07')
        );
        if (DB::table('brands')->count() === 0) {
            DB::table('brands')->insert($brands);
        }
    }
}
