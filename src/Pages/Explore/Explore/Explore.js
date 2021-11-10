import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name:'ROUBION',
        description: 'Travel: 150mm | Wheel Size: MX',
        img:'https://www.julianabicycles.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsantacruzbikesstatic%2F5d21efa3-dbff-4d6f-9c4e-5dc19c9c93b3_Roubion-nodrop.png%3Fauto%3Dcompress%2Cformat&w=1400&q=100'
    },
    {
        id: 2,
        name:'WILDER',
        description: 'Travel: 115mm | Wheel Size: 29"',
        img:'https://www.julianabicycles.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsantacruzbikesstatic%2F55662f21-7138-4902-ad16-fc5707ae81b1_Wilder-nodrop.png%3Fauto%3Dcompress%2Cformat&w=1400&q=100'
    },
    {
        id: 3,
        name:'MAVERICK',
        description: 'Travel: 140mm | Wheel Size: 29"',
        img:'https://www.julianabicycles.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsantacruzbikesstatic%2Fa3d031d4-352f-4d20-ba24-be474c7b530c_Maverick-nodrop.png%3Fauto%3Dcompress%2Cformat&w=1400&q=100'
    },
     {
        id: 4,
        name:'FURTADO',
        description: 'Travel: 130mm | Wheel Size: 27.5"',
        img:'https://www.julianabicycles.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsantacruzbikesstatic%2Ff9d2f62b-3998-40d9-b984-6a56329e1001_Furtado-nodrop.png%3Fauto%3Dcompress%2Cformat&w=1400&q=100'
     },
     {
        id: 5,
        name:'JOPLIN',
        description: 'Travel 120mm | Wheel Size: 29"',
        img:'https://www.julianabicycles.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsantacruzbikesstatic%2F59212cfc-44e3-4950-9fb1-dff759b17bec_Joplin-nodrop.png%3Fauto%3Dcompress%2Cformat&w=1400&q=100'
     },
     {
        id: 6,
        name:'QUINCY',
        description: 'Gravel/CX | Wheel Size: 650b, 700c',
        img:'https://www.julianabicycles.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fsantacruzbikesstatic%2F36d947db-8552-4c2a-8b22-18ba9ac74b14_Quincy-nodrop.png%3Fauto%3Dcompress%2Cformat&w=1400&q=100'
     }
    
]


const Explore = () => {
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
                   bookings.map(booking =><Booking
                    key ={booking.id}
                    booking={booking}
                   ></Booking>)
               }
            </Grid>
        </Container>
    );
};

export default Explore;