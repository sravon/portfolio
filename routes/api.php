<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\SkillsController;
use App\Http\Controllers\Api\EducationsController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ServiceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:api'], function(){
    Route::get('users/logout', [AuthController::class, 'logout']);
    Route::get('users/login_userdata', [AuthController::class, 'login_userdata']);
});

Route::resource('skills',SkillsController::class);
Route::resource('educations',EducationsController::class);
Route::resource('experiences',ExperienceController::class);
Route::resource('categories',CategoryController::class);
Route::resource('projects',ProjectController::class);

Route::resource('abouts',AboutController::class);


Route::resource('services',ServiceController::class);
Route::resource('users',AuthController::class);

Route::post('projects/updateWoks', [ProjectController::class, 'checkwoks']);
Route::post('users/login', [AuthController::class, 'loginuser']);
Route::get('abouts/ca',[AboutController::class,'getabout']);