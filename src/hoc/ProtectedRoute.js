import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(true)
    console.log(isLogin)
    const token = localStorage.getItem("token")
    useEffect(() => {
        handleCheckToken()
    },[isLogin])
    
    const handleCheckToken = () => {
        if (!token) {
            setIsLogin(false)
            setLoading(false)
        } else {
            setIsLogin(true)
            setLoading(false)
        }
    }

    if (loading) {
        return ("Now Loading...")
    }
    return isLogin ? <Outlet /> : <Navigate to={"/SigninPage"} />
}
 
export default ProtectedRoute;