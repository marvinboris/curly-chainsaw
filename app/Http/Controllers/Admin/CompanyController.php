<?php

namespace App\Http\Controllers\Admin;

use App\Company;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    //
    private $rules = [
        'admin_id' => 'required|exists:admins,id',
        'name' => 'required|string',
    ];

    private function get()
    {
        $user = request()->user();

        $companies = [];
        foreach ($user->companies as $company) {
            $companies[] = array_merge($company->toArray(), [
                'countries' => $company->countries,
            ]);
        }

        return $companies;
    }

    public function index()
    {
        $companies = $this->get();

        return response()->json([
            'companies' => $companies
        ]);
    }

    public function store(Request $request)
    {
        $request->validate($this->rules);

        Company::create($request->all());

        $companies = $this->get();

        return response()->json([
            'companies' => $companies,
            'message' => UtilController::message('Successfully created company.', 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $company = Company::find($id);

        if (!$company) return response()->json([
            'message' => UtilController::message('Company does not exist.', 'danger'),
        ]);

        $request->validate($this->rules);

        $company->update($request->all());

        $companies = $this->get();

        return response()->json([
            'companies' => $companies,
            'message' => UtilController::message('Successfully updated company.', 'success'),
        ]);
    }

    public function destroy($id)
    {
        $company = Company::find($id);

        if (!$company) return response()->json([
            'message' => UtilController::message('Company does not exist.', 'danger'),
        ]);

        $company->delete();

        $companies = $this->get();

        return response()->json([
            'companies' => $companies,
            'message' => UtilController::message('Successfully deleted company.', 'success'),
        ]);
    }
}
