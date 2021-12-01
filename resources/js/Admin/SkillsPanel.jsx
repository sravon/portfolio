import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Axios from '../Axios/Axios';
import AddSkills from './Components/AddSkills';
import EditSkills from './Components/EditSkills';

export default function SkillsPanel() {
    const [skills, setSkills] = useState([]);
    const [editFrom, setEditFrom] = useState(false);
    const [editid, setEditid] = useState("");

    const gettSkills = () =>{
        Axios.get('skills').then(response => {
            if(response.status == 200){
                setSkills(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    

    const updateSkills = (id) =>{
        console.log(id);
        setEditFrom(true)
        setEditid(id)
    }

    const deleteSkills = (id) =>{
        Axios.delete('skills/'+id).then(response => {
            if(response.status == 200){
                
                gettSkills()
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    useEffect(() => {
        gettSkills()
        // setTimeout(() => {
        //     setError([])
        // }, 5000);
    }, [])

    return (
        <Sidebar>
            <section className="container mx-auto ">
                <h3 className="text-center text-3xl text-red-900 font-semibold mt-5 pb-3 bg-gray-500 p-3">Skills Panel</h3>
                <div className="grid md:grid-cols-2 md:divide-x divide-green-500 mt-4">
                     
                    
                    <div className="mx-auto">
                        {(editFrom) ?
                            <EditSkills editid={editid} useEdit={setEditFrom} viewAll={gettSkills} /> :
                            <AddSkills data={gettSkills}/>
                        }
                    </div>
                    
                    <div className="w-2/4 mx-auto">
                        <h5 className="ml-2 text-center text-xl text-green-900 border-2 text-2xl font-semibold">Add Skill Item</h5>
                        <table className="table table-auto w-full block p-5 m-5">
                            <thead className="text-center ">
                                <tr>
                                    <th>Name</th>
                                    <th>Percent</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                            {(skills.length >= 0)?(skills.map( (e,i) => (
                                <tr key={e.id} className="border-b-2">
                                    <td>{e.name}</td>
                                    <td>{e.percent}</td>
                                    <td><button className="bg-green-300 text-green-700 p-3" onClick={() => updateSkills(e.id)}>Edit</button></td>
                                    <td>
                                        <button className="bg-red-500 text-green-800 hover:bg-red-200 p-3 rounded"
                                            onClick={() =>
                                                {if(window.confirm('Are you sure to delete this record?')){ deleteSkills(e.id)};}
                                         
                                        }>
                                            Delete</button>
                                     </td>
                                </tr>
                                ))
                            ): <tr><td colSpan="2">No Result Found</td></tr>}
                                <tr>
                                    <td>Php</td>
                                    <td>12%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Sidebar>
    )
}
