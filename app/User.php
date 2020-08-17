<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password', 'ref', 'job_id', 'agency_id', 'phone', 'photo', 'country', 'browser', 'ip', 'social_media', 'hired_on', 'last_login', 'is_active'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function generateNewRef()
    {
        $letters = range('A', 'Z');
        $numbers = range(0, 9);
        $chars = array_merge($letters, $numbers);
        $length = count($chars);

        $code = '';

        for ($i = 0; $i < 6; $i++) {
            $index = rand(0, $length - 1);
            $code .= $chars[$index];
        }

        return $code;
    }

    public static function ref()
    {
        $ref = self::generateNewRef();
        $user = self::whereRef($ref)->first();
        while ($user) {
            $ref = self::generateNewRef();
            $user = self::whereRef($ref)->first();
        }

        return $ref;
    }

    public function job()
    {
        return $this->belongsTo('App\Job');
    }

    public function agency()
    {
        return $this->belongsTo('App\Agency');
    }

    public function tasks()
    {
        return $this->hasMany('App\Task');
    }

    public function messages()
    {
        return $this->hasMany('App\Message');
    }

    public function events()
    {
        return $this->hasMany('App\Event');
    }

    public function chats()
    {
        return $this->hasMany('App\Chat');
    }

    public function cycles()
    {
        return $this->hasMany('App\Cycle');
    }

    public function name()
    {
        return ucwords(strtolower($this->first_name . ' ' . $this->last_name));
    }

    public function role()
    {
        return 'user';
    }
}
