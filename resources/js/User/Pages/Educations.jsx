import React,{useState,useEffect} from 'react'
import Axios from '../../Axios/Axios';
import {FaPlus,FaMinus} from "react-icons/fa";

export default function Educations() {
	
    const [status, changeStatus] = useState({
        activeObject: null,
        object: []
    })

    const toggleActive = (index) =>{
        changeStatus({...status,activeObject:status.object[index]})
        
    }

    const toggleStyle = (index) =>{
        if(status.object[index] === status.activeObject){
            return ""
        }else{
            return "hidden"
        }
        
    }

	const getEducations = () =>{
        Axios.get('educations').then(response => {
            if(response.status == 200){
				console.log(response.data);
				changeStatus({...status,object:response.data})
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

	useEffect(() => {
		getEducations()
	}, [])


    return (
		<section className="p-12 my-3 space-y-3">
			<h3 className="text-2xl font-extrabold pb-3 text-green-900 border-b-2 border-fuchsia-600">EDUCATION</h3>
			<div className="w-2/3 space-y-3 mx-auto">
                {status.object.map((elements,index) => (
                    <div className="w-full accoration" key={index} onClick={() => toggleActive(index)}>
                        <div className="flex justify-between items-center w-full h-12 bg-red-200 px-3 cursor-pointer relative">
                            <h2>{elements.program}</h2>
                            <p>
                                {(status.object[index] !== status.activeObject)?
                                    <FaPlus/>:<FaMinus/>
                                }
                            </p>
                        </div>
                        <div className={toggleStyle(index)+" bg-gray-200 p-3 accoration-item"}>
                            <div className="flex justify-start items-center space-x-4">
                                <div className="w-40 h-40">
                                    <img src="suma.jpg" className="w-full h-full rounded-3xl"/>
                                </div>
                                <div className="space-y-2 w-full">
                                    <h2 className="font-bold text-xl">{elements.institution}</h2>
                                    <h2 className="font-bold block w-full text-left">Qualification : <span className="text-gray-600 text-right">{elements.programs}</span></h2>
                                    <h2 className="font-bold">Principal Subject : <span className="text-gray-600 ml-4">{elements.subject}</span></h2>
                                    <h2 className="font-bold">Score : <span className="text-gray-600 ml-4">{elements.score}</span></h2>
                                    <h2 className="font-bold">Year : <span className="text-gray-600 ml-4">{elements.start_year} - {elements.end_year}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
    
				{/* <div className="w-full accoration" id="11" onClick={() => setStatus(!status)}>
					<div className="flex justify-between items-center w-full h-12 bg-red-200 px-3 cursor-pointer relative">
						<h2>Master degree</h2>
						<p>
                            {(status)?<FaPlus/>:<FaMinus/>}
							
						</p>
					</div>
					<div className={(status)?"hidden":null+"bg-gray-200 p-3 accoration-item"}>
						<div className="flex justify-start items-center space-x-4">
							<div className="w-40 h-40">
								<img src="suma.jpg" className="w-full h-full rounded-3xl"/>
							</div>
							<div className="space-y-2 w-full">
								<h2 className="font-bold text-xl">North south University</h2>
								<h2 className="font-bold block w-full text-left">Qualification : <span className="text-gray-600 text-right">Bachelor Of Science</span></h2>
								<h2 className="font-bold">Principal Subject : <span className="text-gray-600 ml-4">Computer Science & Engineering</span></h2>
								<h2 className="font-bold">Score : <span className="text-gray-600 ml-4">3.12/4.00</span></h2>
								<h2 className="font-bold">Year : <span className="text-gray-600 ml-4">2017 - Present</span></h2>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
    )
}
