<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBoletasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boletas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('codigo');
            $table->text('descripcion')->nullable();
            $table->date('fechapago');
            $table->decimal('total', 8, 3);

            $table->integer('persona_id')->unsigned();
            $table->integer('cuenta_id')->unsigned();
            $table->integer('proyecto_id')->unsigned();

            $table->foreign('persona_id')->references('id')->on('personas');
            $table->foreign('cuenta_id')->references('id')->on('cuentas');
            $table->foreign('proyecto_id')->references('id')->on('proyectos');

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
        Schema::dropIfExists('boletas');
    }
}
