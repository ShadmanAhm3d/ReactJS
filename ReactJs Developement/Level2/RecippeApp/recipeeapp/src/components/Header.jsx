import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return(
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
           <Typography variant='h5' >
        Recipee App
           </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    
    );
};

export default Header;
