<?php

namespace App\Http\Controllers\Admin;

use App\Event;
use App\Http\Controllers\Controller;
use App\Task;
use App\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user = request()->user();

        $totalEmployees = count(User::all());
        $totalEvents = count(Event::all());
        $totalTasks = count(Task::all());

        $notifications = count($user->unreadNotifications);

        $tasks = [];
        foreach (Task::latest()->limit(5)->get() as $task) {
            $tasks[] = array_merge($task->toArray(), [
                'author' => $task->user->job->name
            ]);
        }

        $events = [];
        foreach (Event::latest()->limit(5)->get() as $event) {
            $events[] = array_merge($event->toArray(), [
                'event_type' => $event->event_type->name
            ]);
        }

        $employees = [];
        foreach (User::latest()->limit(5)->get() as $employee) {
            $employees[] = array_merge($employee->toArray(), [
                'job' => $employee->job->name,
            ]);
        }

        $workTimeTracker = [];

        return response()->json([
            'blocksData' => [
                'totalEmployees' => $totalEmployees,
                'totalEvents' => $totalEvents,
                'unreadMessages' => $notifications,
                'totalTasks' => $totalTasks,
            ],
            'tasks' => $tasks,
            'events' => $events,
            'employees' => $employees,
            'workTimeTracker' => $workTimeTracker,
        ]);
    }
}
