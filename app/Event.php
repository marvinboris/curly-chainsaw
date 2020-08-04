<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'event_type_id', 'title', 'start_time', 'finish_time', 'description'
    ];

    public function event_type()
    {
        return $this->belongsTo('App\EventType');
    }

    public function getStartTimeAttribute($value)
    {
        return $value ? Carbon::createFromFormat("Y-m-d H:i:s", $value) : null;
    }

    public function getFinishTimeAttribute($value)
    {
        return $value ? Carbon::createFromFormat("Y-m-d H:i:s", $value) : null;
    }
}
