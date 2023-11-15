import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Hero = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <MarginCenter>
                <Typography variant="h1" gutterBottom>
                    Album layout
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed deserunt dolore eos nisi in, delectus praesentium sunt rerum hic quaerat mollitia? Harum maiores quis dignissimos quaerat voluptate reprehenderit saepe minima earum.
                </Typography>
                <Stack spacing={2} direction="row" margin={"40px 0"}>
                    <Button variant="contained">Main call to action</Button>
                    <Button variant="outlined">Secondary action</Button>
                </Stack>
            </MarginCenter>
        </Box>


    )
}


const MarginCenter = styled('div')({
    width: "90%",
    textAlign:'center',
    margin: '120px auto',
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center",
    justifyContent: "center"
});

export default Hero
