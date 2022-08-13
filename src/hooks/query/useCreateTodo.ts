import { useMutation } from "@tanstack/react-query"
import { createTodo, getTodoList } from "../../api/todo"
import { ITodoList, IToDoState } from "../../typings/db"

export const useCreateTodo = () => {
    return useMutation<{data: ITodoList}, Error, IToDoState>(
        createTodo
    )
}