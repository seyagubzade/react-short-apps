import React from 'react'
import CardList from './CardList'
import Hero from './Hero'
import Container from '@mui/material/Container';

const Content = () => {
    return (
        <Container maxWidth="md">
            <Hero />
            <CardList />
        </Container>
    )
}

export default Content