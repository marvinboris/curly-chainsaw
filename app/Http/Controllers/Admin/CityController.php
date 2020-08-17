<?php

namespace App\Http\Controllers\Admin;

use App\City;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class CityController extends Controller
{
    //
    private $rules = [
        'country_id' => 'required|exists:countries,id',
        'name' => 'required|string',
    ];

    private function get()
    {
        $cities = [];
        foreach (request()->user()->companies as $company) {
            foreach ($company->countries as $country) {
                foreach ($country->cities as $city) {
                    $cities[] = array_merge($city->toArray(), [
                        'agencies' => $city->agencies,
                        'country' => $city->country->name,
                        'company' => $city->country->company->name,
                        'company_id' => $city->country->company->id,
                    ]);
                }
            }
        }

        return $cities;
    }

    public function index()
    {
        $cities = $this->get();
        $companies = [];
        foreach (request()->user()->companies as $company) {
            $countries = [];
            foreach ($company->countries as $country) {
                $countries[] = $country->toArray();
            }
            $companies[] = array_merge($company->toArray(), [
                'countries' => $countries,
            ]);
        }

        return response()->json([
            'cities' => $cities,
            'companies' => $companies,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        City::create($request->all());

        $cities = $this->get();

        return response()->json([
            'cities' => $cities,
            'message' => UtilController::message('Successfully created city.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $city = City::find($id);

        if (!$city) return response()->json([
            'message' => UtilController::message('City does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $city->update($request->all());

        $cities = $this->get();

        return response()->json([
            'cities' => $cities,
            'message' => UtilController::message('Successfully updated city.', 'success'),
        ]);
    }

    public function destroy($id)
    {
        $city = City::find($id);

        if (!$city) return response()->json([
            'message' => UtilController::message('City does not exist.', 'danger'),
        ]);

        $city->delete();

        $cities = $this->get();

        return response()->json([
            'cities' => $cities,
            'message' => UtilController::message('Successfully deleted city.', 'success'),
        ]);
    }
}
