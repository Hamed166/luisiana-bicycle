import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';

const PlaceOrder = () => {


    const handleBookingSubmit = e =>{
        alert('submitting booking data');
        e.preventDefault()
    }
    return (
        <Container sx={{ m: 12  }}>

            <Typography sx={{ fontSize: 18  }} variant="h6"  color="text.secondary" gutterBottom>
                    CONFIRM BOOKING
            </Typography>
            <Typography sx={{ fontWeight: 600, m:4 }} variant="h4"  color="text.secondary" gutterBottom>
                    Book Your Favorite One
            </Typography>

            <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={6} sx={{ mb: 10  }}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent sx={{p:2}} >
                            <Typography sx={{ fontSize: 18, p:2  }} variant="h2"  color="text.secondary" gutterBottom>
                            Luisiana bicyle is the best bicycle i have ever ride. Its a different experience riding luisiana mountain bicycle for women. 
                            </Typography>
                        </CardContent>
                        <Box style={{backgroundColor: '#E1E6E5'}}>
                        <CardContent sx={{ display:'flex', textAlign: 'center', alignItems:'center', justifyContent:'flex-start'}}>
                            <img  style={{width:'80px', height:'80px', borderRadius: '50%'}} src="https://vacation-rentals.b-cdn.net/wp-content/uploads/2020/01/sophia-sebastian.jpg" alt=""/>
                            <CardContent>
                                <Typography sx={{ fontSize: 18  }} variant="h2"  color="text.secondary" gutterBottom>
                                Zunaira Hussain 
                                </Typography>
                                <Typography sx={{ fontSize: 18  }} variant="h2"  color="text.secondary" gutterBottom>
                                Customer
                                </Typography>
                            </CardContent>
                        </CardContent>
                        </Box>
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
                                defaultValue="Your Name"
                                size="small"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                defaultValue="Your Email"
                                size="small"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                defaultValue="Phone Number"
                                size="small"
                                type="number"
                                />
                                <TextField
                                required
                                id="outlined-required"
                                sx={{width:'90%', m:1}}
                                defaultValue="date"
                                size="small"
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