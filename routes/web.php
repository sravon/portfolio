<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
    $adme = "hlw";

    $path = storage_path() . "\app\panel\adminurl.json";
    $jsonss = json_decode(file_get_contents($path), true);

Route::get('/', function () {
    return view('welcome');
})->where(['any'=> '^((?!'.$jsonss['adminurl'].').)*$']);

Route::get($adme, function () {
    echo " works hlw";
});

Route::get('/{any}', function () {
    return view('welcome');
})->where(['any'=> '^((?!'.$jsonss['adminurl'].').)*$']);;

Route::get('/{any}/{any2}', function () {
    return view('welcome');
})->where(['any'=> '^((?!'.$jsonss['adminurl'].').)*$']);

Route::get($jsonss['adminurl'],function(){
    return view('admin',['name' => Config::get('constants.options.option_attachment')]);
});

Route::get($jsonss['adminurl'].'/{any}',function(){
    return view('admin',['name' => Config::get('constants.options.option_attachment')]);
});
