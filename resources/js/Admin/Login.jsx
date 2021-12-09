import React,{useState, useContext, useEffect} from 'react'
import Message from '../User/Components/Message';
import Axios from '../Axios/Axios';
import * as IconHouse from "react-icons/fc";
import {useNavigate} from 'react-router-dom';
import {AContext} from '../context/AdminContext';

export default function Login(props) {
    const initialDtate = "";
    const [email, setemail] = useState(initialDtate);
    const [password, setpassword] = useState(initialDtate);
    const [error, setError] = useState([]);
    const  his = useNavigate();

    const CreateUser = useContext(AContext)

    useEffect(() => {
        if(CreateUser.isLoggedIn){
            his("/shrabon420/dashboard");
        }
    }, [])    

    const postUser = (data) =>{
        Axios.post('users/login', data).then(response => {
            if(response.status == 200){
                
                localStorage.setItem("token",response.data.token)
                CreateUser.setUser(response.data.user)
                //console.log(response);
                his("/shrabon420/dashboard");
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    const checkUser = e =>{
        e.preventDefault();

        let errror_array = []

        if(email == "" && password == ""){
            console.log("All fields is Required")
            errror_array.push("All fields is Required");
        }
        if(errror_array.length != 0){
            setError(errror_array)
            return
        }else{ setError([]) }
        const data = {email,password}
        postUser(data)
    }


    return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
    <div className="bg-white p-16 rounded shadow-2xl md:w-1/2">
            <div className="text-5xl flex items-center justify-center">{React.createElement(IconHouse['FcManager'])}</div>
            <h2 className="text-3xl font-bold mb-8 text-purple-800 mb-4 text-center">Login Your Account</h2>
            <form action="" className="space-y-3" onSubmit={ e => checkUser(e)}>
                <div className="flex">
                    <label className="mr-10 font-bold w-1/5" htmlFor="">Email</label>
                    <input
                        className="w-4/5 border-2 border-gray-400 p-3 outline-none focus:border-blue-400"
                        type="email" name="email" value={email} onChange={ e =>setemail(e.target.value) } />
                </div>
                <div className="flex">
                <label className="mr-2 font-bold w-1/4" htmlFor="">Password</label>
                <input 
                    className="w-3/4 border-2 border-gray-400 p-3 outline-none focus:border-blue-400" 
                    type="password" name="password" value={password} onChange={ e =>setpassword(e.target.value) } />
                </div>
                <button type="submit" className="block w-full bg-purple-400 hover:bg-purple-300 p-4 rounded text-purple-900 transition duration-300">Log In</button>
        </form>
    </div>
    </div>
    )
}
