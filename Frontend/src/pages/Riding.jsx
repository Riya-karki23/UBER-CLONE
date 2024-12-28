import React from 'react'
import { Link } from 'react-router-dom'

function Riding() {
  return (
    <div className='h-screen'>
        <div className="h-1/2 ">
        <Link to='/home' ><div className="absolute top-4 right-4 bg-white rounded-full h-10 w-10 flex justify-center items-center">
        <i className=" text-xl ri-home-4-fill"></i>
        </div></Link>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="uber-map" />
        </div>
        <div className="h-1/2 px-3 py-2">
        
        <div className="flex justify-center flex-col ">

               <div className="flex ">
    <img className='w-36 mb-5' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
    <div className=' text-right '>
        <h3 className='text-gray-600 text-xl font-semibold uppercase'>Riya karki</h3>
        <h4 className='font-bold text-2xl -mt-1 -mb-1'>RK2308LK-08</h4>
        <p className='text-gray-600' >White Suzuki s-Presso LXI</p>
    </div>
    </div>
       
    <div className="flex items-center gap-5 p-3 border-b-2">
      <h4><i className="ri-map-pin-2-fill"></i></h4>
      <div className="">
        <h3 className='text-lg font-medium'>562/11A</h3>
        <p className='text-gray-600'>madhapur,bengaluru,Karnataka</p>
      </div>
    </div>
   
    <div className="flex items-center gap-5 p-3 ">
        <h4><i className="ri-money-rupee-circle-line"></i></h4>
        <div className="">
            <h3 className='text-lg font-medium'>₹193.70</h3>
            <p className='text-gray-600'>Cash Cash</p>
        </div>
    </div>
    </div>

    <button className='w-full rounded-lg bg-green-500 mt-2 font-semibold text-white py-2'>Make a Payment</button>

        </div>
    </div>
  )
}

export default Riding