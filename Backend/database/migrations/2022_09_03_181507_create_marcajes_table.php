<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      /*  Schema::create('marcajes', function (Blueprint $table) {
            $table->id('marcajeId');
            $table->date('fecha');
            $table->dateTime('entrada');
            $table->dateTime('salida');
            $table->time('horas')->nullable();
            $table->foreignId('users')->constrained();
            $table->timestamps();
        });
    */    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('marcajes');
    }
};
