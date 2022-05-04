<?php

use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\UploadController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
], function () {
    Route::post('register', [AuthController::class, 'register'])->name('register');
    Route::post('verify/{id}', [AuthController::class, 'verify'])->name('verify');
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('me', [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('token', [AuthController::class, 'refresh'])->name('refresh');
});

Route::get('latest_products', function () {
    return response()->json(['data' => []]);
});

Route::get('best_seller', function () {
    return response()->json(['data' => []]);
});

Route::get('related/{product}', function () {
    return response()->json([]);
});

Route::group([
    'prefix' => 'brands',
], function () {
    Route::get('', [BrandController::class, 'index']);
    Route::post('', [BrandController::class, 'store'])->middleware(['auth:api', 'role.admin']);
});

Route::group([
    'prefix' => 'categories',
], function () {
    Route::get('', [CategoryController::class, 'index']);
    Route::post('', [CategoryController::class, 'store'])->middleware(['auth:api', 'role.admin']);
});

Route::post('upload', [UploadController::class, 'upload'])->middleware(['auth:api', 'role.admin']);
