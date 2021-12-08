import React, {useEffect,useState} from 'react'
import Axios from '../../Axios/Axios';
import * as FontAwesome from "react-icons/fa";
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';

export default function About() {
	const initialState = ""
	const [content, setContent] = useState(initialState);
	const [items, setItems] = useState([]);
	const [colors, setcolors] = useState([]);
	const [counter, setcounter] = useState("");

	const getContent = () =>{
        Axios.get('abouts/contents').then(response => {
            if(response.status == 200){
				setContent(response.data.description)
            }else if(response.status == 201){
                console.log(response);
            }
        })
		Axios.get('counters/1').then(response => {
            if(response.status == 200){
                setcounter(response.data)
				console.log(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
		console.log(counter)
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
		<>
			<section className="p-12 my-3 space-y-3">
				<h3 className="text-2xl font-extrabold pb-3 text-green-900 border-b-2 border-fuchsia-600">WHO AM I?</h3>
				<p>{content}</p>
				
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
					<h2 className="md:text-4xl text-green-800 font-bold mb-2">I am happy to know you <br/>that <span>300+</span> projects done sucessfully!</h2>
					<Link to="/contact" className="border-2 p-2 rounded bg-purple-300 text-white-700 hover:bg-purple-400 transition ease-in duration-700">Hire me</Link>
				</div>
				<div className="md:flex justify-between bg-gradient-to-r from-green-400 to-blue-500 p-5 md:divide-x  divide-gray-500">
					<div className="space-y-3 p-3 w-1/3 mx-auto">
						<p className="text-4xl text-center text-white font-bold">{counter.coffee}</p>
						<p className="text-lg text-white text-center">CUPS OF COFFEE</p>
					</div>
					<div className="space-y-3 p-3 w-1/3 mx-auto">
						<p className="text-4xl text-center text-white font-bold">{counter.clients}</p>
						<p className="text-lg text-white text-center">Clients</p>
					</div>
					<div className="space-y-3 p-3 w-1/3 mx-auto">
						<p className="text-4xl text-center text-white font-bold">{counter.projects}</p>
						<p className="text-lg text-white text-center">Projects</p>
					</div>
				</div>
			</section>
		</>
    )
}
