import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(0);

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
    setIsAuth(true);
  };

  const onLogout = () => {
    setIsAuth(false);
    setToken(0);
  };

  return (
    <AuthContext.Provider value={{ isAuth, onLogin, onLogout, token }}>
      {children}
    </AuthContext.Provider>
  );
}
