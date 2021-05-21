import React from 'react';
import styled from '@emotion/styled';
import Grid from '@material-ui/core/Grid';

const LandingThree = () => {
    return (
        <>
            <LandingThreeWrapper>
                <p className='white-heading'> Owning a home </p>
                <CardContainer>
                    <Card>
                        dsuigfudasgvfbudsagvfkds
                        <p> euifguiewfg</p>
                    </Card>

                    <Card> rdhgrea
                        <p>jehvfjhewvqf</p>
                    </Card>

                    <Card> rdhgrea </Card>
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
 `;