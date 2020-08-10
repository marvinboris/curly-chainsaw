<?php

namespace App\Http\Controllers\Admin;

use App\Agency;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Priority;
use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    //
    private $rules = [
        'user_id' => 'required|exists:users,id',
        'date_due' => 'required|string',
        'comment' => 'required|string',
        'priority_id' => 'required|exists:priorities,id',
    ];

    private function get()
    {
        $tasks = [];
        foreach (Task::all() as $task) {
            $tasks[] = array_merge($task->toArray(), [
                'author' => $task->user->job->name,
                'priority' => $task->priority->name,
                'agency_id' => $task->user->agency->id,
            ]);
        }

        return $tasks;
    }



    public function index()
    {
        $tasks = $this->get();

        $agencies = [];
        foreach (Agency::all() as $agency) {
            $agencies[] = array_merge($agency->toArray(), [
                'employees' => $agency->users
            ]);
        }

        $priorities = Priority::all();

        return response()->json([
            'tasks' => $tasks,
            'agencies' => $agencies,
            'priorities' => $priorities,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        $documents = [];
        $requestDocuments = $request->documents ? $request->documents : [];
        foreach ($requestDocuments as $document) {
            $name = time() . ' - ' . $document->getClientOriginalName();
            $document->move('tasks', $name);
            $documents[] = htmlspecialchars($name);
        }

        Task::create(array_merge($request->except('documents'), [
            'documents' => json_encode($documents),
        ]));

        $tasks = $this->get();

        return response()->json([
            'message' => UtilController::message('Successfully created task.', 'success'),
            'tasks' => $tasks
        ]);
    }

    public function update(Request $request, $id)
    {
        $task = Task::find($id);
        if (!$task) return response()->json([
            'message' => UtilController::message('Task does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $task->update($request->all());

        $tasks = $this->get();

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully updated task.'
            ],
            'tasks' => $tasks
        ]);
    }

    public function destroy($id)
    {
        $task = Task::find($id);
        if (!$task) return response()->json([
            'message' => UtilController::message('Task does not exist.', 'danger'),
        ]);

        $task->delete();

        $tasks = $this->get();

        return response()->json([
            'message' => UtilController::message('Successfully deleted task.', 'success'),
            'tasks' => $tasks
        ]);
    }
}
