import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';
import {
    Checkbox, FormLabel, FormControlLabel, FormControl,
    FormGroup, InputLabel, Select, MenuItem,
    FormHelperText
}
    from '@material-ui/core';

const Demographics = () => {
    let history = useHistory();

    const redirect = () => {
        history.push('/onboarding-financial-info')
    }

    const selectClasses = selectStyles();
    const checkboxClasses = checkboxStyles();

    const [gender, setGender] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [employment, setEmployment] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
        seventh: false,
        eighth: false
    });

    const { first, second, third, fourth, fifth, sixth, seventh, eighth } = employment;

    const handleGender = (event) => {
        setGender(event.target.value);
    };

    const handleAge = (event) => {
        setAgeGroup(event.target.value);
    };

    const handleJob = (event) => {
        setEmployment({ ...employment, [event.target.name]: event.target.checked });
    };

    return (
        <DemographicsWrapper>
            <p className="onboarding-heading"> Demographics</p>
            <DemographicsContainer>
                <FormGroup required className={selectClasses.formControl}>
                    <InputLabel className={selectClasses.formLabel}
                        style={{ marginTop: "1rem", color: "var(--primary-blue)" }}> Gender </InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={gender}
                        onChange={handleGender}
                        className={selectClasses.selectEmpty}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"female"}>Female</MenuItem>
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"none"}>Prefer not to say </MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormGroup>

                <FormGroup required className={selectClasses.formControl}>
                    <InputLabel className={selectClasses.formLabel}
                        style={{ marginTop: "1rem", color: "var(--primary-blue)" }}> Age </InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={ageGroup}
                        onChange={handleAge}
                        className={selectClasses.selectEmpty}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"18-25"}> 18-25 </MenuItem>
                        <MenuItem value={"26-35"}> 26-25 </MenuItem>
                        <MenuItem value={"36-45"}> 36-45 </MenuItem>
                        <MenuItem value={"46-55"}> 46-55 </MenuItem>
                        <MenuItem value={"56-65"}> 36-45 </MenuItem>
                        <MenuItem value={"66+"}> 66+ </MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormGroup>

                <FormControl component="fieldset" className={checkboxClasses.formControl}>
                    <FormLabel component="legend" className={checkboxClasses.formLabel}
                        style={{ color: "var(--primary-blue)" }}>
                        Which of these describes you?</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={first} onChange={handleJob} name="first" />}
                            label="Full-time employed"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={second} onChange={handleJob} name="second" />}
                            label="Part-time employed"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={third} onChange={handleJob} name="third" />}
                            label="Not employed for pay"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={fourth} onChange={handleJob} name="fourth" />}
                            label="Unemployed"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={fifth} onChange={handleJob} name="fifth" />}
                            label="Full-time student"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={sixth} onChange={handleJob} name="sixth" />}
                            label="Part-time student"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={seventh} onChange={handleJob} name="seventh" />}
                            label="Caregiver (Eg. Children, elderly)"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={eighth} onChange={handleJob} name="eighth" />}
                            label="Other"
                        />
                    </FormGroup>
                </FormControl>
            </DemographicsContainer>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}>
                <Button
                    onClick={redirect}> Continue </Button>
            </div>
        </DemographicsWrapper>

    );
}

export default Demographics;

const DemographicsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--landing-background);
    height: 70vh;
    padding: 5rem 9rem 9rem 9rem;
`;

const DemographicsContainer = styled.div`
    border: 2px solid var(--primary-blue);
    border-radius: 6px;
    box-shadow: 0 10px 6px -6px #777;
    padding: 2rem 8rem 0rem 5rem;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    width:68vw;
    height:fit-content;
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

const selectStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    formLabel: {
        fontWeight: 500,
        fontSize: 24,
    }
}));

const checkboxStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
    formLabel: {
        fontWeight: 500,
        fontSize: 24,
    }
}));