import React from 'react';
import styled from '@emotion/styled';
import Grid from '@material-ui/core/Grid';
import ownHome from '../../assets/home-ownership.png';
import tuition from '../../assets/scholarship.png';
import loan from '../../assets/loan.png';

const LandingThree = () => {
    return (
        <>
            <LandingThreeWrapper>
                <p className='white-heading'> Plan your financial future </p>
                <CardContainer>
                    <Card>
                        <img src={ownHome} className="card-img" />
                        <p className="card-title"> Owning a home </p>
                    </Card>

                    <Card>
                        <img src={tuition} className="card-img" />
                        <p className="card-title"> Saving for tuition</p>
                    </Card>

                    <Card>
                        <img src={loan} className="card-img" />
                        <p className="card-title"> Loan payment tracking </p>
                    </Card>
                </CardContainer>
            </LandingThreeWrapper>
        </>
    );
}

export default LandingThree;


const LandingThreeWrapper = styled.div`
    background: var(--secondary-blue);
    display: flex;
    height: 50vh;
    justify-content: center;
    flex-direction:column;
    padding: 6rem 5rem;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
 `;

const Card = styled.div`
    margin: 2rem;
    background: #fff;
    border: none;
    border-radius: 6px;
    width: 400px;
    padding: 3rem;
    display:flex;
    justify-content:center;
    ${'' /* flex-direction:column; */}
 `;