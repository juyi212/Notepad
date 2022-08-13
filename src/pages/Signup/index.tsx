import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import { Container } from "../Login/style";


const Signup = () => {
    return (
        <Container>
            <AuthForm title = {"회원가입"}/>
            <div>
                <Link to="/login">로그인</Link>
            </div>
        </Container>
    )
}

export default Signup;