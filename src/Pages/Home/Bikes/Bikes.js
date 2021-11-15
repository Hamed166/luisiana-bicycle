import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Bike from '../Bike/Bike';


const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(()=>{
        fetch('https://salty-depths-22621.herokuapp.com/addProduct')
        .then(res=> res.json())
        .then(data => setBikes(data))
    },[])
    const pro =bikes.slice(0,6)
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
                    key ={bike._id}
                    bike ={bike}
                    ></Bike>)
                }
            </Grid>
        </Container>
    </Box>
    );
};

export default Bikes;