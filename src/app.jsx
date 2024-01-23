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
import { EditControlP } from './vews/editControlP';
import QualityRoutes from './vews/QualityRoutes';
import UserRoutes from './vews/UserRoutes';
import { Footer } from './component/footer.jsx';

function App() {

    return (
        <UserContextProvider>
            <BrowserRouter>
                <Navbar />
                <div className='margin-app'>
                    <Routes>

                        <Route path="/" element={<Layout/>}>


                            <Route element ={<PublicRoutes/>}>
                            <Route path='login' element={<Login />} />
                            </Route>


                            <Route element={<PrivateRoute />}>
                                <Route element={<QualityRoutes allowedRoles={['calidad','admin']}/>}>
                                    <Route path="/add-controlp/:id" element={<NewControlP />}/>;
                                    <Route path="/update-controlp/:id" element={<EditControlP />}/>;
                                    <Route path="/controlsp" element={<ControlsP/>} />;
                                    
                                    <Route path="/prueba/" element={<Prueba />} />;
                                </Route>
                                <Route element={<QualityRoutes allowedRoles={['usuario','calidad','admin']}/>}> 
                                    <Route path="/home" element={<Home />}/>;
                                    <Route path="/petitions" element={<Petition />}/>;
                                </Route>
                            </Route>;

                            <Route path="*" element={<h1>There's nothing here: 404!</h1>} />;

                        </Route>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </UserContextProvider>
    )


}
export default injectContext(App);