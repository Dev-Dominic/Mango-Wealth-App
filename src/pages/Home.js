import React from 'react';
import Dashboard from '../dashboard';
import NewGoal from '../dashboard/NewGoal';
import LandingOne from './home/landingPageOne';
import LandingTwo from './home/landingPageTwo';

const Home = () => {
    return (
        <>
            <LandingOne />
            <LandingTwo />
            <Dashboard />
            <NewGoal />
        </>
    );
}

export default Home;