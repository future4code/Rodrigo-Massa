import './App.css';
import React from 'react';
import UserRecord from './Components/UserRecord';
import UserList from './Components/UserList';
import styled from 'styled-components';
import axios from 'axios';
// import Delete from './img/delete.png'


const AppDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* border: 1px solid red; */
`;

const DivHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* border: 1px solid black; */
`;

const Button = styled.button`
margin-left: 8vw;
`;

const DivList = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
list-style-type: none;
margin: 1vh 2vw;
padding: 0 2vw;
font-weight: bold;
height: 10vh;
border: 1px solid black;
`;


// SCRIPT

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers: {
    Authorization: "rodrigo-massa-banu"
  }
}

export default class App extends React.Component {
state = {
    userPage: true,
    userList: [],
    userName: "",
    userEmail: "",
    userIDRemoval: "",
}

//SCRIPT CADASTRO DE USUÁRIO

createUser = () => {
  const body = {
      name: this.state.userName,
      email: this.state.userEmail
  }

  axios
  .post (url, body, headers)
  .then((res) => {
    console.log(res);
    alert("Cadastro realizado com sucesso!")
    this.setState({ userName: "" });
    this.setState({ userEmail: "" });
  })
  .catch((err) => {
    console.log(err);
    alert("Falha ao cadastrar usuário!")
  });

}

onChangeName = (e) => {
  this.setState({ userName: e.target.value});
  // console.log(e.target.value)
}

onChangeEmail = (e) => {
  this.setState({ userEmail: e.target.value});
  // console.log(e.target.value)
}

//SCRIPT LISTA DE USUÁRIOS

getUsersList = () => {
  axios
    .get(url, headers)
    .then((res) => {
      this.setState ({ userList: res.data })
    })
    .catch ((err) => {
      console.log(err)
    })
}

//SCRIPT DELETAR USUÁRIO

onClickRemoveUser = (id) => {
  console.log("O id do usuário é:", id);
  this.setState({ userIDRemoval: id });
  this.deleteUser()
}

deleteUser = () => {
  axios
    .delete (`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.userIDRemoval}`, headers)
    .then ((res) => {
      alert ("Usuário removido com sucesso!");
      this.setState({ userIDRemoval: "" })
      // this.getUsersList()
    })
    .catch((err) => {
      alert ("Ops, ocorreu um erro ao deletar o usuário!")
    })
}

// TELAS

componentDidMount = () => {
  this.setState ({ userPage: true });
  this.setState ({ userIDRemoval: "" })
  this.getUsersList();
}

componentDidUpdate = () => {
  this.getUsersList();
}

changeScreen = () => {
  this.setState({ userPage: !this.state.userPage });
}

  render() {
    const renderedUserList = this.state.userList.map((user) => {
      return (
        <DivList>
          <li key={user.id}> {user.name} </li>
          <Button onClick={() => this.onClickRemoveUser(user.id)}> Deletar </Button>
        </DivList>
      ) 
    })

    if (this.state.userPage){
      return (
        <AppDiv>
          <DivHeader>
            <h1> Labenusers </h1>
            <button onClick={this.changeScreen}> Acessar Cadastros </button>
          </DivHeader>
          <UserRecord 
          createUser={this.createUser}
          onChangeName={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          />
        </AppDiv>
      )} else {
        return (
          <AppDiv>
          <DivHeader>
            <h1> Labenusers </h1>
            <button onClick={this.changeScreen}> Tela Principal </button>
          </DivHeader>
          <UserList renderedUserList={renderedUserList} />
        </AppDiv>
        )};
  }};