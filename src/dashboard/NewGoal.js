import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField, Grid } from '@material-ui/core';

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


const NewGoal = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title"> New Goal </h2>
            <TextField label="Goal Name" variant="outlined" style={{ marginTop: "1rem" }} />
            <TextField label="Is this a long term or short term goal" variant="outlined" style={{ marginTop: "1rem" }} />
            <TextField label="Length of time for goal" variant="outlined" style={{ marginTop: "1rem" }} />
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
      </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default NewGoal;