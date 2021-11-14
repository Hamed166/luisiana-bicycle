import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Bike = ({bike}) => {
    const { _id, name, description, price, image} = bike;
    return (
        <Grid  item xs={4} sm={4} md={4} sx={{display:'flex', textAlign: 'center', alignItems:'center', justifyContent:'flex-start'}} >
            <Card sx={{ minWidth: 275, p:1.5 }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt="green iguana"
                />
                
                <CardContent>
                    <Typography  sx={{fontWeight: 600 }}  variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: 16}} variant="h5" gutterBottom component="div" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography sx={{ fontSize: 16}} variant="h5" gutterBottom component="div" color="text.secondary">
                        {price}
                     </Typography>
                </CardContent>
                
                    <Link to={`/productInfo/${_id}`} sx={{ ml: 13, m:2, p:2}} style={{ textDecoration: 'none'}}>
                        <Button sx={{ fontSize: 16}} style={{backgroundColor: '#2FB6FA', textDecoration: 'none'}} variant="contained" size="small">Buy {name}</Button>
                    </Link>
               
            </Card>          
        </Grid>
    );
};

export default Bike;