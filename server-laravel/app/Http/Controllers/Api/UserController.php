<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getAll(Request $request)
    {
        $page = (int) $request->query('page', 1);
        $userList = User::where('id', '<>', Auth::id())->orderByDesc('created_at')
            ->paginate(6, ['*'], '_page', $page);

        return new UserCollection($userList);
    }

    public function updateRole(Request $request)
    {
        $userId = $request->post('id');
        $role = $request->post('role');

        $user = User::findOrFail($userId);
        $user->role = $role;
        $user->save();
        return response()->json(['message' => 'Success'], 200);
    }

    public function deleteUser(User $user)
    {

        $user->delete();
        return response()->json(['message' => 'Success'], 200);
    }
}
