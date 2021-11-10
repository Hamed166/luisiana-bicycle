import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Bike from '../Bike/Bike';

const bikes = [
    {
        name: 'Fluoride Treatement',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
     
    },
    {
        name: 'Teeth Whitening',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
       
    },
    {
        name: 'Cavity Filling',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        
    }
]

const Bikes = () => {
    return (
        <Box sx={{ flexGrow: 1, m:8 }}>
        <Container>
            <Typography sx={{ fontWeight: 500, m:2, color: 'info.main'  }} variant="h6" component="div">
                Ready to rally the World.
            </Typography>
            <Typography sx={{ fontWeight: 600, m:4 }} variant="h4" component="div">
                Explore Our Lineup
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    bikes.map(bike =><Bike
                    key ={bike.name}
                    bike ={bike}
                    ></Bike>)
                }
            </Grid>
        </Container>
    </Box>
    );
};

export default Bikes;