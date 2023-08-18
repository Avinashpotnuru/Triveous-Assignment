"use client";

import React, { useState } from "react";

const LoginComponent = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const { email, password } = userDetails;

  const eventHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-8 ">
        <h1 className="text-3xl font-bold uppercase mb-4">login page</h1>
        <form
          autoComplete={false}
          className="flex flex-col justify-start space-y-4  "
        >
          <label>User Email</label>
          <input
            onChange={eventHandler}
            name="email"
            value={email}
            type="email"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="enter your email"
          />
          <label>Password</label>
          <input
            name="password"
            value={password}
            type="password"
            onChange={eventHandler}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="enter you password"
          />
          <div className="flex justify-around items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
              Sign In
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
