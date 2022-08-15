import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"


const Layout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const header = localStorage.getItem('token') ?? "null"
        if (header === "null") {
            navigate('/login')
        } 
    }, [navigate])

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Layout;
