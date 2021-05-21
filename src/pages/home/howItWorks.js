import React from 'react';
import styled from '@emotion/styled';

const HowItWorks = () => {
    return (
        <WorksWrapper>
            <p className='reasons-heading'> How our recommender works?</p>
        </WorksWrapper>
    );
}

export default HowItWorks;

const WorksWrapper = styled.div`
    display: flex;
    height: 50vh;
    justify-content: center;
    flex-direction:column;
    background: var(--landing-background);
    padding: 9rem 5rem;
`;

const WorksContainer = styled.div`
`;