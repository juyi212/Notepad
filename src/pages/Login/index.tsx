import AuthForm from "../../components/AuthForm";
import { Container } from "./style";


const Login = () => {
    return (
        <Container>
            <AuthForm title = {"로그인"}/>
        </Container>
    )
}

export default Login;