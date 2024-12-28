import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { captainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom';

function CaptainProtectWrapper({children}) {

    const token=localStorage.getItem('token');
    const navigate=useNavigate();

    const {captain,setCaptain}=useContext(captainDataContext);
    const[isLoading,setIsLoading]=useState(true);

useEffect(()=>{
    if(!token){
        navigate('/captain-login')
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(response=>{
        if(response.status===201){
            setCaptain(response.data.captain);
            setIsLoading(false);
        }
    }).catch(err=>{
        console.log(err);
        navigate('/captain-login');
    })

   

},[token,navigate])

if(isLoading){
    return(
        <div>Loading.....</div>
    )
}

  return (
   <>
   
   {children}
   </>
  )
}

export default CaptainProtectWrapper