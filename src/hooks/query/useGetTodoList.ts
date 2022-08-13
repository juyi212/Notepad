import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { getTodoList } from "../../api/todo"
import { ITodoList } from "../../typings/db"

const useGetTodoList = (
        axiosHeader: string,
        options?: UseQueryOptions<{ data: ITodoList[] }, Error>   
    ) => {
        return useQuery<{ data: ITodoList[] }, Error>(
          ["todoList", axiosHeader],
          () => getTodoList(axiosHeader),
          options
        );
      }
useGetTodoList.getKey = (axiosHeader: string) => ["todoList", axiosHeader];

export default useGetTodoList;