import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Navigation = () => {
    const {user, logOut} = useAuth()
    return (
        
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="fixed" style={{backgroundColor: '#ffffff'}}>
                <Toolbar style={{color: 'red'}}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 600, flexGrow: 1, letterSpacing: 6, }}>
                        LUISIANA 
                    </Typography>
                    
                    <Link to="/home" sx={{mr:2}} style={{textDecoration:'none'}}><Button color="inherit">Home</Button></Link>
                    <Link to="/bikes" sx={{mr:2}} style={{textDecoration:'none'}}><Button color="inherit">Bikes</Button></Link>
                    <Link to="/explore" sx={{mr:2}} style={{textDecoration:'none'}}><Button color="inherit">Explore</Button></Link>
                    {
                        user?.email ? <Button onClick={logOut} color="inherit">Logout</Button> :
                        <NavLink style={{textDecoration:'none'}} to="/login"><Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;