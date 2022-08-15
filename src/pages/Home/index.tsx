import { useCallback, useEffect } from "react";
import TodoFactory from "../../components/TodoFactory";
import { axiosHeader } from "../../utils/auth";
import {Container} from "../Login/style"
import  { AxiosError } from 'axios';
import Todo from "../../components/Todo";
import { useNavigate } from "react-router-dom";
import {useGetTodoList} from "../../hooks/query/todo";



const Home = () => {
    const navigate = useNavigate()

    // error 처리는 나중에 
    const {data:todoList, error} = useGetTodoList(axiosHeader)



    useEffect(() => {
        // const isLoggIn = useQuery(['token'], () => localStorage.getItem('token'))
        // if (localStorage.getItem('token') === null ) navigate('/login');
      }, []);


    return (
        <Container>
            <TodoFactory />
            <div style={{marginTop: "40px"}}>
                {todoList?.data.map(todo => (
                    <Todo todo={todo} />
                ))}
            </div>

        </Container>
    )
}

export default Home;