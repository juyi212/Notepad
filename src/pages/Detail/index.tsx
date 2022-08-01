import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosHeader } from "../../utils/auth";
import axios from 'axios';
import {Container} from "../Login/style"
import { ITodoList } from "../../typings/db";



const Detail = () => {
    const { id } = useParams<{ id: string;}>();
    const [todoDetail, setTodoDetail] = useState<ITodoList>()
    
    useEffect(() => {
        axios.get(`http://localhost:8080/todos/${id}`, {headers: {'Authorization': axiosHeader}})
        .then((res) => {
            setTodoDetail(res.data.data)
        })
        .catch((err) => { console.log(err)})
    }, [])
    return (
        <Container>
            {todoDetail && <>
                <div>제목 : {todoDetail.title}</div> 
                <div>내용 : {todoDetail.content}</div> 
                <div>만든 날짜 : {todoDetail.createdAt}</div> 
                <div>수정 날짜 : {todoDetail.updatedAt}</div> 
            </>}
        </Container>
    )
}

export default Detail;