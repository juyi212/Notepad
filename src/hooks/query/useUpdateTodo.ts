import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import {updateTodo} from "../../api/todo"
import { IToDoStateWithId, ITodoList } from "../../typings/db"

const useUpdateTodo = (
    options?: UseMutationOptions<{ data: ITodoList }, Error, IToDoStateWithId>
  ) => {
    return useMutation<{ data: ITodoList }, Error, IToDoStateWithId>(
      updateTodo,
      options
    );
  };
  

export default useUpdateTodo;