<?php

namespace App\Http\Controllers\Admin;

use App\Agency;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Job;
use App\User;
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
        foreach (User::all() as $employee) {
            $employees[] = array_merge($employee->toArray(), [
                'job' => $employee->job->name,
            ]);
        }

        return $employees;
    }



    public function index()
    {
        $employees = $this->get();

        $agencies = Agency::all();
        $jobs = Job::all();

        return response()->json([
            'employees' => $employees,
            'agencies' => $agencies,
            'jobs' => $jobs,
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
