import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useGetTodoDetail } from "../../hooks/query/todo";
import { axiosHeader } from "../../utils/auth";
import { useParams } from 'react-router-dom';
import { getTodoDetail } from "../../api/todo";

// interface propsTodoDetail {
//     todoId: string;
// }


const TodoDetail = () => {
    const params = useParams();
    let todoId = params.id || ""; 
    const queryClient = useQueryClient()

    // 같은 api를 여러번 호출해서 값이 오지 않는다..
    const {data: todoDetails, error} = useGetTodoDetail({todoId, axiosHeader})    
    console.log(todoDetails?.data)

    // queryClient.invalidateQueries(useGetTodoDetail.getKey(axiosHeader))

    return (
        <div>
            <div>
                <span>제목 : {todoDetails?.data.title}</span>
            </div>
        </div>
    )
}
export default TodoDetail;