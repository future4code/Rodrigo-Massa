import React from 'react';
import styled from 'styled-components';

function CardGrande(props) {
    return (
        <ContainerPrimario className="bigcard-container">
            <Imagem src={props.imagem} />
            <DivTexto>
                <Texto>{props.nome}</Texto>
                <p>{props.descricao}</p>
            </DivTexto>
        </ContainerPrimario>
    )
}

export default CardGrande;

const ContainerPrimario = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Texto = styled.h4`
    margin-bottom: 15px;
`

const DivTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`