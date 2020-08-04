<?php

use App\Priority;
use Illuminate\Database\Seeder;

class PrioritiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $priorities = [
            [
                'name' => 'A.S.A.P.',
            ],
            [
                'name' => 'Urgent',
            ],
            [
                'name' => 'Most Urgent',
            ],
            [
                'name' => 'Important',
            ],
        ];

        foreach ($priorities as $priority) {
            Priority::create($priority);
        }
    }
}
