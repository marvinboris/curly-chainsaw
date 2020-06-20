<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Message;
use App\User;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
    public function index()
    {
        $user = request()->user();

        $messages = [];
        foreach (Message::whereUserId($user->id)->orWhere('ref', $user->ref)->latest()->get() as $message) {
            $messages[] = array_merge($message->toArray(), [
                'sender' => $message->user->name,
                'receiver' => User::whereRef($message->ref)->first()->name,
            ]);
        }

        return response()->json([
            'messages' => $messages
        ]);
    }

    public function inbox()
    {
        $user = request()->user();

        $messages = [];
        foreach (Message::whereRef($user->ref)->latest()->get() as $message) {
            $messages[] = array_merge($message->toArray(), [
                'sender' => $message->user->name,
            ]);
        }

        return response()->json([
            'messages' => $messages
        ]);
    }

    public function sent()
    {
        $messages = [];
        foreach (request()->user()->messages()->latest()->get() as $message) {
            $messages[] = array_merge($message->toArray(), [
                'receiver' => User::whereRef($message->ref)->first()->name,
            ]);
        }

        return response()->json([
            'messages' => $messages
        ]);
    }

    public function archive()
    {
        $user = request()->user();

        $messages = [];
        foreach (Message::whereNotNull('archived_at')->whereUserId($user->id)->orWhere('ref', $user->ref)->latest()->get() as $message) {
            $messages[] = array_merge($message->toArray(), [
                'sender' => $message->user->name,
                'receiver' => User::whereRef($message->ref)->first()->name,
            ]);
        }

        return response()->json([
            'messages' => $messages
        ]);
    }

    public function update(Request $request, $id)
    {
        $message = request()->user()->messages()->find($id);
        if (!$message) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Message does not exist.'
            ]
        ]);

        $message->update($request->only(['status', 'comments']));

        $messages = [];
        foreach (request()->user()->messages as $message) {
            $messages[] = array_merge($message->toArray(), [
                'sender' => $message->user->name,
                'receiver' => User::whereRef($message->ref)->first()->name,
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully updated message.'
            ],
            'messages' => $messages
        ]);
    }

    public function delete(Request $request, $id)
    {
        $message = request()->user()->messages()->find($id);
        if (!$message) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Message does not exist.'
            ]
        ]);

        $message->delete();

        $messages = [];
        foreach (request()->user()->messages as $message) {
            $messages[] = array_merge($message->toArray(), [
                'sender' => $message->user->name,
                'receiver' => User::whereRef($message->ref)->first()->name,
            ]);
        }

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully deleted message.'
            ],
            'messages' => $messages
        ]);
    }
}
