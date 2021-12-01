import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Axios from '../Axios/Axios';
import EditExpreiences from './Components/EditExpreiences';
import AddExpreiences from './Components/AddExpreiences';

export default function ExpreiencesPanel() {
    const [experience, setexperience] = useState([]);
    const [editFrom, setEditFrom] = useState(false);
    const [editid, setEditid] = useState("");

    const viewExperiences = () =>{
        Axios.get('experiences').then(response => {
            if(response.status == 200){
                setexperience(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    

    const updateExperiences = (id) =>{
        console.log(id);
        setEditFrom(true)
        setEditid(id)
    }

    const deleteExperiences = (id) =>{
        Axios.delete('experiences/'+id).then(response => {
            if(response.status == 200){
                
                viewExperiences()
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    useEffect(() => {
        viewExperiences()
    }, [])

    return (
        <Sidebar>
            <section className="container mx-auto ">
                <h3 className="text-center text-3xl text-red-900 font-semibold pb-3 bg-gray-500 p-3">experience Panel</h3>
                <div className="grid md:grid-cols-2 md:divide-x divide-green-500 mt-4">
                     
                    
                    <div className="w-full">
                        {(editFrom) ?
                            <EditExpreiences editid={editid} useEdit={setEditFrom} viewAll={viewExperiences} /> :
                            <AddExpreiences data={viewExperiences}/>
                        }
                    </div>
                    
                    <div className="w-full mx-auto">
                        <h5 className="ml-2 text-center text-xl text-green-900 border-2 text-2xl font-semibold">view Expreiences Item</h5>
                        <table className="table table-auto w-full block p-5">
                            <thead className="text-center ">
                                <tr>
                                    <th>Name</th>
                                    <th>Desciption</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                            {(experience.length)?(experience.map( (e,i) => (
                                <tr key={e.id} className="border-b-2">
                                    <td>{e.title}</td>
                                    <td>{e.description}</td>
                                    <td>{e.start_year} - {(e.end_year == 0)? "Present" : e.end_year }</td>
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
        </Sidebar>
    )
}
