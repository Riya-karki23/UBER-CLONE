import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { captainDataContext } from "../context/CaptainContext";

function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

const {captain,setCaptain}=useContext(captainDataContext);
const navigate=useNavigate();


  const submitHandler=async(e)=>{
    e.preventDefault();
    const captainData=({
        fullname:{
            firstname:firstname,
            lastname:lastname,
        },
        email:email,
        password:password,

        vehicle:{
          color:vehicleColor,
          plate:vehiclePlate,
          capacity:vehicleCapacity,
          vehicleType:vehicleType

        }
    })

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);

    if(response.status===201){
      const data=response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token);
      
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }
  return (
    <div className="relative h-screen">
      <div className="">
        <img
          className="w-16 ml-8 pt-5"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="uber-logo"
        />
      </div>
      <div className="mx-8 ">
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
          <h3 className="font-bold text-zinc-900">Vehicle information</h3>
          <div className="flex gap-4">
  <input
    required
    value={vehicleColor}
    onChange={(e) => setVehicleColor(e.target.value)}
    className="bg-[#eeeeee] w-1/2 py-2 px-3 rounded my-3"
    type="text"
    placeholder="Vehicle color"
  />
  <input
    required
    value={vehiclePlate}
    onChange={(e) => setVehiclePlate(e.target.value)}
    className="bg-[#eeeeee] w-1/2 py-2 px-3 rounded my-3"
    type="text"
    placeholder="Vehicle plate"
  />
</div>

<div className="flex gap-4">
  <input
    required
    value={vehicleCapacity}
    onChange={(e) => setVehicleCapacity(e.target.value)}
    className="bg-[#eeeeee] w-1/2 py-2 px-3 rounded my-3"
    type="text"
    placeholder="Vehicle capacity"
  />
  <select
    required
    value={vehicleType}
    onChange={(e) => setVehicleType(e.target.value)}
    className="bg-[#eeeeee] w-1/2 py-2 px-3 rounded my-3"
  >
    <option value="" disabled>Select Vehicle Type</option>
    <option value="car">Car</option>
    <option value="auto">Auto</option>
    <option value="Motorcycle">Motorcycle</option>
  </select>
</div>

          {/* ---------------------------------------------------------------------------------submit button */}
          <button className=" mt-7 font-bold w-full py-2 rounded  bg-black text-white">
            Create account
          </button>
        </form>
        <h2 className="flex justify-center items-center my-3">
         Already have an account? <Link to='/captain-login'><span  className="text-blue-500">Login here</span></Link>
        </h2>
        <p className="text-[12px] leading-tight absolute bottom-2">This site is protected by reCAPTCHA and <span className="underline">Google Policy</span> and <span className="underline">Terms of Service apply</span></p>
       
      </div>
    </div>
  );
}

export default CaptainSignup;
