import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { axiosHeader } from "../../utils/auth"

interface GlobalLayoutProps{
    children: React.ReactNode
}


const Layout = ( { children }: GlobalLayoutProps) => {
    const navigate = useNavigate()
    useEffect(() => {

        if (axiosHeader === "null") {
            navigate('/login')
        } 
    }, [axiosHeader, navigate])

    return (
        <div>
            {children}
        </div>
    )
}

export default Layout;
