<?php

use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\LocationController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProductReviewController;
use App\Http\Controllers\Api\UploadController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Api\UserController;
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
    Route::post('verify', [AuthController::class, 'verify'])->name('verify');
    Route::post('resend', [AuthController::class, 'resend'])->name('resend');
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('me', [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');
    Route::post('token', [AuthController::class, 'refresh'])->name('refresh');
});

Route::get('latest_products', [ProductController::class, 'getLatest']);

Route::get('best_seller', function () {
    return response()->json(['data' => []]);
});

Route::get('related/{product}', [ProductController::class, 'getRelated']);

// route brands
Route::prefix('brands')->controller(BrandController::class)->group(function () {
    Route::get('', 'index');
    Route::post('', 'store')->middleware(['auth:api', 'role.admin']);
});

// route categories
Route::prefix('categories')->controller(CategoryController::class)->group(function () {
    Route::get('', 'index');
    Route::get('getAll', 'getAll');
    Route::post('', 'store')->middleware(['auth:api', 'role.admin']);
    Route::delete('{category}', 'destroy')->middleware(['auth:api', 'role.admin']);
    Route::patch('{category}', 'update')->middleware(['auth:api', 'role.admin']);
});

// route upload - destroy upload
Route::post('upload/destroy', [UploadController::class, 'destroy']);
Route::post('upload', [UploadController::class, 'upload']);

// route products
Route::prefix('products')->controller(ProductController::class)->group(function () {
    Route::get('', 'index');
    Route::get('{product:id}', 'show');
    Route::post('create', 'store')->middleware(['auth:api', 'role.admin']);
    Route::post('insert', 'insert');

    Route::patch('update/{product:id}', 'update')->middleware(['auth:api', 'role.admin']);
    Route::delete('delete/{product:id}', 'destroy')->middleware(['auth:api', 'role.admin']);
    Route::post('delete_image', 'deleteImage')->middleware(['auth:api', 'role.admin']);
});

Route::post('product_reviews', [ProductReviewController::class, 'getByProduct']);
Route::post('review', [ProductReviewController::class, 'store']);
Route::get('reviews', [ProductReviewController::class, 'index'])->middleware(['auth:api', 'role.admin']);
Route::post('reviews/{product_review}', [ProductReviewController::class, 'update'])->middleware(['auth:api', 'role.admin']);
Route::delete('reviews/{product_review}', [ProductReviewController::class, 'destroy'])->middleware(['auth:api', 'role.admin']);


// route cart
Route::controller(CartController::class)->middleware('auth:api')->prefix('cart')->group(function () {
    Route::post('get', 'index');
    Route::post('add_cart', 'store');
    Route::post('remove', 'destroy');
    Route::post('update', 'update');
    Route::post('clear', 'clear');
});


// route order
Route::prefix('order')->middleware('auth:api')->controller(OrderController::class)->group(function () {
    Route::post('place_order', 'store');
    Route::get('history', 'getPurchaseOfUser');
    Route::get('', 'index');
    Route::post('cancel', 'cancelOrder');
    Route::post('confirm', 'confirmOrder')->middleware('role.admin');
    Route::post('complete', 'completeOrder')->middleware('role.admin');;
    Route::delete('{order:id}', 'destroy')->middleware('role.admin');;
});


// route users
Route::prefix('users')->middleware(['auth:api', 'role.admin'])->controller(UserController::class)->group(function () {
    Route::get('', 'getAll');
    Route::post('role', 'updateRole');
    Route::delete('{user}', 'deleteUser');
});
