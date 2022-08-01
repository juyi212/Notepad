import styled from 'styled-components';

export const Header = styled.div`
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
`

export const Form = styled.form`
    flex-direction: column;
    & button {
        margin-top: 10px;
        float: right;
    }
`

export const Input = styled.input`
    width: 85%;
`

export const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
`