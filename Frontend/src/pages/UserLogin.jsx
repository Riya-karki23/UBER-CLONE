import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [userData,setUserData]=useState({});


  const submitHandler=(e)=>{
    e.preventDefault();
    setUserData({
        email:email,
        password:password
    })

    setEmail('');
    setPassword('');
  }
  return (
    <div>
      <div className="">
        <img
          className="w-16 ml-10 pt-5"
          src="https://www.logoshape.com/wp-content/uploads/2024/09/uber-logo-svg_logoshape.png"
          alt="uber-logo"
        />
      </div>
      <div className="mx-8 mt-8">
        <form onSubmit={submitHandler}>
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
          New here? <Link to='/signup'><span  className="text-blue-500">Create new account</span></Link>
        </h2>
        <Link
          to="/captain-login"
          className="flex justify-center items-center mt-52 font-bold rounded py-2 w-full  text-white bg-green-500"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
