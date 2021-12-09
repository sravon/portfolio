import React,{useState, useEffect, useContext} from 'react'
import Sidebar from './Sidebar'
import Axios from '../Axios/Axios';
import EditProfileinfo from './Components/EditProfileinfo'
import { AContext } from '../context/AdminContext';
import { base_url } from '../Data/Data';

export default function ProfilePanel() {
    const UserCon = useContext(AContext)
    const [editFrom, setEditFrom] = useState(false);
    const [editid, setEditid] = useState("")
    const [user, setuser] = useState({
        name: "",nickname:"", email:"", image:"", profession:"",thumnails:""
    })

    useEffect(() => {
        setuser({...user,
            name:UserCon.user.name,
            nickname:UserCon.user.nickname,
            profession:UserCon.user.profession,
            email:UserCon.user.email,
            image:UserCon.user.avadar,
            thumnails:UserCon.user.thumnails
        })
    }, [])


    const editProfile = (id) =>{
        setEditFrom(true)
        setEditid(id)
    }

    return (
        <Sidebar>
            <section className="container mx-auto ">
                <div className="grid md:grid-cols-2 md:divide-x divide-green-500 mt-4">
                    <div className="w-full">
                        {(editFrom) ?
                            <EditProfileinfo editid={user} useEdit={setEditFrom} /> :
                            null
                        }
                        
                    </div>
                    
                    <div className="w-full mx-auto">
                        <h5 className="ml-2 text-center text-xl text-green-900 border-2 text-2xl font-semibold">Profile Information</h5>
                        <table className="table table-auto w-full block p-5">
                            <tbody className="text-center space-y-2">
                                <tr>
                                    <td>name:</td>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <td>Nickname:</td>
                                    <td>{user.nickname}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td>profession:</td>
                                    <td>{user.profession}</td>
                                </tr>
                                <tr>
                                    <td>profile Image:</td>
                                    <td>
                                        <img src={base_url+user.image} width={100} height={100} alt="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cover Image:</td>
                                    <td>
                                        <img src={base_url+user.thumnails} width={100} height={100} alt="" />
                                    </td>
                                </tr>
                                <tr className="mt-2">
                                    <td colSpan={2}>
                                        <button className="bg-red-200 p-2 mt-2"
                                            onClick={editProfile}
                                        >Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Sidebar>
    )
}
