<?php

namespace App\Http\Controllers\User;

use App\Cycle;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Stevebauman\Location\Location;
use hisorange\BrowserDetect\Parser as Browser;

class AttendanceReportController extends Controller
{
    public function index()
    {
        $user = request()->user();

        $attendanceReport = [];
        foreach ($user->cycles()->latest()->get() as $cycle) {
            $dayTime = 0;
            $dayStatus = false;

            $diff = $cycle->updated_at->timestamp - $cycle->created_at->timestamp;
            if ($diff > 0) $dayTime += $diff;
            else {
                $dayTime += time() - $cycle->created_at->timestamp;
                $dayStatus = true;
            }

            $attendanceReport[] = [
                'time' => $dayTime,
                'status' => $dayStatus,
                'clock_in' => $cycle->created_at,
                'clock_out' => $cycle->updated_at,
            ];
        }

        $year = Carbon::today()->year;

        $weeksObject = [];
        // $DAYS_OF_WEEK = Carbon::DAYS_PER_WEEK;

        // $weekOfYear = Carbon::today()->weekOfYear;

        // for ($i = 2; $i <= $weekOfYear; $i++) {
        //     $subWeeks = $weekOfYear - $i;

        //     $workedTime = 0;

        //     for ($j = 0; $j < $DAYS_OF_WEEK; $j++) {
        //         $subDays = $DAYS_OF_WEEK * $subWeeks + $DAYS_OF_WEEK - $j;

        //         $dayTime = 0;
        //         $cycles = $user->cycles()->whereDate('created_at', Carbon::today()->subDays($subDays))->get();

        //         if (count($cycles) > 0) {
        //             foreach ($cycles as $cycle) {
        //                 $diff = $cycle->updated_at->timestamp - $cycle->created_at->timestamp;
        //                 if ($diff > 0) $dayTime += $diff;
        //                 else {
        //                     $dayTime += time() - $cycle->created_at->timestamp;
        //                 }
        //             }
        //         }

        //         $workedTime += $dayTime;
        //     }

        //     $weeks[$i - 2] = [
        //         'time' => $workedTime,
        //         'year' => $year,
        //     ];
        // }

        $DAYS_PER_WEEK = Carbon::DAYS_PER_WEEK;
        $WEEKS_PER_YEAR = Carbon::WEEKS_PER_YEAR;

        $workedTime = 0;

        for ($i = 0; $i <= $WEEKS_PER_YEAR; $i++) {
            $addWeeks = $i;

            for ($j = 0; $j < $DAYS_PER_WEEK; $j++) {
                $addDays = $j;

                $day = Carbon::today()->firstOfYear()->addWeeks($addWeeks)->addDays($addDays);

                if ($day->year === Carbon::today()->year) {
                    $dayTime = 0;
                    $cycles = $user->cycles()->whereDate('created_at', $day)->get();

                    if (count($cycles) > 0) {
                        foreach ($cycles as $cycle) {
                            $diff = $cycle->updated_at->timestamp - $cycle->created_at->timestamp;
                            if ($diff > 0) $dayTime += $diff;
                            else {
                                $dayTime += time() - $cycle->created_at->timestamp;
                            }
                        }
                    }

                    $workedTime += $dayTime;

                    if ($day->dayOfWeek === 0) {
                        $weeksObject[$day->weekOfYear - 1] = [
                            'time' => $workedTime,
                            'year' => $year,
                        ];
                        $workedTime = 0;
                    }
                }
            }
        }

        $weeks = [];
        foreach ($weeksObject as $week) {
            $weeks[] = $week;
        }

        return response()->json([
            'attendanceReport' => $attendanceReport,
            'weeks' => $weeks,
        ]);
    }

    public function clock()
    {
        $user = request()->user();
        $position = json_decode(request()->position, true);

        $agency = $user->agency;

        $lat = $position['latitude'];
        $lng = $position['longitude'];

        $distance = pi() * 6.378 * (10 ** 6) * sqrt(($agency->position->lat - $lat) ** 2 + ($agency->position->lng - $lng) ** 2) / 180;

        $position['in'] = $distance <= $agency->radius;

        $lastCycle = $user->cycles()->latest()->first();
        if (!$lastCycle || $lastCycle->created_at->timestamp < $lastCycle->updated_at->timestamp) Cycle::create([
            'user_id' => $user->id,
            'clock_in_pos' => json_encode(array_merge($position, [
                'browser' => Browser::browserName()
            ])),
        ]);
        else $lastCycle->update([
            'clock_out_pos' => json_encode(array_merge($position, [
                'browser' => Browser::browserName()
            ]))
        ]);

        $status = false;

        $workedTime = 0;
        foreach ($user->cycles()->whereDate('created_at', Carbon::today())->get() as $cycle) {
            $diff = $cycle->updated_at->timestamp - $cycle->created_at->timestamp;
            if ($diff > 0) $workedTime += $diff;
            else {
                $workedTime += time() - $cycle->created_at->timestamp;
                $status = true;
            }
        }

        return response()->json([
            'workedTime' => $workedTime,
            'status' => $status,
            'distance' => $distance,
        ]);
    }
}
