import React from "react";
import { APP_LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between items-center px-4 absolute w-full bg-gradient-to-b from-black z-10">
      <div className="">
        <img className="w-36" src={APP_LOGO} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="flex gap-5 items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={user?.photoURL}
            alt="userIMG"
          />
          <button
            className="bg-red-700 px-4 py-2 rounded-md text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
