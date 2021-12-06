import React,{useContext} from 'react'
import {FaUserAlt} from "react-icons/fa";
import Header from '../Layout/Header';
import {VisitContext} from '../../context/UserContext'
import emailjs from 'emailjs-com';

export default function Contact() {
    const UserCon = useContext(VisitContext)

    const sendEmail = e =>{
        e.preventDefault();
        emailjs.sendForm('service_ucmjba9', 'template_brfuuj5', e.target, 'user_0IoZHpFI7eKGJrJYoaubf')
        .then((result) => {
            if(result.status === 200){
                e.target.reset()
                alert("sms send success")
            };
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <>
            <section className="container mx-auto p-12">
                <h3 className="text-2xl font-extrabold pb-3 text-green-900 border-b-2 border-fuchsia-600 mb-5">Contact</h3>
                <div className="grid lg:grid-cols-2 gap-2 ">
                    <div className="space-y-3">
                        <div className="bg-gray-400 mb-2 flex justify-start items-center space-x-2 p-3">
                            <div className="bg-blue-200 p-3">
                                <FaUserAlt />
                            </div>
                            <p>{UserCon.user.email}</p>
                        </div>
                    </div>
                        
                    <div className="bg-gray-400">
                        <form className="space-y-3 p-5" onSubmit={ e => sendEmail(e)}>
                            <div>
                            <label className="font-bold text-white mr-8" htmlFor="">Name</label>
                            <input className="w-2/3 border-2 border-gray-400 p-3 outline-none bg-gray-700 text-white focus:border-blue-400" type="text" name="name" />
                            </div>
                            <div>
                            <label className="font-bold text-white mr-9" htmlFor="">Email</label>
                            <input className="w-2/3 border-2 border-gray-400 p-3 outline-none bg-gray-700 text-white focus:border-blue-400" type="email" name="email" />
                            </div>
                            <div>
                            <label className="font-bold text-white mr-5" htmlFor="">Subject</label>
                            <input className="w-2/3 border-2 border-gray-400 p-3 outline-none bg-gray-700 text-white focus:border-blue-400" type="text" name="subject" />
                            </div>
                            <div className=" lg:flex items-center ">
                            <label className="font-bold text-white mr-3" htmlFor="">Message</label>
                            <textarea className="w-2/3 h-24 bg-gray-700 text-white" name="message"></textarea>
                            </div>
                            <div className="lg:w-1/2 mx-auto">
                                <button className="bg-green-400 p-2 text-white hover:bg-green-200 mx-auto place-items-center" >send message</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </section>  
        </>
    )
}
