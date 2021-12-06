<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Couter;

class CouterController extends Controller
{
    public function show($id)
    {
        return Couter::find($id);
    }

    public function update(Request $request, $id)
    {
        $ski = Couter::find($id);
        $ski->projects = $request->projects;
        $ski->clients = $request->clients;
        $ski->coffee = $request->coffee;
        $result = $ski->save();
        if($result)
            return ['update successfull'];
    }

}
