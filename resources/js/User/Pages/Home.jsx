import React from 'react'
import Header from '../Layout/Header'
import About from './About'
import Skills from './Skills'

export default function Home() {
    return (
        <Header>
        <section className="h-96 z-0">
			<div className="p-12 my-3 bg-cover lg:h-full w-full filter blur-none" style={{backgroundImage: "url('/images/cv.png')"}} >
				<div className="w-1/2 z-50 ">
					<h1 className="md:text-4xl font-extrabold mt-20">Hi! I am Shrabon</h1>
					<p className="md:text-2xl text-red-900 font-extrabold Full Stack Developer">Full Stack Developer</p>
				</div>
			</div>
		</section>
        <About/>
        <Skills/>
    </Header>
    )
}
