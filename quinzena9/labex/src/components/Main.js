import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage';
import Header from './Header'
import Footer from './Footer'


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
            <BrowserRouter>
                <Switch>
                    <Route>
                        <LoginPage />
                    </Route>

                    <Route>
                        <AdminPage />
                    </Route>


                    <Route>
                        <TripDetailsPage />
                    </Route>

                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </MainDiv>
    )
};

export default Main;