import React from 'react'

function VehiclePanel(props) {
  return (
    <div>
    <h4 onClick={()=>{
      props.setVehiclePanelOpen(false);
    }}
     className=' flex justify-center pb-1 text-2xl '><i className=" text-gray-400 ri-arrow-down-wide-line"></i></h4>
    <h3 className='mb-5 font-semibold text-2xl'>Choose a vehicle</h3>


    {/* ------------------------------------------------------------------------------vehicle options */}
  <div 
  onClick={()=>{
    props.setConfirmRidePanelOpen(true)
    props.setVehiclePanelOpen(false)
  }}

  className="flex w-full mb-3 border-2 active:border-black rounded-xl p-3 items-center justify-between">
    <img className='w-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
   <div className=" w-1/2">
   <h2 className='font-medium text-base '>UberGo<span><i className="ri-user-3-fill pl-2"></i>4</span></h2>
    <h5 className='font-medium text-sm'>2 mins away</h5>
    <p className='font-normal text-xs'>Affordable, compact rides</p>
   </div>
   <h2 className='text-lg font-semibold'>₹193.20</h2>
  </div>



  <div
    onClick={()=>{
      props.setConfirmRidePanelOpen(true)
      props.setVehiclePanelOpen(false)
    }}
  className="flex w-full mb-3 border-2 active:border-black  rounded-xl p-3 items-center justify-between">
    <img className='w-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
    
   <div className=" w-1/2">
   <h2 className='font-medium text-base '>Moto<span><i className="ri-user-3-fill pl-2"></i>1</span></h2>
    <h5 className='font-medium text-sm'>3 mins away</h5>
    <p className='font-normal text-xs'>Affordable motorcycle rides</p>
   </div>
   <h2 className='text-lg font-semibold'>₹65.17</h2>
  </div>



  <div
    onClick={()=>{
      props.setConfirmRidePanelOpen(true)
      props.setVehiclePanelOpen(false)
    }}
  className="flex w-full mb-3 border-2 active:border-black  rounded-xl p-3 items-center justify-between">
    <img className='w-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
   <div className=" w-1/2">
   <h2 className='font-medium text-base '>Premier<span><i className="ri-user-3-fill pl-2"></i>4</span></h2>
    <h5 className='font-medium text-sm'>2 mins away</h5>
    <p className='font-normal text-xs'>Affordable, compact rides</p>
   </div>
   <h2 className='text-lg font-semibold'>₹193.20</h2>
  </div>
  </div>
  )
}

export default VehiclePanel