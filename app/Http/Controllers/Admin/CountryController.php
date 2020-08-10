<?php

namespace App\Http\Controllers\Admin;

use App\Country;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    //
    private $rules = [
        'company_id' => 'required|exists:companies,id',
        'name' => 'required|string',
        'abbr' => 'required|string',
        'code' => 'required|string',
    ];

    private function get()
    {
        $countries = [];
        foreach (Country::get() as $country) {
            $countries[] = array_merge($country->toArray(), [
                'cities' => $country->cities,
                'company' => $country->company->name,
            ]);
        }

        return $countries;
    }

    public function index()
    {
        $countries = $this->get();
        $companies = request()->user()->companies;

        return response()->json([
            'countries' => $countries,
            'companies' => $companies,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Country::create($request->all());

        $countries = $this->get();

        return response()->json([
            'countries' => $countries,
            'message' => UtilController::message('Successfully created country.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $country = Country::find($id);

        if (!$country) return response()->json([
            'message' => UtilController::message('Country does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $country->update($request->all());

        $countries = $this->get();

        return response()->json([
            'countries' => $countries,
            'message' => UtilController::message('Successfully updated country.', 'success'),
        ]);
    }

    public function destroy($id)
    {
        $country = Country::find($id);

        if (!$country) return response()->json([
            'message' => UtilController::message('Country does not exist.', 'danger'),
        ]);

        $country->delete();

        $countries = $this->get();

        return response()->json([
            'countries' => $countries,
            'message' => UtilController::message('Successfully deleted country.', 'success'),
        ]);
    }
}
