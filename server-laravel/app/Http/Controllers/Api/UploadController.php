<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Storage;
use URL;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        try {
            $file = $request->file('file');
            $name = $file->getClientOriginalName();
            $path = Storage::disk('local')->putFileAs('upload/' . time(), $file, $name);
            return response()->json([
                'name' => $name,
                'type' => $file->getClientMimeType(),
                'url' => URL::asset($path)
            ], 201);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Can not upload file'
            ]);
        }
    }
}
