//Form para usuário se candidatar à viagens, com form

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { BASE_URL } from "../constants/url";
import { countryOptions } from "../constants/countries";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    margin-bottom: 4vh;
`;

const ApplicationFormPage = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [applicationText, setApplicationText] = useState('')
    const [profession, setProfession] = useState('')
    const [country, setCountry] = useState('')

    const [trips, setTrips] = useState([])
    const [id, setId] = useState('')

    const body = {
        name,
        age,
        applicationText,
        profession,
        country
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    const onChangeAppText = (e) => {
        setApplicationText(e.target.value);
    }

    const onChangeProfession = (e) => {
        setProfession(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const getTrips = () => {
        axios.get(`${BASE_URL}/trips`)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getTrips()
    }, [])

    const chooseTrip = (e) => {
        setId(e.target.value)
    }

    const applyToTrip = (e) => {
        e.preventDefault()

        axios.post(`${BASE_URL}/trips/${id}/apply`, body)
            .then(() => {
                alert("Sua solicitação foi enviada!")
                navigate('/trips')
            })
            .catch((err) => console.log(err))
    }

    const showTrips = trips.map((trip) => {
        return (
            <option key={trip.id}> {trip.name} </option>
        )
    })

    return (
        <MainDiv>
            <p> Candidate-se para uma viagem </p>
            <Form>
                <select defaultValue={''} onChange={chooseTrip}>
                    <option value={''} disabled> Selecione o Destino </option>
                    {showTrips}
                </select>
                <input placeholder='Nome'
                    name='name'
                    value={name}
                    onChange={onChangeName} />
                <input placeholder='Idade'
                    name='age'
                    value={age}
                    onChange={onChangeAge}
                />
                <input placeholder='Texto de candidatura'
                    name='applicationText'
                    value={applicationText}
                    onChange={onChangeAppText}
                />
                <input placeholder='Profissão'
                    name='profession'
                    value={profession}
                    onChange={onChangeProfession}
                />
                <select placeholder='País de origem'
                    name='country'
                    value={country}
                    onChange={onChangeCountry} >
                    <option value={''} disabled> Selecione seu País </option>
                    {countryOptions.map((country) => {
                        return (
                            <option key={country}> {country} </option>
                        )
                    })}
                </select>
            </Form>
            <div>
                <button onClick={() => { navigate('/trips') }}> Cancelar </button>
                <button onClick={applyToTrip}> Enviar </button>
            </div>
        </MainDiv>
    )
};

export default ApplicationFormPage;