<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FileUploadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file_uploads = array(
            array('id' => '0a224aef716d0d80220dba6558f8b05a', 'url' => 'http://127.0.0.1:8000/upload/0a224aef716d0d80220dba6558f8b05a.png', 'created_at' => '2022-05-19 01:08:10', 'updated_at' => '2022-05-19 01:08:10'),
            array('id' => '15e3c514842f45f7617ed1bfaf379604', 'url' => 'http://127.0.0.1:8000/upload/15e3c514842f45f7617ed1bfaf379604.png', 'created_at' => '2022-05-19 01:08:08', 'updated_at' => '2022-05-19 01:08:08'),
            array('id' => '1bdd41622fce74b844a2c58cd061ef74', 'url' => 'http://127.0.0.1:8000/upload/1bdd41622fce74b844a2c58cd061ef74.png', 'created_at' => '2022-05-19 01:12:02', 'updated_at' => '2022-05-19 01:12:02'),
            array('id' => '37cbcac9a7f57d933bdc70cfa402078c', 'url' => 'http://127.0.0.1:8000/upload/37cbcac9a7f57d933bdc70cfa402078c.png', 'created_at' => '2022-05-19 01:12:02', 'updated_at' => '2022-05-19 01:12:02'),
            array('id' => '68d774b746e90240c5b88160f2e9b519', 'url' => 'http://127.0.0.1:8000/upload/68d774b746e90240c5b88160f2e9b519.png', 'created_at' => '2022-05-19 01:08:09', 'updated_at' => '2022-05-19 01:08:09'),
            array('id' => '73bef4940b92a615a8cb0c96b2c1af5e', 'url' => 'http://127.0.0.1:8000/upload/73bef4940b92a615a8cb0c96b2c1af5e.png', 'created_at' => '2022-05-19 01:13:45', 'updated_at' => '2022-05-19 01:13:45'),
            array('id' => '92c97f03b82c2012fbc39c3a3a2f63d5', 'url' => 'http://127.0.0.1:8000/upload/92c97f03b82c2012fbc39c3a3a2f63d5.png', 'created_at' => '2022-05-19 01:10:26', 'updated_at' => '2022-05-19 01:10:26'),
            array('id' => '9ff3547c80a9f902d3a91f3e62060cae', 'url' => 'http://127.0.0.1:8000/upload/9ff3547c80a9f902d3a91f3e62060cae.png', 'created_at' => '2022-05-19 01:06:42', 'updated_at' => '2022-05-19 01:06:42'),
            array('id' => 'b6f7cac9c9b1b8502b293a2284bf4053', 'url' => 'http://127.0.0.1:8000/upload/b6f7cac9c9b1b8502b293a2284bf4053.png', 'created_at' => '2022-05-19 01:13:46', 'updated_at' => '2022-05-19 01:13:46'),
            array('id' => 'b8ca68c85ee0a6aa4bafdaee22869245', 'url' => 'http://127.0.0.1:8000/upload/b8ca68c85ee0a6aa4bafdaee22869245.png', 'created_at' => '2022-05-19 01:13:46', 'updated_at' => '2022-05-19 01:13:46'),
            array('id' => 'd52730ed3b2e94f387660716182a8315', 'url' => 'http://127.0.0.1:8000/upload/d52730ed3b2e94f387660716182a8315.png', 'created_at' => '2022-05-19 01:10:26', 'updated_at' => '2022-05-19 01:10:26'),
            array('id' => 'dcff4c74e0275aa47cb378080605a92f', 'url' => 'http://127.0.0.1:8000/upload/dcff4c74e0275aa47cb378080605a92f.png', 'created_at' => '2022-05-19 01:06:41', 'updated_at' => '2022-05-19 01:06:41'),
            array('id' => 'dd07de9f2f20481d15390d10fde53e0e', 'url' => 'http://127.0.0.1:8000/upload/dd07de9f2f20481d15390d10fde53e0e.png', 'created_at' => '2022-05-19 01:06:43', 'updated_at' => '2022-05-19 01:06:43'),
            array('id' => 'f6bf59a85d393107df48d50524d61272', 'url' => 'http://127.0.0.1:8000/upload/f6bf59a85d393107df48d50524d61272.png', 'created_at' => '2022-05-19 01:12:03', 'updated_at' => '2022-05-19 01:12:03')
        );
        if (DB::table('file_uploads')->count() === 0) {
            DB::table('file_uploads')->insert($file_uploads);
        }
    }
}
