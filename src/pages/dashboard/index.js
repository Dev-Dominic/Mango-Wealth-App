import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField, Grid } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }



    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title"> New Goal </h2>
            <TextField label="Goal Name" variant="outlined" style={{ marginTop: "1rem" }} />
            <TextField label="Goal value ($)" variant="outlined" style={{ marginTop: "1rem" }} />
            <TextField label="Length of time (Weeks)" variant="outlined" style={{ marginTop: "1rem" }} />
            <button> Submit </button>
            <button> Cancel </button>
        </div>
    );

    return (
        <DashboardWrapper>
            <p className="dashboard-heading"> DOMINIC'S  DASHBOARD </p>
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
                                    <Button variant="outlined" size="small" color="primary">Add Income</Button>
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
                                            data: [2, 11, 5, 8, 15],
                                            borderColor: 'rgb(75, 192, 192)',
                                        }]
                                    }}
                                />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" size="small" color="primary">Add Expense</Button>
                        </CardActions>
                    </Card>
                </div>

                <div style={{ display: "flex" }}>
                    <ItemContainer>
                        <Card>
                            <CardContent>
                                <a className="card-headings" href="/product-page"> First Car Progress </a>
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
                                                data: [12, 8, 2, 8, 30],
                                                borderColor: 'rgb(254, 0, 0)'
                                            }]
                                        }}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </ItemContainer>
                    <div style={{ paddingTop: "27rem", paddingLeft: "4rem" }}>
                        <Button variant="outlined" size="small" color="primary" onClick={handleOpen}> Add Goal </Button>
                    </div>
                </div>
            </DashboardContainer>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
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

/**
 Components:
 Income (Graph)
 Goals


 Actual income dashboard components:
 Transactions(activity)
 */