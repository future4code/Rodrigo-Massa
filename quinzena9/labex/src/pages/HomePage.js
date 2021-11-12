//HOMEPAGE, onde usuário escolherá se irá logar, ou ver viagens públicas
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonsDiv = styled.div`
    display: flex;
    gap: 5vw;
`;

function HomePage() {

    const navigate = useNavigate()

    const goToProtectedData = () => {
        const token = window.localStorage.getItem('token')
        if (token === null) {
            navigate('/login')
        } else {
            navigate('/admin-homepage')
        }
    }
    
        return (
            <MainDiv>
                <p> Home </p>
                <ButtonsDiv>
                    <button onClick={() => { navigate('/trips')}} > Viagens </button>
                    <button onClick={goToProtectedData} > Área Admin </button>
                    {/* <button onClick={() => { navigate('/login')}} > Área Admin </button> */}
                </ButtonsDiv>
            </MainDiv>
        )
};

export default HomePage;