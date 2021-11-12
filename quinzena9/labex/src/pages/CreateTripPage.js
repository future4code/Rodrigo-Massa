//Página com form para criação de viagem
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1vh;
`;

const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 2vh;
`;

const CreateTripPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/admin-homepage')
    }

    return (
        <MainDiv>
            <h3> Criar Viagem </h3>
            <Form>
                <input placeholder='Nome' />
                <input placeholder='Escolha um Planeta' />
                <input placeholder='dd/mm/aaaa' type="date" />
                <input placeholder='Descrição' />
                <input placeholder='Duração em dias' />
                <ButtonsDiv>
                    <button onClick={goBack}> Cancelar </button>
                    <button> Criar </button>
                </ButtonsDiv>
            </Form>

        </MainDiv>
    )
};

export default CreateTripPage;