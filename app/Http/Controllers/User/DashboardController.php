<?php

namespace App\Http\Controllers\User;

use App\Cycle;
use App\Http\Controllers\Controller;
use App\Message;
use App\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = request()->user();

        $workedTime = 0;
        $status = false;

        $dayOfWeek = Carbon::today()->dayOfWeek;
        if ($dayOfWeek > 0) {
            for ($i = 1; $i <= $dayOfWeek; $i++) {
                $subDays = $dayOfWeek - $i;
                $dayTime = 0;
                $dayStatus = false;
                $cycles = $user->cycles()->whereDate('created_at', Carbon::today()->subDays($subDays))->get();

                if (count($cycles) > 0) {
                    foreach ($cycles as $cycle) {
                        $diff = $cycle->updated_at->timestamp - $cycle->created_at->timestamp;
                        if ($diff > 0) $dayTime += $diff;
                        else {
                            $dayTime += time() - $cycle->created_at->timestamp;
                            $dayStatus = true;
                        }
                    }
                }

                $workedTime += $dayTime;
                $status = $dayStatus;
            }
        } else {
            for ($i = 0; $i < 7; $i++) {
                $subDays = 6 - $i;
                $dayTime = 0;
                $dayStatus = false;
                $cycles = $user->cycles()->whereDate('created_at', Carbon::today()->subDays($subDays))->get();

                if (count($cycles) > 0) {
                    foreach ($cycles as $cycle) {
                        $diff = $cycle->updated_at->timestamp - $cycle->created_at->timestamp;
                        if ($diff > 0) $dayTime += $diff;
                        else {
                            $dayTime += time() - $cycle->created_at->timestamp;
                            $dayStatus = true;
                        }
                    }
                }

                $workedTime += $dayTime;
                $status = $dayStatus;
            }
        }

        $leaveTaken = 0;
        $unreadMessages = $user->messages()->whereNotNull('read_at')->get();

        $tasks = [];
        foreach (Task::latest()->limit(5)->get() as $task) {
            $tasks[] = array_merge($task->toArray(), [
                'author' => $task->user->job->name
            ]);
        }

        $attendanceReport = [];
        foreach ($user->cycles()->latest()->limit(5)->get() as $cycle) {
            $dayTime = 0;
            $dayStatus = false;

            $diff = $cycle->updated_at->timestamp - $cycle->created_at->timestamp;
            if ($diff > 0) $dayTime += $diff;
            else {
                $dayTime += time() - $cycle->created_at->timestamp;
                $dayStatus = true;
            }

            $attendanceReport[] = [
                'time' => $dayTime,
                'status' => $dayStatus,
                'clock_in' => $cycle->created_at,
                'clock_out' => $cycle->clock_out_pos ? $cycle->updated_at : null,
                'clock_in_pos' => $cycle->clock_in_pos,
                'clock_out_pos' => $cycle->clock_out_pos,
            ];
        }

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

        return response()->json([
            'blocksData' => [
                'workedTime' => $workedTime,
                'leaveTaken' => $leaveTaken,
                'unreadMessages' => count($unreadMessages),
                'status' => $status,
            ],
            'tasks' => $tasks,
            'attendanceReport' => $attendanceReport,
            'calendar' => $calendar,
            'chatBox' => $chatBox,
            'messages' => $messages,
            'workTimeTracker' => $workTimeTracker,
        ]);
    }
}
