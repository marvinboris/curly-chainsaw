<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'user_id', 'date_due', 'comment', 'priority', 'status'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getDateDueAttribute($value)
    {
        return $value ? Carbon::createFromTimestamp($value) : null;
    }
}
