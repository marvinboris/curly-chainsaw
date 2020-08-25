<?php

use App\Agency;
use App\City;
use Illuminate\Database\Seeder;

class AgenciesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $agencies = [
            [
                'city_id' => City::first()->id,
                'name' => 'Direction Générale',
                'position' => json_encode([
                    'lat' => 4.0249011999999995,
                    'lng' => 9.6994657,
                ]),
                'radius' => 20,
            ]
        ];

        foreach ($agencies as $agency) {
            Agency::create($agency);
        }
    }
}
