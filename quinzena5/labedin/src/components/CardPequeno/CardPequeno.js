import React from 'react';
import styled from 'styled-components'

const ContainerPrimario = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    height: auto;
`

const ContainerSecundario = styled.div`
display: flex;
align-items: center;
padding-right: 250px;
`

const Imagens = styled.img`
    width: 40px;
    margin-right: 10px;
`

const Titulo = styled.h4 `
    padding-right: 5px;
`

function CardPequeno(props) {
    return (
        <ContainerPrimario className="smallcard-container">
            <Imagens src={props.imagem} alt="" />
            <ContainerSecundario>
                <Titulo>{props.nome}</Titulo>
                <p> {props.contato} </p>
            </ContainerSecundario>
        </ContainerPrimario>
    )
}

export default CardPequeno;