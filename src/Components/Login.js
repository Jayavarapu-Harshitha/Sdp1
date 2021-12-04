import { Avatar, Button, Link, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function handleSubmit(e) {
    e.preventDefault();
    console.log('submit is handled')
}

const Login = () => {

    const paperStyle = { padding: 20, height: '70vh', width: 320, margin: "20px auto" }
    const avatarStyle = { backgroundColor: "green" }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} onSubmit={handleSubmit}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label="Username" placeholder="Enter Username" type="text" fullWidth required />
                <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checked"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' variant="contained" color='primary' fullWidth>SIGN IN</Button>
                <Typography >
                    <Link href='#' >
                        Forgot Password
                    </Link>
                </Typography>
                <Typography > Do you have an account?
                    <Link href='#' >
                        Sign Up ?
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}
export default Login;