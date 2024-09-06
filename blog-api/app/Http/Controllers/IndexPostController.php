<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;


class IndexPostController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $posts = Post::latest()->paginate(10);
        return response()-> json (compact('posts'));
    }
}
