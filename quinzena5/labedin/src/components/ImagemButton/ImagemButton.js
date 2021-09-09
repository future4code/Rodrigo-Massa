import React from 'react';
import styled from 'styled-components';

const DivBotao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

const ImagemBotao = styled.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <DivBotao className="image-button-container">
            <ImagemBotao src={props.imagem} />
            <p>{props.texto}</p>
        </DivBotao>

    )
}

export default ImagemButton;