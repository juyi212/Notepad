import { useGetTodoDetail } from "../../hooks/query/todo";
import { axiosHeader } from "../../utils/auth";
import { useParams } from 'react-router-dom';



const TodoDetail = () => {
    const params = useParams();
    let todoId = params.id || ""; 
    const {data: todoDetails} = useGetTodoDetail({todoId, axiosHeader})    


    return (
        <div>
            <div>
                <div>
                    <span>제목 : </span>
                    <span>{todoDetails?.data.title}</span>
                </div>
                <div>
                    <span>내용 : </span>
                    <span>{todoDetails?.data.content}</span>
                </div>
                <div>
                    <span>생성일 : </span>
                    <span>{todoDetails?.data.createdAt}</span>
                </div>
                <div>
                    <span>수정일 : </span>
                    <span>{todoDetails?.data.updatedAt}</span>
                </div>

            </div>
        </div>
    )
}
export default TodoDetail;