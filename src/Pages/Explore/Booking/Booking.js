
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Booking = ({booking}) => {
    const {id, name, description, img} = booking;
    return (
        
        <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardMedia
                        component="img"
                        image={img}
                        alt="green iguana"
                    />
                    <Box style={{backgroundColor: '#E1E6E5'}}>
                    <CardContent>
                    <Typography  sx={{fontWeight: 600 }}  variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: 16}} variant="h5" gutterBottom component="div" color="text.secondary">
                        {description}
                    </Typography>
                    </CardContent>
                    <Link to='/placeOrder' sx={{ ml: 13, p:1.5}}>
                        <Button sx={{ fontSize: 16}} style={{backgroundColor: '#2FB6FA'}} variant="contained" size="small">Buy The {name}</Button>
                    </Link>
                    </Box>
            </Card>
        </Grid>
    );
};

export default Booking;