import React, { useState } from 'react';
import styled from '@emotion/styled';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

const FinancialProducts = () => {

    // const [savingsProduct, setSavingsProduct] = useState('');
    const [minimumDeposit, setMinimumDeposit] = React.useState('');
    const [additionalFees, setAdditionalFees] = React.useState('');
    const [timePeriod, setTimePeriod] = React.useState('');

    const handleMinimum = (event) => {
        setMinimumDeposit(event.target.value);
    };

    const handleAdditional = (event) => {
        setAdditionalFees(event.target.value);
    };

    const handleTime = (event) => {
        setAdditionalFees(event.target.value);
    };
    return (
        <div>
            <FormLabel component="legend">Please rank the importance of these attributes to you in a SAVING financial product</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top" >
                <div>
                    <p> Minimum Deposit</p>
                    <p> Additional Fees</p>
                    <p> Time Period </p>
                    <p> Interest Rate </p>
                    <p> Risk </p>
                </div>

                <div>
                    <Radio
                        checked={minimumDeposit === '1'}
                        onChange={handleMinimum}
                        value="1"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={minimumDeposit === '2'}
                        onChange={handleMinimum}
                        value="2"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={minimumDeposit === '3'}
                        onChange={handleMinimum}
                        value="3"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={minimumDeposit === '4'}
                        onChange={handleMinimum}
                        value="4"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={minimumDeposit === '5'}
                        onChange={handleMinimum}
                        value="5"
                        name="radio-button-demo"
                    />
                </div>
            </RadioGroup>

            <RadioGroup row aria-label="position" name="position" defaultValue="top" >
                <div>
                    <Radio
                        checked={additionalFees === '1'}
                        onChange={handleAdditional}
                        value="1"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={additionalFees === '2'}
                        onChange={handleAdditional}
                        value="2"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={additionalFees === '3'}
                        onChange={handleAdditional}
                        value="3"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={additionalFees === '4'}
                        onChange={handleAdditional}
                        value="4"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={additionalFees === '5'}
                        onChange={handleAdditional}
                        value="5"
                        name="radio-button-demo"
                    />
                </div>
            </RadioGroup>

            <RadioGroup row aria-label="position" name="position" defaultValue="top" >
                <div>
                    <Radio
                        checked={additionalFees === '1'}
                        onChange={handleAdditional}
                        value="1"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={additionalFees === '2'}
                        onChange={handleAdditional}
                        value="2"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={additionalFees === '3'}
                        onChange={handleAdditional}
                        value="3"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={additionalFees === '4'}
                        onChange={handleAdditional}
                        value="4"
                        name="radio-button-demo"
                    />
                    <Radio
                        checked={additionalFees === '5'}
                        onChange={handleAdditional}
                        value="5"
                        name="radio-button-demo"
                    />
                </div>
            </RadioGroup>
        </div>
    );
}

export default FinancialProducts;