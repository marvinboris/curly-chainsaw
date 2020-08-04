<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'hours_per_week' => 'required|numeric'
    ];

    private function get()
    {
        $jobs = [];
        foreach (Job::get() as $job) {
            $jobs[] = array_merge($job->toArray(), [
                'users' => $job->users,
            ]);
        }

        return $jobs;
    }



    public function index()
    {
        $jobs = $this->get();

        return response()->json([
            'jobs' => $jobs
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Job::create($request->all());

        $jobs = $this->get();

        return response()->json([
            'jobs' => $jobs,
            'message' => UtilController::message('Successfully created job.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $job = Job::find($id);

        if (!$job) return response()->json([
            'message' => UtilController::message('Job does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $job->update($request->all());

        $jobs = $this->get();

        return response()->json([
            'jobs' => $jobs,
            'message' => UtilController::message('Successfully updated job.', 'success'),
        ]);
    }

    public function destroy($id)
    {
        $job = Job::find($id);

        if (!$job) return response()->json([
            'message' => UtilController::message('Job does not exist.', 'danger'),
        ]);

        $job->delete();

        $jobs = $this->get();

        return response()->json([
            'jobs' => $jobs,
            'message' => UtilController::message('Successfully deleted job.', 'success'),
        ]);
    }
}
