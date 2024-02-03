
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
import { Sidebar } from "./component/sidebar.jsx"
import { Navbar } from './component/Navbar.jsx';
import { Footer } from './component/footer.jsx';
import { Context } from "./store/appContext.jsx"
import React, { useContext } from 'react'

const Layout = () => {
  const { store, actions } = useContext(Context);
  console.log(store.userData,  "este esl la data")
  return (
    <>
      {/* <Navbar /> */}
      
      <main className='App d-flex'>
        {store.userData ? (<Sidebar />) : (null)}
        
        <div className="container vh-100 overflow-y-auto" >
          
          <Outlet />
              
        </div>
        
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
