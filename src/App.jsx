import React from "react";
import Navbar from "./components/navbar.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/auth.jsx";

const App = () => {
  return (
    <>
      <AuthProvider>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar
          limit={1}
        />
        <Navbar />
      </AuthProvider>
    </>
  );
};

export default App;
