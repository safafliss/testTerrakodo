<?php

namespace App\Http\Controllers;

use App\Http\Resources\TodoitemResource;
use App\Models\Todoitem;
use App\Models\Todolist;
use Illuminate\Http\Request;

class TodolistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $todolists = TodoitemResource::collection(Todolist::all());
        return response()->json($todolists);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
            $data = $request->all();
            $newTodolist = Todolist::create($data);
            // Assuming TodoitemResource is a resource class you've defined
            $todolistResource = new TodoitemResource($newTodolist);

            return response()->json($todolistResource, 201); // 201 Created status code
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $todoitem = Todolist::findOrFail($id);
            $todoitemResource = new TodoitemResource($todoitem);
            return response()->json($todoitemResource);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Todoitem not found.'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Todolist $todoitem)
    {
        $data = $request->all();
        $todoitem->update($data);
        $todolistResource = new TodoitemResource($todoitem);
        return response()->json($todolistResource, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todolist $todoitem)
    {
        $todoitem->delete();
        return response()->json(['message' => 'Todo Item deleted successfully']);
    }
}
