import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Grid from '@material-ui/core/Grid';
import userQuestions from '../../assets/user-question.svg'


const OnboardingIntro = () => {
    let history = useHistory();

    const redirect = () => {
        history.push('/onboarding-demographics')
    }
    return (
        <OnboardingWrapper>
            <p className="onboarding-heading"> User Onboarding </p>
            <OnboardingContainer>
                <Grid item xs={6}>
                    <img src={userQuestions} alt="user-question" />
                </Grid>

                <Grid item xs={6}>
                    <FormContainer>
                        <p className="landing-sub-text"> Please answer a few questions to assist with your recommendation </p>
                        <ContentContainer>
                            <p className="onboarding-subtext"> Section 1: Demographics</p>
                            <p className="onboarding-subtext"> Section 2: Financial Information</p>
                            <p className="onboarding-subtext"> Section3: Financial Product Preferences </p>
                        </ContentContainer>
                    </FormContainer>

                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button onClick={redirect}> Continue </Button>
                    </div>
                </Grid>

            </OnboardingContainer>
        </OnboardingWrapper>
    );
}

const OnboardingWrapper = styled.div`
    background: var(--login-background);
    padding: 4rem 10rem 10rem 10rem;
`;

const FormContainer = styled.div`
    display: flex;
    width: 70vh;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;
`;

const OnboardingContainer = styled.div`
    display: flex;
    height: 60vh;
    margin-top: 2rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

export default OnboardingIntro;