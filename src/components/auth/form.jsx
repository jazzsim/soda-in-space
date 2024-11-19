import React, { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../../context/auth";
import SignUpForm from "./sign-up";
import SignInForm from "./sign-in";

const AuthForm = ({ toggleModal }) => {
  const [signUp, useSignUp] = useState(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal(); // Close the modal if backdrop is clicked
    }
  };

  const Form = () => {
    if (signUp) return <SignUpForm />;
    return <SignInForm />;
  };
  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 "
    >
      <div className="bg-light p-6 rounded-2xl shadow-md w-1/3">
        <h2 className="text-t-light text-xl font-bold mb-4">
          Log in or sign up
        </h2>
        <Form />
        <button
          onClick={() => useSignUp(!signUp)}
          className="w-full mt-4 px-4 py-2 font-semibold text-t-light border-solid border-2 border-secondary rounded-xl duration-300 hover:border-secondary  hover:bg-secondary"
        >
          {signUp ? "Sign In" : "Sign up"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
