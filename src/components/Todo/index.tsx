import {Content, Input, Title, TodoBox, UpdateBox, UpdateButton} from './style';
import { axiosHeader } from "../../utils/auth";
import { useState } from "react";
import useInput from "../../hooks/useInput";
import React from "react";
import { deleteTodo, updateTodo } from "../../api/todo";

interface ITodo {
    todo: any;
    fetchData: () => void;
}

const Todo = React.memo(({todo, fetchData} : ITodo) => {
    const [updateState, setUpdateState] = useState(false)
    const [title, onChangeTitle, setTitle] = useInput(todo.title)
    const [content, onChangeContent, setContent] = useInput(todo.content)

    const onUpdateTodo = () => setUpdateState((prev) => !prev)
    
    const onNoUpdate = () => setUpdateState(false)
    const todoId = todo.id
    const onUpdateCompleted = () => {
        if ((title !== todo.title) && (content !== todo.content)) {
            try {
                updateTodo({todoId, title, content, axiosHeader})
                fetchData()
                setUpdateState(false)
            }catch(error) {
                console.log(error)
            }
        }
    }

    const onDeleteTodo = () => {
        try {
            deleteTodo({todoId, axiosHeader})
            fetchData()
        }catch(error) {
            alert(error)
        }
    }


    return (
        <div>
            {updateState ?
            <UpdateBox>
            <div>
                <label>제목:&nbsp;&nbsp;</label>
                <Input type="text" onChange={onChangeTitle} value={title} placeholder="제목을 입력해주세요."/>
                <br></br>
                <label>내용: &nbsp;&nbsp;</label>
                <Input type="text" onChange={onChangeContent} value={content} />
            </div>
            <UpdateButton>
                <button onClick={onNoUpdate}>취소</button>
                <button onClick={onUpdateCompleted}>수정완료</button>
            </UpdateButton>
            </UpdateBox> :
            <TodoBox>
                <Content>
                    <Title>{todo.title}</Title>
                    <span>{todo.content}</span>
                </Content>
                <div>
                    <span onClick={onUpdateTodo}>수정</span>
                    <span onClick={onDeleteTodo}>X</span>
                </div>
            </TodoBox>
            }
        </div>
    )
})

export default Todo; 