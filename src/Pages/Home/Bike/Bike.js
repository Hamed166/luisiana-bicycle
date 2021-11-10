import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';

const Bike = ({bike}) => {
    const {name, description} = bike;
    return (
        <Grid  item xs={4} sm={4} md={4} sx={{display:'flex', textAlign: 'center', alignItems:'center', justifyContent:'flex-start'}} >
            <Card sx={{ minWidth: 275 }}>
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
                <CardActions sx={{ ml: 15, p:1.5}}>
                    <Button variant="contained" size="small">Buy Now</Button>
                </CardActions>
            </Card>          
        </Grid>
    );
};

export default Bike;