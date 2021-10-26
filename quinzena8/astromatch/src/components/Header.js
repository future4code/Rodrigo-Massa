import styled from 'styled-components';


const HeaderDiv = styled.div`
    display: flex;
    border: 1px solid red;
    height: 45px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 0px 15px;
    justify-content: space-between;
    align-items: center;
`;

function Header() {
    return (
        <HeaderDiv>
            <button> Matchs </button>
            <h3> AstroMatch </h3>
            <button> Matchs </button>

        </HeaderDiv>
    );
}

export default Header;
