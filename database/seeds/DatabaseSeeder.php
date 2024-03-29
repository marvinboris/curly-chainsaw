<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PrioritiesTableSeeder::class);
        $this->call(JobsTableSeeder::class);
        $this->call(EventTypesTableSeeder::class);
        $this->call(AdminsTableSeeder::class);
        $this->call(CompaniesTableSeeder::class);
        $this->call(CountriesTableSeeder::class);
        $this->call(CitiesTableSeeder::class);
        $this->call(AgenciesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
    }
}
