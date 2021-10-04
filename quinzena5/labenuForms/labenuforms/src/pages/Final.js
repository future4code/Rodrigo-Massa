import React from 'react'
import styled from 'styled-components';

const ContainerEtapaFinal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

class EtapaFinal extends React.Component {
  render() {
    return (
      <ContainerEtapaFinal>
          <h3> O FORMULÁRIO FOI CONCLUÍDO </h3>
          <p> Muito obrigado pela sua participação! Entraremos em contato! </p>
        
      </ContainerEtapaFinal>
    )
  }
}

export default EtapaFinal;
