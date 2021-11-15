import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Alert, Button, CardMedia, Container } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const {user}= useAuth()
    const time = new Date().toDateString();
    const {productId}= useParams();
    const [productInfo, setProductInfo]= useState([]);

    const initialInfo = {name: user.displayName, email: user.email, phone: '', }
    const [bookingInfo, setBookingInfo] =useState(initialInfo);
 

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        console.log(newInfo);
        newInfo[field] = value;
        setBookingInfo(newInfo);

    }

    useEffect(()=>{
        fetch(`https://salty-depths-22621.herokuapp.com/addProduct/${productId}`)
        .then(res =>res.json())
        .then(data=> setProductInfo(data))

    },[]);

    const handleBookingSubmit = e =>{
        const booking = {
            ...bookingInfo,
            product: productInfo,
            date: time
        }
        // console.log(booking);
         // send to the server
    fetch('https://salty-depths-22621.herokuapp.com/placeOrders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res =>res.json())
    .then(data=>{
        if(data.insertedId){
            setBookingSuccess(true);
        }
    })
        e.preventDefault()
    }

   
   

    return (
        <Container sx={{ m: 12  }}>

            <Typography sx={{ fontSize: 18  }} variant="h6"  color="text.secondary" gutterBottom>
                    CONFIRM BOOKING
            </Typography>
            <Typography sx={{ fontWeight: 600, m:4 }} variant="h4"  color="text.secondary" gutterBottom>
                    Book Now
            </Typography>
            {bookingSuccess && <Alert severity="success">Booked successfully!</Alert>}

            <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={6} sx={{ mb: 10  }}>
                    <Card sx={{ minWidth: 275, p:1.5 }}>
                        <CardMedia
                            component="img"
                            image={productInfo?.image}
                            alt="green iguana"
                        />
                        
                        <CardContent>
                            <Typography  sx={{fontWeight: 600 }}  variant="h5" gutterBottom component="div">
                                {productInfo?.name}
                            </Typography>
                            <Typography sx={{ fontSize: 16}} variant="h5" gutterBottom component="div" color="text.secondary">
                                {productInfo?.description}
                            </Typography>
                            <Typography sx={{ fontSize: 16}} variant="h5" gutterBottom component="div" color="text.secondary">
                                {productInfo?.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent sx={{p:2}} >
                            <Typography sx={{ fontSize: 24, fontWeight: 600, p:2  }} variant="h2"  color="text.secondary" gutterBottom>
                            Place Your Order 
                            </Typography>
                            <form onSubmit={handleBookingSubmit}>
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                name="name"
                                size="small"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                defaultValue={user.email}
                                onBlur={handleOnBlur}
                                size="small"
                                name="email"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                onBlur={handleOnBlur}
                                size="small"
                                name="phone"
                                type="number"
                                label="Phone Number"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                onBlur={handleOnBlur}
                                size="small"
                                name="date"
                                label="date"
                                />
                                <Button type="submit" sx={{ fontSize: 14}} style={{backgroundColor: '#2FB6FA'}} variant="contained" size="small">Book Now</Button>
                            </form>    
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PlaceOrder;