import React,{useState, useContext,useEffect} from 'react'
import { AcademicCapIcon,MenuIcon } from '@heroicons/react/solid'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import {VisitContext} from '../../context/UserContext'
import { base_url } from '../../Data/Data'
import Axios from '../../Axios/Axios'
import * as FontAwesome from "react-icons/fa";

export default function Header(props) {
    const [menubar, setMenubar] = useState("-translate-x-full");
    const UserCon = useContext(VisitContext)
    const [socials, setsocials] = useState([])

    const getSocials = () =>{
        Axios.get('socials').then(response => {
            if(response.status == 200){
				setsocials(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

	useEffect(() => {
		getSocials()
	}, [])
    
    return (
        <>
        <div className="relative min-h-screen md:flex">
            <div className="md:w-60">
  
                {/* mobile menu bar  */}
                <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                    <Link to="#" className="block p-4 text-white  font-bold">Better dev
                    </Link>

                    {/* <!-- mobile menu button --> */}
                    <button className="mobile-menu-button p-4 focus:outline-none focus:bg-red-800" onClick={() => {(menubar==="-translate-x-full")?setMenubar(""):setMenubar("-translate-x-full")}}>
                        <MenuIcon className="h-5 w-5" />
                    </button>
                </div>
                
                {/* <!-- sidebar --> */}
                <div className={menubar + " sidebar bg-blue-800 text-blue-100 w-60 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:fixed md:translate-x-0 transition duration-200 ease-in-out z-50"}>
                    {/* <!-- logo --> */}
                    <Link to="/" className="text-white flex items-center space-x-2 px-4">
                        
                        <AcademicCapIcon className="h-5 w-5" />
                        <span className="text-2xl font-extrabold">MyPortHouse</span>
                    </Link>
                    <div className="flex flex-col">
                        <img src={base_url+UserCon.user.avadar} alt="Third" className="h-20 w-20 rounded-full object-cover mx-auto"/>
                        <h2 className="text-center text-xl text-yellow-400"> {UserCon.user.name}</h2>
                        <h2 className="text-center text-gray-400">( {UserCon.user.profession} )</h2>
                    </div>
                    {/* nav */}
                    <nav>
                        <Link to="/" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Home</Link>
                        <Link to="/about" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">About</Link>
                        <Link to="/skills" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Skills </Link>
                        <Link to="/educations" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Educations</Link>
                        <Link to="/works" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Works</Link>
                        <Link to="/contact" className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Contact</Link>
                    </nav>
                    <div className="absolute bottom-px flex justify-between space-x-2 pb-3">
                    {(socials.length)?(socials.map( (e,i) => (
                        <a href={e.link} target="_blank" key={i} className="bg-gray-500 px-2 py-2 font-semibold text-white rounded">
                            {React.createElement(FontAwesome[e.iconname])}
                        </a>
                    ))):null}
                    </div>	
                </div>

            </div>

            {/* content  */}
            <div className="flex-1 ">
                {props.children}
            </div>
        </div>
        
        </>
    )
}
