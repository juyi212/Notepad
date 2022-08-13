import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { deleteTodo} from "../../api/todo"
import { ITodoList, ITokenAndId } from "../../typings/db"

const useDeleteTodo = (
    options?: UseMutationOptions<{ data: null }, Error, ITokenAndId>
  ) => {
    return useMutation<{ data: null }, Error, ITokenAndId>(
      deleteTodo,
      options
    );
  };
  

export default useDeleteTodo;