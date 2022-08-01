import { Link } from "react-router-dom";

interface ITodo {
    todo: any;
}

const Todo = ({todo} : ITodo) => {
    console.log(todo)
    return (
        <div>
            <Link to={`/${todo.id}`}> 
                {todo.title}
            </Link>
        </div>
    )
}

export default Todo; 