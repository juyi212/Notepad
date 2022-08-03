import { useCallback, useEffect, useState } from "react";
import TodoFactory from "../../components/TodoFactory";
import { axiosHeader } from "../../utils/auth";
import {Container} from "../Login/style"
import axios from 'axios';
import { ITodoList } from "../../typings/db";
import Todo from "../../components/Todo";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate()
    const [todoList, setTodoList] = useState<ITodoList[]>([])
    // todolist 받아오기 
    const fetchData = useCallback(() => {
        axios.get('http://localhost:8080/todos', {headers: {'Authorization': axiosHeader}})
        .then((res) => {
            setTodoList(res.data.data)
        })
        .catch((err) => { console.log(err)})
    }, [todoList])

    useEffect(() => {
        fetchData()
    },[])

    useEffect(() => {
        if (localStorage.getItem('token') === null ) navigate('/login');
      }, []);


    return (
        <Container>
            <TodoFactory fetchData ={fetchData}/>
            <div style={{marginTop: "40px"}}>
                {todoList?.map(todo => (
                    <Todo todo={todo} fetchData= {fetchData}/>
                ))}
            </div>

        </Container>
    )
}

export default Home;