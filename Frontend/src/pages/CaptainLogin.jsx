import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData,setCaptainData]=useState({});


  const submitHandler=(e)=>{
    e.preventDefault();
    setCaptainData({
        email:email,
        password:password
    })

    setEmail('');
    setPassword('');
  }

  return (
    <div className="">
      <div className="">
        <img
          className="w-16 ml-10 pt-5"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="uber-logo"
        />
      </div>
      <div className="mx-8 mt-8">
        <form onSubmit={(e)=>submitHandler(e)}>
          <h3 className="font-bold text-zinc-900">What's your email</h3>
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
            Login
          </button>
        </form>
        <h2 className="flex justify-center items-center my-3">
          Join a fleet?  <Link to ='/captain-signup'><span className="text-blue-500"> Register as a Captain</span></Link>
        </h2>
        <Link
          to="/login"
          className="flex justify-center items-center mt-52 font-bold rounded py-2 w-full  text-white bg-[#e0782e]"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
