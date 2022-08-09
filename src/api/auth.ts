import axios from "axios"
import { useNavigate } from "react-router-dom";

export interface EnterFormState {
    email: string;
    password: string;
}

export const LoginAPI = async (body: EnterFormState) => {
    const { data } = await axios.post(`http://localhost:8080/users/login`, body)
    return data;
}

export const SignupAPI = async (body: EnterFormState) => {
    const { data } = await axios.post(`http://localhost:8080/users/create`, body)
    console.log()
    return data;
}
