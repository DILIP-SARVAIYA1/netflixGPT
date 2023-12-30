import React, { useState } from "react";
import Header from "./Header";
import { APP_BACKGROUND } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInUpForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="w-full">
      <Header />
      <div className="absolute">
        <img
          className="object-cover h-screen w-screen"
          src={APP_BACKGROUND}
          alt="App background"
        />
      </div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="absolute w-3/12 p-12 my-32 mx-auto right-0 left-0 bg-black text-white bg-opacity-70 rounded-lg">
          <h1 className="text-3xl mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full my-4 p-4 rounded-md bg-gray-800 outline-none"
            />
          )}

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full my-4 p-4 rounded-md bg-gray-800 outline-none"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-4 rounded-md bg-gray-800 outline-none"
          />
          <button className="bg-red-700 my-8 p-4 w-full rounded-md shadow-md shadow-gray-900 hover:bg-red-600 ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-md mt-4 cursor-pointer"
            onClick={toggleSignInUpForm}
          >
            New to Netflix? {isSignIn ? "Sign In" : "Sign Up"} up now.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
