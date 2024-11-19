import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../../context/auth";

const SignUpForm = ({ toggleModal }) => {
  const [email, setEmail] = React.useState("");
  const [validatedEmail, setValidatedEmail] = React.useState(null);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [validatedPassword, setValidatedPassword] = React.useState(null);
  const [validatedConfirmPassword, setValidatedConfirmPassword] =
    React.useState(null);

  const { signup } = useContext(AuthContext);

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

  const validateConfirmPassword = () => {
    if (confirmPassword === "") {
      setValidatedConfirmPassword(false);
    } else if (confirmPassword.length < 8 || password.length > 20) {
      setValidatedConfirmPassword(false);
    } else if (confirmPassword != password) {
      setValidatedConfirmPassword(false);
    } else {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail() || !validatePassword() || !validateConfirmPassword()) {
      return;
    }
    
    let loggedin = await signup(email, password);
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
            onCopy={(e) => e.preventDefault()}
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
      <div className="mb-4">
        <label className="block font-medium text-t-light">
          Confirm Password
        </label>
        <div className="flex items-center">
          <input
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            autoComplete="off"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setValidatedConfirmPassword(null);
            }}
            className="text-t-light mt-1 p-2 w-full border rounded-xl focus:outline-none focus:ring"
          />
        </div>
        {validatedConfirmPassword == false && (
          <p className="text-red-500 text-sm mt-1">
            {confirmPassword.length > 8 && confirmPassword.length < 20
              ? "Password not match"
              : "Password must be between 8 and 20 characters"}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-semibold hover:shadow-main duration-300 text-t-light bg-main rounded-xl"
      >
        Sign Up
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

export default SignUpForm;
