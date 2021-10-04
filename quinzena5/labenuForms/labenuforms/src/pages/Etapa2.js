import React from 'react'
import styled from 'styled-components';

const ContainerEtapaDois = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

class EtapaDois extends React.Component {
    render() {
        return (
            <ContainerEtapaDois>
                <h3> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h3>
                <ContainerEtapaDois>
                    <p> 1. Qual curso? </p>
                    <input placeholder='' />
                </ContainerEtapaDois>
                <ContainerEtapaDois>
                    <p> 2. Qual a unidade do curso? </p>
                    <input placeholder='' />
                </ContainerEtapaDois>
            </ContainerEtapaDois>
        )
    }
}

export default EtapaDois;
