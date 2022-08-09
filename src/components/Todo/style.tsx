import styled from 'styled-components';

export const TodoBox = styled.div`
    display: flex;
    height: 50px;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    & div {
        display:flex;
        & span {
            margin-left: 10px;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.span`
    font-size: 20px;
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