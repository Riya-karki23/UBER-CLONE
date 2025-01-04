import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRidePanel from '../components/ConfirmRidePanel'
import WaitingForDriver from '../components/WaitingForDriver'
import LookingForDriver from '../components/LookingForDriver'
import axios from 'axios';


function Home() {

const [pickup, setPickup] = useState('')
const [destination, setDestination] = useState('')
const [panelOpen,setPanelOpen] = useState(false)
const [vehiclePanelOpen,setVehiclePanelOpen] = useState(false)
const [confirmRidePanelOpen,setConfirmRidePanelOpen] = useState(false)
const [lookingDriverPanel,setLookingDriverPanel] = useState(false)
const [pickupSuggestions,setPickupSuggestions] = useState([])
const [destinationSuggestions,setDestinationSuggestions] = useState([])
const [ activeField, setActiveField ] = useState(null)


const panelRef=useRef(null)
const panelCloseRef=useRef(null)
const vehiclePanelRef=useRef(null);
const ConfirmRidePanelRef=useRef(null);
const LookingForDriverRef=useRef(null);


const handlePickupChange=async(e)=>{
  setPickup(e.target.value)

  try {
    const response=await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,{
      params:{
        input:e.target.value
      },
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })


    setPickupSuggestions(response.data);
    console.log(response.data);

    
    
  } catch (error) {

    
  }
}



const handleDestinationChange=async(e)=>{
  setDestination(e.target.value)

  try {
    const response=await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,{
      params:{
        input:e.target.value
      },
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })


    setDestinationSuggestions(response.data);
    console.log(response.data);

  } catch (error) {

    
  }
}




const submitHandler=(e)=>{
e.preventDefault();
}

useGSAP(()=>{

  if(panelOpen){
  gsap.to(panelRef.current,{
   height:'70%',
   padding:15
  })
 gsap.to(panelCloseRef.current,{
  opacity:1
 })
  }
  else{
    gsap.to(panelRef.current,{
      height:'0%',
      padding:0
     })
      gsap.to(panelCloseRef.current,{
        opacity:0
       })
     
  }
},[panelOpen])


useGSAP(()=>{
  if(vehiclePanelOpen){
    gsap.to(vehiclePanelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(vehiclePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
},[vehiclePanelOpen])


useGSAP(()=>{
  if(confirmRidePanelOpen){
    gsap.to(ConfirmRidePanelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(ConfirmRidePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
},[confirmRidePanelOpen])


useGSAP(()=>{
  if(lookingDriverPanel){
    gsap.to(LookingForDriverRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(LookingForDriverRef.current,{
      transform:'translateY(100%)'
    })
  }
},[lookingDriverPanel])



  return (
    <div className='relative h-[100vh] w-[100vw] max-w-[375px] mx-auto overflow-hidden'>

      <img className='w-16 absolute top-5 left-5' src="../../public/img/Uber-User-Logo.wine.png" alt="uber-user-logo" />

    <div className="h-screen w-screen">
      <img className='h-screen w-screen' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
    </div>


    <div className=" flex flex-col justify-end absolute bottom-0  h-screen w-full ">
      <div className="h-[35%]  p-5 relative bg-white">
        <h5 
        ref={panelCloseRef}
        onClick={()=>{
          setPanelOpen(false)
        }}
        className='absolute right-5 text-2xl'>
          <i className="ri-arrow-down-s-line "></i></h5>
      <h4 className='text-2xl font-semibold'>Find a trip</h4>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <div className="h-16 w-1 bg-gray-900 absolute top-[45%] left-10"></div>
        <input  
        onClick={()=>{
          setPanelOpen(true)
          setActiveField('pickup')
        }}
        value={pickup}
        onChange={(e)=>{
        handlePickupChange(e)
        }}
        className='bg-[#eee] px-12 py-2 text-base w-full mt-5 rounded-lg'  type="text" placeholder='Add a pick-up location' />
        <input 
         onClick={()=>{
          setPanelOpen(true)
          setActiveField('destination')

        }}
        value={destination}
        onChange={(e)=>{
          handleDestinationChange(e)
        }} className='bg-[#eee] px-12 py-2 text-base w-full mt-3 rounded-lg' type="text" placeholder='Enter your destination' />
            <button onClick={
              ()=>{
               setVehiclePanelOpen(true);
                setPanelOpen(false);
              }
            }
            className="bg-black text-white font-semibold rounded-lg w-full mt-5 py-2 ">Find Trip</button>

      </form>
      </div>
      <div ref={panelRef} className=" bg-white h-0 ">
        <LocationSearchPanel 
         suggestions={activeField==='pickup'?pickupSuggestions:destinationSuggestions}  
         setPickup={setPickup} 
         setDestination={setDestination}
         setPanelOpen={setPanelOpen}
         activeField={activeField}
         />
         
      </div>
    </div>


{/* --------------------------------------------------------------------------------------vehicle options panel */}
<div  ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 translate-y-full">
 <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanelOpen={setConfirmRidePanelOpen}/>
</div>

{/* ----------------------------------------------------------------------------------------------confirm ride panel */}

<div  ref={ConfirmRidePanelRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 translate-y-full">
 <ConfirmRidePanel setLookingDriverPanel={setLookingDriverPanel} setConfirmRidePanelOpen={setConfirmRidePanelOpen}/>
</div>


{/* ----------------------------------------------------------------------------------------------looking for ride panel */}

<div  ref={LookingForDriverRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 translate-y-full">
  <LookingForDriver  setLookingDriverPanel={setLookingDriverPanel}/>
</div>


{/* ----------------------------------------------------------------------------------------------waiting for driver panel */}

<div  className="fixed w-full z-10 bottom-0  translate-y-full bg-white px-3 py-6 ">
  <WaitingForDriver  />
</div>
    </div>
  )
}

export default Home