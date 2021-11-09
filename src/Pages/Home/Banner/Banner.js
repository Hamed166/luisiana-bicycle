import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import bg from '../../../images/banner-1.jpg'
import { Container, Typography } from '@mui/material';

const bannerImage = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(47, 51, 53, 0.80)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundRepeat: 'no-repeat',
    width: `calc(100vw)`
}

const Banner = () => {
    return (
        <Box style={bannerImage} sx={{ width: '100%', height:'0 auto' }}>
           <Container sx={{height:'600px',display:'flex', textAlign: 'left', alignItems:'center', justifyContent:'flex-start'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    
                    <Grid  item xs={12} md={6} sx={{}}>
                        <Typography style={{color:'white' }} variant="h2">When the going gets tech...</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    
                    </Grid>
                
                </Grid>
           </Container>
        </Box>
    );
};

export default Banner;