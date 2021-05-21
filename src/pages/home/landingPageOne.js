import React from 'react';
import styled from '@emotion/styled';
import Grid from '@material-ui/core/Grid';
import decor from '../../assets/landing-page-decor.svg';

const LandingWrapper = styled.div`
    background: var(--landing-background);
    display: flex;
    height: 60vh;
    padding: 10rem 10rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${'' /* margin-top: 1rem; */}
`;

const Button = styled.button`
    background: var(--secondary-blue);
    width: 224px;
    height: 45px;
    text-align: center;

    dislay: flex;
    justify-content: center;
    border: none;
    border-radius: 6px;

    font-size: 16px;
    font-weight: 700;
    color: #ffff;
`;


const LandingOne = () => {
    return (
        <LandingWrapper>
            <Grid item xs={6}>
                <ContentContainer style={{ paddingBottom: "1rem", paddingRight: "5rem" }}>
                    <p className="headings"> Finance your dreams with us </p>
                    <p className="text-content" style={{ lineHeight: "45px", marginTop: "2rem" }}>
                        Our impressive recommender and goal tracking system is the smartest way to plan, save and invest for your future.
                    </p>
                </ContentContainer>

                <Button style={{ marginTop: "5rem" }}> Learn More </Button>
            </Grid>

            <Grid item xs={6}>
                <img src={decor} alt="landing-page-decor" />
            </Grid>
        </LandingWrapper>
    );
}

export default LandingOne;