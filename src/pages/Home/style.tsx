import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto -236px;
    background-color: transparent;
    max-width: 1000px;
    &:before {
        content: "";
        height: 170px;
        display: block;
    }
`
export const TodoContent = styled.div`
    display: flex;
    padding: 20px 0;
    height: 600px;
    margin-top: 40px;
    border: 1px solid #bababa;
`

export const TodoList = styled.div`
    width: 1000px;
    margin: 0 20px;
    border: 1px solid #bababa;
`

export const TodoDetailContainer = styled.div`
    padding: 20px;
    margin: 0 20px;
    width: 100%;
    border: 1px solid #bababa;
`