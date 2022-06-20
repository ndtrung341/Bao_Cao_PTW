<?php

namespace App\Http\Controllers;

use App\Models\ProductReview;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    // public function getAll(Request $request)
    // {
    //     $page = (int) $request->query('page', 1);
    //     $userList = ProductReview::where('id', '<>', Auth::id())->orderByDesc('created_at')
    //         ->paginate(6, ['*'], '_page', $page);

    //     return new UserCollection($userList);
    // }

    // public function updateRole(Request $request)
    // {
    //     $userId = $request->post('id');
    //     $role = $request->post('role');

    //     $user = User::findOrFail($userId);
    //     $user->role = $role;
    //     $user->save();
    //     return response()->json(['message' => 'Success'], 200);
    // }

    // public function deleteUser(User $user)
    // {

    //     $user->delete();
    //     return response()->json(['message' => 'Success'], 200);
    // }
}
