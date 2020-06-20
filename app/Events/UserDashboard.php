<?php

namespace App\Events;

use App\Message;
use App\Request;
use Carbon\Carbon;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class UserDashboard implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $blocksData;
    public $tasks;
    public $attendanceReport;
    public $calendar;
    public $chatBox;
    public $messages;
    public $workTimeTracker;

    public function __construct($user)
    {
        $workedTime = 0;
        $leaveTaken = 0;
        $unreadMessages = $user->messages()->whereNotNull('read_at')->get();
        $status = false;

        $tasks = [];
        foreach ($user->tasks()->latest()->limit(5)->get() as $task) {
            $tasks[] = array_merge($task->toArray(), [
                'author' => $task->user->job->name
            ]);
        }

        $attendanceReport = [];

        $calendar = $user->tasks;

        $chatBox = [];
        foreach ($user->chats as $chat) {
            $chatBox[] = array_merge($chat->toArray(), [
                // 'user' => 
            ]);
        }

        $messages = [];
        foreach (Message::whereRef($user->ref)->latest()->limit(5)->get() as $message) {
            $messages[] = array_merge($message->toArray(), [
                'sender' => $message->user->job->name,
            ]);
        }

        $workTimeTracker = [];

        $this->blocksData = [
            'workedTime' => $workedTime,
            'leaveTaken' => $leaveTaken,
            'unreadMessages' => count($unreadMessages),
            'status' => $status,
        ];
        $this->tasks = $tasks;
        $this->attendanceReport = $attendanceReport;
        $this->calendar = $calendar;
        $this->chatBox = $chatBox;
        $this->messages = $messages;
        $this->workTimeTracker = $workTimeTracker;
    }

    public function broadcastOn()
    {
        return ['public'];
    }
}
