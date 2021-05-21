import React from 'react';
import styled from '@emotion/styled';
import easy from '../../assets/easy.jpg';
import checklist from '../../assets/checklist.png';
import free from '../../assets/free.png';

const LandingFour = () => {
    return (
        <LandingFourWrapper>
            <p className='white-heading'> Why use Mango Wealth? </p>

            <CardContainer>
                <Card>
                    <img src={easy} className="card-img" id="left" />
                    <p className="card-title">Easy to use and understand </p>
                </Card>

                <Card>
                    <img src={checklist} className="card-img" id="left" />
                    <p className="card-title">Transparent results you can trust</p>
                </Card>

                <Card>
                    <img src={free} className="card-img" id="left" />
                    <p className="card-title"> Mango Wealth is completely free </p>
                </Card>
            </CardContainer>
            <p className="footer-text"> © 2021 D34 Solutions. All Rights Reserved.</p>
        </LandingFourWrapper>
    );
}

export default LandingFour;

const LandingFourWrapper = styled.div`
    display: flex;
    height: 50vh;
    justify-content: center;
    flex-direction:column;
    background: var(--steps-blue);
    padding: 9rem 5rem;
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
    flex-direction:column;
    text-align: center;
 `;