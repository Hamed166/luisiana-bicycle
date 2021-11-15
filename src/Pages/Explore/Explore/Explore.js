import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';




const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://salty-depths-22621.herokuapp.com/addProduct')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])



    return (
        <Container sx={{ m: 10  }}>
            <Typography sx={{ fontWeight: 500, m:2, color: '#2FB6FA'  }} variant="h6" component="div">
                Ready to rally the World.
            </Typography>
            <Typography sx={{ fontWeight: 600, m:4 }} variant="h4" component="div">
                Explore Our Lineup
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                   products.map(product =><Booking
                    key ={product._id}
                    product={product}
                   ></Booking>)
               }
            </Grid>
        </Container>
    );
};

export default Explore;