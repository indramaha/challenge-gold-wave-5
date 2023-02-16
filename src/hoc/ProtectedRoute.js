import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            setIsLogin(false)
            setLoading(false)
        } else {
            setIsLogin(true)
            setLoading(false)
        }
    },[isLogin])

    if (loading) {
        return ("Now Loading...")
    }
    return isLogin ? <Outlet /> : <Navigate to={"/SigninPage"} />
}
 
export default ProtectedRoute;