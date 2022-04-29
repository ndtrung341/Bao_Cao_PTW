<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Error;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'registry']]);
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

            if (!$token = auth()->attempt($credentials)) {
                throw new Exception('Unauthorized', 401);
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Login successfully',
                'accessToken' => $token,
            ], 200);
        } catch (\Throwable $e) {
            return response()->json(['status' => 'failed', 'message' => $e->getMessage()], $e->getCode());
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
                ['id' => Str::uuid()->toString(), 'password' => bcrypt($request->password)]
            ));

            $token = auth()->login($user);

            return response()->json([
                'status' => 'success',
                'message' => 'Register successfully',
                'accessToken' => $token
            ], 201);
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
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['status' => 'success', 'message' => 'User successfully signed out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        $token = auth()->refresh();
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
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
            // 'access_token' => $token,
            // 'token_type' => 'bearer',
            // 'expires_in' => auth()->factory()->getTTL() * 60,
        ]);
    }

    public function changePassWord(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'old_password' => 'required|string|min:6',
            'new_password' => 'required|string|confirmed|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        $userId = auth()->user()->id;

        $user = User::where('id', $userId)->update(
            ['password' => bcrypt($request->new_password)]
        );

        return response()->json([
            'message' => 'User successfully changed password',
            'user' => $user,
        ], 201);
    }
}
