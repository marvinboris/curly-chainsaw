<?php

namespace App\Http\Controllers\User;

use App\Event;
use App\EventType;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    private $rules = [
        'event_type_id' => 'required|numeric',
        'title' => 'required|string',
        'description' => 'required|string',
    ];

    private function data()
    {
        $events = [];
        foreach (Event::all() as $event) {
            $events[] = array_merge($event->toArray(), [
                'event_type' => $event->event_type->name,
            ]);
        }

        return $events;
    }



    public function index()
    {
        $events = $this->data();

        $types = EventType::all();

        return response()->json([
            'events' => $events,
            'types' => $types,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Event::create($request->all());

        $events = $this->data();

        return response()->json([
            'message' => UtilController::message('Successfully created event.', 'success'),
            'events' => $events,
        ]);
    }

    public function update(Request $request, $id)
    {
        $event = Event::find($id);
        if (!$event) return response()->json([
            'message' => UtilController::message('Event does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $event->update($request->all());

        $events = $this->data();

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully updated event.'
            ],
            'events' => $events
        ]);
    }

    public function destroy($id)
    {
        $event = Event::find($id);
        if (!$event) return response()->json([
            'message' => UtilController::message('Event does not exist.', 'danger'),
        ]);

        $event->delete();

        $events = $this->data();

        return response()->json([
            'message' => UtilController::message('Successfully deleted event.', 'success'),
            'events' => $events
        ]);
    }
}
