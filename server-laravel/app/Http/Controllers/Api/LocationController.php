<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LocationController extends Controller
{
    public function getProvinces()
    {
        $provinces = DB::table('provinces')->orderBy('name')->get();
        return response()->json($provinces);
    }

    public function getDistricts($province_id)
    {
        $districts = DB::table('districts')->where('province_id', $province_id)->orderBy('name')->get();
        return response()->json($districts);
    }

    public function getWards($district_id)
    {
        $wards = DB::table('wards')->where('district_id', $district_id)->orderBy('name')->get();
        return response()->json($wards);
    }
}
