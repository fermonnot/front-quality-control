import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './vews/home'
import { Navbar } from './component/Navbar'
import injectContext from "./store/appContext";
import Login from './vews/login'
import { Petition } from './vews/petition'
import PrivateRoute from "./vews/PrivateRoute"
import PublicRoutes from './vews/PublicRoutes';
import UserContextProvider from "../src/context/userContext"
import RequireAuth from './context/requireAuth';
import Layout from './layout';
import Prueba from './vews/prubea';
import { ControlsP } from './vews/controslP';
import { NewControlP } from './vews/newControlP';

function App() {

    return (
        <UserContextProvider>
            <BrowserRouter>
                <Navbar />
                <div className='margin-app'>
                    <Routes>

                        <Route path="/" element={<Layout />}>


                            <Route element ={<PublicRoutes/>}>
                            <Route path='login' element={<Login />} />
                            </Route>


                            <Route element={<PrivateRoute />}>

                                <Route path="/home" element={<Home />} />;
                                <Route path="/add-controlp" element={<NewControlP />} />;
                                <Route path="/controlsp" element={<ControlsP />} />;
                                <Route path="/petitions" element={<Petition />} />
                                <Route path="/prueba/" element={<Prueba />} />

                            </Route>



                            <Route path="*" element={<h1>There's nothing here: 404!</h1>} />
                        </Route>;
                    </Routes>
                </div>
            </BrowserRouter>
        </UserContextProvider>
    )


}
export default injectContext(App);