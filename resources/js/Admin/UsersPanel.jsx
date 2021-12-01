import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Axios from '../Axios/Axios';
import AddUser from './Components/AddUser';
import EditEducations from './Components/EditEducations';

export default function UsersPanel() {
    const [education, seteducation] = useState([]);
    const [editFrom, setEditFrom] = useState(false);
    const [editid, setEditid] = useState("");

    const getAllEducations = () =>{
        Axios.get('educations').then(response => {
            if(response.status == 200){
                seteducation(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    

    const updateEducations = (id) =>{
        console.log(id);
        setEditFrom(true)
        setEditid(id)
    }

    const deleteEducations = (id) =>{
        Axios.delete('educations/'+id).then(response => {
            if(response.status == 200){
                getAllEducations()
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    useEffect(() => {
        getAllEducations()
        
    }, [])

    return (
        <Sidebar>
            <section className="container mx-auto ">
                <h3 className="text-center text-3xl text-red-900 font-semibold pb-3 bg-gray-500 p-3">Education Panel</h3>
                <div className="flex flex-col md:divide-y divide-green-500 mt-4">
                     
                    
                    <div className="w-full mx-auto">
                        {(editFrom) ?
                            <EditEducations editid={editid} useEdit={setEditFrom} viewAll={getAllEducations} /> :
                            <AddUser viewAll={getAllEducations}/>
                        }
                    </div>
                    
                    <div className="w-full mx-auto">
                        <h5 className="my-2 text-center text-xl text-green-900 border-2 text-2xl font-semibold">View Education Item</h5>
                        <table className="table table-auto w-full block p-5">
                            <thead className="text-center ">
                                <tr>
                                    <th>Programs</th>
                                    <th>Institution</th>
                                    <th>Subject</th>
                                    <th>Score</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                            {(education.length >= 0)?(education.map( (e,i) => (
                                <tr key={e.id} className="border-b-2">
                                    <td>{e.program}</td>
                                    <td>{e.institution}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.score}</td>
                                    <td>{e.start_year} - {(e.end_year == 0)? "Present" : e.end_year }</td>
                                    <td><button className="bg-green-300 text-green-700 p-3" onClick={() => updateEducations(e.id)}>Edit</button></td>
                                    <td>
                                        <button className="bg-red-500 text-green-800 hover:bg-red-200 p-3 rounded"
                                            onClick={() =>
                                                {if(window.confirm('Are you sure to delete this record?')){ deleteEducations(e.id)};}
                                         
                                        }>
                                            Delete</button>
                                     </td>
                                </tr>
                                ))
                            ): <tr><td colSpan="2">No Result Found</td></tr>}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Sidebar>
    )
}
