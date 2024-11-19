import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function checkCookieValidity() {}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const signin = async (email, password) => {
    // Perform login logic here
    let res = await fetch("http://localhost:8080/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      credentials: "include", // This includes cookies in the request
    });

    if (res.status == 200) {
      let json = await res.json();
      let user = json["data"];

      localStorage.setItem("user", JSON.stringify(user));

      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const signup = async (email, password) => {
    // Perform login logic here
    let res = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      credentials: "include", // This includes cookies in the request
    });

    if (res.status == 200) {
      let json = await res.json();
      let user = json["data"];

      localStorage.setItem("user", JSON.stringify(user));

      setCurrentUser(user);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ currentUser, signin, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
