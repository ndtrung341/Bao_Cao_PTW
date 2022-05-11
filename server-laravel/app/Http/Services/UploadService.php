<?php

namespace App\Http\Services;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\File;
use PhpParser\Node\Stmt\TryCatch;

class UploadService
{
   static function  uploadCloudinary($file, $folder)
   {
      $result = Cloudinary::upload($file->getRealPath(), [
         'folder' => $folder,
         'transformation' => [
            'quality' => 'auto',
         ]
      ]);

      return [
         'media_id' => $result->getPublicId(), // Get the public_id of the uploaded file
         'url' => $result->getPath(), // Get the url of the uploaded file; http
      ];
   }

   static function destroyCloudinary($public_id)
   {
      return Cloudinary::destroy($public_id);
   }

   static function destroy($public_id)
   {
      try {
         // find file
         $file = FileUpload::where('id', $public_id)->firstOrFail();
         // get path
         $baseUrl = \preg_quote(URL::to('/'), '/');
         $path = preg_split("/$baseUrl(:\d+)?\//", $file->url)[1];
         // delete file
         Storage::delete($path);
         // delete data
         FileUpload::where('id', $public_id)->delete();
         return true;
      } catch (\Throwable $th) {
         return false;
      }
   }
}
