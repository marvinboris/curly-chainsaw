<?php

namespace App\Http\Controllers\User;

use App\Cycle;
use App\Http\Controllers\Controller;
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

        $weeks = [];

        return response()->json([
            'attendanceReport' => $attendanceReport,
            'weeks' => $weeks,
        ]);
    }

    public function clock()
    {
        $user = request()->user();
        $location = new Location();

        $lastCycle = $user->cycles()->latest()->first();
        if (!$lastCycle || $lastCycle->created_at->timestamp < $lastCycle->updated_at->timestamp) Cycle::create([
            'user_id' => $user->id,
            'clock_in_pos' => json_encode(array_merge($location->get()->toArray(), [
                'browser' => Browser::browserName()
            ])),
        ]);
        else $lastCycle->update([
            'clock_out_pos' => json_encode(array_merge($location->get()->toArray(), [
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
            'status' => $status
        ]);
    }
}
