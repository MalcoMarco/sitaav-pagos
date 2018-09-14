<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $fillable=[
    	'name',
    	'descripcion',
        'precio',
        'imagen'
    ];

    public function boleta(){
        return $this->belongsToMany('App\Boleta');
    }
}
