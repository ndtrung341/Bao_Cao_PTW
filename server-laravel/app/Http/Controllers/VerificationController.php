<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class VerificationController extends Controller
{
    public static function sendMail($user, $code)
    {
        try {
            Mail::send('verify', ['name' => $user->fullname, 'code' => $code], function ($mail) use ($user) {
                $mail->to($user->email, $user->fullname);
                $mail->subject('Please verify your email address.');
            });
        } catch (\Throwable $e) {
            return response()->json(
                [
                    'status' => 'failed',
                    'message' => 'Can not send mail'
                ],
                400
            );
        }
    }

    public function verify()
    {
    }
}
