import { Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import img from '../../../images/banner.jpg';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('your password did not match');
        }
        e.preventDefault();
    }
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, m:15 }} variant="h4" component="div">
                Register Please
            </Typography>
            <Grid container spacing={2} sx={{m:10}}>
                <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="div">
                            Register
                            </Typography>
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                label="Your Email"
                                name="email"
                                type="email"
                                onChange= {handleOnChange}
                                />
                                <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                type="password"
                                name="password"
                                onChange= {handleOnChange}
                                sx={{width:'90%', m:1}}
                                />
                                 <TextField
                                required
                                id="outlined-required"
                                type="password"
                                name="password2"
                                label="ConfirmPassword"
                                onChange= {handleOnChange}
                                sx={{width:'90%', m:1}}
                                />
                                
                                <Button type="submit" sx={{ fontSize: 14, width:'90%'}} style={{backgroundColor: '#2FB6FA'}} variant="contained" size="small">Register</Button>
                                
                                <NavLink 
                                style={{ textDecoration:'none'}}
                                 to="/login">
                                <Button variant="text">Already Registered? Pleae Login</Button></NavLink>
                            </form>    
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