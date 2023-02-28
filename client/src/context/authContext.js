import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = () => {
    // TO DO
    setCurrentUser({
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  const logout = () => {
    // TO DO
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ login, currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
