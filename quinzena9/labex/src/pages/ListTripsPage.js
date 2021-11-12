//Página para ver todas as viagens públicas
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
// import { useProtectedPage } from "../services/hooks";
import { useEffect } from "react";
// import { getTripDetails } from "../services";
import { BASE_URL } from "../constants/url";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 2vw;
`;

const ListTripPage = () => {

    const [trips, setTrips] = useState([])

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }

    const goToTripApplication = () => {
        navigate('/trip-application')
    }

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const loadTrips = trips.map((trip) => {
        return (
            <div>
                <h2 key={trip.id}><b>{trip.name.toUpperCase()}</b></h2>
                <p>Pra onde? <b>{trip.planet}</b></p>
                <p>{trip.description}</p>
                <p>Quando? <b>{trip.date}</b></p>
                <p>Duração: <b>{trip.durationInDays} dias</b></p>
            </div>
        )
    })

    useEffect(() => {
        getTrips()
    }, [])

    return (
        <MainDiv>
            <ButtonsDiv>
                <button onClick={goBack}> Voltar </button>
                <button onClick={goToTripApplication}> Inscrever-se </button>
            </ButtonsDiv>
            {loadTrips}
        </MainDiv>
    )
};

export default ListTripPage;