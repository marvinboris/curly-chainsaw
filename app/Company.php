<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    //
    protected $fillable = [
        'admin_id', 'name',
    ];

    public function admin()
    {
        return $this->belongsTo('App\Admin');
    }

    public function countries()
    {
        return $this->hasMany('App\Country');
    }
}
