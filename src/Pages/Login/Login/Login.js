import { Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import img from '../../../images/banner-bg.jpg';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
       
        e.preventDefault();
    }
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, m:15 }} variant="h4" component="div">
                Login Please
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                            <Typography variant="h5" component="div">
                            Login
                            </Typography>
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                name="email"
                                type="email"
                                onChange= {handleOnChange}
                                defaultValue="Your Email"
                                size="small"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                type="password"
                                name="password"
                                onChange= {handleOnChange}
                                sx={{width:'90%', m:1}}
                                defaultValue="Your Email"
                                size="small"
                                />
                                
                                <Button type="submit" sx={{ fontSize: 14, width:'90%'}} style={{backgroundColor: '#2FB6FA'}} variant="contained" size="small">Login</Button>

                                <NavLink 
                                style={{ textDecoration:'none'}}
                                 to="/register">
                                <Button variant="text">New User? Pleae Register</Button></NavLink>
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

export default Login;