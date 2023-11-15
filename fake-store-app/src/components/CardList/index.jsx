import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import CardItem from '../CardItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const CardList = ({ products }) => {
    useEffect(() => {
        console.log("CardList>>>", products);
    }, [products])
    return (
        <>
            <Box sx={{margin: "0 auto" }}>
                <Grid sx={{ flexGrow: 1 }} container spacing={3}>
                    {products ? products.map((product, index) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <CardItem product={product} />
                            </Grid>
                        )
                    }) : <Typography gutterBottom variant="h5" component="div">No items</Typography>}
                </Grid>
            </Box>
        </>
    )
}

export default CardList