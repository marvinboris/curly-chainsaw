<?php

namespace App\Http\Controllers\Admin;

use App\Agency;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Job;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class EmployeeController extends Controller
{
    private $rules = [
        'agency_id' => 'required|exists:agencies,id',
        'job_id' => 'required|exists:jobs,id',
        'first_name' => 'required|string',
        'last_name' => 'required|string',
        'phone' => 'required|string',
        'password' => 'required|string|confirmed',
        'email' => 'required|email',
    ];

    private function get()
    {
        $employees = [];
        foreach (request()->user()->companies as $company) {
            foreach ($company->countries as $country) {
                foreach ($country->cities as $city) {
                    foreach ($city->agencies as $agency) {
                        foreach ($agency->users as $employee) {
                            $employees[] = array_merge($employee->toArray(), [
                                'job' => $employee->job->name,
                                'agency' => $employee->agency->name,
                                'city' => $employee->agency->city->name,
                                'city_id' => $employee->agency->city->id,
                                'country' => $employee->agency->city->country->name,
                                'country_id' => $employee->agency->city->country->id,
                                'company' => $employee->agency->city->country->company->name,
                                'company_id' => $employee->agency->city->country->company->id,
                            ]);
                        }
                    }
                }
            }
        }

        return $employees;
    }



    public function index()
    {
        $employees = $this->get();
        $companies = [];
        foreach (request()->user()->companies as $company) {
            $countries = [];
            foreach ($company->countries as $country) {
                $cities = [];
                foreach ($country->cities as $city) {
                    $agencies = [];
                    foreach ($city->agencies as $agency) {
                        $agencies[] = $agency->toArray();
                    }
                    $cities[] = array_merge($city->toArray(), [
                        'agencies' => $agencies,
                    ]);
                }
                $countries[] = array_merge($country->toArray(), [
                    'cities' => $cities,
                ]);
            }
            $companies[] = array_merge($company->toArray(), [
                'countries' => $countries,
            ]);
        }

        $jobs = Job::all();

        return response()->json([
            'employees' => $employees,
            'companies' => $companies,
            'jobs' => $jobs,
        ]);
    }

    public function show($id)
    {
        $user = User::find($id);
        if (!$user) return response()->json([
            'message' => UtilController::message('User does not exist.', 'danger'),
        ]);

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

    public function store(Request $request)
    {
        $request->validate($this->rules);

        User::create(array_merge($request->except(['password', 'phone', 'code']), [
            'ref' => User::ref(),
            'phone' => $request->code . $request->phone,
            'password' => Hash::make($request->password),
        ]));

        $employees = $this->get();

        return response()->json([
            'message' => UtilController::message('Successfully created employee.', 'success'),
            'employees' => $employees
        ]);
    }

    public function update(Request $request, $id)
    {
        $employee = User::find($id);
        if (!$employee) return response()->json([
            'message' => UtilController::message('User does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $employee->update($request->except('password'));

        $employees = $this->get();

        return response()->json([
            'message' => [
                'type' => 'success',
                'content' => 'Successfully updated employee.'
            ],
            'employees' => $employees
        ]);
    }

    public function destroy($id)
    {
        $employee = User::find($id);
        if (!$employee) return response()->json([
            'message' => UtilController::message('User does not exist.', 'danger'),
        ]);

        $employee->delete();

        $employees = $this->get();

        return response()->json([
            'message' => UtilController::message('Successfully deleted employee.', 'success'),
            'employees' => $employees
        ]);
    }
}
