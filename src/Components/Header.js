import React, { useEffect } from "react";
import { APP_LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptVar = useSelector((store) => store.gpt?.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleShowHideGpt = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex justify-between items-center px-4 absolute w-full bg-gradient-to-b from-black z-50">
      <div className="">
        <img className="w-36" src={APP_LOGO} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="flex gap-5 items-center">
          {gptVar && (
            <select
              name=""
              id=""
              className="m-2 py-2 px-4"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGE.map((e) => (
                <option key={e.identifier} value={e.identifier}>
                  {e.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="m-2 px-4 py-2 bg-purple-700 rounded-lg text-white"
            onClick={handleShowHideGpt}
          >
            {gptVar ? "Return Home" : "GPT search"}
          </button>
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
