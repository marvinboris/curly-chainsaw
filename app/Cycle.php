<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cycle extends Model
{
    protected $fillable = [
        'user_id', 'clock_in_pos', 'clock_out_pos'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
