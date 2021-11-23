import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ErrorPage = () => {

    const navigate = useNavigate()
    const goToHome = () => {
        navigate.push('/')
    }

    return (
        <MainDiv>
            <button onClick={goToHome}> Ir para Home </button>
            <p> 404 </p>
        </MainDiv>
    )
};

export default ErrorPage;