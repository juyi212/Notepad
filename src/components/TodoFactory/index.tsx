import { useCreateTodo } from '../../hooks/query/todo';
import useInput from "../../hooks/useInput";
import { axiosHeader } from '../../utils/auth';
import { Form, Header, Input, InputBox } from './style';


const TodoFactory = () => {
    const [title, onChangeTitle, setTitle] = useInput("")
    const [content, onChangeContent, setContent] = useInput("")
    // 성공했을 때, getList 업데이트 필요 
    const { mutate: createTodo, isLoading, error } = useCreateTodo()

 
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (title && content) {      
            createTodo({title, content, axiosHeader})
            setTitle('')
            setContent('')
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