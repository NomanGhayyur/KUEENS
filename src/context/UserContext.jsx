// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to set the user data
  const setUserContext = (userData) => {
    // Add any security measures you want before storing the data
    setUser(userData);

  };

  return (
    <UserContext.Provider value={{ user, setUserContext }}>
      {children}
    </UserContext.Provider>
  );
};
