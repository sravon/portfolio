import React,{useState,useEffect} from 'react'
import Axios from '../../Axios/Axios';

export default function Skills() {
	
	const [skills, setskills] = useState([]);

	const getSkills = () =>{
        Axios.get('skills').then(response => {
            if(response.status == 200){
				console.log(response.data);
				setskills(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

	useEffect(() => {
		getSkills()
	}, [])


    return (
		<section className="p-12 my-3 space-y-3">
			<h3 className="text-2xl font-extrabold pb-3 text-green-900 border-b-2 border-fuchsia-600">My Skills</h3>
			<div className="grid md:grid-cols-2 gap-4">
			{(skills.length)?(skills.map( (e,i) => (
				<div key={e.id} className="h-24 justify-center items-center space-y-3 p-5">
					<h2>{e.name}</h2>
					<div className="h-3 w-full bg-red-400 rounded-2">
						<div className={"w-"+e.percent + "/12 h-3 bg-green-400 relative"}>
							<p className="absolute text-green-400 right-0 -top-6">{e.percent}0%</p>
						</div>
					</div>
				</div>
			))
			):null}
				<div className="h-24 justify-center items-center space-y-3 p-5">
					<h2>Jave</h2>
					<div className="h-3 w-full bg-red-400 rounded-2">
						<div className="h-3 bg-green-400 w-10/12 relative">
							<p className="absolute text-green-400 right-0 -top-6">10%</p>
						</div>
					</div>
				</div>
				<div className="h-24 justify-center items-center space-y-3 p-5">
					<h2>php</h2>
					<div className="h-3 w-full bg-red-400 rounded-2">
						<div className="h-3 bg-green-400 w-11/12 relative">
							<p className="absolute text-green-400 right-0 -top-6">12%</p>
						</div>
					</div>
				</div>
				<div className="h-24 justify-center items-center space-y-3 p-5">
					<h2>Rust</h2>
					<div className="h-3 w-full bg-red-400 rounded-2">
						<div className="h-3 bg-green-400 w-3/4 relative">
							<p className="absolute text-green-400 right-0 -top-6">12%</p>
						</div>
					</div>
				</div>
				<div className="h-24 justify-center items-center space-y-3 p-5">
					<h2>Pastal</h2>
					<div className="h-3 w-full bg-red-400 rounded-2">
						<div className="h-3 bg-green-400 w-5/6 relative">
							<p className="absolute text-green-900 right-0 -top-6">180%</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}
