import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(0);
  const toggleAuth = () => {
    setIsAuth((prev) => !prev);
  };

  const onLogin = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token));
  };

  const onLogout = () => {
    setToken(0);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, toggleAuth, onLogin, onLogout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
