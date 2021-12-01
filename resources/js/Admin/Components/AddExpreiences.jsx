import React,{useState} from 'react'
import Message from '../../Components/Message';
import Axios from '../../Axios/Axios';

export default function AddExpreiences(props) {
    const initialDtate = "";
    const [title, setTitle] = useState(initialDtate);
    const [start_year, setSyear] = useState(initialDtate);
    const [end_year, setEyear] = useState(initialDtate);
    const [aboutex, setaboutex] = useState(initialDtate);
    const [error, setError] = useState([]);

    const postExpreiences = (data) =>{ 
        Axios.post('experiences', data).then(response => {
            if(response.status == 200){
                console.log(response)
                setTitle("")
                setaboutex("")
                setEyear("")
                setSyear("")
                props.data()
            }else if(response.status == 201){
                
                console.log(response);
            }
        })
    }

    const registerExpreiences = e =>{
        e.preventDefault();

        let errror_array = []

        if(title.length < 3){
            console.log("title Required atleast 3 char")
            errror_array.push("title Required atleast 3 char");
        }
        if(title == ""){
            console.log("Persent is empty")
            errror_array.push("persent is empty");
        }
        if(errror_array.length != 0){
            setError(errror_array)
            return
        }else{ setError([]) }
        const data = {title, start_year, aboutex, end_year}
        postExpreiences(data)
    }

    return (
        <>
           <h5 className="text-center text-2xl text-green font-bold p-3">Add Expreience Item</h5>
            <div className="w-full">
            {error?(error.map( (e,i) => (
                <Message key={i} msg={e}/>
                ))
            ): null}
            
                <form action="" className="p-3 w-full border-2 space-y-2" onSubmit={ e => registerExpreiences(e)} >
                    <input 
                        type="text" 
                        className="w-full border-2 h-9 p-1" 
                        name="title"
                        placeholder="Enter Title"
                        value={title}
                        onChange={ e =>setTitle(e.target.value) }  
                    />
                    <div className="flex space-x-2">
                        <input 
                            type="text" 
                            className="w-full border-2 h-9 p-1" 
                            name="start_year"
                            placeholder="Enter start Year"
                            value={start_year}
                            onChange={ e =>setSyear(e.target.value) }  
                        />
                        <input 
                            type="number" 
                            className="w-full border-2 h-9 p-1" 
                            name="end_year"
                            placeholder="Enter end Year"
                            value={end_year}
                            onChange={ e =>setEyear(e.target.value) }  
                        />
                    </div>
                    <textarea 
                        className="w-full border-2 p-1"
                        value={aboutex}
                        onChange={ e =>setaboutex(e.target.value) }
                    ></textarea>

                    <button type="submit" className="w-full bg-purple-400 hover:bg-purple-300 p-2 rounded text-purple-900 transition duration-300">Add Expreiences</button>
                </form>
            </div> 
        </>
    )
}
