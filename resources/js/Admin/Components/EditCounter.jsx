import React,{useState,useEffect} from 'react'
import Message from '../../Components/Message';
import Axios from '../../Axios/Axios';
import * as FontAwesome from "react-icons/fa";

export default function EditCounter(props) {
    const initialDtate = "";
    const [counting, setcounting] = useState({
        projects:"",coffee:"",clients:"",id:null
    });
    const [error, setError] = useState([]);

    const  postCount = (data) =>{ 
        Axios.put('counters/'+data.id, data).then(response => {
            if(response.status == 200){
                console.log(response)
                setcounting({
                    ...counting,
                    projects:"",coffee:"",clients:"",id:null
                })
                props.data()
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    const updateCount = e =>{
        e.preventDefault();
        console.log(counting)
        postCount(counting)
    }

    useEffect(() => {
        setcounting({
            projects:props.editid.projects,
            coffee:props.editid.coffee,
            clients:props.editid.clients,
            id:props.editid.id
        })
    }, [])

    return (
        <>
           <h5 className="text-center text-2xl text-green font-bold p-3">Edit Counter</h5>
            <div className="w-full">
                <form action="" className="p-3 w-full border-2 flex flex-col space-y-2 items-center mx-auto" onSubmit={ e => updateCount(e)} >
                    <div className="flex w-full">
                        <label className="w-1/3" htmlFor="">projects</label>
                        <input 
                            type="text" 
                            className="w-2/3 border-2 h-9 p-1" 
                            name="title"
                            placeholder="Enter project"
                            value={counting.projects}
                            onChange={ e =>setcounting(
                                {...counting,projects:e.target.value}) }  
                        />
                    </div>
                    
                    <div className="flex w-full">
                        <label className="w-1/3" htmlFor="">Coffee</label>
                        <input 
                            type="text" 
                            className="w-2/3 border-2 h-9 p-1" 
                            name="title"
                            placeholder="Enter cofee"
                            value={counting.coffee}
                            onChange={ e =>setcounting(
                                {...counting,coffee:e.target.value}) }    
                        />
                    </div>
                    <div className="flex w-full">
                        <label className="w-1/3" htmlFor="">Clients</label>
                        <input 
                            type="text" 
                            className="w-2/3 border-2 h-9 p-1" 
                            name="title"
                            placeholder="Enter Client"
                            value={counting.clients}
                            onChange={ e =>setcounting(
                                {...counting,clients:e.target.value}) }    
                        />
                    </div>
                    <button type="submit" className="w-full bg-purple-400 hover:bg-purple-300 p-2 rounded text-purple-900 transition duration-300">Update</button>
                </form>
            </div> 
        </>
    )
}
