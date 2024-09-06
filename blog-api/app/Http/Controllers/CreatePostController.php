<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePostRequest;
use App\Models\Post;



class CreatePostController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreatePostRequest $request)
    {
        Post::create($request->validate());

        return response()->json(['message' => 'Post created successfully'], 201);
    }
}
 