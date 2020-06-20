<?php

use App\EventType;
use Illuminate\Database\Seeder;

class EventTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            'Public Event', 'Office Event', 'Regular Event'
        ];

        foreach ($types as $type) {
            EventType::create(['name' => $type]);
        }
    }
}
