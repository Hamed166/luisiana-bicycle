import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardMedia, Container } from '@mui/material';
import { Box, typography } from '@mui/system';
import Rating from 'react-rating';

const Review = () => {
    const [updatedReview, setUpdatedReview] = useState([]);

    useEffect(()=>{
        fetch('https://salty-depths-22621.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>{
            setUpdatedReview(data)
        })

    },[])
    console.log(updatedReview);
    return (
        <Box style={{backgroundColor: '#E1E6E5'}}>
            <Container sx={{ mb: 10,py:3  }}>
                  <Typography sx={{ fontSize: 18  }} variant="h6"  color="text.secondary" gutterBottom>
                            What Our
                    </Typography>
                    <Typography sx={{ fontWeight: 600, m:2 }} variant="h3"  color="text.secondary" gutterBottom>
                            Customer
                    </Typography>
                    <Typography sx={{ fontSize: 16, my:2 }} variant="h5"  color="text.secondary" gutterBottom>
                            saying about their luisiana bike experiences
                    </Typography>
                <Grid  container rowSpacing={1} spacing={2} sx={{my:2}}>
                
                    {
                        updatedReview.map(review=><Grid sx={{my:1}} item xs={12} sm={6} md={4} 
                            key={review._id}>
                         <Box sx={{backgroundColor:'#fff'}}>
                             <Box >
                                 {review.image  && <img style={{width:"50px", height:'50px', borderRadius:'50px',marginTop: '-50px'}} src={review.image} alt=''/>}
                                 {!review.image && <img style={{width:"50px", height:'50px', borderRadius:'50px', marginTop: '-50px'}} src='https://cdn-icons.flaticon.com/png/512/805/premium/805404.png?token=exp=1636997188~hmac=3cc7fa6e271cee3323d123a2f4655571' alt=''/>}
                             </Box>
                             <Typography>
                                 {review.name}
                             </Typography>
                         <Typography>
                           {review.text} 
                           </Typography>
                           <Rating style={{color: 'yellow'}}
                            initialRating={review.reviews}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly
                                />
                         </Box>
                        </Grid>)
                    }
                
            </Grid>
        </Container>
        </Box>
    );
};

export default Review;