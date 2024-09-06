<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;


class UpdatePostController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Post $post)
    {
       $post->update($request->validated());
       
       return response()->json(['msg', 'updated successfully'], 200);
    }
}
