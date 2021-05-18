import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';


const FinancialInformation = () => {
    let history = useHistory();

    const redirect = () => {
        history.push('/onboarding-financial-products');
    }

    const [payPeriod, setPayPeriod] = useState('');
    const [personalIncome, setPersonalIncome] = useState('');
    const [monthlyExpense, setMonthlyExpense] = useState('');
    const [riskAppetite, setRiskAppetite] = useState('');

    const handlePayPeriod = (event) => {
        setPayPeriod(event.target.value);
    };

    const handlePersonalIncome = (event) => {
        setPersonalIncome(event.target.value);
    };

    const handleMonthlyExpense = (event) => {
        setMonthlyExpense(event.target.value);
    };

    const handleRiskAppetite = (event) => {
        setRiskAppetite(event.target.value);
    };

    return (
        <div>
            <FormLabel component="legend"> What is your pay period</FormLabel>
            <RadioGroup aria-label="payPeriod" name="gender1" value={payPeriod} onChange={handlePayPeriod}>
                <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
                <FormControlLabel value="bi-Weekly" control={<Radio />} label="Bi-Weekly" />
                <FormControlLabel value="semi-monthly" control={<Radio />} label="Semi-monthly" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>

            <FormLabel component="legend"> What has been your personal income for the last year last year? </FormLabel>
            <TextField id="standard-basic" label=" " value={personalIncome} onChange={handlePersonalIncome} />

            <FormLabel component="legend"> What is your typical monthly expense? </FormLabel>
            <TextField id="standard-basic" label=" " value={monthlyExpense} onChange={handleMonthlyExpense} />

            <FormLabel component="legend"> Which of these best describes your financial risk appetite? (Low risk to high risk) </FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top" value={riskAppetite} onChange={handleRiskAppetite}>
                <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5"
                    labelPlacement="top"
                />
            </RadioGroup>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem" }}>
                <Button
                    onClick={redirect}> Continue </Button>
            </div>
        </div>
    )
}


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

export default FinancialInformation;