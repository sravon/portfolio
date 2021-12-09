import React,{useState, useEffect, useContext} from 'react'
import { AcademicCapIcon,UsersIcon,MenuIcon,BriefcaseIcon,HomeIcon,BellIcon } from '@heroicons/react/solid'
import Admincomponent from './Components/Admincomponent';

import Axios from '../Axios/Axios';
import {Link, useNavigate} from 'react-router-dom'
import {AContext} from '../context/AdminContext';
import { upperCase } from 'lodash';

export default function Sidebar(props) {
    const Acon = useContext(AContext)
    
    const [nickname, setnickname] = useState("dsfdsf")
    const  his = useNavigate();
    useEffect(() =>{
        setnickname(Acon.user.nickname)
    }, [AContext])


    const logout = () =>{
        const token  = localStorage.getItem('token')
        if(token){
            const headers = {
                Authorization: "Bearer " + token
            }

            Axios.get('users/logout',{headers}).then(response => {
                if(response.status == 200){
                    Acon.logoutUser()
                    console.log(response);
                    his("/shrabon420")
                }else if(response.status == 201){
                    console.log(response);
                }
            });
        }
        
    }

    return (
        <>
        <div className="relative min-h-screen md:flex">
            <div className="md:w-60">
                <Admincomponent user={Acon.user}/>
            </div>

            {/* content  */}
            <div className="flex-1">
                {/* admin left menu */}
                <nav className="bg-gray-100 md:visible invisible">
                    <div className="max-w-6xl mx-auto ">
                        <div className="flex justify-between">
                                {/* logo */}
                                <div>
                                    <Link to="/" className="flex items-center py-4 px-3">
                                        <AcademicCapIcon className="w-6 h-6" /> 
                                    </Link>
                                </div>
                                {/* primary nav */}
                                <div className="hidden md:flex items-center space-x-3">
                                    <Link to="/home" className="py-4 px-3 hover:bg-red-700">
                                        <HomeIcon className="w-6 h-6"/>
                                    </Link>
                                    <Link to="/profile" className="py-4 px-3 hover:bg-red-700">
                                        <UsersIcon className="w-6 h-6"/>
                                    </Link>
                                    <Link to="/works" className="py-4 px-3 hover:bg-red-700">
                                        <BriefcaseIcon className="w-6 h-6"/>
                                    </Link>
                                </div>
                                
                            {/* secondary nav */}
                            <div className="hidden md:flex items-center space-x-1">
                                <div>
                                    <a href="#" className="flex items-center rounded-full py-2 px-2 bg-gray-400">
                                        <img src="" className="rounded-full mr-1"/>
                                        <span>{nickname}</span>
                                    </a>
                                </div>
                                <a href="" className="py-4 px-3 hover:bg-red-700">
                                    <BellIcon className="w-6 h-6"/>
                                </a>
                                <button 
                                    className="py-5 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300 hover:text-yellow-900 transition duration-300"
                                    onClick={logout}
                                >Logout</button>
                            </div>
                            <div className="md:hidden flex items-center">
                                <button className="mobile-menu-button">
                                    <MenuIcon className="w-6 h-6"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>{props.children}
            </div>
        </div>
        </>
    )
}
