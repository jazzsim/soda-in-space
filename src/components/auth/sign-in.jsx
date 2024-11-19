import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../../context/auth";

const SignInForm = ({ toggleModal }) => {
  const [email, setEmail] = React.useState("");
  const [validatedEmail, setValidatedEmail] = React.useState(null);
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [validatedPassword, setValidatedPassword] = React.useState(null);

  const { signin } = useContext(AuthContext);

  const validateEmail = () => {
    // Validate form data
    if (email === "") {
      setValidatedEmail(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setValidatedEmail(false);
    } else {
      return true;
    }
    return false;
  };

  const validatePassword = () => {
    if (password === "") {
      setValidatedPassword(false);
    } else if (password.length < 8 || password.length > 20) {
      setValidatedPassword(false);
    } else {
      return true;
    }
    return false;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail() || !validatePassword()) {
      return;
    }

    let loggedin = await signin(email, password);
    if (loggedin) {
      toast.success("Login successful!");
      toggleModal();
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block font-medium text-t-light">Email</label>
        <input
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setValidatedEmail(null);
          }}
          className="text-t-light mt-1 p-2 w-full border rounded-xl focus:outline-none focus:ring"
        />
        {validatedEmail == false && (
          <p className="text-red-500 text-sm mt-1">
            Please enter a valid email address
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-medium text-t-light">Password</label>
        <div className="flex items-center">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
              setValidatedPassword(null);
            }}
            className="text-t-light mt-1 p-2 w-full border rounded-xl focus:outline-none focus:ring"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-t-light ml-4"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>
        {validatedPassword == false && (
          <p className="text-red-500 text-sm mt-1">
            Password must be between 8 and 20 characters
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-semibold hover:shadow-main duration-300 text-t-light bg-main rounded-xl"
      >
        Log in
      </button>
      <div className="mt-4">
        <div className="flex items-center">
          <hr className="flex-1" />
          <span className="mx-2 text-t-light">or</span>
          <hr className="flex-1" />
        </div>
      </div>
    </form>
  );
};

export default SignInForm;

// import React, { useContext } from "react";
// import { toast } from "react-toastify";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthContext } from "../../context/auth";

// const SignInForm = ({ toggleModal }) => {
//   const [email, setEmail] = React.useState("");
//   const [validatedEmail, setValidatedEmail] = React.useState(null);
//   const [password, setPassword] = React.useState("");
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [validatedPassword, setValidatedPassword] = React.useState(null);

//   const { signin } = useContext(AuthContext);

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       toggleModal(); // Close the modal if backdrop is clicked
//     }
//   };

//   const validateEmail = () => {
//     // Validate form data
//     if (email === "") {
//       setValidatedEmail(false);
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setValidatedEmail(false);
//     } else {
//       return true;
//     }
//     return false;
//   };

//   const validatePassword = () => {
//     if (password === "") {
//       setValidatedPassword(false);
//     } else if (password.length < 8 || password.length > 20) {
//       setValidatedPassword(false);
//     } else {
//       return true;
//     }
//     return false;
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail() || !validatePassword()) {
//       return;
//     }

//     let loggedin = await signin(email, password)
//     if (loggedin) {
//       toast.success("Login successful!");
//       toggleModal();
//     } else {
//       toast.error("Invalid credentials");
//     }
//   };

//   return (
//     <div
//       onClick={handleBackdropClick}
//       className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 "
//     >
//       <div className="bg-light p-6 rounded-2xl shadow-md w-1/3">
//         <h2 className="text-t-light text-xl font-bold mb-4">
//           Log in or sign up
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block font-medium text-t-light">Email</label>
//             <input
//               name="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 setValidatedEmail(null);
//               }}
//               className="text-t-light mt-1 p-2 w-full border rounded-xl focus:outline-none focus:ring"
//             />
//             {validatedEmail == false && (
//               <p className="text-red-500 text-sm mt-1">
//                 Please enter a valid email address
//               </p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label className="block font-medium text-t-light">Password</label>
//             <div className="flex items-center">
//               <input
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 autoComplete="off"
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   setValidatedPassword(null);
//                 }}
//                 className="text-t-light mt-1 p-2 w-full border rounded-xl focus:outline-none focus:ring"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="text-t-light ml-4"
//               >
//                 {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
//               </button>
//             </div>
//             {validatedPassword == false && (
//               <p className="text-red-500 text-sm mt-1">
//                 Password must be between 8 and 20 characters
//               </p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 font-semibold hover:shadow-main duration-300 text-t-light bg-main rounded-xl"
//           >
//             Log in
//           </button>
//           <div className="mt-4">
//             <div className="flex items-center">
//               <hr className="flex-1" />
//               <span className="mx-2 text-t-light">or</span>
//               <hr className="flex-1" />
//             </div>
//           </div>
//         </form>
//         <button
//           // type="submit"
//           className="w-full mt-4 px-4 py-2 font-semibold text-t-light border-solid border-2 border-secondary rounded-xl duration-300 hover:border-secondary  hover:bg-secondary"
//         >
//           Sign up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignInForm;
