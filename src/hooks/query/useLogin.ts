import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { AuthResponse, LoginAPI } from "../../api/auth";
import { IUserFormState } from "../../typings/db"

export const useLogin = () => {
    const navigate = useNavigate()
    const {mutate, isLoading, error} = useMutation<AuthResponse, Error, IUserFormState>(LoginAPI, {
            onSuccess: (res) => {
                localStorage.setItem('token', res.token)
                navigate('/')
            }
        }) 
        return {
        mutate, isLoading, error
    }
  };

