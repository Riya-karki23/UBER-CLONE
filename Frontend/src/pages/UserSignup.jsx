import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");


  const navigate=useNavigate();

  const {user,setUser}=useContext(UserDataContext);

  const submitHandler=async (e)=>{
    e.preventDefault();
   const newUser=({
        fullname:{
            firstname:firstname,
            lastname:lastname,
        },
        email:email,
        password:password
    })

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
    
    if(response.status===201){
        const data=response.data;

        setUser(data.user);
        localStorage.setItem('token',data.token);

        navigate('/home');

    }


    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  }
  return (
    <div className="relative h-screen">
      <div className="">
        <img
          className="w-16 ml-10 pt-5"
          src="https://www.logoshape.com/wp-content/uploads/2024/09/uber-logo-svg_logoshape.png"
          alt="uber-logo"
        />
      </div>
      <div className="mx-8 mt-8">
        <form onSubmit={submitHandler}>

                <h3 className="font-bold text-zinc-900">What's your name?</h3>
            <div className="flex gap-3">
            <input
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="bg-[#eeeeee] w-full py-2 px-3 rounded my-3"
            type="text"
            placeholder="First name"
          />
          <input
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="bg-[#eeeeee] w-full py-2 px-3 rounded my-3"
            type="text"
            placeholder="Last name"
          />
            </div>

            
          <h3 className="font-bold text-zinc-900">What's your email</h3>
          <div className=""></div>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] w-full py-2 px-3 rounded my-3"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="font-bold text-zinc-900">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] w-full py-2 px-3 rounded my-3"
            type="password"
            placeholder="password"
          />
          <button className=" mt-7 font-bold w-full py-2 rounded  bg-black text-white">
            Create account
          </button>
        </form>
        <h2 className="flex justify-center items-center my-3">
         Already have an account? <Link to='/login'><span  className="text-blue-500">Login here</span></Link>
        </h2>
        <p className="text-[12px] leading-tight mt-28">This site is protected by reCAPTCHA and <span className="underline">Google Policy</span> and <span className="underline">Terms of Service apply</span></p>
       
      </div>
    </div>
  );
}

export default UserSignup;
