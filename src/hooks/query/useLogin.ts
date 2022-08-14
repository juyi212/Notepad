import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { AuthResponse, LoginAPI } from "../../api/auth";
import { IUserFormState } from "../../typings/db"

const useLogin = (
    options? : UseMutationOptions<AuthResponse, Error, IUserFormState>
  ) => {
    return useMutation<AuthResponse, Error, IUserFormState>(
      LoginAPI,
      options
    );
  };

export default useLogin;