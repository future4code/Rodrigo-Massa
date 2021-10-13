import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5vh;
border: 1px solid black;

`;

const H2 = styled.h2`
margin-top: 5vh;
`;

const UserList = styled.div`

`;


export default class UserRecord extends React.Component {
    render() {
        return (
            <MainDiv>
                <H2> Lista de Usuários </H2>
                <UserList>
                    {this.props.renderedUserList}
                </UserList>
            </MainDiv>
        )
    }
}