import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Importação de componentes
import Header from './Header'
import Footer from './Footer'

//importação das pages
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'


//CSS

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Main = () => {
    return (
        <MainDiv>
            <Header />

            <Router>
                <Routes>

                    <Route exact path='/' element={ <HomePage /> } />
                    <Route exact path='/login' element={ <LoginPage /> } />
                    <Route exact path='/admin-homepage' element={ <AdminHomePage /> } />
                    <Route exact path='/create-trip' element={ <CreateTripPage /> } />
                    <Route exact path='/trips' element={ <ListTripsPage /> } />
                    <Route exact path='/trip-application' element={ <ApplicationFormPage /> } />
                    <Route exact path='/trip-details' element={ <TripDetailsPage /> } />
                    <Route exact path='/404' element={ <ErrorPage /> } />

                </Routes>
            </Router>
            {/* <Footer /> */}
        </MainDiv>
    )
};

export default Main;