import './App.css';
import styled from 'styled-components';
import ContainerApp from './components/ContainerApp';


const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
`;

function App() {
  return (
    <MainDiv>
      <ContainerApp />
    </MainDiv>
  );
}

export default App;
