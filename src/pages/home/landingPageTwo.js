import React from 'react';
import styled from '@emotion/styled';
import Grid from '@material-ui/core/Grid';
import decorTwo from '../../assets/landing-two-decor.svg';
import stroke from '../../assets/stroke.svg';
import { useHistory } from 'react-router-dom';

const LandingTwoWrapper = styled.div`
    background: var(--main-background-blue);
    display: flex;
    height: 60vh;
    padding: 5rem 6rem 16rem 6rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
`;

const SubContainer = styled.div`
    display: flex;
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

const LandingTwo = () => {
    let history = useHistory();

    const redirect = () => {
        history.push('/sign-up')
    }

    return (
        <LandingTwoWrapper>
            <Grid item xs={6}>
                <img src={decorTwo} />
            </Grid>
            <Grid item xs={6}>
                <ContentContainer style={{ paddingBottom: "5rem" }}>
                    <p className="headings"> Be closer to your goal in 3 simple steps</p>
                    <SubContainer>
                        <div style={{ marginRight: "5rem" }}>
                            <p className='landing-sub-num'> 01 </p>
                            <p className='landing-sub-num'> 02 </p>
                            <img src={stroke} className='landing-sub-num' style={{ marginLeft: "10px" }} />
                            <p className='landing-sub-num'> 03 </p>
                        </div>

                        <div>
                            <p className="landing-sub-text"> Create an account </p>
                            <p className="landing-sub-text"> Complete onboarding process</p>
                            <p className="landing-sub-text" style={{ marginTop: "11.1rem" }}> Receive the financial plan you need</p>
                        </div>
                    </SubContainer>
                </ContentContainer>

                <Button onClick={redirect}> Get Started </Button>

            </Grid>
        </LandingTwoWrapper>
    );
}

export default LandingTwo;