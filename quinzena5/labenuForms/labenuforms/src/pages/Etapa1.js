import React from 'react'
import styled from 'styled-components'

const ContainerEtapaUm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const DivOpcoes = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

class EtapaUm extends React.Component {
    render() {
        return (
            <ContainerEtapaUm>
                <h3> ETAPA 1 - DADOS GERAIS </h3>
                <ContainerEtapaUm>
                    <p> 1. Qual o seu nome? </p>
                    <input placeholder='' />
                </ContainerEtapaUm>
                <ContainerEtapaUm>
                    <p> 2. Qual a sua idade? </p>
                    <input placeholder='' />
                </ContainerEtapaUm>
                <ContainerEtapaUm>
                    <p> 3. Qual seu email? </p>
                    <input placeholder='' />
                </ContainerEtapaUm>
                <DivOpcoes>
                    <p> 4. Qual a sua escolaridade? </p>
                    {/* <input placeholder='' /> */}
                    <select >
                        <option value='medio-incompleto'> Médio Incompleto </option>
                        <option value='medio-completo'> Médio Completo </option>
                        <option value='superior-incompleto'> Superior Incompleto </option>
                        <option value='superior-completo'> Superior Completo </option>
                    </select>
                </DivOpcoes>

            </ContainerEtapaUm>
        )
    }
}

export default EtapaUm;
