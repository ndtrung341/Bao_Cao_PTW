<?php

namespace App\Http\Controllers\Api;

use URL;
use Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\UploadService;
use App\Models\FileUpload;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Doctrine\DBAL\Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class UploadController extends Controller
{
    public function validateImage(UploadedFile $file)
    {
        $err = false;
        if (!Str::match('/^image\/(png|jpeg)$/', $file->getMimeType()))
            $err = '"' . $file->getClientOriginalName() . '" is not a supported file type. Upload files ending in .jpg, .png';
        else if ($file->getSize() / 1000000 > 2)
            $err = '"' . $file->getClientOriginalName() . '" is too large. You need to upload a file that is 2 MB or smaller.';
        return $err;
    }

    public function upload(Request $request)
    {
        try {
            $file = $request->file('file');
            // validate
            if ($err = $this->validateImage($file)) {
                throw new Exception($err);
            }
            // upload file
            $id = md5(\uniqid(rand(), true));
            $ext = $file->getClientOriginalExtension();
            $filename = $id . '.' . $ext;
            $path = Storage::disk('local')->putFileAs('upload', $file, $filename);

            // store db
            $uploadFile = new FileUpload;
            $uploadFile->id = $id;
            $uploadFile->url = URL::asset($path);
            $uploadFile->save();

            return response()->json([
                'public_id' => $uploadFile->id,
                'url' => $uploadFile->url,
            ], 201);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'failed',
                'message' => $e->getMessage()
            ], 402);
        }
    }

    public function destroy(Request $request)
    {
        try {
            $public_id = $request->publicId;

            UploadService::destroy($public_id);

            return response()->json(['status' => 'success', 'message' => 'Delete file successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['status' => 'failed', 'message' => $th->getMessage()], 400);
        }
    }

    public function uploadCloudinary(Request $request)
    {
        try {
            $file = $request->file('file');
            $result = UploadService::uploadCloudinary($file, 'products');
            return response()->json($result);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'failed',
                'message' => 'Can not upload file'
            ], 402);
        }
    }

    public function destroyCloudinary(Request $request)
    {
        $result = UploadService::destroy($request->mediaId);
        return response()->json($result);
    }
}
