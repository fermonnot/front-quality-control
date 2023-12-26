// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './styles/layout.css'
// import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
// import { Home } from './vews/home'
// import { Navbar } from './component/Navbar'
// import injectContext from "./store/appContext";
// import Login from './vews/login'
// import { Petition } from './vews/petition'
// import PrivateRoute from "./vews/PrivateRoute"
// import UserContextProvider from "../src/context/userContext"
import { Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <main className='App'>
      <Outlet />
    </main>
    
  );
}

export default Layout ;
