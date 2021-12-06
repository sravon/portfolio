import React from 'react'
import {FaDemocrat,FaHeart,FaLink} from "react-icons/fa";
export default function Modal(props) {
    
    return (
        <>
            {/* <!-- modal --> */}
            <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 ">
                {/* <!-- modal --> */}
                <div className="bg-white rounded shadow-lg w-1/2">
                    {/* <!-- modal header --> */}
                    <div className="border-b px-4 py-2 flex justify-between items-center">
                        <h2 className="font-semibold text-lg">Modal title</h2>
                        <button onClick={() => props.close(false)} className="text-black close-modal bg-red-300 p-2">x</button>
                    </div>
                    {/* <!-- modal body --> */}
                    <div className="p-3">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Iuw-5drffDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="flex justify-end items-center w-100 border-t p-3">
                        <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white mr-1 close-modal">Cancel</button>
                        <button className="bg-red-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Oke</button>
                    </div>
                </div>
            </div>
        </>
    )
}
