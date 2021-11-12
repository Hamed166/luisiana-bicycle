import { Button, CardMedia, Container, Grid, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import img from '../../../images/banner.jpg';
import TextField from '@mui/material/TextField';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, registerUser, isLoading, authError} = useAuth();

    const history = useHistory()

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{my:10}}>
                <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="div">
                            Register
                            </Typography>
                            { !isLoading && <form onSubmit={handleLoginSubmit}>
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                label="Your Name"
                                name="name"
                                type="text"
                                onBlur= {handleOnBlur}
                                />
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur= {handleOnBlur}
                                />
                                <TextField
                                required
                                id="outlined-required"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur= {handleOnBlur}
                                sx={{width:'90%', m:1}}
                                />
                                 <TextField
                                required
                                id="outlined-required"
                                type="password"
                                name="password2"
                                label="Confirm Password"
                                onBlur= {handleOnBlur}
                                sx={{width:'90%', m:1}}
                                />
                                
                                <Button type="submit" sx={{ fontSize: 14, width:'90%'}} style={{backgroundColor: '#2FB6FA'}} variant="contained" size="small">Register</Button>
                                
                                <NavLink 
                                style={{ textDecoration:'none'}}
                                 to="/login">
                                <Button variant="text">Already Registered? Pleae Login</Button></NavLink>
                            </form>} 
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                                {authError && <Alert severity="error">{authError}
                                </Alert>}   
                </Grid>
                <Grid item xs={12} md={6}>
                <CardMedia
                        component="img"
                        image={img}
                        alt="green iguana"
                    />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;