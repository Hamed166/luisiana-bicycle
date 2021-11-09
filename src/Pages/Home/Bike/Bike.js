import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Bike = ({bike}) => {
    const {name, description} = bike;
    console.log(bike)
    return (
   
        <Grid item xs={2} sm={4} md={4} >
            <Card sx={{ minWidth: 275, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{width:'auto', height:'80px', margin:'0 auto'}}
                    
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                    </Typography>
                </CardContent>
            </Card>          
        </Grid>
    );
};

export default Bike;