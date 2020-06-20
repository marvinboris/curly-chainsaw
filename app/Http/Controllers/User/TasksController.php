<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TasksController extends Controller
{
    public function index()
    {
        $tasks = [];
        foreach (request()->user()->tasks as $task) {
            $tasks[] = array_merge($task->toArray(), [
                'author' => $task->user->job->name,
            ]);
        }

        return response()->json([
            'tasks' => $tasks
        ]);
    }

    public function update(Request $request, $id)
    {
        $task = request()->user()->tasks()->find($id);
        if (!$task) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Task does not exist.'
            ]
        ]);

        $task->update($request->only(['status', 'comments']));

        $tasks = [];
        foreach (request()->user()->tasks as $task) {
            $tasks[] = array_merge($task->toArray(), [
                'author' => $task->user->job->name,
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully updated task.'
            ],
            'tasks' => $tasks
        ]);
    }

    public function delete(Request $request, $id)
    {
        $task = request()->user()->tasks()->find($id);
        if (!$task) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Task does not exist.'
            ]
        ]);

        $task->delete();

        $tasks = [];
        foreach (request()->user()->tasks as $task) {
            $tasks[] = array_merge($task->toArray(), [
                'author' => $task->user->job->name,
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully deleted task.'
            ],
            'tasks' => $tasks
        ]);
    }
}
