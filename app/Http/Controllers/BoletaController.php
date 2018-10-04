<?php

namespace App\Http\Controllers;

use App\Boleta;
use App\Persona;
use App\Producto;
use Illuminate\Http\Request;

class BoletaController extends Controller
{

    public function index()
    {
        //
    }
    public function store(Request $request)
    {
        /*Para registrar una nueva boleta
        1:persona: buscar, sino existe crearlo
        2:crear la boleta y poner el id de persona
        3:insertar los productos muchos a muchos
        4:si lo logras retorna un glorioso return "oki";
        */
        $this->validate($request, [
            'dni'=>'required',
            'nombres'=>'required',
            'fecha'=>'required',
            'productos'=>'required',
            'descuento'=>'required'
        ]);

        //::1 firstOrCreate

        $persona=Persona::firstOrCreate(
            ['dni' => $request->dni], //busca
            //crea
            [   'name' => $request->nombres,
                'apepaterno' => $request->apepaterno,
                'apematerno' => $request->apematerno,
            ]);
        
        //:: 2 crear boleta

        $boleta=new boleta();
        $boleta->persona_id=$persona->id;
        $boleta->fecha=$request->fecha;
        $boleta->descuento=$request->descuento;
        //$boleta->total=$request->total;
        //$boleta->descripcion=$request->descripcion;
        $boleta->direccion=$request->direccion;
        $boleta->save();

        //:: 3 llenar los productos

        foreach ($request->productos as $producto) {
           $boleta->productos()->attach($producto['id'],
            [   'precio'=>$producto['precio'],
                'cantidad'=>$producto['cantidad'],
                'descripcion'=>$producto['descripcion']
            ]);
        }
        return "you win";
    }

 
    public function show(Boleta $boleta)
    {
        //
    }

 
    public function edit(Boleta $boleta)
    {
        //
    }

    public function update(Request $request, Boleta $boleta)
    {
        //
    }

    public function destroy(Boleta $boleta)
    {
        //
    }
}
