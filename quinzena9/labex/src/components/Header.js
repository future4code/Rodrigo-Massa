import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    /* background-color: gray; */
    margin-bottom: 10vh;
`;

const Header = () => {
    return (
        <HeaderDiv>
            <p> LabeX </p>
        </HeaderDiv>
    )
};

export default Header;