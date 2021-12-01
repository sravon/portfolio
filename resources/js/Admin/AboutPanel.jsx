import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Axios from '../Axios/Axios';
import AddService from './Components/AddService';
import  EditAbout from './Components/EditAbout'
import * as FontAwesome from "react-icons/fa";

export default function AboutPanel() {
    const [service, setservice] = useState([]);
    const [about, setabout] = useState([]);
    const [editFrom, setEditFrom] = useState(false);
    const [editid, setEditid] = useState("");
    const [catId, setcatId] = useState("");

    const viewServices = () =>{
        Axios.get('services').then(response => {
            if(response.status == 200){
                setservice(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    

    const updateCategory = (id) =>{
        console.log(id);
        setEditFrom(true)
        setEditid(id)
    }

    const deleteExperiences = (id) =>{
        Axios.delete('categories/'+id).then(response => {
            if(response.status == 200){
                viewCategories()
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    useEffect(() => {
        viewAbouts()
        viewServices()
    }, [])

    const viewAbouts = () =>{
        Axios.get('abouts').then(response => {
            if(response.status == 200){
                setabout(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    const updateAbouts = (id) =>{
        setEditFrom(true)
        setEditid(id)
    }

    return (
        <Sidebar>
            <section className="container mx-auto ">
                <h3 className="text-center text-3xl text-red-900 font-semibold pb-3 bg-gray-500 p-3">Service Panel</h3>
                <div className="grid md:grid-cols-2 md:divide-x divide-green-500 mt-4">
                     
                    
                    <div className="w-full mx-auto">
                        <AddService data={viewServices}/>
                    </div>
                    
                    <div className="w-3/4 mx-auto">
                        <h5 className="ml-2 text-center text-xl text-green-900 border-2 text-2xl font-semibold">view Service Item</h5>
                        <table className="table table-auto w-full block p-5">
                            <thead className="text-center ">
                                <tr>
                                    <th>Icon</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                            {(service.length)?(service.map( (e,i) => (
                                <tr key={e.id} className="border-b-2">
                                    <td className="pl-10">
                                        {React.createElement(FontAwesome[e.iconname])}
                                        </td>
                                    <td>{e.title}</td>
                                    <td><button className="bg-green-300 text-green-700 p-3" onClick={() => updateExperiences(e.id)}>Edit</button></td>
                                    <td>
                                        <button className="bg-red-500 text-green-800 hover:bg-red-200 p-3 rounded"
                                            onClick={() =>
                                                {if(window.confirm('Are you sure to delete this record?')){ deleteExperiences(e.id)};}
                                         
                                        }>
                                            Delete</button>
                                     </td>
                                </tr>
                                ))
                            ): <tr><td colSpan="2" className="text-red-800">No Result Found</td></tr>}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section className="container mx-auto ">
                <div className="grid md:grid-cols-2 md:divide-x divide-green-500 mt-4">
                     
                    
                    <div className="w-full">
                        {(editFrom) ?
                            <EditAbout editid={editid} useEdit={setEditFrom} data={viewAbouts} /> :
                            null
                        }
                        
                    </div>
                    
                    <div className="w-3/4 mx-auto">
                        <h5 className="ml-2 text-center text-xl text-green-900 border-2 text-2xl font-semibold">view About Item</h5>
                        <table className="table table-auto w-full block p-5">
                            <thead className="text-center ">
                                <tr>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                            {(about.length)?(about.map( (e,i) => (
                                <tr key={e.id} className="border-b-2">
                                    <td>{e.description}</td>
                                    <td><button className="bg-green-300 text-green-700 p-3" onClick={() => updateAbouts(e.id)}>Edit</button></td>
                                </tr>
                                ))
                            ): <tr><td colSpan="2" className="text-red-800">No Result Found</td></tr>}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Sidebar>
    )
}
