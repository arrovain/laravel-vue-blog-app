<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CreatePostController;
use App\Http\Controllers\IndexPostController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('post')->middleware('auth:sanctum')->group(function () {
    Route::post('/', CreatePostController::class);
    Route::get('/', IndexPostController::class);
});
