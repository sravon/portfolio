import React,{useState, useEffect, useContext} from 'react'
import { AcademicCapIcon,MenuIcon} from '@heroicons/react/solid'
import {Link} from 'react-router-dom'
import { upperCase } from 'lodash';
import { base_url } from '../../Data/Data';
import { AContext } from '../../context/AdminContext';
export default function Admincomponent(props) {
    const Acon = useContext(AContext)
    const [menubar, setMenubar] = useState("-translate-x-full");
    const [user, setuser] = useState({
        name: "", email:null, image:null, profession:""
    })

    useEffect(() => {
        setuser({...user,
            name:Acon.user.name,
            profession:Acon.user.profession,
            image:Acon.user.avadar
        })
    }, [])

    return (
        <>
            {/* mobile menu bar  */}
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                <Link to="/shrabon420/Dashboard" className="block p-4 text-white  font-bold">Admin Panel
                </Link>

                {/* <!-- mobile menu button --> */}
                <button className="mobile-menu-button p-4 focus:outline-none focus:bg-red-800" onClick={() => {(menubar==="-translate-x-full")?setMenubar(""):setMenubar("-translate-x-full")}}>
                    <MenuIcon className="h-5 w-5" />
                </button>
            </div>
            
            {/* <!-- sidebar --> */}
            <div className={menubar + " sidebar bg-blue-800 text-blue-100 w-60 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:fixed md:translate-x-0 transition duration-200 ease-in-out z-50"}>
                {/* <!-- logo --> */}
                <Link to="/shrabon420/Dashboard" className="text-white flex items-center space-x-2 px-4">
                    
                    <AcademicCapIcon className="h-5 w-5" />
                    <span className="text-2xl font-extrabold">MyPortHouse</span>
                </Link>
                <div className="flex flex-col">
                    <img src={base_url+user.image} alt="Third" className="h-20 w-20 rounded-full object-cover mx-auto"/>
                    <h2 className="text-center text-xl text-yellow-400">{upperCase(user.name)}</h2>
                    <h2 className="text-center text-gray-400">( {user.profession} )</h2>
                </div>
                {/* nav */}
                <nav>
                    <Link to="/shrabon420/Dashboard" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Home</Link>
                    <Link to="/shrabon420/About" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">About</Link>
                    <Link to="/shrabon420/Skills" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Skills</Link>
                    <Link to="/shrabon420/educations" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Educations</Link>
                    <Link to="/shrabon420/expreiences" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Expreiences</Link>
                    <Link to="/shrabon420/works" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Works</Link>
                    <Link to="/shrabon420/others" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Others</Link>
                    <Link to="/shrabon420/profile" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Profile</Link>
                </nav>
            </div>   
        </>
    )
}
