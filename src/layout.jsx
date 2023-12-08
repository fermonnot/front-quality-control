import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/layout.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './vews/home'
import {Navbar} from './component/Navbar'
import injectContext from "./store/appContext";
import Login from './vews/login'
import { Petition } from './vews/petition'


function Layout() {
  // const [count, setCount] = useState(0)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);  
  // const handleLogin = () => {
  //   const { actions } = useContext(Context);
  //   let is_login= actions.Login(true)
  //   if (is_login) {
  //     return setIsLoggedIn(true)
  //   }else{
  //     return console.log("no va bien")
  //   }
  // }
   


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className='margin-app'>
          <Routes>

           
            <Route path="/" element={<Home />} />;
            <Route path='login' element={<Login/>} />
            <Route path="/petitions" element={<Petition />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default injectContext(Layout);
