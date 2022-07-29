import { Box, Button, Form, Input, Label, Error } from "./style";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AuthForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailMessage, setEmailMessage] = useState('')
    const [PasswordMessage, setPasswordMessage] = useState('')

    const onChangeEmail = (e: { target: { value: string; }; }) => {
      const emailRegex =  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      setEmail(e.target.value)
      if (!emailRegex.test(e.target.value)){
        setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요.')
      }else {
        setEmailMessage(' ')
      }
    }

    const onChangePassword = (e: { target: { value: string; };}) => {
      setPassword(e.target.value)
      if (e.target.value.length < 8) {
        setPasswordMessage('비밀번호 8자 이상 입력해주세요.')
      } else {
        setPasswordMessage(' ')
      }

    }
    const onSubmit = (e: any) => {
      e.preventDefault()
      if (email && password){
        axios.post(`http://localhost:8080/users/login`, {email, password})
        .then((res) => {
          if(res.data.token){
            localStorage.setItem('token', res.data.token)
            navigate('/')
          }
        }
        )
        .catch((err) => alert("로그인에 실패했습니다."))
      }
    }

    return (
        <Box>
            <Form onSubmit={onSubmit}>
                <Label>환영합니다!</Label> 
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  onChange = {onChangeEmail}
                  placeholder='이메일'/>
                {emailMessage && <Error>{emailMessage}</Error>}
                <Input 
                  type="password" 
                  id="password"
                  name="password"
                  onChange = {onChangePassword}
                  placeholder='비밀번호'/>
                {PasswordMessage && <Error>{PasswordMessage}</Error>}
                <Button type="submit"> 로그인 </Button>
            </Form>
        </Box>
    )
}

export default AuthForm;