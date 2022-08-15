import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { createTodo, deleteTodo, getTodoDetail, getTodoList, updateTodo } from "../../api/todo"
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



export const useGetTodoDetail = ({ todoId, axiosHeader} : ITokenAndId) => {
  const queryClient = useQueryClient()
  const {data, error} = useQuery<{data: ITodoList}, Error>(
    ['todoDetail', todoId],
    () => getTodoDetail({todoId, axiosHeader}), 
    {
      enabled: !!todoId
    }
    )
  return {
    data, error
  }
}
// useGetTodoDetail.getKey = (axiosHeader:string) => ['todoDetail', ]


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
  







