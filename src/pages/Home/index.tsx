import React, { Suspense } from 'react';
import { useCallback, useEffect, useState } from "react";
import { axiosHeader } from "../../utils/auth";
import {Container, TodoContent, TodoDetailContainer, TodoList} from "./style"
import TodoFactory from '../../components/TodoFactory';
import {useGetTodoDetail, useGetTodoList} from "../../hooks/query/todo";
import TodoDetail from "../../components/TodoDetail";
import { useQueryClient } from "@tanstack/react-query";
import Spinner from '../../components/Spinner';

const Todo = React.lazy(() => import('../../components/Todo'));


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
                    <Suspense fallback={<Spinner />}>
                    {todoList?.data.map(todo => (
                        <Todo 
                            todo={todo} 
                            onDetailHandler = {onDetailHandler}
                            />
                        ))}
                    </Suspense>
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