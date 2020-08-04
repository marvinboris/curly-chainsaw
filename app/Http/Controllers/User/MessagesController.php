<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Message;
use App\User;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
    private $rules = [
        'ref' => 'required|exists:users',
        'object' => 'required|string',
        'content' => 'required|string',
    ];

    private function get($page = '')
    {
        $user = request()->user();

        $messages = [];

        $messageList = [];
        switch ($page) {
            case 'inbox':
                $messageList = Message::whereRef($user->ref);
                break;

            case 'sent':
                $messageList = $user->messages();
                break;

            case 'archive':
                $messageList = Message::whereNotNull('archived_at')->whereUserId($user->id)->orWhere('ref', $user->ref);
                break;

            default:
                $messageList = Message::whereUserId($user->id)->orWhere('ref', $user->ref);
                break;
        }

        foreach ($messageList->latest()->get() as $message) {
            $sender = $message->user;
            $receiver = User::whereRef($message->ref)->first();

            $messages[] = array_merge($message->toArray(), [
                'sender' => $sender->first_name . ' ' . $sender->last_name,
                'receiver' => $receiver->first_name . ' ' . $receiver->last_name,
                'files' => $message->files
            ]);
        }

        return $messages;
    }

    public function index()
    {
        $messages = $this->get();
        $employees = User::where('id', '!=', request()->user()->id)->get();

        return response()->json([
            'messages' => $messages,
            'employees' => $employees,
        ]);
    }

    public function inbox()
    {
        $messages = $this->get('inbox');
        $employees = User::where('id', '!=', request()->user()->id)->get();

        return response()->json([
            'messages' => $messages,
            'employees' => $employees,
        ]);
    }

    public function sent()
    {
        $messages = $this->get('sent');
        $employees = User::where('id', '!=', request()->user()->id)->get();

        return response()->json([
            'messages' => $messages,
            'employees' => $employees,
        ]);
    }

    public function archive()
    {
        $messages = $this->get('archive');
        $employees = User::where('id', '!=', request()->user()->id)->get();

        return response()->json([
            'messages' => $messages,
            'employees' => $employees,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        $documents = [];
        $requestDocuments = $request->documents ? $request->documents : [];
        foreach ($requestDocuments as $document) {
            $name = time() . ' - ' . $document->getClientOriginalName();
            $document->move('messages', $name);
            $documents[] = htmlspecialchars($name);
        }

        Message::create(array_merge($request->except('documents'), [
            'user_id' => $request->user()->id,
            'files' => json_encode($documents),
        ]));

        $messages = $this->get($request->page ? $request->page : '');

        return response()->json([
            'message' => UtilController::message('Successfully sent message.', 'success'),
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

        $messages = $this->get($request->page ? $request->page : '');

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully updated message.'
            ],
            'messages' => $messages
        ]);
    }

    public function destroy($id)
    {
        $message = request()->user()->messages()->find($id);
        if (!$message) return response()->json([
            'message' => [
                'type' => 'danger',
                'content' => 'Message does not exist.'
            ]
        ]);

        $message->delete();

        $messages = $this->get();

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully deleted message.'
            ],
            'messages' => $messages
        ]);
    }
}
