import React from 'react'

function WaitingForDriver() {
  return (
    <div>
    <h4 onClick={()=>{
      props.setLookingDriverPanel(false);
    }}
     className=' flex justify-center text-2xl '><i className=" text-gray-400 ri-arrow-down-wide-line"></i></h4>


    <div className="flex  flex-col ">
        <div className="flex my-2 ">
    <img className='w-36 mb-5' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
    <div className=' text-right '>
        <h3 className='text-gray-600 text-xl font-semibold uppercase'>Riya karki</h3>
        <h4 className='font-bold text-2xl -mt-1 -mb-1'>RK2308LK-08</h4>
        <p className='text-gray-600' >White Suzuki s-Presso LXI</p>
        <h3 className='text-gray-600'><i class="ri-star-s-fill"></i>4.9</h3>
    </div>
    </div>
    <div className="flex items-center gap-5 p-3 mt-3 ">
      <h4><i className="ri-map-pin-2-fill"></i></h4>
      <div className="">
        <h3 className='text-lg font-medium'>562/11A</h3>
        <p className='text-gray-600'>madhapur,bengaluru,Karnataka</p>
      </div>
    </div>

    <div className="flex items-center gap-5 p-3">
        <h4><i className="ri-square-fill"></i></h4>
        <div className="">
            <h3 className='text-lg font-medium'>Third wave coffee</h3>
            <p className='text-gray-600'>17th cross road, near state highway crossing,bengaluru,Karnataka</p>
        </div>
    </div>
   
    
    </div>

</div>  

)
}

export default WaitingForDriver