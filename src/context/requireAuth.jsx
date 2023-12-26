import { Navigate, useLocation, Outlet } from "react-router";
import useAuthContext from "./authContext";

const RequireAuth = () => {
    const { auth } = useAuthContext();
    const location = useLocation();


    return (
        auth?.user
            ? <Outlet />
            : <Navigate to="/loing" state={{ from: location }} replace />

    );

}
export default RequireAuth;
