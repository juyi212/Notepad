import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import { Container } from "./style";


const Login = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        if (localStorage.getItem('token')) navigate('/');
      }, []);


    return (
        <Container>
            <AuthForm title = {"로그인"}/>
        </Container>
    )
}

export default Login;