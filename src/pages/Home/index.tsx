import { useCallback, useEffect, useState } from "react";
import TodoFactory from "../../components/TodoFactory";
import { axiosHeader } from "../../utils/auth";
import {Container} from "../Login/style"
import axios from 'axios';
import { ITodoList } from "../../typings/db";
import Todo from "../../components/Todo";


const Home = () => {
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


    return (
        <Container>
            <TodoFactory fetchData ={fetchData}/>
            <div>
                {todoList?.map(todo => (
                    <Todo todo={todo}/>
                ))}
            </div>

        </Container>
    )
}

export default Home;