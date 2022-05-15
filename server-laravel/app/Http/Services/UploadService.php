<?php

namespace App\Http\Services;

use App\Models\FileUpload;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class UploadService
{
   static function destroy($public_id)
   {
      // find file
      $file = FileUpload::where('id', $public_id)->firstOrFail();
      // get path
      $baseUrl = \preg_quote(URL::to('/'), '/');
      $path = \preg_split("/^$baseUrl(:\d+)?\//", $file->url);
      // delete file
      Storage::delete($path);
      // delete data
      $file->delete();
   }
}
