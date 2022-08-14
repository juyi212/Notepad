import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { AuthResponse, SignupAPI } from "../../api/auth";
import { IUserFormState } from "../../typings/db"

const useSignup = (
    options? : UseMutationOptions<AuthResponse, Error, IUserFormState>
  ) => {
    return useMutation<AuthResponse, Error, IUserFormState>(
      SignupAPI,
      options
    );
  };

export default useSignup;