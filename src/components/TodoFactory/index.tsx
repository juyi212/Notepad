import axios from 'axios';
import useInput from "../../hooks/useInput";
import { axiosHeader } from '../../utils/auth';


interface IProps {
    fetchData: () => void;
}



const TodoFactory = ({fetchData} : IProps) => {
    const [title, onChangeTitle, setTitle] = useInput("")
    const [content, onChangeContent, setContent] = useInput("")

 
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (title && content) {            
            axios.post(`http://localhost:8080/todos`, { title, content}, {headers: {'Authorization': axiosHeader}})
            .then((res) => {
                setTitle('')
                setContent('')
                fetchData()
              }
              )
              .catch((err) => alert(`TodoList생성에 실패했습니다.`))
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>TodoList</h1>
            <input type="text" onChange={onChangeTitle} value={title}/>
            <input type="text" onChange={onChangeContent} value={content}/>
            <button type="submit">+</button>
        </form>
    )
}

export default TodoFactory;