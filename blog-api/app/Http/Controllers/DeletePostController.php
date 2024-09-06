<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class DeletePostController extends Controller
{
    public function __invoke(Post $post)
    $post->delete();
    return response()->json(status:204);
}
