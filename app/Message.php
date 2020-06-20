<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'user_id', 'ref', 'object', 'content', 'files', 'read_at', 'archived_at'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getReadAtAttribute($value)
    {
        return $value ? Carbon::createFromTimestamp($value) : null;
    }

    public function getArchivedAtAttribute($value)
    {
        return $value ? Carbon::createFromTimestamp($value) : null;
    }
}
