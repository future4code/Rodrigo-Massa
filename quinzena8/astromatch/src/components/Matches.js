import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getMatches, clearMatches } from '../constants/constants'
import { useEffect } from 'react/cjs/react.development';


const DivMatchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    overflow-y: scroll ;
    /* overflow: hidden; */
    max-height: 500px;
`;

const DivMatches = styled.div`
    display: flex;
    margin-bottom: 1vh;
    gap: 2vw;
    align-items: center;
`;

const Image = styled.img`
    max-height: 80px;
    max-width: 80px;
`;

const ButtonReset = styled.button`
    height: 80px;
    width: 80px;
    border-radius: 30px;
    margin-left: 87px;
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