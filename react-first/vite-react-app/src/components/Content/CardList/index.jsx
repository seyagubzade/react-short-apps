import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardItem from './Card';
const CardList = () => {
    return (
        <Box sx={{ margin: "0 auto" }} >
            <Grid sx={{ flexGrow: 1 }} container spacing={3}>
                <Grid item xs={6} md={4}>
                    <CardItem />
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardItem />
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardItem />
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardItem />
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardItem />
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardItem />
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardItem />
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardItem />
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardItem />
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardItem />
                </Grid>
                
            </Grid>

        </Box>
    )
}

export default CardList