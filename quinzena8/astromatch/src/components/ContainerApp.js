import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { getProfile, getMatches, postChoose, clearMatches } from '../constants/constants';
import Profiles from './Profiles'
import Matches from './Matches'


const ContainerDiv = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    height: 600px;
    width: 375px;
    margin: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
`;

const ContainerApp = () => {

    const [profile, setProfile] = useState([])
    const [matches, setMatches] = useState([])
    const [page, setPage] = useState('profiles') //profiles = lista de perfis; matches = lista que foi dado match

    const loadProfile = async () => {
        try {
            const newProfile = await getProfile()
            setProfile(newProfile)
        } catch (err) { }
    }

    const loadMatches = async () => {
        try {
            const newMatches = await getMatches()
            setMatches(newMatches)
        } catch (err) {
            alert('Ocorreu um erro ao carregar seus Matches!')
        }
    }

    useEffect(() => {
        (async () => {
            await loadProfile();
        })().catch((err) => {
        })
    }, [])

    const renderPage = () => {
        switch (page) {
            case 'profiles':
                return <Profiles
                    loadProfile={loadProfile}
                    profile={profile}
                    clearMatches={clearMatches}
                />
            case 'matches':
                return <Matches
                    matches={matches}
                    clearMatches={clearMatches}
                    loadMatches={loadMatches} />
            default:
                <Profiles />
        }
    }

    const changePage = () => {
        if (page === 'profiles') {
            setPage('matches')
        } else {
            setPage('profiles')
        }
    }

    return (
        <ContainerDiv>
            <header> Header
                <button onClick={changePage}> Matches </button>
            </header>
            <div>{renderPage()}</div>
            <footer> Footer </footer>
        </ContainerDiv>
    );
}

export default ContainerApp;
