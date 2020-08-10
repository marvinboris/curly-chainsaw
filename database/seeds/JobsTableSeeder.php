<?php

use App\Job;
use Illuminate\Database\Seeder;

class JobsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            [
                'name' => 'Web Developer',
                'hours_per_week' => 50
            ],
            [
                'name' => 'C.E.O.',
                'hours_per_week' => 50
            ],
            [
                'name' => 'H.R. Manager',
                'hours_per_week' => 50
            ],
            [
                'name' => 'Accountant',
                'hours_per_week' => 50
            ],
            [
                'name' => 'I.T. Manager',
                'hours_per_week' => 50
            ],
            [
                'name' => 'Technical Support',
                'hours_per_week' => 50
            ],
        ];

        foreach ($types as $type) {
            Job::create($type);
        }
    }
}
