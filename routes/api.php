<?php

use Illuminate\Http\Request;

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
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::post('login', 'AuthapiController@login')->middleware('cors');
Route::get('logout', 'AuthapiController@logout')->middleware('cors');

Route::group(['middleware' => ['jwt.auth','cors']], function() {//,'jwt.refresh'
    Route::get('test', function(){//para testear si el token es valido
        return response()->json(['success' => true, 'message'=> "your session is active"],200);
    });
    
    Route::prefix('productos')->group(function () {
        Route::get('/', 'ProductoController@index');
        Route::post('store', 'ProductoController@store');
        Route::post('update', 'ProductoController@update');
    });
    Route::prefix('boletas')->group(function () {
        Route::post('store', 'BoletaController@store');
    });


});

