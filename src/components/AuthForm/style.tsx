import styled from 'styled-components';


export const Box = styled.div `
    padding: 20px 68px;
    min-height: 500px;
    border-radius: 30px;
    border: 1px solid #808080;
`

export const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px 0 30px;
`

export const Label = styled.h1`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin: 30px 0;
  line-height: 46px;
  letter-spacing: -0.75px;
`;

export const Input = styled.input `
    width: 97%;
    height: 48px;
    border: 1px solid #bababa;
    background-color: #e3f5fd;
    font-size: 16px;
    margin : 30px 0 0 0;
    padding: 0 10px;
    border-radius: 4px;
    &:focus {
        --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
        box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
    }
`

export const Button = styled.button `
    color: #fff;
    text-align: center;
    text-decoration: none;
    background: #90d5eb;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 700;
    margin: 75px 0;
    width: 100%;
    height: 50px;
    text-align: center;
    cursor: pointer;
    border: none;
`
export const Error = styled.div`
  color: #e01e5a;
  margin-top : 5px;
  font-weight: bold;
  font-size: 15px;
`;