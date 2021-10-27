import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getMatches, clearMatches } from '../constants/constants'
import { useEffect } from 'react/cjs/react.development';

const Matches = (props) => {

    useEffect(() => {
        (async () => {
            await props.loadMatches()
        })().catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {props.matches.map(match => {
                return (
                    <div key={match.id}>
                        <img alt={match.name} src={match.photo} />
                        <p> {match.name} </p>
                    </div>
                )
            })}
            <button onClick={() => props.clearMatches()}> Reset </button>
        </div>
    );
}

export default Matches;