import axios from "axios"
import { IUserFormState } from "../typings/db";

export interface AuthResponse {
    message: string;
    token: string;
  }
  

export const LoginAPI = async (body: IUserFormState): Promise <AuthResponse> => {
    const { data } = await axios.post(`http://localhost:8080/users/login`, body)
    return data;
}

export const SignupAPI = async (body: IUserFormState) => {
    try {
        const { data } = await axios.post(`http://localhost:8080/users/create`, body)
        return data;
    } catch(error) {
        if (error instanceof Error) {
            return error
        }
    }
}
