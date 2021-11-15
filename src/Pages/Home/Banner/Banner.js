import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import bg from '../../../images/bg-0.jpg'
import { Container, Typography } from '@mui/material';

const bannerImage = {
    background: `url(https://www.bregenzerwald.at/wp-content/uploads/2019/11/eyebase/mountainbiken-im-bregenzerwald-126100-1920x800.jpg)`,
    backgroundColor: 'rgba(47, 51, 53, o.90)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundRepeat: 'no-repeat'
}

const Banner = () => {
    return (
        <Box style={bannerImage} >
           <Container sx={{height:'600px', display:'flex', textAlign: 'left', alignItems:'center', justifyContent:'flex-start'}}>
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