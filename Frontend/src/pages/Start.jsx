import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQMl1fKnofVDQqyfdLQ8c-3mL7q1ZER8cps')]">
        <img
          className="w-16 ml-10 mt-4"
          src="https://www.logoshape.com/wp-content/uploads/2024/09/uber-logo-svg_logoshape.png"
          alt="uber-logo"
        />
      </div>

      <div className="bg-white py-7 px-4">
        <h2 className="text-3xl font-bold">Get Started with Uber</h2>
        <Link
          to="/login"
          className="flex justify-center items-center bg-black text-white w-full rounded mt-5 py-3"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Start;
