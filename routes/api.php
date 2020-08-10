<?php

use App\Admin;
use App\Event;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UtilController;
use App\User;
use Carbon\Carbon;
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

        Route::apiResources([
            'tasks' => 'TaskController',
            'companies' => 'CompanyController',
            'countries' => 'CountryController',
            'cities' => 'CityController',
            'employees' => 'EmployeeController',
            'agencies' => 'AgencyController',
            'event-types' => 'EventTypeController',
            'jobs' => 'JobController',
            'priorities' => 'PriorityController',
        ]);
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

        Route::prefix('messages')->name('messages.')->group(function () {
            Route::get('archive', 'MessagesController@archive')->name('archive');
            Route::get('sent', 'MessagesController@sent')->name('sent');
            Route::get('inbox', 'MessagesController@inbox')->name('inbox');
        });

        Route::apiResources([
            'calendar' => 'CalendarController',
            'tasks' => 'TasksController',
            'messages' => 'MessagesController'
        ]);
    });
});

Route::middleware('auth:admin,api')->group(function () {
    Route::get('logout', 'UtilController@logout')->name('logout');
    Route::get('user', 'UtilController@user')->name('user');

    Route::prefix('notifications')->name('notifications.')->group(function () {
        Route::get('{notification}', 'UtilController@notification')->name('show');
        Route::get('', 'UtilController@notifications')->name('index');
    });

    Route::name('export.')->prefix('export')->group(function () {
        Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
        Route::name('csv')->post('csv', 'ExportController@csv');
        Route::name('pdf')->post('pdf', 'ExportController@pdf');
    });
});

Route::get('test', function () {
    $DAYS_PER_WEEK = Carbon::DAYS_PER_WEEK;
    $WEEKS_PER_YEAR = Carbon::WEEKS_PER_YEAR;

    $list = [];

    $iteration = 0;

    for ($i = 0; $i <= $WEEKS_PER_YEAR; $i++) {
        $addWeeks = $i;

        for ($j = 0; $j < $DAYS_PER_WEEK; $j++) {
            $addDays = $j;

            $day = Carbon::today()->firstOfYear()->addWeeks($addWeeks)->addDays($addDays);

            if ($day->year === Carbon::today()->year) {
                $iteration++;
                $list[$day->weekOfYear - 1][] = [
                    'dayOfWeek' => $day->dayOfWeek,
                    'dayOfYear' => $day->dayOfYear,
                    'weekOfYear' => $day->weekOfYear,
                    'iteration' => $iteration,
                ];

                if ($day->dayOfWeek === 0) $iteration = 0;
            }
        }
    }

    return $list;
});

Route::get('again', function () {
    $DAYS_PER_WEEK = Carbon::DAYS_PER_WEEK;

    $firstDayOfYear = Carbon::today()->firstOfYear();
    $lastDayOfYear = Carbon::today()->lastOfYear();

    return $lastDayOfYear->dayOfYear;
});
