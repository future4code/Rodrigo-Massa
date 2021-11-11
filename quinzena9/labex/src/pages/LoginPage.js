import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const MainDiv = styled.div`

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

const LoginPage = () => {
    return (
        <MainDiv>
            <Form>
                <input placeholder={"Nome"} />
                <input placeholder={"Senha"} />
                <button> Login </button>
            </Form>
        </MainDiv>
    )
};

export default LoginPage;