import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';

const Review = () => {
    
    return (
        <Box style={{backgroundColor: '#E1E6E5'}}>
            <Container sx={{ mb: 10  }}>
                  <Typography sx={{ fontSize: 18  }} variant="h6"  color="text.secondary" gutterBottom>
                            What Our
                    </Typography>
                    <Typography sx={{ fontWeight: 600, m:2 }} variant="h3"  color="text.secondary" gutterBottom>
                            Customer
                    </Typography>
                    <Typography sx={{ fontSize: 16,m:2 }} variant="h5"  color="text.secondary" gutterBottom>
                            saying about their luisiana bike experiences
                    </Typography>
                <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={4} sx={{ mb: 10  }}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent sx={{p:2}} >
                            <Typography sx={{ fontSize: 18, p:2  }} variant="h2"  color="text.secondary" gutterBottom>
                            Luisiana bicyle is the best bicycle i have ever ride. Its a different experience riding luisiana mountain bicycle for women. 
                            </Typography>
                            <Rating name="simple-controlled"/>
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
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent sx={{p:2}} >
                            <Typography sx={{ fontSize: 18, p:2  }} variant="h2"  color="text.secondary" gutterBottom>
                            Luisiana bicyle is the best bicycle i have ever ride. Its a different experience riding luisiana mountain bicycle for women. 
                            </Typography>
                            <Rating name="simple-controlled" />
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
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent sx={{p:2}} >
                            <Typography sx={{ fontSize: 18, p:2  }} variant="h2"  color="text.secondary" gutterBottom>
                            Luisiana bicyle is the best bicycle i have ever ride. Its a different experience riding luisiana mountain bicycle for women. 
                            </Typography>
                            <Rating name="simple-controlled" />
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
        
            </Grid>
        </Container>
        </Box>
    );
};

export default Review;