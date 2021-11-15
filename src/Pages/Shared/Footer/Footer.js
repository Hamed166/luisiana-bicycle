import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
       <Box style={{backgroundColor: '#E1E6E5'}}>
            <Container sx={{ py: 4}}>
            <Grid container spacing={2} sx={{ py: 4}}>
                <Grid item xs={12} sm={6} md={3} sx={{textAlign: 'left'}} >
                <Typography  sx={{ fontSize: 20, fontWeight: 500, my:1}} variant="h5" component="div">Luisiana Bike</Typography>
                    <Typography sx={{ fontSize: 16}} variant="h5" component="div">Luisiana Bicycle is the best bicycle company in Bicycle industry.</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{textAlign: 'left'}} >
                    <Typography  sx={{ fontSize: 20, fontWeight: 500, my:1}} variant="h5" component="div">Company</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">About Us</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">What We do</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">Careers</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">Privacy Policy</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">Contact Us</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{textAlign: 'left'}} >
                <Typography  sx={{ fontSize: 20, fontWeight: 500, my:1}} variant="h5" component="div">About Us</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">Contact Us</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">Register</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">Terms and Conditions</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{textAlign: 'left'}} >
                    <Typography  sx={{ fontSize: 20, fontWeight: 500, my:1}} variant="h5" component="div">About Us</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">Contact Us</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">Register</Typography>
                    <Typography  sx={{ fontSize: 16}} variant="h5" component="div">Terms and Conditions</Typography>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container spacing={2} sx={{textAlign: 'left'}} >
                <Grid item xs={12} sm={6}>
                <Typography style={{color: 'red'}}  sx={{ fontSize: 28,  fontWeight: 600, m:1, letterSpacing: 4,}} variant="h5" component="div">LUISIANA</Typography> 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography  sx={{ fontSize: 16, m:1}} variant="h5" component="div">@ Copyright reserved to PHero.Team Crafted by React-Hero</Typography>
                </Grid>
            </Grid>
        </Container>
       </Box>
    );
};

export default Footer;