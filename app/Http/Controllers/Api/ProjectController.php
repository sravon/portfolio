<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Project;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Project::all() , 200);
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
        //$a = new Project();
        $name = $request->input('name');
        $category = $request->input('category');
        $filepath = $request->file('file')->store('portfolio');
        $link = $request->input('link');
        $des = $request->input('des');
        $url = $request->input('url');
        $a = DB::table('projects')->insert([
            'name' =>  $name ,
            'cat_id' => $category,
            'description'=> $des,
            'demo' => $filepath,
            'link' => $link,
            'url' => $url
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
        return Project::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    
    public function updateWoks(Request $request, $id)
    {
        $name = $request->input('name');
        $category = $request->input('category');
        if ($request->hasFile('file')) {
            $filepath = $request->file('file')->store('portfolio');;
        }else{
            $filepath = NULL;
        }
        $link = $request->input('link');
        $des = $request->input('des');
        $url = $request->input('url');

        $result = DB::table('projects')
              ->where('id', $id)
              ->update([
                'name' =>  $name ,
                'cat_id' => $category,
                'description'=> $des,
                'demo' => $filepath,
                'link' => $link,
                'url' => $url
                ]);
        if($result)
            return response('update successfull',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $dlt = Project::find($id);
        $rst = $dlt->delete();
        if($rst){
            return response( "Delete Successfull" , 200);
        }
    }

    public function checkwoks(Request $request)
    {
        $pid = $request->input('pid');
        $name = $request->input('name');
        $category = $request->input('category');
        if ($request->hasFile('file')) {
            $filepath = $request->file('file')->store('portfolio');;
        }else{
            $filepath = NULL;
        }
        $link = $request->input('link');
        $des = $request->input('des');

        $result = DB::table('projects')
              ->where('id', $pid)
              ->update([
                'name' =>  $name ,
                'cat_id' => $category,
                'description'=> $des,
                'demo' => $filepath,
                'link' => $link
                ]);
        if($result)
            return response('update successfull',200);
    }

    public function showBycat($id){
        $st = DB::table('projects')
            ->join('categories', 'projects.cat_id', '=', 'categories.id')
            ->where('projects.cat_id',$id)
            ->select('projects.*')
            ->get();
        return $st;
    }

}
