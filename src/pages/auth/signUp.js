import React from 'react';
import styled from '@emotion/styled';
import { TextField, Grid } from '@material-ui/core';

const FormContainer = styled.div`
    display: flex;
    width: 70vh;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;
`;

const SignUpWrapper = styled.div`
    background: var(--landing-background);
    display: flex;
    height: 60vh;
    padding: 10rem 10rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
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

const SignUp = () => {
    return (
        <SignUpWrapper>
            <Grid item xs={6}>
                <ContentContainer>
                    <p className="sub-headings"> Get the guidance you need to achieve what you deserve. </p>
                    <p> Get started here. </p>
                </ContentContainer>
            </Grid>

            <Grid item xs={6}>
                <FormContainer>
                    <TextField label="Name" variant="outlined" />
                    <TextField label="Email" variant="outlined" style={{ marginTop: "1rem" }} />
                    <TextField label="Password" variant="outlined" style={{ marginTop: "1rem" }} />
                    <TextField label="Re-type Password" variant="outlined" style={{ marginTop: "1rem" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
                        <p> Got an account?
                            <a> Sign in </a>
                        </p>
                        <Button> Submit </Button>
                    </div>
                </FormContainer>

            </Grid>
        </SignUpWrapper>
    );
}

export default SignUp;