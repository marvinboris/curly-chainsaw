<?php

use App\Admin;
use App\Company;
use Illuminate\Database\Seeder;

class CompaniesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Company::create([
            'admin_id' => Admin::first()->id,
            'name' => 'Global Investment Trading SA',
        ]);
    }
}
