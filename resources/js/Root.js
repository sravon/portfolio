import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './User/Pages/Home'
import About from './User/Pages/About'
import Skills from './User/Pages/Skills'
import Educations from './User/Pages/Educations'
import Works from './User/Pages/Works'
import UserContext from './context/UserContext'
import Contact from './User/Pages/Contact'
import Experience from './User/Pages/Experience'
import AboutUrl from './User/Layout/AboutUrl'
import ContactUrl from './User/Layout/ContactUrl'
import EducationUrl from './User/Layout/EducationUrl'
import SkillsUrl from './User/Layout/SkillsUrl'
import WorkUrl from './User/Layout/WorkUrl'
import ExperienceUrl from './User/Layout/ExperienceUrl'

function Root() {
    return (
      <UserContext>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<AboutUrl/>}/>
            <Route exact path="/skills" element={<SkillsUrl/>}/>
            <Route exact path="/educations" element={<EducationUrl/>}/>
            <Route exact path="/works" element={<WorkUrl/>}/>
            <Route exact path="/contact" element={<ContactUrl/>}/>
            <Route exact path="/experience" element={<ExperienceUrl/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext>
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
