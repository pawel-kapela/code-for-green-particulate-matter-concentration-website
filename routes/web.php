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

Route::get('api/all_measurements', 'MeasurementsController@index');
Route::get('api/measurements_from_timespan', 'MeasurementsController@show');
Route::get('/{path?}', [
    'uses' => 'MainController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);
