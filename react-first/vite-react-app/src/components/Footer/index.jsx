import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

const Footer = () => {
    return (
        <Container maxWidth="xs">
            <Box sx={{ width: '100%' }}>
                <MarginCenter>
                    <Typography variant="h5" >
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{opacity:".7"}}>
                        Something here to give the footer a purpose!
                        Copyright © Your Website 2023.
                    </Typography>
                </MarginCenter>
            </Box>
        </Container>
    )
}

const MarginCenter = styled('div')({
    width: "90%",
    textAlign: 'center',
    margin: '120px auto',
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center",
    justifyContent: "center"
});

export default Footer