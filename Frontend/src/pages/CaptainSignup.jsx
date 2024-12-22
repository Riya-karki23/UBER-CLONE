import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
 const [captainData,setCaptainData]=useState({});


  const submitHandler=(e)=>{
    e.preventDefault();
    setCaptainData({
        fullname:{
            firstname:firstname,
            lastname:lastname,
        },
        email:email,
        password:password
    })

    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
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
            SignUp
          </button>
        </form>
        <h2 className="flex justify-center items-center my-3">
         Already have an account? <Link to='/captain-login'><span  className="text-blue-500">Login here</span></Link>
        </h2>
        <p className="text-[12px] leading-tight mt-28">This site is protected by reCAPTCHA and <span className="underline">Google Policy</span> and <span className="underline">Terms of Service apply</span></p>
       
      </div>
    </div>
  );
}

export default CaptainSignup;
