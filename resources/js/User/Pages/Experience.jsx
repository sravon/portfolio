import React,{useEffect, useState} from 'react'
import Axios from '../../Axios/Axios';
import Header from '../Layout/Header';

export default function Experience() {
    const [experiences, setexperiences] = useState([])

    const viewExperiences = () =>{
        Axios.get('experiences').then(response => {
            if(response.status == 200){
                setexperiences(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    useEffect(() => {
        viewExperiences()
    }, [])

    return (
        <>
            <section className="p-12 my-3 space-y-3">
                <h3 className="text-2xl font-extrabold pb-3 text-green-900 border-b-2 border-fuchsia-600">Expreience</h3>
                <div className="flex flex-col space-y-3">
                {(experiences.length)?(experiences.map( (e,i) => (
                    <div className=" p-5 bg-gray-200 space-y-3">
                        <h2 className="text-xl font-bold">{e.title} <small className="text-xs text-gray-800">{e.start_year} - {(e.end_year == 0)? "Present" : e.end_year }</small></h2>
                        <p className="text-gray-400">{e.description}</p>
                    </div>
                ))):null}
                </div>
            </section>
        </>
    )
}
