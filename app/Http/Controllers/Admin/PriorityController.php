<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Priority;
use Illuminate\Http\Request;

class PriorityController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function get()
    {
        $priorities = [];
        foreach (Priority::get() as $priority) {
            $priorities[] = array_merge($priority->toArray(), [
                'tasks' => $priority->tasks,
            ]);
        }

        return $priorities;
    }



    public function index()
    {
        $priorities = $this->get();

        return response()->json([
            'priorities' => $priorities
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Priority::create($request->all());

        $priorities = $this->get();

        return response()->json([
            'priorities' => $priorities,
            'message' => UtilController::message('Successfully created priority.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $priority = Priority::find($id);

        if (!$priority) return response()->json([
            'message' => UtilController::message('Priority does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $priority->update($request->all());

        $priorities = $this->get();

        return response()->json([
            'priorities' => $priorities,
            'message' => UtilController::message('Successfully updated priority.', 'success'),
        ]);
    }

    public function destroy($id)
    {
        $priority = Priority::find($id);

        if (!$priority) return response()->json([
            'message' => UtilController::message('Priority does not exist.', 'danger'),
        ]);

        $priority->delete();

        $priorities = $this->get();

        return response()->json([
            'priorities' => $priorities,
            'message' => UtilController::message('Successfully deleted priority.', 'success'),
        ]);
    }
}
