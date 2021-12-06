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

function Root() {
    return (
      <UserContext>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/skills" element={<Skills/>}/>
            <Route exact path="/educations" element={<Educations/>}/>
            <Route exact path="/works" element={<Works/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/experience" element={<Experience/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext>
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
