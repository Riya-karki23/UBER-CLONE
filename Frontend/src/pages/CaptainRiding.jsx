import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



function CaptainRiding() {


  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRideRef=useRef(null);


  useGSAP(()=>{
    if(finishRidePanel){
      gsap.to(finishRideRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
       gsap.to(finishRideRef.current,{
        transform:'translateY(100%)'
    })
  }
  },[finishRidePanel])


  return (
    <div className='h-screen'>
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
    </div>
    <div className='h-3/4'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

    </div>
    <div 
     
    className='flex flex-col h-1/4 p-3  bg-yellow-400   gap-5 items-center'>
    <div className=' py-1 w-full flex justify-center text-3xl '><i className=" text-gray-700 ri-arrow-up-wide-line"></i>
           </div>    
               <div 
              
              onClick={()=>{
                setFinishRidePanel(true)
               }}
               className="flex  px-6 w-full justify-between items-center">
                    <h4 className='text-xl font-semibold'>4 KM away</h4>
                    <button className='bg-green-500 text-lg font-semibold text-white rounded-lg px-5 py-2'>Complete Ride</button>
                    </div>

                   

                    <div ref={finishRideRef} className='fixed  w-full translate-y-full h-[80%] z-10 bottom-0  bg-white px-3 py-10 pt-12'>
            <FinishRide setFinishRidePanel={setFinishRidePanel} />
          </div>
           </div>
            </div>
  )
}

export default CaptainRiding