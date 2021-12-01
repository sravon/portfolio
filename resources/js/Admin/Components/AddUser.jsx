import React,{useState} from 'react'
import Message from '../../Components/Message';
import Axios from '../../Axios/Axios';

export default function AddUser(props) {
    const initialDtate = "";
    const [name, setname] = useState(initialDtate);
    const [email, setemail] = useState(initialDtate);
    const [password, setpassword] = useState(initialDtate);
    const [error, setError] = useState([]);

    const postUser = (data) =>{
        Axios.post('users', data).then(response => {
            if(response.status == 200){
                console.log(response)
                 props.viewAll()
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    const registerUser = e =>{
        e.preventDefault();

        let errror_array = []

        if(name == "" && email == "" && password == ""){
            console.log("All fields is Required")
            errror_array.push("All fields is Required");
        }
        if(errror_array.length != 0){
            setError(errror_array)
            return
        }else{ setError([]) }
        const data = {name,email,password}
        postUser(data)
    }

    return (
        <>
           <h5 className="text-center text-2xl text-green font-bold p-3">Add User</h5>
            <div className="w-full">
            {error?(error.map( (e,i) => (
                <Message key={i} msg={e} color="bg-red-200" />
                ))
            ): null}
            
                <form action="" className="p-3 w-2/3 mx-auto border-2 m-2 space-y-2" onSubmit={ e => registerUser(e)} >
                    <input 
                        type="text" 
                        className="w-full border-2 h-9 p-1" 
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={ e =>setname(e.target.value) }  
                    />
                    <input 
                        type="email" 
                        className="w-full border-2 h-9 p-1" 
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={ e =>setemail(e.target.value) }  
                    />
                    <input 
                        type="password" 
                        className="w-full border-2 h-9 p-1" 
                        name="password"
                        placeholder="Enter passowrd Name"
                        value={password}
                        onChange={ e =>setpassword(e.target.value) }  
                    />
                    <button type="submit" className="w-full bg-purple-400 hover:bg-purple-300 p-2 rounded text-purple-900 transition duration-300">Add Education</button>
                </form>
            </div> 
        </>
    )
}
