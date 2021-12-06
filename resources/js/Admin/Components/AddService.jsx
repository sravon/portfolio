import React,{useState} from 'react'
import Message from '../../Components/Message';
import Axios from '../../Axios/Axios';
import * as FontAwesome from "react-icons/fa";

export default function AddService(props) {
    const initialDtate = "";
    const [title, setTitle] = useState(initialDtate);
    const [iconname, setIconname] = useState(initialDtate);
    const [error, setError] = useState([]);

    const  postServices = (data) =>{ 
        Axios.post('services', data).then(response => {
            if(response.status == 200){
                console.log(response)
                setTitle("")
                setIconname("")
                props.data()
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    const registerServices = e =>{
        e.preventDefault();

        let errror_array = []

        if(title.length < 3){
            console.log("title Required atleast 3 char")
            errror_array.push("title Required atleast 3 char");
        }
        if(errror_array.length != 0){
            setError(errror_array)
            return
        }else{ setError([]) }
        const data = {title,iconname}
        postServices(data)
    }

    return (
        <>
           <h5 className="text-center text-2xl text-green font-bold p-3">Add Service</h5>
            <div className="w-full">
            {error?(error.map( (e,i) => (
                <Message key={i} msg={e}/>
                ))
            ): null}
            {React.createElement(FontAwesome['FaBitcoin'])}
            
                <form action="" className="p-3 w-full border-2 flex space-x-2 items-center mx-auto" onSubmit={ e => registerServices(e)} >
                    <input 
                        type="text" 
                        className="w-full border-2 h-9 p-1" 
                        name="title"
                        placeholder="Enter title"
                        value={title}
                        onChange={ e =>setTitle(e.target.value) }  
                    />
                    <input 
                        type="text" 
                        className="w-full border-2 h-9 p-1" 
                        name="iconname"
                        placeholder="Enter Icon Name"
                        value={iconname}
                        onChange={ e =>setIconname(e.target.value) }  
                    />
                    <button type="submit" className="w-full bg-purple-400 hover:bg-purple-300 p-2 rounded text-purple-900 transition duration-300">Add</button>
                </form>
            </div> 
        </>
    )
}
