import './App.css';
import React from 'react'
import EtapaUm from './pages/Etapa1';
import EtapaDois from './pages/Etapa2';
import EtapaTres from './pages/Etapa3';
import EtapaFinal from './pages/Final';
import styled from 'styled-components';

const BotaoEnviar = styled.button`
margin-top: 10px;
`;

const BotaoEnviarDois = styled.button`
display: none;
`;

const ContainerApp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <EtapaUm />;
      case 2:
        return <EtapaDois />;
      case 3:
        return <EtapaTres />;
      case 4:
        return <EtapaFinal />;
    }
  };

  mudaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
    if (this.state.etapa === 4) {
      this.setState({ etapa: 1 })
    }
  }

  renderizaBotao = () => {
    if (this.state.etapa === 4){
      return <BotaoEnviarDois onClick={this.mudaEtapa} />
    } else {
      return <BotaoEnviar onClick={this.mudaEtapa}> Próxima Etapa </BotaoEnviar>
    }
  }

  render() {
    return (
      <ContainerApp>
        {this.renderizaEtapa()}
        {this.renderizaBotao()}
      </ContainerApp>
    )
  }
}

export default App;
