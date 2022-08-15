import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createTodo, deleteTodo, getTodoList, updateTodo } from "../../api/todo"
import { ITodoList, IToDoState, IToDoStateWithId, ITokenAndId } from "../../typings/db"
import { axiosHeader } from "../../utils/auth"
// import {useGetTodoList} from "./useGetTodoList"


export const useGetTodoList = (axiosHeader: string) => {  
    const {data, error} = useQuery<{ data: ITodoList[] }, Error>(
      ["todoList", axiosHeader],
      () => getTodoList(axiosHeader),
      ) 
    return {
      data, error
    }
  }
useGetTodoList.getKey = (axiosHeader: string) => ["todoList", axiosHeader];


export const useCreateTodo = () => {
    const queryClient = useQueryClient();
    const {mutate, isLoading, error} = useMutation<{data: ITodoList}, Error, IToDoState>(createTodo, {
        onSuccess: async () => {
            await queryClient.invalidateQueries(useGetTodoList.getKey(axiosHeader))
        }
    })
    return {
        mutate, isLoading, error
    }
}


export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    const {mutate, isLoading, error} = useMutation<{ data: null }, Error, ITokenAndId>(deleteTodo,{
        onSuccess: async () => {
          await queryClient.invalidateQueries(useGetTodoList.getKey(axiosHeader))
        }
    })
    return {
      mutate, isLoading, error
    }
};


export const useUpdateTodo = () => {
    const queryClient = useQueryClient();
    const {mutate, isLoading, error} = useMutation<{ data: ITodoList }, Error, IToDoStateWithId>(updateTodo, {
        onSuccess: async() => {
            await queryClient.invalidateQueries(useGetTodoList.getKey(axiosHeader))
        }
    })
    return {
        mutate, isLoading, error
    }
  };
  







