import { Link } from "react-router-dom";
import {TodoBox} from './style';


interface ITodo {
    todo: any;
}

const Todo = ({todo} : ITodo) => {
    return (
        <TodoBox>
            <Link to={`/${todo.id}`}>{todo.title}</Link>
            <p>X</p>
        </TodoBox>
    )
}

export default Todo; 