import React, {useContext} from 'react'
import Header from '../Layout/Header'
import About from './About'
import Skills from './Skills'
import Educations from './Educations'
import Works from './Works'
import {VisitContext} from '../../context/UserContext'
import { base_url } from '../../Data/Data'
import Contact from './Contact'
import Experience from './Experience'

export default function Home() {
    const UserCon = useContext(VisitContext)
    return (
        <Header>
        <section className="md:h-96 z-0">
			<div className="md:p-12 p-5 my-3 bg-cover lg:h-full w-full filter blur-none" style={{backgroundImage: "url('"+base_url+UserCon.user.thumnails+"')"}} >
				<div className="w-1/2 z-50 ">
					<h1 className="md:text-2xl font-extrabold mt-20">Hi! I am {UserCon.user.name}({UserCon.user.nickname})</h1>
					<p className="md:text-2xl text-red-900 font-extrabold Full Stack Developer">{UserCon.user.profession}</p>
				</div>
			</div>
		</section>
        <About/>
        <Skills/>
        <Educations/>
        <Experience/>
        <Works/>
        <Contact/>
    </Header>
    )
}
