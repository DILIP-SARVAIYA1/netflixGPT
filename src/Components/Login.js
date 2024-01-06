import React, { useRef, useState } from "react";
import Header from "./Header";
import { APP_BACKGROUND, PROFILE_URL } from "../utils/constants";
import { checkValidation } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMassage, setErrMassage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    const massage = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrMassage(massage);
    if (massage) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMassage(error.massage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMassage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMassage(errorCode + "-" + errorMessage);
        });
    }
  };
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
              ref={name}
              type="text"
              placeholder="Enter your name"
              className="w-full mt-4 p-4 rounded-md bg-gray-800 outline-none"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Enter your email"
            className="w-full my-4 p-4 rounded-md bg-gray-800 outline-none"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter your password"
            className="w-full p-4 rounded-md bg-gray-800 outline-none"
          />
          <p className="text-red-600 font-bold pt-4">{errMassage}</p>
          <button
            className="bg-red-700 my-8 p-4 w-full rounded-md shadow-md shadow-gray-900 hover:bg-red-600 "
            onClick={handleValidation}
          >
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
