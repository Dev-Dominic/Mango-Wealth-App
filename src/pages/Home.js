import React from 'react';
import LandingOne from './home/landingPageOne';
import LandingThree from './home/landingPageThree';
import LandingTwo from './home/landingPageTwo';
import LandingFour from './home/landingPageFour';
import HowItWorks from './home/howItWorks';

const Home = () => {
    return (
        <>
            <LandingOne />
            <LandingThree />
            <HowItWorks />
            <LandingTwo />
            <LandingFour />
        </>
    );
}

export default Home;