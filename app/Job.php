<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = [
        'name', 'hours_per_week'
    ];

    public function users()
    {
        return $this->hasMany('App\User');
    }
}
