<?php

use App\Company;
use App\Country;
use Illuminate\Database\Seeder;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Country::create([
            'company_id' => Company::first()->id,
            'name' => 'Cameroon',
            'abbr' => 'CM',
            'code' => '237',
        ]);
    }
}
