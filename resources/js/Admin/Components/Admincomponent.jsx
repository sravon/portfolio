import React,{useState, useEffect} from 'react'
import { AcademicCapIcon,MenuIcon} from '@heroicons/react/solid'
import {Link} from 'react-router-dom'
import { upperCase } from 'lodash';
export default function Admincomponent(props) {
    const [menubar, setMenubar] = useState("-translate-x-full");
    const [user, setuser] = useState({
        name: "", email:null, image:null, profession:""
    })

    useEffect(() => {
        setuser({...user,name:props.user.name,profession:props.user.profession})
    }, [])

    return (
        <>
            {/* mobile menu bar  */}
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                <Link to={"/"+props.url+"/Dashboard"} className="block p-4 text-white  font-bold">Admin Panel
                </Link>

                {/* <!-- mobile menu button --> */}
                <button className="mobile-menu-button p-4 focus:outline-none focus:bg-red-800" onClick={() => {(menubar==="-translate-x-full")?setMenubar(""):setMenubar("-translate-x-full")}}>
                    <MenuIcon className="h-5 w-5" />
                </button>
            </div>
            
            {/* <!-- sidebar --> */}
            <div className={menubar + " sidebar bg-blue-800 text-blue-100 w-60 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:fixed md:translate-x-0 transition duration-200 ease-in-out z-50"}>
                {/* <!-- logo --> */}
                <Link to="/shrabon/Dashboard" className="text-white flex items-center space-x-2 px-4">
                    
                    <AcademicCapIcon className="h-5 w-5" />
                    <span className="text-2xl font-extrabold">MyPortHouse</span>
                </Link>
                <div className="flex flex-col">
                    <img src="logo512.png" alt="Third" className="h-20 w-20 rounded-full object-cover mx-auto"/>
                    <h2 className="text-center text-xl text-yellow-400">{upperCase(user.name)}</h2>
                    <h2 className="text-center text-gray-400">( {user.profession} )</h2>
                </div>
                {/* nav */}
                <nav>
                    <Link to={"/"+props.url+"/Dashboard"} className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Home</Link>
                    <Link to={"/"+props.url+"/About"} className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">About</Link>
                    <Link to={"/"+props.url+"/Skills"} className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Skills</Link>
                    <Link to={"/"+props.url+"/educations"} className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Educations</Link>
                    <Link to={"/"+props.url+"/expreiences"} className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Expreiences</Link>
                    <Link to={"/"+props.url+"/works"} className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Works</Link>
                    <Link to={"/"+props.url+"/users"} className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Users</Link>
                    <Link to={"/"+props.url+"/profile"} className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Profile</Link>
                </nav>
                <div className="absolute bottom-px flex justify-between space-x-2 pb-3">
                    <button className="bg-gray-500 px-2 py-2 font-semibold text-white rounded">
                        <img src="/images/facebook32.png" alt="" />
                    </button>
                    <button className="bg-gray-500 px-2 py-2 font-semibold text-white rounded">
                        <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </button>
                    <button className="bg-gray-500 px-2 py-2 font-semibold text-white rounded">
                        <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </button>
                </div>	
            </div>   
        </>
    )
}
