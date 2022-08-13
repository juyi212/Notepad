import { useCallback, useEffect, useState } from "react";
import TodoFactory from "../../components/TodoFactory";
import { axiosHeader } from "../../utils/auth";
import {Container} from "../Login/style"
import axios, { Axios, AxiosError } from 'axios';
import { ITodoList } from "../../typings/db";
import Todo from "../../components/Todo";
import { useNavigate } from "react-router-dom";
import useGetTodoList from "../../hooks/query/useGetTodoList";


const Home = () => {
    const navigate = useNavigate()

    // error 처리는 나중에 
    const {data:todoList, error} = useGetTodoList(axiosHeader)

    const fetchData = useCallback(async() => {
        try {
            // const todoList = await getTodoList(axiosHeader)
            // setTodoList(todoList.data)
        } catch(error) {
            if (error instanceof AxiosError){
                alert(error)
            }
        }
    }, [todoList])



    useEffect(() => {
        if (localStorage.getItem('token') === null ) navigate('/login');
      }, []);


    return (
        <Container>
            <TodoFactory fetchData ={fetchData}/>
            <div style={{marginTop: "40px"}}>
                {todoList?.data.map(todo => (
                    <Todo todo={todo} fetchData= {fetchData}/>
                ))}
            </div>

        </Container>
    )
}

export default Home;