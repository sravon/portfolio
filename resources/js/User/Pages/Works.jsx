import React,{useState} from 'react'
import {FaDemocrat,FaHeart,FaLink} from "react-icons/fa";
import Modal from '../Components/Modal';

export default function Works() {
  const [modal, setmodal] = useState(false)
  const [status, changeStatus] = useState({
    activeObject: 0,
    object: [{"id":0},{"id":1},{"id":2},{"id":3}]
  })

  const toggleActive = (index) =>{
    console.log(status.activeObject)
    changeStatus({...status,activeObject:status.object[index].id})
  }


  // const toggleStyle =(index) =>{
  //   if(status.object[index] === status.activeObject)
  //   {
  //     setactivestyle({...activestyle,tabstyle:"bg-gray-400"}); 
  //   }else{
  //     setactivestyle({...activestyle,unactivepanel:"hidden"});
  //   }
  // }

    return (
    <>
      <div className="container">
        <div className="bg-gray-200 flex justify-between items-center">
        {status.object.map((elements,index) => (
          <button key={index} onClick={() =>toggleActive(index)} className={((index === status.activeObject)? "bg-gray-400" :null )+" w-1/4 p-3 hover:bg-gray-400 "}>Tab {index}</button>
        ))}
				
				</div>
        {status.object.map((elements,index) => (
          <div key={index} className={((index !== status.activeObject)? "hidden" :null )+" tabPanel text-red-900 text-center box-border bg-red"}>
            <div className="grid lg:grid-cols-3 gap-2 p-3">
              <div className="image relative h-80">
                <img className="image__img w-full h-full" src="/images/suma.jpg"/>
                <div className="image__overlay absolute w-full h-full left-0 top-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-red-100">
                  <h2 className="font-bold text-lg text-green-400">Works 01</h2>
                  <p className="p-2">Website feswef dfgdf trfy  rty ret54 ret ret ertb gvxgt te b 54t4e rt3 rete  54te  4t4e  tre t4rhfd tere rtyyrt  retreg retretg rtgre</p>
                  <div className="flex space-x-2">
                    <button onClick={() => setmodal(true)} className="show-modal bg-blue-200 p-2 flex items-center rounded">
                      <FaDemocrat />
                      <span className="text-gray-900 ml-2 font-semibold">Demo</span>
                    </button>
                    <button className="bg-blue-200 p-3 flex items-center rounded">
                      <FaHeart />
                      <span className="text-gray-900 ml-2 font-semibold">(100)</span>
                    </button>
                    <button className="bg-blue-200 p-3 flex items-center rounded">
                      <FaLink/>
                      <span className="text-gray-900 ml-2 font-semibold">Link</span>
                    </button>
                  </div>
                </div>	
              </div>
              <div className="image relative h-80">
                <img className="image__img w-full h-full" src="suma.jpg"/>
                <div className="image__overlay absolute w-full h-full left-0 top-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-red-100">
                  <h2 className="font-bold text-lg text-green-400">Works 01</h2>
                  <p className="p-2">Website feswef dfgdf trfy  rty ret54 ret ret ertb gvxgt te b 54t4e rt3 rete  54te  4t4e  tre t4rhfd tere rtyyrt  retreg retretg rtgre</p>
                  <div className="flex space-x-2">
                    <button className="show-modal bg-blue-200 p-2 flex items-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span className="text-gray-900 ml-2 font-semibold">Demo</span>
                    </button>
                    <button className="bg-blue-200 p-3 flex items-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                      </svg>
                      <span className="text-gray-900 ml-2 font-semibold">(100)</span>
                    </button>
                    <button className="bg-blue-200 p-3 flex items-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-900" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      <span className="text-gray-900 ml-2 font-semibold">Link</span>
                    </button>
                  </div>
                </div>	
              </div>
              <div className="image relative h-80">
                <img className="image__img w-full h-full" src="suma.jpg"/>
                <div className="image__overlay absolute w-full h-full left-0 top-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-red-100">
                  <h2 className="font-bold text-lg text-green-400">Works 01</h2>
                  <p className="p-2">Website feswef dfgdf trfy  rty ret54 ret ret ertb gvxgt te b 54t4e rt3 rete  54te  4t4e  tre t4rhfd tere rtyyrt  retreg retretg rtgre</p>
                  <div className="flex space-x-2">
                    <button className="show-modal bg-blue-200 p-2 flex items-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span className="text-gray-900 ml-2 font-semibold">Demo</span>
                    </button>
                    <button className="bg-blue-200 p-3 flex items-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                      </svg>
                      <span className="text-gray-900 ml-2 font-semibold">(100)</span>
                    </button>
                    <button className="bg-blue-200 p-3 flex items-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-900" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      <span className="text-gray-900 ml-2 font-semibold">Link</span>
                    </button>
                  </div>
                </div>	
              </div>
              <div className="image relative h-80">
                <img className="image__img w-full h-full" src="suma.jpg"/>
                <div className="image__overlay absolute w-full h-full left-0 top-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-red-100">
                  <h2 className="font-bold text-lg text-green-400">Works 01</h2>
                  <p className="p-2">Website feswef dfgdf trfy  rty ret54 ret ret ertb gvxgt te b 54t4e rt3 rete  54te  4t4e  tre t4rhfd tere rtyyrt  retreg retretg rtgre</p>
                  <div className="flex space-x-2">
                    <button className="show-modal bg-blue-200 p-2 flex items-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span className="text-gray-900 ml-2 font-semibold">Demo</span>
                    </button>
                    <button className="bg-blue-200 p-3 flex items-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                      </svg>
                      <span className="text-gray-900 ml-2 font-semibold">(100)</span>
                    </button>
                    <button className="bg-blue-200 p-3 flex items-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-900" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      <span className="text-gray-900 ml-2 font-semibold">Link</span>
                    </button>
                  </div>
                </div>	
              </div>
					  </div>
          </div>
        ))}
      </div>
      { (modal) ? <Modal close={setmodal}/> : null}

    </>
    )
}
