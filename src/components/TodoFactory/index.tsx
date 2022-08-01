import axios from 'axios';
import useInput from "../../hooks/useInput";
import { axiosHeader } from '../../utils/auth';
import { Form, Header, Input, InputBox } from './style';


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
        <>
        <Header>TodoList</Header>
        <Form onSubmit={onSubmit}>
            <InputBox>
                <label>제목:&nbsp;&nbsp;</label>
                <Input type="text" onChange={onChangeTitle} value={title}/>
            </InputBox>
            <br></br>
            <InputBox>
                <label>내용: &nbsp;&nbsp;</label>
                <Input type="text" onChange={onChangeContent} value={content}/>
            </InputBox>
            <button type="submit">Todo 추가</button>
        </Form>
        </>
    )
}

export default TodoFactory;