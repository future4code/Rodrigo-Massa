import styled from 'styled-components';
import Header from './Header';
import Matchs from './Matchs';
import Button from './Button'


const ContainerDiv = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    height: 600px;
    width: 375px;
    margin: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
`;

function ContainerApp() {
    return (
        <ContainerDiv>
            <Header />
            <Matchs />
            <Button />
        </ContainerDiv>
    );
}

export default ContainerApp;
