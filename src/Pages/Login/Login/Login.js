import { Button, CardMedia, Container, Grid, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import img from '../../../images/banner-bg.jpg';
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, authError, isLoading, signInWithGoogle} = useAuth()

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
       loginUser(loginData.email, loginData.password, location , history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history)
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
                                onBlur= {handleOnChange}
                                defaultValue="Your Email"
                                size="small"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                type="password"
                                name="password"
                                onBlur= {handleOnChange}
                                sx={{width:'90%', m:1}}
                                defaultValue="Your Email"
                                size="small"
                                />
                                
                                <Button type="submit" sx={{ fontSize: 14, width:'90%'}} style={{backgroundColor: '#2FB6FA'}} variant="contained" size="small">Login</Button>

                                <NavLink 
                                style={{ textDecoration:'none'}}
                                 to="/register">
                                <Button variant="text">New User? Please Register</Button></NavLink>
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert sx={{width:'90%', m:1}} severity="success">login successful!</Alert>}
                                {authError && <Alert sx={{width:'90%', m:1}} variant="outlined" severity="error">
                                {authError}</Alert>}
                            </form>
                            {/* <svg style={{backgroundColor:'red'} } data-testid="GoogleIcon"></svg> */}
                            <Button sx={{width:'50%', m:1}} onClick={handleGoogleSignIn} variant="contained">Google Sign-In</Button>
                                 
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