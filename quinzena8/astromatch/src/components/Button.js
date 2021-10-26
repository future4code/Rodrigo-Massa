import styled from 'styled-components';


const ButtonDiv = styled.div`
    display: flex;
    border: 1px solid red;
    height: 75px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    justify-content: space-evenly;
    align-items: center;
`;

const MatchButton = styled.button`
    border-radius: 100px;
    border: none;
    background-color: green;
    color: #fff;
    font-size: 20px;
    height: 60px;
    width: 60px;
`;

const RefuseMatchButton = styled.button`
    border-radius: 100px;
    border: none;
    background-color: red;
    color: #fff;
    font-size: 20px;
    height: 60px;
    width: 60px;
`;

function Button() {
    return (
        <ButtonDiv>
            <RefuseMatchButton> X </RefuseMatchButton>
            <MatchButton> M </MatchButton>

        </ButtonDiv>
    );
}

export default Button;
