import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Axios from '../Axios/Axios';
import AddSocial from './Components/AddSocial';
import * as FontAwesome from "react-icons/fa";
import EditCounter from "./Components/EditCounter"

export default function Others() {
    const [social, setsocial] = useState([]);
    const [counter, setcounter] = useState("");
    const [editFrom, setEditFrom] = useState(false);
    const [editid, setEditid] = useState("");


    const viewSocials = () =>{
        Axios.get('socials').then(response => {
            if(response.status == 200){
                setsocial(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    const viewCounters = () =>{
        Axios.get('counters/1').then(response => {
            if(response.status == 200){
                setcounter(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    

    const editCounter = (id) =>{
        
        setEditFrom(true)
        setEditid(counter)
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
        viewSocials()
        viewCounters()
    }, [])


    return (
        <Sidebar>
            <section className="container mx-auto ">
                <h3 className="text-center text-3xl text-red-900 font-semibold pb-3 bg-gray-500 p-3">Social</h3>
                <div className="grid md:grid-cols-2 md:divide-x divide-green-500 mt-4">
                     
                    
                    <div className="w-full mx-auto">
                        <AddSocial data={viewSocials}/>
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
                            {(social.length)?(social.map( (e,i) => (
                                <tr key={e.id} className="border-b-2">
                                    <td className="pl-10">
                                        {React.createElement(FontAwesome[e.iconname])}
                                        </td>
                                    <td>{e.title}</td>
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
                            <EditCounter editid={counter} useEdit={setEditFrom} data={viewCounters} /> :
                            null
                        }
                        
                    </div>
                    
                    <div className="w-full mx-auto">
                        <h5 className="ml-2 text-center text-xl text-green-900 border-2 text-2xl font-semibold">View Counting Information</h5>
                        <table className="table table-auto w-full block p-5">
                            <tbody className="text-center space-y-2">
                                <tr>
                                    <td>Projects:</td>
                                    <td>{counter.projects}</td>
                                </tr>
                                <tr>
                                    <td>Cofffee:</td>
                                    <td>{counter.coffee}</td>
                                </tr>
                                <tr>
                                    <td>Clients:</td>
                                    <td>{counter.clients}</td>
                                </tr>
                                
                                <tr className="mt-2">
                                    <td colSpan={2}>
                                        <button className="bg-red-200 p-2 mt-2"
                                            onClick={editCounter}
                                        >Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Sidebar>
    )
}
