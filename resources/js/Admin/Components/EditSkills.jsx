import React,{useState,useEffect} from 'react'
import Message from '../../components/Message';
import Axios from '../../Axios/Axios';

export default function EditSkills(props) {
    const initialDtate = "";
    const [title, setTitle] = useState(initialDtate);
    const [percent, setPercent] = useState(initialDtate);
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState("");

    const gettSkills = () =>{
        Axios.get('skills/'+ props.editid).then(response => {
            if(response.status == 200){
                console.log(response.data)
                setTitle(response.data.name)
                setPercent(response.data.percent)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    useEffect(() => {
        gettSkills()
    }, [])


    const updateSkills = (data) =>{
        Axios.put('skills/'+props.editid, data).then(response => {
            if(response.status == 200){
                console.log(response)
                setSuccess(response.data)
                props.viewAll()
                props.useEdit(false)
            }else if(response.status == 201){
                
                console.log(response);
            }
        })
    }

    const registerSkills = e =>{
        e.preventDefault();
        let errror_array = []

        if(title.length < 3){
            console.log("title Required atleast 3 char")
            errror_array.push("title Required atleast 3 char");
        }
        if(percent == ""){
            console.log("Persent is empty")
            errror_array.push("persent is empty");
        }
        if(errror_array.length != 0){
            setError(errror_array)
            return
        }else{ setError([]) }
        const data = {title, percent}
        updateSkills(data)
    }

    return (
        <>
           <h5 className="text-center text-2xl text-green font-bold p-3">Edit Skill Item</h5>
            <div className="w-full">
            {error?(error.map( (e,i) => (
                <Message key={i} msg={e} color="bg-red-400"/>
                ))
            ): null}
            {success?
                <Message msg={success} color="bg-green-400"/> : null
            }
                <form action="" className="p-3 w-full border-2 m-2 space-x-2 flex justify between items-center" onSubmit={ e => registerSkills(e)} >
                    <input 
                        type="text" 
                        className="w-full border-2 h-9 p-1" 
                        name="title"
                        placeholder="Enter Title"
                        value={title}
                        onChange={ e =>setTitle(e.target.value) }  
                    />
                    <select 
                        name="percent" 
                        className="w-full border-2 h-9 p-1"
                        onChange={ e =>setPercent(e.target.value)}
                        value={percent}
                        >
                        <option value="">Select Percent</option>
                        <option value="2">20%</option>
                        <option value="4">40%</option>
                        <option value="6">50%</option>
                        <option value="7">60%</option>
                        <option value="8">80%</option>  
                        <option value="10">90%</option>
                        <option value="11">95%</option>
                        <option value="12">100%</option>
                    </select>
                    <button type="submit" 
                        className="w-full bg-purple-400 hover:bg-purple-300 p-2 rounded text-purple-900 transition duration-300">Edit Skills</button>
                </form>
            </div> 
        </>
    )
}
