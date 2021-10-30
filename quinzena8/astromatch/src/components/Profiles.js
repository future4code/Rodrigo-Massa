import styled from 'styled-components';
import axios from 'axios';
import { chooseMatch } from '../constants/constants';


const Image = styled.img`
    max-width: 300px;
    max-height: 300px;
`;

const DivProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DivNoMatches = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10vh;
    align-items: center;
    text-align: center;
`;

const ButtonReset = styled.button`
    height: 80px;
    width: 80px;
    border-radius: 50px;
    border: none;
    background-color: green;
    font-size: 20px;
    color: white;
    :hover {
        background-color: red;
    }
`;

const Profiles = (props) => {

    const likeProfile = async (chooseProfile) => {
        try {
            const newChoose = await chooseMatch(
                {
                    "id": chooseProfile,
                    "choice": true
                })
            props.loadProfile()
        } catch (err) {
            console.log(err)
            alert('Ocorreu um erro. Tente novamente.')
        }
    }

    const dislikeProfile = async (chooseProfile) => {
        try {
            const newChoose = await chooseMatch(
                {
                    "id": chooseProfile,
                    "choice": false
                })
            props.loadProfile()
        } catch (err) {
            console.log(err)
            alert('Ocorreu um erro. Tente novamente.')
        }
    }

    return (
        <div>
            {props.profile === null ?
                (
                    <DivNoMatches>
                        <h2> Não existem mais perfis na sua região. Tente novamente mais tarde. </h2>
                        <ButtonReset onClick={() => props.clearMatches()}> Reset </ButtonReset>
                    </DivNoMatches>
                ) : (
                    <DivProfile>
                        <Image src={props.profile.photo}></Image>
                        <p>{props.profile.name}, {props.profile.age}</p>
                        <p> {props.profile.bio} </p>
                        <span>
                            <button onClick={() => dislikeProfile(props.profile.id)}> X </button>
                            <button onClick={() => likeProfile(props.profile.id)}> M </button>
                        </span>
                    </DivProfile>
                )



            }
        </div>
    );
}

export default Profiles;