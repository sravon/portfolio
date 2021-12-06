import React,{useState} from 'react'
import Message from '../../Components/Message';
import Axios from '../../Axios/Axios';

export default function AddSkills(props) {
    const initialDtate = "";
    const [title, setTitle] = useState(initialDtate);
    const [percent, setPercent] = useState(initialDtate);
    const [error, setError] = useState([]);

    const data = {title, percent}
    const postSkills = (data) =>{
        Axios.post('skills', data).then(response => {
            if(response.status == 200){
                console.log(response)
                props.data()
                setPercent("")
                setTitle("")
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
        postSkills(data)
    }

    return (
        <>
           <h5 className="text-center text-2xl text-green font-bold p-3">Add Skill Item</h5>
            <div className="w-full">
            {error?(error.map( (e,i) => (
                <Message key={i} msg={e}/>
                ))
            ): null}
            
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
                    <button type="submit" className="w-full bg-purple-400 hover:bg-purple-300 p-2 rounded text-purple-900 transition duration-300">Add Skills</button>
                </form>
            </div> 
        </>
    )
}
