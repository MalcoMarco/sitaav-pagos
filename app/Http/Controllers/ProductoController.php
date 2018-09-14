<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productos=Producto::get();
        return compact('productos');
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
        $this->validate($request, [
            'name'=>'required',
            'precio'=>'required',
        ]);
        $producto= new Producto();
        $producto->name=$request->name;
        $producto->precio=$request->precio;
        $producto->descripcion=$request->descripcion;
        $producto->imagen=$request->imagen;
        //$producto->=$request->;

        $producto->save();
        $response['status']=1;
        $response['msg']="producto actualizado";
        return compact('producto','response');
    }
    
    public function update(Request $request, Producto $producto)
    {
        $this->validate($request, [
            'id'=>'required',
            'name'=>'required',
            'precio'=>'required',
        ]);
        $producto= Producto::find($request->id);
        $producto->name=$request->name;
        $producto->precio=$request->precio;
        $producto->descripcion=$request->descripcion;
        $producto->imagen=$request->imagen;
        //$producto->=$request->;
        $producto->save();
        $response['status']=1;
        $response['msg']="producto actualizado";
        return compact('response');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Producto $producto)
    {
        //
    }
}
