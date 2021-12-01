import React,{useState, useEffect} from 'react'
import Message from '../../Components/Message';
import Axios from '../../Axios/Axios';

export default function EditWorks(props) {
    const initialDtate = "";
    const [title, setTitle] = useState(initialDtate);
    const [category, setcategory] = useState(initialDtate);
    const [allcategory, setallcategory] = useState(initialDtate);
    const [file, setFile] = useState();
    const [link, setlink] = useState(initialDtate);
    const [des, setdes] = useState(initialDtate);
    const [error, setError] = useState([]);
    const [success, setsuccess] = useState("");

    const [intialcat, setinitialcat] = useState("");
    const [unselectcat, setunselectcat] = useState("");

    const  postWorks = (data) =>{ 
        Axios.post('projects/updateWoks', data).then(response => {
            if(response.status == 200){
                setsuccess(response.data)
                setTitle("")
                props.data()
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }
    const registerWorks = e =>{
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
        const formData = new FormData();
        formData.append("pid", props.editid);
        formData.append("name", title);
        formData.append("category", category);
        formData.append("file", file);
        formData.append("link", link);
        formData.append("des", des);
        console.log(category);
        postWorks(formData)
    }

    useEffect(() => {
        setallcategory(props.allcategory)
        getWorkById()
        
        console.log(props.catId + " child")
    }, [props])

    useEffect( () => {
        console.log(allcategory)
        value1()
       setcategory(props.catId)
    }, [allcategory, props.catId])

    const getWorkById = () =>{
        Axios.get('projects/'+ props.editid).then(response => {
            if(response.status == 200){
                console.log(response)
                setTitle(response.data.name)
                setdes(response.data.description)
                setlink(response.data.link)
                
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    const value1 = () => {
        
            {(allcategory.length)?(allcategory.map( (e,i) => (
                (e.id === props.catId)?
                setinitialcat(<option key={e.id} value={e.id}>{e.name}</option>):
                setunselectcat(<option key={e.id} value={e.id}>{e.name}</option>)
            ))):<option value="">No Options</option>}
    
}

    const value2 = <option value="">No Options</option>
    const value3 = <option value="">No Options</option>

    return (
        <>
           <h5 className="text-center text-2xl text-green font-bold p-3">Edit Work gerg</h5>
            <div className="w-full">
            {error?(error.map( (e,i) => (
                <Message key={i} msg={e} color="bg-red-400"/>
                ))
            ): null}
            {success?
                <Message msg={success} color="bg-green-400"/> : null
            }
                <form action="" className="p-3 w-full border-2 m-2 space-y-2" onSubmit={ e => registerWorks(e)} >
                    <input 
                        type="text" 
                        className="w-full border-2 h-9 p-1" 
                        name="title"
                        placeholder="Enter Title"
                        value={title}
                        onChange={ e =>setTitle(e.target.value) }  
                    />
                    
                    <select 
                        name="category" 
                        className="w-full border-2 h-9 p-1"
                        onChange={ e =>setcategory(e.target.value)}
                        value={category}
                        >
                        {intialcat}
                        {unselectcat}
                    </select>
                    <input type="file" name="file" className="mb-4" 
                        onChange={(e) => setFile(e.target.files[0])} />
                    <input type="text" value={link} placeholder="Enter Link"
                        className="w-full border-2 h-9 p-1" onChange={ e =>setlink(e.target.value) } />
                    <textarea name="" className="w-full border-2 p-1" value={des} onChange={ e =>setdes(e.target.value) } ></textarea>
                    <button type="submit" className="w-full bg-purple-400 hover:bg-purple-300 p-2 rounded text-purple-900 transition duration-300">Add Works</button>
                </form>
            </div> 
        </>
    )
}
