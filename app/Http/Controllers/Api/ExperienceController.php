<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Experience;

class ExperienceController extends Controller
{
    public function index()
    {
        $edu =  Experience::all();
        return response(  $edu , 200);
    }

    public function store(Request $request)
    {
        $a = new Experience();
        $a->title = $request->title; 
        $a->description = $request->aboutex;
        $a->start_year = $request->start_year;
        $a->end_year = $request->end_year;
        $a->save();
        return response($a, 200);
    }

    public function show($id)
    {
        $data = Experience::find($id);
        return response($data);
    }

    public function update(Request $request, $id)
    {
        $ski = Experience::find($id);
        $ski->title = $request->title;
        $ski->description = $request->aboutex;
        $ski->start_year = $request->start_year;
        $ski->end_year = $request->end_year;
        $result = $ski->save();
        if($result)
            return ['update successfull'];
    }

    public function destroy($id)
    {
        $dlt = Experience::find($id);
        $rst = $dlt->delete();
        if($rst){
            return response( "Delete Successfull" , 200);
        }
    }

}
