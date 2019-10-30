import React from 'react';
import logo from './logo.svg';
import './App.css';
import CookieAccept from './CookieAccept.js'
import ViewCookie from './ViewCookie.js'
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <div className="App">
      <CookieAccept />
      <CookiesProvider>
        <ViewCookie />
      </CookiesProvider>
    </div>
  );
}

export default App;
