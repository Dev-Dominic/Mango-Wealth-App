import React from 'react';
import styled from '@emotion/styled';

const HowItWorks = () => {
    return (
        <WorksWrapper>
            <p className='reasons-heading'> How our recommender works?</p>
            <WorksContainer>
                <p className="text-content"> Mango Wealth is an application that enables users to make more informed decisions when
                choosing financial products to achieve their goals.Mango Wealth works by learning relevant financial information
                about the user and using our content-based recommender system to determine the products best suited for the user
                to meet their financial goals.
                </p>
                <ul>

                    <li> Mango Wealth  Utilizes user data such as sex, age, income, expenses, etc.
                    to predict their preference for saving, loan, and investment products.
                </li>

                    <li> Savings, loans and investment products were gathered from popular banks in Jamaica.
                </li>

                    <li>
                        The data model is then updated automatically as users provide feedback on their recommendations.
                </li>

                    <li>
                        When a new user signs up, their data is run through the data model to predict their financial product preferences.
                        This process is run initially and only run again when the user updates their information or provides feedback on a financial product
                        (usually at the end of the product's time period).
                </li>
                </ul>
            </WorksContainer>
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
    padding: 10rem 5rem;
`;

const WorksContainer = styled.div`
display: flex;
padding: 2rem;
flex-direction: column;
`;