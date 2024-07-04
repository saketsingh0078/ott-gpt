import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidateData from "../utility/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utility/userSlice";
import { AVATAR, BG_IMG } from "../utility/constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSigninForm, setSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleForm = () => {
    setSigninForm(!isSigninForm);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    //signup logic
    if (!isSigninForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: userName.current.value,
            photoURL: AVATAR,
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

              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }

    // sign In logic
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }
  };

  return (
    <div className=" relative">
      <Header />
      <img src={BG_IMG} alt="bg-image" className="w-[100vw] h-[100vh]" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-[400px]  bg-[rgba(0,0,0,0.6)]"
      >
        <div className="flex flex-col  pt-12 pr-16 pb-12 pl-16 rounded-md ">
          <h1 className="text-3xl font-bold  mb-6">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSigninForm && (
            <input
              ref={userName}
              className="p-3 text-lg mb-6 rounded-sm text-white bg-inherit border border-white"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="p-3 text-lg mb-6 rounded-sm text-white bg-inherit border border-white"
            type="email"
            placeholder="Email or mobile number"
          />
          <input
            ref={password}
            className="p-3 text-lg mb-5 rounded-sm text-white border border-white bg-inherit"
            type="password"
            placeholder="Password"
          />

          <p className="text-lg pb-2 text-red-600">{errorMessage}</p>

          <button
            className="bg-red-600 p-3 text-lg text-center font-semibold mb-6"
            onClick={handleButtonClick}
          >
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>

          <h1 className="text-lg text-center font-semibold mb-6">
            Forgot password?
          </h1>

          <h1 className="text-md cursor-pointer" onClick={handleForm}>
            {isSigninForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Login;
