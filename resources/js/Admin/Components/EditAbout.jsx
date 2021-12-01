import React,{useState, useEffect} from 'react'
import Message from '../../Components/Message';
import Axios from '../../Axios/Axios';

export default function EditAbout(props) {
    const initialDtate = "";
    const [des, setdes] = useState(initialDtate);
    const [error, setError] = useState([]);
    const [success, setsuccess] = useState("");

    const getAboutById = () =>{
        Axios.get('abouts/'+ props.editid).then(response => {
            if(response.status == 200){
                console.log(response.data)
                setdes(response.data.description)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    useEffect(() => {
        getAboutById()
    }, [])

    const  postAbout = (data) =>{ 
        Axios.put('abouts/'+props.editid, data).then(response => {
            if(response.status == 200){
                setsuccess(response.data)
                props.data()
                props.useEdit(false)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }
    const registerAbout = e =>{
        e.preventDefault();

        let errror_array = []

        if(des.length < 3){
            console.log("title Required atleast 3 char")
            errror_array.push("title Required atleast 3 char");
        }
        if(errror_array.length != 0){
            setError(errror_array)
            return
        }else{ setError([]) }
        const data = {des}
        postAbout(data)
    }


    return (
        <>
           <h5 className="text-center text-2xl text-green font-bold p-3">Edit About</h5>
            <div className="w-full">
            {error?(error.map( (e,i) => (
                <Message key={i} msg={e} color="bg-red-400"/>
                ))
            ): null}
            {success?
                <Message msg={success} color="bg-green-400"/> : null
            }
                <form action="" className="p-3 w-full border-2 m-2 space-y-2" onSubmit={ e => registerAbout(e)} >
                    <textarea name="" className="w-full border-2 p-1" value={des} onChange={ e =>setdes(e.target.value) } ></textarea>
                    <button type="submit" className="w-full bg-purple-400 hover:bg-purple-300 p-2 rounded text-purple-900 transition duration-300">Update</button>
                </form>
            </div> 
        </>
    )
}
