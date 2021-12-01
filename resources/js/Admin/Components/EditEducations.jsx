import React,{useState,useEffect} from 'react'
import Message from '../../Components/Message';
import Axios from '../../Axios/Axios';

export default function EditEducations(props) {
    const initialDtate = "";
    const [programs, setPrograms] = useState(initialDtate);
    const [institution, setinstitution] = useState(initialDtate);
    const [subject, setsubject] = useState(initialDtate);
    const [score, setscore] = useState(initialDtate);
    const [start_year, setSyear] = useState(initialDtate);
    const [end_year, setEyear] = useState(initialDtate);
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState("");

    const viewEducations = () =>{
        Axios.get('educations/'+ props.editid).then(response => {
            if(response.status == 200){
                console.log(response.data)
                setPrograms(response.data.program)
                setinstitution(response.data.institution)
                setsubject(response.data.subject)
                setscore(response.data.score)
                setSyear(response.data.start_year)
                setEyear(response.data.end_year)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    useEffect(() => {
        viewEducations()
    }, [])


    const updateEducations = (data) =>{
        Axios.put('educations/'+props.editid, data).then(response => {
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

    const registerEducations = e =>{
        e.preventDefault();
        let errror_array = []

        if(programs == "" && institution == "" && subject == "" && score == "" && start_year == "" && end_year == ""){
            console.log("All fields is Required")
            errror_array.push("All fields is Required");
        }
        if(errror_array.length != 0){
            setError(errror_array)
            return
        }else{ setError([]) }
        const data = {programs, institution, subject, score, start_year, end_year}
        updateEducations(data)
    }

    return (
        <>
           <h5 className="text-center text-2xl text-green font-bold p-3">Edit Education</h5>
            <div className="w-full">
            {error?(error.map( (e,i) => (
                <Message key={i} msg={e} color="bg-red-200" />
                ))
            ): null}
            
                <form action="" className="p-3 w-2/3 mx-auto border-2 m-2 space-y-2" onSubmit={ e => registerEducations(e)} >
                    <input 
                        type="text" 
                        className="w-full border-2 h-9 p-1" 
                        name="programs"
                        placeholder="Enter Programs Name"
                        value={programs}
                        onChange={ e =>setPrograms(e.target.value) }  
                    />
                    <input 
                        type="text" 
                        className="w-full border-2 h-9 p-1" 
                        name="institution"
                        placeholder="Enter institution Name"
                        value={institution}
                        onChange={ e =>setinstitution(e.target.value) }  
                    />
                    <input 
                        type="text" 
                        className="w-full border-2 h-9 p-1" 
                        name="subject"
                        placeholder="Enter Subject Name"
                        value={subject}
                        onChange={ e =>setsubject(e.target.value) }  
                    />
                    <input 
                        type="text" 
                        className="w-full border-2 h-9 p-1" 
                        name="score"
                        placeholder="Enter Score"
                        value={score}
                        onChange={ e =>setscore(e.target.value) }  
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
                    
                    <button type="submit" className="w-full bg-purple-400 hover:bg-purple-300 p-2 rounded text-purple-900 transition duration-300">Update</button>
                </form>
            </div> 
        </>
    )
}
