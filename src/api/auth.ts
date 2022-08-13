import axios from "axios"
import { IUserFormState } from "../typings/db";

export const LoginAPI = async (body: IUserFormState) => {
    try {
        const { data } = await axios.post(`http://localhost:8080/users/login`, body)
        return data;
    } catch(error) {
        if (error instanceof Error){
            return error
        }
    }
}

export const SignupAPI = async (body: IUserFormState) => {
    const { data } = await axios.post(`http://localhost:8080/users/create`, body)
    console.log()
    return data;
}
