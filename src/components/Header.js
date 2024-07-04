import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utility/firebase";
import { addUser, removeUser } from "../utility/userSlice";
import { LOGO } from "../utility/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userItems = useSelector((store) => store.user);

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

  return (
    <div className="absolute flex justify-between w-full bg-gradient-to-b from-black ">
      <img className="h-10 m-4 mix-blend " src={LOGO} alt="logo" />

      {userItems && (
        <div className="flex justify-between">
          <img
            src={userItems?.photoURL}
            alt="user photo"
            className="w-10 h-10 m-4"
          />
          <button
            className="h-10 bg-red-500 m-4 p-2 text-white font-bold rounded-sm "
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
