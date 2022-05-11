<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $provinces = array(
            array('id' => '1', 'name' => 'Hà Nội'),
            array('id' => '2', 'name' => 'Hà Giang'),
            array('id' => '4', 'name' => 'Cao Bằng'),
            array('id' => '6', 'name' => 'Bắc Kạn'),
            array('id' => '8', 'name' => 'Tuyên Quang'),
            array('id' => '10', 'name' => 'Lào Cai'),
            array('id' => '11', 'name' => 'Điện Biên'),
            array('id' => '12', 'name' => 'Lai Châu'),
            array('id' => '14', 'name' => 'Sơn La'),
            array('id' => '15', 'name' => 'Yên Bái'),
            array('id' => '17', 'name' => 'Hoà Bình'),
            array('id' => '19', 'name' => 'Thái Nguyên'),
            array('id' => '20', 'name' => 'Lạng Sơn'),
            array('id' => '22', 'name' => 'Quảng Ninh'),
            array('id' => '24', 'name' => 'Bắc Giang'),
            array('id' => '25', 'name' => 'Phú Thọ'),
            array('id' => '26', 'name' => 'Vĩnh Phúc'),
            array('id' => '27', 'name' => 'Bắc Ninh'),
            array('id' => '30', 'name' => 'Hải Dương'),
            array('id' => '31', 'name' => 'Hải Phòng'),
            array('id' => '33', 'name' => 'Hưng Yên'),
            array('id' => '34', 'name' => 'Thái Bình'),
            array('id' => '35', 'name' => 'Hà Nam'),
            array('id' => '36', 'name' => 'Nam Định'),
            array('id' => '37', 'name' => 'Ninh Bình'),
            array('id' => '38', 'name' => 'Thanh Hóa'),
            array('id' => '40', 'name' => 'Nghệ An'),
            array('id' => '42', 'name' => 'Hà Tĩnh'),
            array('id' => '44', 'name' => 'Quảng Bình'),
            array('id' => '45', 'name' => 'Quảng Trị'),
            array('id' => '46', 'name' => 'Thừa Thiên Huế'),
            array('id' => '48', 'name' => 'Đà Nẵng'),
            array('id' => '49', 'name' => 'Quảng Nam'),
            array('id' => '51', 'name' => 'Quảng Ngãi'),
            array('id' => '52', 'name' => 'Bình Định'),
            array('id' => '54', 'name' => 'Phú Yên'),
            array('id' => '56', 'name' => 'Khánh Hòa'),
            array('id' => '58', 'name' => 'Ninh Thuận'),
            array('id' => '60', 'name' => 'Bình Thuận'),
            array('id' => '62', 'name' => 'Kon Tum'),
            array('id' => '64', 'name' => 'Gia Lai'),
            array('id' => '66', 'name' => 'Đắk Lắk'),
            array('id' => '67', 'name' => 'Đắk Nông'),
            array('id' => '68', 'name' => 'Lâm Đồng'),
            array('id' => '70', 'name' => 'Bình Phước'),
            array('id' => '72', 'name' => 'Tây Ninh'),
            array('id' => '74', 'name' => 'Bình Dương'),
            array('id' => '75', 'name' => 'Đồng Nai'),
            array('id' => '77', 'name' => 'Bà Rịa - Vũng Tàu'),
            array('id' => '79', 'name' => 'Hồ Chí Minh'),
            array('id' => '80', 'name' => 'Long An'),
            array('id' => '82', 'name' => 'Tiền Giang'),
            array('id' => '83', 'name' => 'Bến Tre'),
            array('id' => '84', 'name' => 'Trà Vinh'),
            array('id' => '86', 'name' => 'Vĩnh Long'),
            array('id' => '87', 'name' => 'Đồng Tháp'),
            array('id' => '89', 'name' => 'An Giang'),
            array('id' => '91', 'name' => 'Kiên Giang'),
            array('id' => '92', 'name' => 'Cần Thơ'),
            array('id' => '93', 'name' => 'Hậu Giang'),
            array('id' => '94', 'name' => 'Sóc Trăng'),
            array('id' => '95', 'name' => 'Bạc Liêu'),
            array('id' => '96', 'name' => 'Cà Mau')
        );
        if (DB::table('provinces')->count() === 0) {
            DB::table('provinces')->insert($provinces);
        }

        foreach (DB::table('provinces')->get() as $item) {
            DB::table('provinces')->where('id', $item->id)->update(['name' => \preg_replace('/Tỉnh |Thành phố /', '', $item->name)]);
        }
    }
}
