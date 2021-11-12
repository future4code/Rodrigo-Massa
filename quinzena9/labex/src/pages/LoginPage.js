import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { login } from '../services';
import { BASE_URL } from '../constants/url';


const MainDiv = styled.div`

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const body = {
        email,
        password
    }

    const navigate = useNavigate();

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const submitLogin = (e) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/login`, body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                navigate('/admin-homepage')
            })
            .catch((err) => {
                alert('E-mail ou senha incorretos. Tente novamente.')
            })
    }

    return (
        <MainDiv>
            <Form>
                <input
                    placeholder={"E-mail"}
                    type='email'
                    value={email}
                    onChange={onChangeEmail} />
                <input
                    placeholder={"Senha"}
                    type='password'
                    value={password}
                    onChange={onChangePassword} />
                <button onClick={() => { navigate('/') }}> Voltar </button>
                <button onClick={submitLogin}> Login </button>
            </Form>
        </MainDiv>
    )
};

export default LoginPage;