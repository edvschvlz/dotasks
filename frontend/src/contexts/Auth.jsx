import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const storageUser = localStorage.getItem('user');
    const storageToken = localStorage.getItem('token');

    if (storageUser && storageToken) {
      setUser(storageUser);
      setToken(storageToken);
    } else {
      Logout();
    }
  }, []);

  const Login = async (auth) => {
    return await axios({
      method: 'post',
      url: 'http://localhost:5000/users/auth',
      data: auth,
    })
      .then((response) => {
        const { access_token } = response.data;

        const data = jwt_decode(access_token);

        localStorage.setItem('token', access_token);
        localStorage.setItem('user', JSON.stringify(data));

        setUser(data);
        setToken(access_token);

        return true;
      })
      .catch(() => {
        return false;
      });
  };

  const Logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ signed: !!token, user, token, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
