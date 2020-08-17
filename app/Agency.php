<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agency extends Model
{
    protected $fillable = [
        'city_id', 'name', 'position', 'radius', 'user_id'
    ];

    public function city()
    {
        return $this->belongsTo('App\City');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function users()
    {
        return $this->hasMany('App\User');
    }

    public function getPositionAttribute($value)
    {
        return json_decode($value);
    }
}
