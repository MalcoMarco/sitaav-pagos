<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBoletProdTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boleta_producto', function (Blueprint $table) {
            $table->increments('id');
            $table->decimal('precio',8,3);
            $table->integer('boleta_id')->unsigned();
            $table->integer('producto_id')->unsigned();
            $table->foreign('boleta_id')->references('id')->on('boletas');
            $table->foreign('producto_id')->references('id')->on('productos');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('boleta_producto');
    }
}
