<?php

namespace App\Http\Controllers\User;

use App\Event;
use App\EventType;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function index()
    {
        $events = [];
        foreach (Event::all() as $event) {
            $events[] = array_merge($event->toArray(), [
                'event_type' => $event->event_type->name,
            ]);
        }

        return response()->json([
            'events' => $events
        ]);
    }

    public function eventTypes()
    {
        $types = EventType::all();

        return response()->json([
            'types' => $types
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'event_type_id' => 'required|numeric',
            'title' => 'required|string',
            'description' => 'required|string',
        ]);

        Event::create($request->only(['event_type_id', 'title', 'description', 'start_time', 'finish_time']));

        $events = [];
        foreach (Event::all() as $event) {
            $events[] = array_merge($event->toArray(), [
                'event_type' => $event->event_type->name,
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully created event.'
            ],
            'events' => $events
        ]);
    }

    public function update(Request $request, $id)
    {
        $event = Event::find($id);
        if (!$event) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Event does not exist.'
            ]
        ]);

        $event->update($request->only(['status', 'comments']));

        $events = [];
        foreach (Event::all() as $event) {
            $events[] = array_merge($event->toArray(), [
                'event_type' => $event->event_type->name,
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully updated event.'
            ],
            'events' => $events
        ]);
    }

    public function delete(Request $request, $id)
    {
        $event = Event::find($id);
        if (!$event) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Event does not exist.'
            ]
        ]);

        $event->delete();

        $events = [];
        foreach (Event::all() as $event) {
            $events[] = array_merge($event->toArray(), [
                'event_type' => $event->event_type->name,
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully deleted event.'
            ],
            'events' => $events
        ]);
    }
}
