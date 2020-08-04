<?php

namespace App\Http\Controllers\Admin;

use App\EventType;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class EventTypeController extends Controller
{
    private $rules = [
        'name' => 'required|string',
    ];

    private function get()
    {
        $eventTypes = [];
        foreach (EventType::get() as $eventType) {
            $eventTypes[] = array_merge($eventType->toArray(), [
                'events' => $eventType->events,
            ]);
        }

        return $eventTypes;
    }



    public function index()
    {
        $eventTypes = $this->get();

        return response()->json([
            'eventTypes' => $eventTypes
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        EventType::create($request->all());

        $eventTypes = $this->get();

        return response()->json([
            'eventTypes' => $eventTypes,
            'message' => UtilController::message('Successfully created event type.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $eventType = EventType::find($id);

        if (!$eventType) return response()->json([
            'message' => UtilController::message('Event type does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $eventType->update($request->all());

        $eventTypes = $this->get();

        return response()->json([
            'eventTypes' => $eventTypes,
            'message' => UtilController::message('Successfully updated event type.', 'success'),
        ]);
    }

    public function destroy($id)
    {
        $eventType = EventType::find($id);

        if (!$eventType) return response()->json([
            'message' => UtilController::message('Event type does not exist.', 'danger'),
        ]);

        $eventType->delete();

        $eventTypes = $this->get();

        return response()->json([
            'eventTypes' => $eventTypes,
            'message' => UtilController::message('Successfully deleted event type.', 'success'),
        ]);
    }
}
