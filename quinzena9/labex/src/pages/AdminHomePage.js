//Página principal do admin, vendo viagens e com permissão para deleta-las 

import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonsDiv = styled.div`
    display: flex;
    gap: 2vw;
    margin: 5vh 0;
`;

const AdminHomePage = () => {

    const navigate = useNavigate()

    //MONTAR A VISUALIZAÇÃO DE VIAGENS

    const adminLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <MainDiv>
            <h3> Painel Administrativo </h3>
            <ButtonsDiv>
                <button onClick={() => { navigate('/') }}> Voltar </button>
                <button onClick={() => { navigate('/create-trip')}}> Criar Viagem </button>
                <button onClick={adminLogout}> Logout </button>
            </ButtonsDiv>
            
        </MainDiv>
    )
};

export default AdminHomePage;