import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLogout() {

    const token=localStorage.getItem('token');
    const navigate=useNavigate();


    useEffect(()=>{

        if(!token){
            navigate('/login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((response)=>{
    
            if(response.status===200){
                localStorage.removeItem('token');
                navigate('/login');
            }
        })
       
    },[token,navigate])



     return (
    <div>UserLogout</div>
  )
}

export default UserLogout