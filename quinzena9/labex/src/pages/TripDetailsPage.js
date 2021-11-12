//Para admin ver viagens específicas, além de candidatos
import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TripDetailsPage = () => {
    return (
        <MainDiv>
            <div>
                <h2> Nome da Viagem </h2>
                <p> Nome: </p>
                <p> Descrição: </p>
                <p> Planeta: </p>
                <p> Duração:  </p>
                <p> Data:  </p>
            </div>
            <button> Voltar </button>
            <div>
                <h3> Candidatos Pendentes </h3>
                <p> Candidato (deve possuir 2 botões, aprovar e reprovar) </p>
            </div>
            <div>
                <h3> Candidatos Aprovados </h3>
                <p> Candidato (lista) </p>
            </div>
        </MainDiv>
    )
};

export default TripDetailsPage;