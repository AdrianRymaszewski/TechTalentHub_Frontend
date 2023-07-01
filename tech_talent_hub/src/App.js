import React from 'react';
import jwtDecode from "jwt-decode";
import { Route, Routes } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import HomePage from './Components/HomePage/HomePage';

export const CookiesContext = React.createContext({});


const App = () => {
  const [cookies, setCookies, removeCookie] = useCookies();

  const GetCookie = (cookieName) => {
    return cookies[cookieName];
  };

  const SetCookie = (
    cookieName,
    cookieValue,
    cookiePath = null,
    options = null
  ) => {
    setCookies(cookieName, cookieValue, { path: cookiePath }, options);
  };

  const RemoveCookie = (cookieName) => {
    removeCookie(cookieName);
  };

  const DecodeToken = (token) => {
    return jwtDecode(token);
  };

  return (
    <CookiesProvider>
      <CookiesContext.Provider
      value={{
        GetCookie,
        SetCookie,
        RemoveCookie,
        DecodeToken,
      }}
      >
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </CookiesContext.Provider>
    </CookiesProvider>
  );
}
export default App;