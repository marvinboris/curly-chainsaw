<?php

namespace App\Http\Controllers\Admin;

use App\Agency;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class AgencyController extends Controller
{
    private $rules = [
        'city_id' => 'required|exists:cities,id',
        'name' => 'required|string',
        'latitude' => 'required|numeric',
        'longitude' => 'required|numeric',
        'radius' => 'required|numeric',
    ];

    private function get()
    {
        $agencies = [];
        foreach (request()->user()->companies as $company) {
            foreach ($company->countries as $country) {
                foreach ($country->cities as $city) {
                    foreach ($city->agencies as $agency) {
                        $agencies[] = array_merge($agency->toArray(), [
                            'users' => $agency->users,
                            'latitude' => $agency->position->lat,
                            'longitude' => $agency->position->lng,
                            'city' => $agency->city->name . ', ' . $agency->city->country->name . ', ' . $agency->city->country->company->name
                        ]);
                    }
                }
            }
        }

        return $agencies;
    }



    public function index()
    {
        $agencies = $this->get();
        $cities = [];
        foreach (request()->user()->companies as $company) {
            foreach ($company->countries as $country) {
                foreach ($country->cities as $city) {
                    $cities[] = [
                        'name' => $city->name . ', ' . $city->country->name . ', ' . $city->country->company->name,
                        'country' => $city->country->name . ', ' . $city->country->company->name
                    ];
                }
            }
        }

        return response()->json([
            'agencies' => $agencies,
            'cities' => $cities,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Agency::create(array_merge($request->only(['radius', 'name']), [
            'position' => json_encode([
                'lat' => $request->latitude,
                'lng' => $request->longitude,
            ])
        ]));

        $agencies = $this->get();

        return response()->json([
            'agencies' => $agencies,
            'message' => UtilController::message('Successfully created agency.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $agency = Agency::find($id);

        if (!$agency) return response()->json([
            'message' => UtilController::message('Agency does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $agency->update(array_merge($request->only(['radius', 'name']), [
            'position' => json_encode([
                'lat' => $request->latitude,
                'lng' => $request->longitude,
            ])
        ]));

        $agencies = $this->get();

        return response()->json([
            'agencies' => $agencies,
            'message' => UtilController::message('Successfully updated agency.', 'success'),
        ]);
    }

    public function destroy($id)
    {
        $agency = Agency::find($id);

        if (!$agency) return response()->json([
            'message' => UtilController::message('Agency does not exist.', 'danger'),
        ]);

        $agency->delete();

        $agencies = $this->get();

        return response()->json([
            'agencies' => $agencies,
            'message' => UtilController::message('Successfully deleted agency.', 'success'),
        ]);
    }
}
