<?php

use App\Admin;
use App\Http\Controllers\AuthController;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Admin')->prefix('admin')->name('admin.')->group(function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('resend', 'AuthController@resend')->name('resend');
    Route::post('verify', 'AuthController@verify')->name('verify');

    Route::middleware('auth:admin')->group(function () {
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');
    });
});

Route::namespace('User')->prefix('user')->name('user.')->group(function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('forgot', 'AuthController@forgot')->name('forgot');
    Route::post('reset/{id}/{code}', 'AuthController@reset')->name('reset');

    Route::middleware('auth:api')->group(function () {
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');

        Route::prefix('attendance-report')->name('attendance-report.')->group(function () {
            Route::post('clock', 'AttendanceReportController@clock')->name('clock');
            Route::get('', 'AttendanceReportController@index')->name('index');
        });

        Route::prefix('calendar')->name('calendar.')->group(function () {
            Route::post('{id}/delete', 'CalendarController@delete')->name('delete');
            Route::post('{id}', 'CalendarController@update')->name('update');
            Route::post('', 'CalendarController@store')->name('store');
            Route::get('event-types', 'CalendarController@eventTypes')->name('event-types');
            Route::get('', 'CalendarController@index')->name('index');
        });

        Route::prefix('tasks')->name('tasks.')->group(function () {
            Route::post('{id}/delete', 'TasksController@delete')->name('delete');
            Route::post('{id}', 'TasksController@update')->name('update');
            Route::get('', 'TasksController@index')->name('index');
        });

        Route::prefix('messages')->name('messages.')->group(function () {
            Route::post('{id}/delete', 'MessagesController@delete')->name('delete');
            Route::post('{id}', 'MessagesController@update')->name('update');
            Route::get('archive', 'MessagesController@archive')->name('archive');
            Route::get('sent', 'MessagesController@sent')->name('sent');
            Route::get('inbox', 'MessagesController@inbox')->name('inbox');
            Route::get('', 'MessagesController@index')->name('index');
        });
    });
});

Route::middleware('auth:admin,api')->group(function () {
    Route::get('logout', function () {
        request()->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out.'
        ]);
    })->name('logout');

    Route::get('user', function () {
        $user = AuthController::user();

        $role = $user->role();

        $data = array_merge($user->toArray(), [
            'notifications' => $user->unreadNotifications()->latest()->limit(5)->get(),
        ]);
        if ($role === 'user') $data = array_merge($data, [
            // 'messages' => $user->contact_us()->whereStatus(0)->latest()->limit(5)->get()
            'job' => $user->job
        ]);
        else if ($role === 'admin') $data = array_merge($data, [
            // 'messages' => ContactUs::whereStatus(0)->latest()->limit(5)->get()
        ]);
        return response()->json(['data' => $data, 'role' => $role]);
    });

    Route::prefix('notifications')->name('notifications.')->group(function () {
        Route::get('', function () {
            $user = AuthController::user();

            $notifications = [];
            foreach ($user->notifications()->latest()->get() as $notification) {
                $notifications[] = array_merge($notification->toArray(), [
                    'data' => $notification->data
                ]);
            }

            return response()->json([
                'notifications' => $notifications
            ]);
        })->name('index');

        Route::get('{notification}', function ($id) {
            $user = AuthController::user();

            $notification = $user->notifications()->find($id);
            $notification->markAsRead();
            return response()->json([
                'notification' => $notification
            ]);
        })->name('show');
    });

    Route::name('export.')->prefix('export')->group(function () {
        Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
        Route::name('csv')->post('csv', 'ExportController@csv');
        Route::name('pdf')->post('pdf', 'ExportController@pdf');
    });
});
