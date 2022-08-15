import { useCallback, useEffect, useState } from "react";
import TodoFactory from "../../components/TodoFactory";
import { axiosHeader } from "../../utils/auth";
import {Container, TodoContent, TodoDetailContainer, TodoList} from "./style"
import Todo from "../../components/Todo";
import { Outlet, useNavigate } from "react-router-dom";
import {useGetTodoDetail, useGetTodoList} from "../../hooks/query/todo";
import TodoDetail from "../../components/TodoDetail";
import { useQueryClient } from "@tanstack/react-query";



const Home = () => {
    // error 처리는 나중에 
    const queryClient = useQueryClient()
    const {data:todoList, error} = useGetTodoList(axiosHeader)
    const [todoId, setTodoId] = useState('')
    const [todoDetailStatus, setTodoDetailStatus] = useState(false)

    const onDetailHandler = useCallback((todoId: string) => {
        setTodoId(todoId)
        setTodoDetailStatus(true)
    },[todoId,setTodoId, todoDetailStatus])


    return (
        <Container>
            <TodoFactory />
            <TodoContent>
              <TodoList>
                  {todoList?.data.map(todo => (
                      <Todo 
                        todo={todo} 
                        onDetailHandler = {onDetailHandler}
                        />
                      ))}
              </TodoList>
              <TodoDetailContainer>
              { todoDetailStatus && <TodoDetail />}
                {/* <TodoDetail /> */}
            </TodoDetailContainer>
            </TodoContent>
                
        </Container>
    )
}

export default Home;