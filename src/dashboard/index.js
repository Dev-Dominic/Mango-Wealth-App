import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const Dashboard = () => {
    return (
        <>
            <p> DASHBOARD </p>
            <DashboardWrapper>
                <ItemContainer>
                    <Card>
                        <CardContent>
                            <h2> Income </h2>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Plus Income</Button>
                        </CardActions>
                    </Card>
                </ItemContainer>
                <ItemContainer>
                    <Card>
                        <CardContent>
                            <h2> Expenses </h2>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Plus Income</Button>
                        </CardActions>
                    </Card>
                </ItemContainer>
                <ItemContainer>
                    <Card>
                        <CardContent>
                            <h2> Goal 1 </h2>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Plus goals</Button>
                        </CardActions>
                    </Card>
                </ItemContainer>


            </DashboardWrapper>
        </>
    );
}

export default Dashboard;

const DashboardWrapper = styled.div`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    `;

const ItemContainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    `;
/**
 Components:
 Income (Graph)
 Goals


 Actual income dashboard components:
 Transactions(activity)
 */