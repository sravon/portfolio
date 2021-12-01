import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import Axios from '../Axios/Axios';
import AddCategories from './Components/AddCategories';
import AddWorks from './Components/AddWorks'
import EditWorks from './Components/EditWorks';

export default function WorksPanel() {
    const [category, setcategory] = useState([]);
    const [work, setwork] = useState([]);
    const [editFrom, setEditFrom] = useState(false);
    const [editid, setEditid] = useState("");
    const [catId, setcatId] = useState("");

    const viewCategories = () =>{
        Axios.get('categories').then(response => {
            if(response.status == 200){
                setcategory(response.data)
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
        viewWorks()
        viewCategories()
    }, [])

    const viewWorks = () =>{
        Axios.get('projects').then(response => {
            if(response.status == 200){
                setwork(response.data)
            }else if(response.status == 201){
                console.log(response);
            }
        })
    }

    const updateWorks = (id,catId) =>{
        setEditFrom(true)
        setEditid(id)
        setcatId(catId)
        console.log(catId +" parent");
    }

    return (
        <Sidebar>
            <section className="container mx-auto ">
                <h3 className="text-center text-3xl text-red-900 font-semibold pb-3 bg-gray-500 p-3">Work Panel</h3>
                <div className="grid md:grid-cols-2 md:divide-x divide-green-500 mt-4">
                     
                    
                    <div className="w-1/2 mx-auto">
                        <AddCategories data={viewCategories}/>
                    </div>
                    
                    <div className="w-3/4 mx-auto">
                        <h5 className="ml-2 text-center text-xl text-green-900 border-2 text-2xl font-semibold">view Category Item</h5>
                        <table className="table table-auto w-full block p-5">
                            <thead className="text-center ">
                                <tr>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                            {(category.length)?(category.map( (e,i) => (
                                <tr key={e.id} className="border-b-2">
                                    <td>{e.name}</td>
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
                            <EditWorks editid={editid} catId={catId} useEdit={setEditFrom} data={viewWorks} allcategory={category} /> :
                            <AddWorks data={viewWorks} allcategory={category}/>
                        }
                        
                    </div>
                    
                    <div className="w-3/4 mx-auto">
                        <h5 className="ml-2 text-center text-xl text-green-900 border-2 text-2xl font-semibold">view Works Item</h5>
                        <table className="table table-auto w-full block p-5">
                            <thead className="text-center ">
                                <tr>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                            {(work.length)?(work.map( (e,i) => (
                                <tr key={e.id} className="border-b-2">
                                    <td>{e.name}</td>
                                    <td>{e.cat_id}</td>
                                    <td><button className="bg-green-300 text-green-700 p-3" onClick={() => updateWorks(e.id,e.cat_id)}>Edit</button></td>
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
