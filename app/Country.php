<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    //
    protected $fillable = [
        'company_id', 'name', 'abbr', 'code',
    ];

    public function company()
    {
        return $this->belongsTo('App\Company');
    }

    public function cities()
    {
        return $this->hasMany('App\City');
    }
}
