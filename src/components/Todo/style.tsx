import styled from 'styled-components';

export const TodoBox = styled.div`
    display: flex;
    height: 50px;
    margin-top: 10px;
    font-size: 20px;
    justify-content: space-between;
    align-items: center;
    & a {
        color: black;
        text-decoration: none;
    }
    & div {
        display:flex;
        & p {
            margin-left: 10px;
        }
    }
`

export const UpdateBox = styled.div`
    height: 90px;
    align-items: center;
`

export const Input =  styled.input`
    width: 400px;
    margin-bottom: 10px;
`
export const UpdateButton = styled.div`
    float: right;
`