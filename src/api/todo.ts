import axios from "axios"

export type ToDoData = {
    title: string;
    content: string;
    id: string;
    createAt: string;
    updatedAt: string;
  };

  
export interface TodoFormState {
    title: string;
    content: string;
}

export interface ToDoState extends TodoFormState {
    axiosHeader: string;
}

export interface IdAndToken {
    todoId: string;
    axiosHeader: string;
}

export interface ToDoStateWithId extends ToDoState{
    todoId: string; 
}



export const getTodoList = async (axiosHeader : string) => {
    const { data } = await axios.get(`http://localhost:8080/todos`, {headers: {'Authorization': axiosHeader}})
    return data;
}

export const createTodo = async ({ 
                                  title, content, axiosHeader
                                  }: ToDoState): Promise<{ data: ToDoData }> => {
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
                            }: IdAndToken): Promise<{ data: ToDoData }> => {
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
                          }: ToDoStateWithId): Promise<{ data: ToDoData }> => {
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


