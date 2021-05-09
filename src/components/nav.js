//style more later
import React from 'react';
import styled from '@emotion/styled';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import logo from '../assets/logo.svg';
import SignUp from '../pages/auth/signUp';

const NavBar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="static" style={{ background: "var(--primary-blue)" }}>
                <AllTabs centered value={value} onChange={handleChange}>
                    <StyledTab label="Home" />
                    <StyledTab label="About Us" />
                    <StyledTab label="Services" />
                    <StyledTab label="Contact Us" />
                    <LoginBtn> Login </LoginBtn>
                    <SignUpBtn> Sign Up </SignUpBtn>
                </AllTabs>
            </AppBar>
        </>
    );
}

export default NavBar;

const AllTabs = withStyles({
    indicator: {
        backgroundColor: '#FFFF',
    },
})(Tabs);

const StyledTab = withStyles((theme) => ({
    root: {
        fontFamily: "'Lato', sans-serif",
        color: '#fff',
        fontWeight: 700,
        fontSize: theme.typography.pxToRem(14),
        padding: theme.spacing(2),
    },
}))((props) => <Tab disableRipple {...props} />);


const LoginBtn = styled.button`
    background: transparent;
    border: 1px solid #FFF;
    border-radius: 6px;

    width: 83px;
    height: 30px;
    margin-top: 0.8rem;
    margin-left: 15rem;

    dislay: flex;
    justify-content: center;

    font-size: 15px;
    font-weight: 500;
    color: #FFFF;
`;

const SignUpBtn = styled.button`
    background: var(--secondary-blue);
    border: none;
    border-radius: 6px;

    width: 125px;
    height: 30px;
    margin-top: 0.8rem;
    margin-left: 1rem;

    dislay: flex;
    justify-content: center;

    font-size: 15px;
    font-weight: 500;
    color: #FFFF;
`;