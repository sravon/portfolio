<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $validator = Validator::make($request->all(),[
            'name' => 'required|min:3',
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        if($validator->fails()){
            return response($validator->errors()->first(), 201);
        }

        $edu = new User();
        $edu->name = $request->name;
        $edu->email = $request->email;
        $edu->password = Hash::make($request->password);
        $edu->save();
        return response($edu, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function loginuser(Request $request){
        $email = $request->email;
        $password = $request->password;
        
        $user = User::where('email',$email)->first();
        if ($user) {
            if (Hash::check($password, $user->password)) {
                $token = $user->createToken('Laravel grant Client')->accessToken;
                return response([
                    'user' => $user,
                    'token' => $token
                ], 200);
            } else {
                return response("Password not foumnd", 201);
            }
            
        }else{
            return response("user not foumnd", 201);
        }
    }

    public function logout(){
        $token = Auth::user()->token();
        return $token->revoke();
    }
    public function login_userdata(){
        $user = Auth::user();
        if ($user) {
            return response($user, 200 );
        } else {
            return response("user not Found", 201);
        }
        
    }

    public function updateprofile(Request $request)
    {
        $name = $request->input('name');
        $nickname = $request->input('nickname');
        $email = $request->input('email');
        $profession = $request->input('profession');
        if ($request->hasFile('image')) {
            $filepath = $request->file('image')->store('working');;
        }else{
            $filepath = NULL;
        }
        
        $result = DB::table('users')
              ->where('email', $email)
              ->update([
                'name' =>  $name ,
                'nickname' => $nickname,
                'profession'=> $profession,
                'avadar' => $filepath
                ]);
        if($result)
            return response('update successfull',200);
    }

}
