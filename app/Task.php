<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $directory = '/tasks/';

    protected $fillable = [
        'user_id', 'date_due', 'comment', 'priority_id', 'status', 'documents'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function priority()
    {
        return $this->belongsTo('App\Priority');
    }

    public function getDateDueAttribute($value)
    {
        return $value ? Carbon::createFromFormat("Y-m-d H:i:s", $value) : null;
    }

    public function getDocumentsAttribute($value)
    {
        $documents = [];
        foreach (json_decode($value) as $document) {
            $documents[] = $this->directory . $document;
        }
        return $documents;
    }
}
