<?php

use App\Agency;
use App\Job;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'first_name' => 'Boris',
                'last_name' => 'Ndouma',
                'email' => 'jaris.ultio.21@gmail.com',
                'password' => Hash::make('12345'),
                'ref' => User::ref(),
                'job_id' => Job::whereName('Web Developer')->first()->id,
                'agency_id' => Agency::first()->id,
                'phone' => '237655588688',
                'country' => 'CM',
                'email_verified_at' => now(),
                'hired_on' => '2019-06-03'
            ],
            [
                'first_name' => 'Briand',
                'last_name' => 'Yungong',
                'email' => 'yungongbriand@gmail.com',
                'password' => Hash::make('11223344'),
                'ref' => User::ref(),
                'job_id' => Job::whereName('I.T. Manager')->first()->id,
                'agency_id' => Agency::first()->id,
                'phone' => '237694422723',
                'country' => 'CM',
                'email_verified_at' => now(),
            ],
            [
                'first_name' => 'Hevia',
                'last_name' => 'Tchapoa',
                'email' => 'fabiolitahev@gmail.com',
                'password' => Hash::make('12345'),
                'ref' => User::ref(),
                'job_id' => Job::whereName('Web Developer')->first()->id,
                'agency_id' => Agency::first()->id,
                'phone' => '237690757277',
                'country' => 'CM',
                'email_verified_at' => now(),
            ],
            [
                'first_name' => 'Rose',
                'last_name' => 'Moutlen',
                'email' => 'gaellemoutlen9@gmail.com',
                'password' => Hash::make('12345'),
                'ref' => User::ref(),
                'job_id' => Job::whereName('Technical Support')->first()->id,
                'agency_id' => Agency::first()->id,
                'phone' => '237693866343',
                'country' => 'CM',
                'email_verified_at' => now(),
            ],
            [
                'first_name' => 'Regine',
                'last_name' => 'Lihinag',
                'email' => 'reginenyembe@gmail.com',
                'password' => Hash::make('12345'),
                'ref' => User::ref(),
                'job_id' => Job::whereName('Technical Support')->first()->id,
                'agency_id' => Agency::first()->id,
                'phone' => '237694155248',
                'country' => 'CM',
                'email_verified_at' => now(),
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
