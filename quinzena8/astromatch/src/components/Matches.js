import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getMatches, clearMatches } from '../constants/constants'
import { useEffect } from 'react/cjs/react.development';


const DivMatchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll ;
    max-height: 500px;
    scrollbar-width: none; //Esconder barra scroll no Firefox
    -ms-overflow-style: none; //Esconder barra scroll no IE e Edge
    ::-webkit-scrollbar { //Esconder barra scroll no Chrome, Safari e Opera
        display: none;
    }

`;

const DivMatches = styled.div`
    display: flex;
    margin-bottom: 1vh;
    gap: 2vw;
    align-items: center;
`;

const Image = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
`;

const ButtonReset = styled.button`
    height: 80px;
    width: 80px;
    border-radius: 50px;
    /* margin-left: 87px; */
    border: none;
    background-color: green;
    color: white;
    :hover {
        background-color: red;
    }
`;



const Matches = (props) => {

    useEffect(() => {
        (async () => {
            await props.loadMatches()
        })().catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <DivMatchesContainer>
            {props.matches.map(match => {
                return (
                    <DivMatches key={match.id}>
                        <Image alt={match.name} src={match.photo} />
                        <p> {match.name} </p>
                    </DivMatches>
                )
            })}
            <ButtonReset onClick={() => props.clearMatches()}> Reset </ButtonReset>
        </DivMatchesContainer>
    );
}

export default Matches;