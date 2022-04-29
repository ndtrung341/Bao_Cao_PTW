<?php

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
], function () {
    Route::post('registry', [AuthController::class, 'registry'])->name('registry');
    // Route::post('registry/verify', [VerifyEmailController::class, 'sendMail'])->name('verify');
    Route::post('verify/{id}', [AuthController::class, 'verify'])->name('verify');
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('me', [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('token', [AuthController::class, 'refresh'])->name('refresh');
});
Route::post('email/verify', [VerificationController::class, 'verify'])->name('verify');

// Route::get('email/verify/{id}', [VerifyEmailController::class, 'verify'])->name('verification.verify'); // Make sure to keep this as your route name

// Route::get('email/resend', [VerifyEmailController::class, 'resend'])->name('verification.resend');
