import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './Admin/Dashboard';
import SkillsPanel  from './Admin/SkillsPanel';
import EducationsPanel  from './Admin/EducationsPanel';
import ExpreiencesPanel  from './Admin/ExpreiencesPanel';
import WorksPanel from './Admin/WorksPanel'
import AboutPanel from './Admin/AboutPanel'
import Login from './Admin/Login'
import AdminContext from './context/AdminContext';
import ProfilePanel from './Admin/ProfilePanel';
import Others from './Admin/Others';

function AdminRoot() {
    return (
        <AdminContext>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/shrabon420" element={<Login/>}/>
                    <Route exact path="/shrabon420/dashboard" element={<Dashboard />}/>
                    <Route exact path="/shrabon420/skills" element={<SkillsPanel/>}/>
                    <Route exact path="/shrabon420/educations" element={<EducationsPanel/>}/>
                    <Route exact path="/shrabon420/expreiences" element={<ExpreiencesPanel/>}/>
                    <Route exact path="/shrabon420/works" element={<WorksPanel/>}/>
                    <Route exact path="/shrabon420/about" element={<AboutPanel/>}/>
                    <Route exact path="/shrabon420/profile" element={<ProfilePanel/>}/>
                    <Route exact path="/shrabon420/others" element={<Others/>}/>
                </Routes>
            </BrowserRouter>
        </AdminContext>
    );
}

export default AdminRoot;

if (document.getElementById('root')) {
    ReactDOM.render(<AdminRoot />, document.getElementById('root'));
}
