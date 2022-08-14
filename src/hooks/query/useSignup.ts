import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { AuthResponse, SignupAPI } from "../../api/auth";
import { IUserFormState } from "../../typings/db"

export const useSignup = () => {
    const navigate = useNavigate()
    const {mutate, isLoading, error} = useMutation<AuthResponse, Error, IUserFormState>(SignupAPI, {
            onSuccess: (res) => {
                navigate('/login')
            }
        }) 
        return {
        mutate, isLoading, error
    }
  };