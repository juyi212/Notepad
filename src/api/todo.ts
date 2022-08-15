import axios from "axios"
import { IToDoStateWithId,ITokenAndId, ITodoList, IToDoState } from "../typings/db";
import { axiosHeader } from "../utils/auth";



export const getTodoList = async (axiosHeader : string):Promise<{data: ITodoList[]}> => {
                                  const { data } = await axios.get(
                                    `http://localhost:8080/todos`, 
                                    {
                                      headers: {
                                        'Authorization': axiosHeader
                                      }
                                    })
    return data;
}


export const getTodoDetail = async({
                                    todoId, axiosHeader
                                    }: ITokenAndId): Promise<{data: ITodoList}> => {
                                      console.log(todoId)
                                  const {data} = await axios.get(
                                    `http://localhost:8080/todos/${todoId}`,
                                    {
                                      headers: {
                                        'Authorization': axiosHeader
                                      }
                                    }
                                    )
    return data;
}

export const createTodo = async ({ 
                                  title, content, axiosHeader
                                  }: IToDoState): Promise<{ data: ITodoList }> => {
                                  const data  = axios.post(
                                    `http://localhost:8080/todos`, 
                                    { title, content}, 
                                    {
                                      headers: {
                                        'Authorization': axiosHeader
                                      }
                                    }
                                    )
    return data;
}


export const deleteTodo = async ({ 
                            todoId, axiosHeader
                            }: ITokenAndId): Promise<{ data: null }> => {
                            const data  = axios.delete(
                              `http://localhost:8080/todos/${todoId}`, 
                              {
                                headers: {
                                  'Authorization': axiosHeader
                                }
                              }
                              )
  return data;
}

export const updateTodo = async ({ 
                            todoId, title, content, axiosHeader
                          }: IToDoStateWithId): Promise<{ data: ITodoList }> => {
                          const data  = axios.put(
                            `http://localhost:8080/todos/${todoId}`, 
                            {title, content}, 
                            {
                              headers: {
                                'Authorization': axiosHeader
                              }
                            }
                            )
return data;
}


