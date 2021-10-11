import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 20px;
border: 2px solid green;
`;


export default class UserRecord extends React.Component {

//SCRIPT




//TELAS

    render() {
        return (
            <MainDiv>
                <h2> Criar usuário </h2>
                <div>
                    <input placeholder="Nome"
                    onChange={this.props.onChangeName}
                    />
                    <input placeholder="E-mail"
                    onChange={this.props.onChangeEmail}
                    />
                    <button 
                    onClick={this.props.createUser}
                    > Criar </button>
                </div>
            </MainDiv>
        )
    }
}