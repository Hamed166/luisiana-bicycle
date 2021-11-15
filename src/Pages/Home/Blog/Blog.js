import { Button, Card, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/bg.jpg'

const Blog = () => {
    return (
        <Box>
           
                    <Typography sx={{ fontWeight: 600, m:2 }} variant="h4"  color="text.secondary" gutterBottom>
                                News and Updates
                    </Typography>
                    <Typography sx={{ fontSize: 16,m:2 }} variant="h5"  color="text.secondary" gutterBottom>
                                When the going techs...
                    </Typography>
                    <Grid  container >
                    <Grid item xs={12} sm={6} sx={{ mb: 10,}}>
                        <Card sx={{ minWidth: 275, p:2}}>
                            <CardContent sx={{p:2}} >
                                <Typography sx={{ fontSize: 24, p:2,fontWeight: 600  }} variant="h2"  color="text.secondary" gutterBottom>
                                    ....the Techs gets going
                                </Typography>
                                <Typography sx={{ fontSize: 18, p:2  }} variant="h2"  color="text.secondary" gutterBottom>
                                With 150mm of VPP® suspension, precision carbon engineering and a host of Juliana tuning details and kit options the Roubion blends a myriad of tech to meet the demands of a myriad of riders. 
                                </Typography>
                            </CardContent>
                            <Button sx={{ fontSize: 16}} style={{backgroundColor: '#2FB6FA', textDecoration: 'none'}} variant="contained" size="small">See more.. </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ minWidth: 275 }}>
                                <CardMedia
                                 sx={{border: 0}}
                                    component="img"
                                    image={image}
                                    alt="green iguana"
                                    />
                        </Card>
                    </Grid>
                </Grid>
                <Grid  container >
                    <Grid item xs={12} sm={6} sx={{ mb: 10}}>
                        <Card sx={{ minWidth: 275 }}>
                                <CardMedia
                                sx={{border: 0}}
                                    component="img"
                                    image={image}
                                    alt="green iguana"
                                    />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Card sx={{ minWidth: 275, p: 2 }}>
                            <CardContent sx={{p:2}} >
                                <Typography sx={{ fontSize: 24, p:2,fontWeight: 600  }} variant="h2"  color="text.secondary" gutterBottom>
                                    Ready to Rally The World
                                </Typography>
                                <Typography sx={{ fontSize: 18, p:2  }} variant="h2"  color="text.secondary" gutterBottom>
                                Originally created as Anka Martin's go-to for Trans-Provence style riding, the Roubion has since proven the ideal choice for many more athletes in many more places. Roubion riders Brooklyn Bell, Brittany Phelan and Monet Adams are part of a growing community of multi-talented women connected by a love of riding big mountain trails. 
                                </Typography>
                            </CardContent>
                            
                                <Button sx={{ fontSize: 16}} style={{backgroundColor: '#2FB6FA', textDecoration: 'none'}} variant="contained" size="small">See more.. </Button>
                            
                        </Card>
                    </Grid>
                </Grid>
           
        </Box>
    );
};

export default Blog;