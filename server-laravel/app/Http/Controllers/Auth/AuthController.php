<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\VerificationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\UserVerification;
use Carbon\Carbon;
use Error;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use JWTFactory;
use Mail;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'registry', 'refresh', 'verify']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        try {
            $credentials = $request->only('email', 'password');

            if (!$token = JWTAuth::attempt($credentials)) {
                throw new Exception('Unauthorized', 401);
            }

            if (empty(JWTAuth::user()->email_verified_at)) {
                throw new Exception('Your email is not verified', 401);
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Login successfully',
                'accessToken' => $token,
            ], 200);
        } catch (\Throwable $e) {
            return response()->json(
                [
                    'status' => 'failed',
                    'message' => $e->getMessage()
                ],
                $e->getCode()
            );
        }
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function registry(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'fullname' => 'required',
                'email' => 'required|unique:users',
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                throw new Exception($validator->errors()->first(), 400);
            }

            $user = User::create(array_merge(
                $validator->validated(),
                ['password' => bcrypt($request->password)]
            ));

            // $token = JWTAuth::attempt($validator->validated());
            $code = random_int(100000, 999999);

            UserVerification::create([
                'user_id' => $user->id,
                'code' => $code
            ]);

            VerificationController::sendMail($user, $code);

            return response()->json([
                'status' => 'success',
                'message' => 'Register successfully',
                // 'accessToken' => $token
            ], 201);
        } catch (\Throwable $e) {
            return response()->json(
                [
                    'status' => 'failed',
                    'message' => $e->getMessage()
                ],
                400
            );
        }
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        // auth()->logout();
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json([
            'status' => 'success',
            'message' => 'User successfully signed out'
        ]);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        try {
            // time refresh has not expired and token still available
            $token = JWTAuth::parseToken()->refresh();
            return response()->json(['accessToken' => $token], 200);
        } catch (Exception $e) {
            if ($e instanceof TokenExpiredException && $e->getMessage() === 'Token has expired') {
                // token expired
                $token = JWTAuth::parseToken()->refresh();
                return response()->json(['accessToken' => $token], 200);
            } else {
                // time to refresh expired
                return response()->json([
                    'status' => 'failed',
                    'message' => 'Unauthorized'
                ], 401);
            }
        }
    }



    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {

        return response()->json(JWTAuth::user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token)
    {
        return response()->json([
            'accessToken' => $token,
            'token_type' => 'bearer',
            'expires_in' =>  JWTFactory::getTTL() * 60,
        ]);
    }

    public function changePassWord(Request $request)
    {
        $credentials = $request->only(['oldPassword', 'newPassword']);

        $userId = JWTAuth::user()->id;

        $user = User::where('id', $userId)->update(
            ['password' => bcrypt($request->newPassword)]
        );

        return response()->json([
            'status' => 'success',
            'message' => 'Update password successfully',
        ], 201);
    }

    public function verify(Request $request, $user_id)
    {
        $code = $request->get('code');
        $verify = UserVerification::where([['user_id', '=', $user_id], ['code', '=', $code]])->first();

        if ($verify) {
            User::where('id', $user_id)->update(['email_verified_at' => Carbon::now()]);
            $verify->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Verify successfully',
            ], 201);
        }
        return response()->json([
            'status' => 'failed',
            'message' => 'Activate code invalid',
        ], 400);
    }
}
