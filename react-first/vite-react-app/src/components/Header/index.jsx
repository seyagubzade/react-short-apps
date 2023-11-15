import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {

  return (
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <CameraAltIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'flex' },
            fontFamily: 'roboto',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Album layout
        </Typography>

      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Header