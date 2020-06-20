<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email', 50)->unique();
            $table->string('ref', 50)->unique();
            $table->bigInteger('job_id')->unsigned()->index();
            $table->bigInteger('agency_id')->unsigned()->index();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone');
            $table->string('photo')->nullable();
            $table->string('country');
            $table->string('browser')->nullable();
            $table->string('ip')->nullable();
            $table->text('social_media')->nullable();
            $table->timestamp('hired_on')->nullable();
            $table->timestamp('last_login')->nullable();
            $table->tinyInteger('is_active')->default(1);
            $table->rememberToken();
            $table->timestamps();

            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
