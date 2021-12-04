import { Avatar, Button, Link, Grid, Paper, TextField, Typography, RadioGroup, FormLabel } from '@material-ui/core';
import React from 'react';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
const SignUp = () => {

    const paperStyle = { padding: '30px 20px', height: '80vh', width: 350, margin: "20px auto" }
    const avatarStyle = { backgroundColor: "green" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon /></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2> <br/>
                    Please fill this form to create an account?
                </Grid>
                <TextField label="Username" placeholder="Enter Username" type="text" fullWidth required />
                <TextField label="Email" placeholder="Enter Email" type="text" fullWidth required />
                <FormControl component="fieldset" style={marginTop}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup arial-label="gender" name="gender" style={{ display: 'initial' }}>
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    </RadioGroup>

                </FormControl>
                <TextField label="Phone Number" placeholder="Enter Phone Number" type="password" fullWidth required />
                <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required />
                <TextField label=" Confirm Password" placeholder="Confirm Password" type="password" fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checked"
                            color="primary"

                        />
                    }
                    label="I accept the terms and conditions"
                />
                <Button type='submit' variant="contained" color='primary' fullWidth>Sign Up</Button>
            </Paper>
        </Grid>
    );
}
export default SignUp;