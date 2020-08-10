<?php

use App\City;
use App\Country;
use Illuminate\Database\Seeder;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        City::create([
            'country_id' => Country::first()->id,
            'name' => 'Douala',
        ]);
    }
}
