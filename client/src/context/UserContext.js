
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [picture, setPicture] = useState('');
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const logout = async () => {
    try {
      
      setUser(null);
      setPicture('');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, picture,token,userId, setUser, setPicture,setToken,setUserId, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
