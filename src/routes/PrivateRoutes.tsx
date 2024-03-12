import { Navigate, Outlet } from "react-router-dom"
import { currentUser } from "../firebase/AuthService"



function PrivateRoutes() {
    const user = currentUser();
    if (!user) {
        return <Navigate to="/login" />
    } else {
        return <Outlet />
    }
}

export default PrivateRoutes;