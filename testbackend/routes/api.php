<?php

use App\Http\Controllers\TodolistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//todolist
Route::get('/listTodo', [TodolistController::class, 'index'])->name('affichageTodoList');
Route::post('/addlistTodo', [TodolistController::class, 'store'])->name('ajoutTodoList');
Route::get('/showitemTodo/{id}', [TodolistController::class, 'show'])->name('affichageTodoItem');
Route::put('/edititemTodo/{todoitem}', [TodolistController::class, 'update'])->name('modifTodoItem');
Route::delete('/deleteitemTodo/{todoitem}', [TodolistController::class, 'destroy'])->name('suppTodoItem');