import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utility/firebase";
import { addUser, removeUser } from "../utility/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utility/constants";
import { toggleGptSearchView } from "../utility/gptSlice";
import { changeLanguage } from "../utility/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userItems = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
        dispatch(removeUser());
        navigate("/");
      }
    });

    // this is unsubscribe when unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    // toggle gpt
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex justify-between w-full bg-gradient-to-b from-black z-10 ">
      <img className="h-10 m-4 " src={LOGO} alt="logo" />

      {userItems && (
        <div className="flex ">
          {showGptSearch && (
            <select
              className=" my-4 mx-2 p-2 bg-gray-900 text-white"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}

          <button
            className="h-10 bg-violet-500 my-4 mx-2 p-2 text-white font-semibold rounded-md"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>

          <img
            src={userItems?.photoURL}
            alt="user photo"
            className="w-10 h-10 mx-2 my-4"
          />
          <button
            className="h-10 bg-red-500 mx-2 my-4 p-2 text-white font-bold rounded-md "
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
