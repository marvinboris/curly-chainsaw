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
                    'lat' => 4.392967,
                    'lng' => 10.224676,
                ]),
                'radius' => 20,
            ]
        ];

        foreach ($agencies as $agency) {
            Agency::create($agency);
        }
    }
}
