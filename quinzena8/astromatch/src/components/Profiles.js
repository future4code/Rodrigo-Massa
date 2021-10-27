import styled from 'styled-components';
import axios from 'axios';
import { chooseMatch } from '../constants/constants';

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
                    <div>
                        <h2> Não existem mais perfis na sua região. </h2>
                        <button onClick={() => props.clearMatches()}> Reset </button>
                    </div>
                ) : (
                    <div>
                        <img src={props.profile.photo}></img>
                        <p>{props.profile.name}, {props.profile.age}</p>
                        <p> {props.profile.bio} </p>
                        <span>
                            <button onClick={() => dislikeProfile(props.profile.id)}> X </button>
                            <button onClick={() => likeProfile(props.profile.id)}> M </button>
                        </span>
                    </div>
                )



            }
        </div>
    );
}

export default Profiles;