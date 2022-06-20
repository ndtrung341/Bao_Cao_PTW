<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\VerificationController;
use App\Http\Services\VerificationService;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserVerification;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use JWTFactory;
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
        $this->middleware('auth:api', ['except' => ['login', 'register', 'refresh', 'verify', 'resend', 'logout']]);
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
                throw new Exception('Invalid email or password', 401);
            }

            $user = JWTAuth::user();
            if (empty($user->email_verified_at)) {
                VerificationService::createCode($user);

                return response()->json([
                    'status' => 'success',
                    'message' => 'Should be verification your account',
                    'access_token' => $token,
                ], 200);
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Login successfully',
                'access_token' => $token,
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
    public function register(Request $request)
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

            $token = JWTAuth::attempt($validator->validated());

            VerificationService::createCode($user);

            return response()->json([
                'status' => 'success',
                'message' => 'Register successfully. Should be verification your account',
                'access_token' => $token,
            ], 201);

            // return response()->json([
            //     'status' => 'success',
            //     'message' => 'Register successfully',
            //     'access_token' => $token
            // ], 201);
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
        Auth::logout();
        // JWTAuth::invalidate(JWTAuth::getToken());
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
            return response()->json(['access_token' => $token], 200);
        } catch (Exception $e) {
            if ($e instanceof TokenExpiredException && $e->getMessage() === 'Token has expired') {
                // token expired
                $token = JWTAuth::parseToken()->refresh();
                return response()->json(['access_token' => $token], 200);
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
        $user = JWTAuth::user();
        return response()->json([
            'id' => $user->id,
            'fullname' => $user->fullname,
            'email' => $user->email,
            'is_verified' => !!$user->email_verified_at,
            'role' => $user->role,
            'avatar' => $user->avatar,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at,
        ]);
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

    public function verify(Request $request)
    {
        $code = $request->post('code');
        $user_id = $request->post('userId');

        $user = User::find($user_id);

        if ($user) {
            if ($user->email_verified_at)
                return response()->json(['message' => 'The account has been verified']);
            return VerificationService::verify($user, $code);
        } else {
            return response()->json([
                'status' => 'failed',
                'message' => 'User not exists',
            ], 404);
        }
    }

    public function resend(Request $request)
    {
        $user_id = $request->post('userId');

        $user = User::find($user_id);

        if ($user) {
            VerificationService::createCode($user);
        }

        return response()->json('success', 200);
    }
}
