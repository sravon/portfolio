import React,{useState,useEffect} from 'react'
import {FaDemocrat,FaHeart,FaLink} from "react-icons/fa";
import Modal from '../Components/Modal';
import Axios from '../../Axios/Axios'
import { base_url } from '../../Data/Data';

export default function Works() {
  const [modal, setmodal] = useState(false)
  const [categories, setcategories] = useState([])
  const [worklist, setworklist] = useState([
    
  ])
  const [status, changeStatus] = useState({
    activeObject: null,
    object: [
      
    ]
  })

  const getCategories = () =>{
    Axios.get('categories').then(response => {
      if(response.status == 200){
        console.log(response.data[0].id);
        changeStatus({...status,activeObject:0,object:response.data})
        projectList(response.data[0].id)
      }else if(response.status == 201){
          console.log(response);
      }
    })


  }

  const projectList = (category) =>{
    Axios.get('projects/cats/'+category).then(response => {
      if(response.status == 200){
        setworklist(response.data)
      }
    })
  }

  useEffect(() => {
    getCategories()
  }, [])

  

  const toggleActive = (index,element) =>{
    console.log(status.activeObject)
    projectList(element)
    changeStatus({...status,activeObject:index})
  }

    return (
    <>
      <div className="container">
        <div className="bg-gray-200 flex justify-around items-center">
        {status.object.map((elements,index) => (
          <button key={index} onClick={() =>toggleActive(index,elements.id)} className={((index === status.activeObject)? "bg-gray-400" :null )+" p-3 hover:bg-gray-400 "}>{elements.name}</button>
        ))}
				
				</div>
        {status.object.map((elements,index) => (
          <div key={index} className={((index !== status.activeObject)? "hidden" :null )+" tabPanel text-red-900 text-center box-border bg-red"}>
            <div className="grid lg:grid-cols-3 gap-2 p-3">
              {worklist.map((ele,i) =>(
                <div key={i} className="image relative h-80">
                  <img className="image__img w-full h-full" src={base_url+ele.demo}/>
                  <div className="image__overlay absolute w-full h-full left-0 top-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-red-100">
                    <h2 className="font-bold text-lg text-green-400">{ele.name}</h2>
                    <p className="p-2">Website feswef dfgdf trfy  rty ret54 ret ret ertb gvxgt te b 54t4e rt3 rete  54te  4t4e  tre t4rhfd tere rtyyrt  retreg retretg rtgre</p>
                    <div className="flex space-x-2">
                      <button onClick={() => setmodal(true)} className="hiddenmodal show-modal bg-blue-200 p-2 flex items-center rounded">
                        <FaDemocrat />
                        <span className="text-gray-900 ml-2 font-semibold">Demo</span>
                      </button>
                      <button className="bg-blue-200 p-3 flex items-center rounded">
                        <FaLink/>
                        <span className="text-gray-900 ml-2 font-semibold">Link</span>
                      </button>
                    </div>
                  </div>	
                </div>
              ))}
					  </div>
          </div>
        ))}
      </div>
      { (modal) ? <Modal close={setmodal}/> : null}

    </>
    )
}
