
export interface ITodoList {
    content: string;
    createdAt: string;
    id: string;
    title: string;
    updatedAt: string;
}

export interface ITodoFormState {
    title: string;
    content: string;
}

export interface IToDoState extends ITodoFormState {
    axiosHeader: string;
}

export interface IToDoStateWithId extends IToDoState{
    todoId: string; 
}

export interface ITokenAndId {
    todoId: string;
    axiosHeader: string;
}


