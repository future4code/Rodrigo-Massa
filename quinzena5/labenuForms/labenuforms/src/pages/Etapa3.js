import React from 'react'
import styled from 'styled-components';

const ContainerEtapaTres = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

class EtapaTres extends React.Component {
    render() {
        return (
            <ContainerEtapaTres>
                <h3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h3>
                <ContainerEtapaTres>
                    <p> 1. Por que você não concluiu a graduação? </p>
                    <input placeholder='' />
                </ContainerEtapaTres>
                <ContainerEtapaTres>
                    <p> 1. Você fez algum curso complementar? </p>
                    <select >
                        <option value='nenhum'> Nenhum </option>
                        <option value='curso-tecnico'> Curso Técnico </option>
                        <option value='curso-ingles'> Curso de Inglês </option>
                    </select>
                </ContainerEtapaTres>

            </ContainerEtapaTres>
        )
    }
}

export default EtapaTres;
