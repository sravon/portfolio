<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Educations;
use Illuminate\Support\Facades\DB;

class EducationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    

    public function index()
    {
        $edu =  Educations::all();
        return response(  $edu , 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
        $a = DB::table('educations')->insert([
            'program' =>  $request->input('programs') ,
            'institution' =>  $request->input('institution'),
            'subject' =>  $request->input('subject'),
            'score' =>  $request->input('score'),
            'start_year' =>  $request->input('start_year'),
            'end_year' =>  $request->input('end_year'),
            'thumnails' => $request->file('thumnails')->store('portfolio')
            
          ]); 
          if($a)
            return response("Data added successfull", 200);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Educations::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $ski = Educations::find($id);
        $ski->program = $request->programs;
        $ski->institution = $request->institution;
        $ski->subject = $request->subject;
        $ski->score = $request->score;
        $ski->start_year = $request->start_year;
        $ski->end_year = $request->end_year;
        $result = $ski->save();
        if($result)
            return ['update successfull'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $dlt = Educations::find($id);
        $rst = $dlt->delete();
        if($rst){
            return response( "Delete Successfull" , 200);
        }
    }
}
