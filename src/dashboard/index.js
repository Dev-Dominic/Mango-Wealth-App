import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/AddIcon';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import { Line } from 'react-chartjs-2';


const Dashboard = () => {
    return (
        <DashboardWrapper>
            <p className="dashboard-heading"> DASHBOARD </p>
            <DashboardContainer>
                <div style={{ display: "flex", marginBottom: "2rem" }}>
                    <div style={{ marginRight: "3rem" }}>

                        <Card>
                            <CardContent>
                                <h2 className="card-headings"> Income </h2>
                                <div style={{ width: "500px", height: "400px" }}>
                                    <Line
                                        height={400}
                                        width={400}
                                        options={{
                                            maintainAspectRatio: false,
                                        }}
                                        data={{
                                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                                            datasets: [{
                                                label: 'Amount per week ($)',
                                                data: [12, 2, 5, 8, 30],
                                                borderColor: 'rgb(254, 148, 0)',
                                            }]
                                        }}
                                    />
                                </div>

                            </CardContent>
                            <CardActions>
                                <CardActions>
                                    <Button variant="outlined" size="small">Add Income</Button>
                                </CardActions>
                            </CardActions>
                        </Card>
                    </div>


                    <Card>
                        <CardContent>
                            <h2 className="card-headings"> Expenses </h2>
                            <div style={{ width: "500px", height: "400px" }}>
                                <Line
                                    height={400}
                                    width={400}
                                    options={{
                                        maintainAspectRatio: false,
                                    }}
                                    data={{
                                        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                                        datasets: [{
                                            label: 'Amount per week ($)',
                                            data: [12, 2, 5, 8, 30],
                                            borderColor: 'rgb(75, 192, 192)',
                                        }]
                                    }}
                                />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" size="small">Add Expense</Button>
                        </CardActions>
                    </Card>
                </div>

                <div>
                    <ItemContainer>
                        <Card>
                            <CardContent>
                                <h2 className="card-headings"> First Car Progress </h2>
                                <div style={{ width: "500px", height: "400px" }}>
                                    <Line
                                        height={400}
                                        width={400}
                                        options={{
                                            maintainAspectRatio: false,
                                        }}
                                        data={{
                                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                                            datasets: [{
                                                label: 'Amount per week ($)',
                                                data: [12, 2, 5, 8, 30],
                                                borderColor: 'rgb(254, 0, 0)'
                                            }]
                                        }}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </ItemContainer>
                </div>
                <Button variant="outlined" size="small"> Add Goal </Button>
            </DashboardContainer>
        </DashboardWrapper>
    );
}

export default Dashboard;

const DashboardWrapper = styled.div`
    background: var(--main-background-blue);
    padding: 5rem;
    `;

const DashboardContainer = styled.div`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    `;

const ItemContainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    `;


const PlusBtn = styled.button`
    width: 40px;
    height: 40px;
    font-weight: 700;
    text-align: center;
    background: #ffff;
    color: var(--primary-blue)
    padding: 5px;
    border-radius: 24px;
    border: 1px solid var(--primary-blue);
 `;
/**
 Components:
 Income (Graph)
 Goals


 Actual income dashboard components:
 Transactions(activity)
 */