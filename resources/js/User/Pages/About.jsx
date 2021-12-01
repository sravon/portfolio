import React, {useEffect,useState} from 'react'
import Axios from '../../Axios/Axios';
import * as FontAwesome from "react-icons/fa";

export default function About() {
	const initialState = ""
	const [content, setContent] = useState(initialState);
	const [items, setItems] = useState([]);
	const [colors, setcolors] = useState([]);

	const getContent = () =>{
        Axios.get('abouts/create').then(response => {
            if(response.status == 200){
                
				setContent(response.data.description)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

	const getItems = () =>{
        Axios.get('services/create').then(response => {
            if(response.status == 200){

				setItems(response.data.data);
				setcolors(response.data.colors);
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

	useEffect(() => {
		getContent()
		getItems()
	}, [])

    return (
		<section className="p-12 my-3 space-y-3">
			<h3 className="text-2xl font-extrabold pb-3 text-green-900 border-b-2 border-fuchsia-600">WHO AM I?</h3>
			<p><span className="text-xl font-extrabold">I'm Shrabon.</span>{content}</p>
			<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
			<div className="grid md:grid-cols-3 gap-2">
			{(items.length)?(items.map( (e,i) => (
				<div key={e.id} className= {colors[i] + " h-26 justify-center items-center space-y-3 p-5 border-b-2 border-red-600"}>
					<div className="text-4xl">{React.createElement(FontAwesome[e.iconname])}</div>
					<p className="font-bold text-xl text-yellow-900">{e.title}</p>
				</div>
			))
			):null}
				
			</div>
			<div className="bg-yellow-400 space-y-3 p-5">
				<h2 className="text-4xl text-green-800 font-bold">I am happy to know you <br/>that <span>300+</span> projects done sucessfully!</h2>
				<button className="border-2 p-2 rounded bg-purple-300 text-white-700 hover:bg-purple-400 transition ease-in duration-700">Hire me</button>
			</div>
			<div className="md:flex justify-between bg-gradient-to-r from-green-400 to-blue-500 p-5 md:divide-x  divide-gray-500">
				<div className="space-y-3 p-3 w-1/3 mx-auto">
					<p className="text-4xl text-center text-white font-bold">309</p>
					<p className="text-lg text-white text-center">CUPS OF COFFEE</p>
				</div>
				<div className="space-y-3 p-3 w-1/3 mx-auto">
					<p className="text-4xl text-center text-white font-bold">309</p>
					<p className="text-lg text-white text-center">Clients</p>
				</div>
				<div className="space-y-3 p-3 w-1/3 mx-auto">
					<p className="text-4xl text-center text-white font-bold">309</p>
					<p className="text-lg text-white text-center">Projects</p>
				</div>
			</div>
		</section>
    )
}
