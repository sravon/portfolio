import React,{useState, useEffect, useContext} from 'react'
import Message from '../../components/Message';
import Axios from '../../Axios/Axios';
import { AContext } from '../../context/AdminContext';

export default function EditProfileinfo(props) {
    const initialDtate = "";
    const [user, setuser] = useState({
        name: "", nickname: "", email: "", profession: "",
        image: "", thumnails:""
    });
    const updateUser = useContext(AContext)

    

    useEffect(() => {
        setuser({
            ...user, name: props.editid.name,
            nickname: props.editid.nickname,
            email:props.editid.email,
            profession:props.editid.profession
        })
    }, [])

    const  postWorks = (data) =>{ 
        Axios.post('projects/updateprofile', data).then(response => {
            if(response.status == 200){
                console.log(response.data)
                updateUser.setUser(response.data.user)
                // props.useEdit(false)
                //window.location.reload()
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }
    const updateProfile = e =>{
        e.preventDefault();
        if(user.image === "" || user.thumnails === ""){
            alert("image is empty")
            return
        }

        const formData = new FormData();
        formData.append("name",user.name);
        formData.append("nickname", user.nickname);
        formData.append("email", user.email);
        formData.append("profession", user.profession);
        formData.append("image", user.image);
        formData.append("thumnails", user.thumnails);
        
        console.log(formData)
        postWorks(formData)
        
    }


    return (
        <>
           <h5 className="text-center text-2xl text-green font-bold p-3">Edit Profile</h5>
            <div className="w-full">
                <form action="" className="p-3 w-full border-2 m-2 space-y-2" onSubmit={ e => updateProfile(e)} >
                    <div className="w-full">
                        <label className="w-1/2">Name</label>
                        <input type="text" className="w-1/2 border-2 h-9 p-1 ml-2"
                            placeholder="Enter email"
                            value={user.name} 
                            onChange={ e =>setuser({...user,
                                name:e.target.value}) }
                        />
                    </div>
                    <div className="w-full">
                        <label className="w-1/2">Nickname</label>
                        <input type="text" className="w-1/2 border-2 h-9 p-1 ml-2"
                            placeholder="Enter email"
                            value={user.nickname}
                            onChange={ e =>setuser({...user,
                                nickname:e.target.value}) }
                        />
                    </div>
                    <div className="w-full">
                        <label className="w-1/2">Profile Image</label>
                        <input type="file" className="w-1/2 border-2 h-9 p-1 ml-2"
                            onChange={
                                e => setuser({...user,
                                image:e.target.files[0]})
                            }
                        />
                    </div>
                    <div className="w-full">
                        <label className="w-1/2">Cover Image</label>
                        <input type="file" className="w-1/2 border-2 h-9 p-1 ml-2"
                            onChange={
                                e => setuser({...user,
                                thumnails:e.target.files[0]})
                            }
                        />
                    </div>
                    <div className="w-full">
                        <label className="w-1/2">profession</label>
                        <input type="text" className="w-1/2 border-2 h-9 p-1 ml-2"
                         placeholder="Enter profession"
                         value={user.profession} 
                         onChange={ e =>setuser({...user,
                            profession:e.target.value}) }
                        />
                    </div>
                    <button type="submit" className="w-full bg-purple-400 hover:bg-purple-300 p-2 rounded text-purple-900 transition duration-300">Update</button>
                </form>
            </div> 
        </>
    )
}
