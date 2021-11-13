import { Grid } from '@mui/material';
import * as React from 'react';
import Bookings from '../../Bookings/Bookings';

const DashBoardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Bookings></Bookings>
            </Grid>
            <Grid item xs={4}>
               
            </Grid>
        </Grid>
    );
};

export default DashBoardHome;