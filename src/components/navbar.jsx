import React, { useContext, useState } from "react";
import Modal from "./auth/form";
// import Modal from "./auth/sign-in";
import { SignInButton } from "./buttons";
import { AuthContext } from "../context/auth";

function AuthStatus({ user, toggleModal }) {
  if (user) {
    return (
      <>
        <li className="text-t-light">Hello, {user.email}</li>
      </>
    );
  } else {
    return <SignInButton text="Sign In" onClick={toggleModal} />;
  }
}

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className="bg-light flex justify-between items-center h-[50px] px-5 border-b">
      <h1 className="font-bold text-t-light">Soda In Space</h1>
      <ul className="flex space-x-4">
        <li className="text-t-light">Home</li>
        <li className="text-t-light">About</li>
      </ul>
      <ul className="flex space-x-4">
        <AuthStatus user={currentUser} toggleModal={toggleModal} />
      </ul>
      {showModal && <Modal toggleModal={toggleModal} />}
    </nav>
  );
}
