import React,{useEffect,useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { base_url } from './Data/Data';
import Dashboard from './Admin/Dashboard';
import SkillsPanel  from './Admin/SkillsPanel';
import EducationsPanel  from './Admin/EducationsPanel';
import ExpreiencesPanel  from './Admin/ExpreiencesPanel';
import WorksPanel from './Admin/WorksPanel'
import AboutPanel from './Admin/AboutPanel'
import UsersPanel  from './Admin/UsersPanel';
import Login from './Admin/Login'
import AdminContext from './context/AdminContext';
import ProfilePanel from './Admin/ProfilePanel';
import Others from './Admin/Others';

function AdminRoot() {
    const [adminurl, setadminurl] = useState("")
    useEffect(async() => {
            try {
            let response = await fetch(base_url+'panel/adminurl.json');
            let responseJson = await response.json();
                setadminurl(responseJson.adminurl);
            } catch(error) {
                console.error(error);
            }
    }, [])
    return (
        <AdminContext>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"+adminurl} element={<Login url={adminurl} />}/>
                    <Route exact path={"/"+adminurl+"/dashboard"} element={<Dashboard />}/>
                    <Route exact path={"/"+adminurl+"/skills"} element={<SkillsPanel/>}/>
                    <Route exact path={"/"+adminurl+"/educations"} element={<EducationsPanel/>}/>
                    <Route exact path={"/"+adminurl+"/expreiences"} element={<ExpreiencesPanel/>}/>
                    <Route exact path={"/"+adminurl+"/works"} element={<WorksPanel/>}/>
                    <Route exact path={"/"+adminurl+"/about"} element={<AboutPanel/>}/>
                    <Route exact path={"/"+adminurl+"/shralogin"} element={<Login/>}/>
                    <Route exact path={"/"+adminurl+"/shrabonusers"} element={<UsersPanel/>}/>
                    <Route exact path={"/"+adminurl+"/profile"} element={<ProfilePanel/>}/>
                    <Route exact path={"/"+adminurl+"/others"} element={<Others/>}/>
                </Routes>
            </BrowserRouter>
        </AdminContext>
    );
}

export default AdminRoot;

if (document.getElementById('root')) {
    ReactDOM.render(<AdminRoot />, document.getElementById('root'));
}
