<?php

namespace App\Http\Services;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\File;

class UploadService
{
   static function  uploadCloudinary($file, $folder = null)
   {

      $file->storeOnCloudinaryAs('products', 'dere');
   }

   static function result($uploadFile)
   {
      $result = Cloudinary::getResponse();
      return [
         'id' => $result->getPublicId(), // Get the public_id of the uploaded file
         'url' => $result->getPath(), // Get the url of the uploaded file; http
         'size' => $result->getSize(), //Get the size of the uploaded file in bytes
         'type' => $result->getFileType(), // Get the type of the uploaded file
         'name' => $result->getFileName(), // Get the file name of the file before it was uploaded to Cloudinary
      ];
   }
}
