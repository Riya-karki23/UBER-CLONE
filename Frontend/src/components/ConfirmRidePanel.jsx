import React from 'react'

function ConfirmRidePanel(props) {
  return (
    <div>
    <h4 onClick={()=>{
           props.setConfirmRidePanelOpen(false);

    }}
     className=' flex justify-center text-2xl '><i className=" text-gray-400 ri-arrow-down-wide-line"></i></h4>
    <h3 className=' font-semibold text-2xl'>Confirm your ride</h3>


    <div className="flex justify-center flex-col ">
        <div className="flex justify-center items-center my-2">
    <img className='w-44' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
    </div>
    <div className="flex items-center gap-5 p-3 border-b-2">
      <h4><i className="ri-map-pin-2-fill"></i></h4>
      <div className="">
        <h3 className='text-lg font-medium'>562/11A</h3>
        <p className='text-gray-600'>madhapur,bengaluru,Karnataka</p>
      </div>
    </div>
    <div className="flex items-center gap-5 p-3 border-b-2">
        <h4><i className="ri-square-fill"></i></h4>
        <div className="">
            <h3 className='text-lg font-medium'>Third wave coffee</h3>
            <p className='text-gray-600'>17th cross road, near state highway crossing,bengaluru,Karnataka</p>
        </div>
    </div>
    <div className="flex items-center gap-5 p-3">
        <h4><i className="ri-money-rupee-circle-line"></i></h4>
        <div className="">
            <h3 className='text-lg font-medium'>₹193.70</h3>
            <p className='text-gray-600'>Cash Cash</p>
        </div>
    </div>
    </div>

    <button
    onClick={()=>{
      props.setLookingDriverPanel(true);
      props.setConfirmRidePanelOpen(false);
    }}
    className='bg-green-600 mt-5 text-white font-semibold w-full rounded-lg py-2'>Confirm</button>
</div>
  )
}

export default ConfirmRidePanel