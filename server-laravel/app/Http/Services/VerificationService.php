<?php

namespace App\Http\Services;

use App\Models\UserVerification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;

class VerificationService
{
   static function createCode($user)
   {
      $code = random_int(100000, 999999); //Generate verification code

      UserVerification::where('user_id', $user->id)->delete();

      UserVerification::create([
         'user_id' => $user->id,
         'code' => $code,
         'expired' => Carbon::now()->addMinutes(30)
      ]);

      Mail::send('email.verify', ['name' => $user->fullname, 'code' => $code], function ($mail) use ($user, $code) {
         $mail->to($user->email, $user->fullname);
         $mail->subject('Mã xác thực: ' . $code);
      });
   }


   static function verify($user, $code)
   {
      $verify = UserVerification::where([['user_id', '=', $user->id], ['code', '=', $code]])->first();
      $now = Carbon::now();

      if ($verify && $now->lte($verify->expired)) {
         $user->email_verified_at = $now;
         $user->save();

         $verify->delete();

         return response()->json([
            'status' => 'success',
            'message' => 'Xác thực thành công',
         ], 201);
      } else {
         if ($verify) {
            $verify->delete();
         }

         return response()->json([
            'status' => 'failed',
            'message' => 'Mã xác thực không hợp lệ',
         ], 400);
      }
   }
}
