<?php

namespace App\Http\Controllers;

use App\Admin;
use App\User;
use Illuminate\Http\Request;

class UtilController extends Controller
{
    private function guard()
    {
        $user = request()->user();
        switch ($user->token()->name) {
            case 'User Personal Access Token':
                $user = User::find($user->id);
                break;
            case 'Admin Personal Access Token':
                $user = Admin::find($user->id);
                break;
        }
        return $user;
    }

    public static function message($content, $type = 'info')
    {
        return [
            'type' => $type,
            'content' => $content
        ];
    }



    // Authentication
    public function logout()
    {
        request()->user()->token()->revoke();

        return response()->json([
            'message' => self::message('Successfully logged out.', 'success'),
        ]);
    }

    public function user()
    {
        $user = $this->guard();

        $role = $user->role();

        $data = array_merge($user->toArray(), [
            'notifications' => $user->unreadNotifications()->latest()->limit(5)->get(),
        ]);
        if ($role === 'user') $data = array_merge($data, [
            // 'messages' => $user->contact_us()->whereStatus(0)->latest()->limit(5)->get()
            'job' => $user->job
        ]);
        else if ($role === 'admin') $data = array_merge($data, [
            // 'messages' => ContactUs::whereStatus(0)->latest()->limit(5)->get()
        ]);
        return response()->json(['data' => $data, 'role' => $role]);
    }


    // Notifications
    public function notifications()
    {
        $user = $this->guard();

        $notifications = [];
        foreach ($user->notifications()->latest()->get() as $notification) {
            $notifications[] = array_merge($notification->toArray(), [
                'data' => $notification->data
            ]);
        }

        return response()->json([
            'notifications' => $notifications
        ]);
    }

    public function notification($id)
    {
        $user = $this->guard();

        $notification = $user->notifications()->find($id);
        $notification->markAsRead();

        return response()->json([
            'notification' => $notification
        ]);
    }
}
