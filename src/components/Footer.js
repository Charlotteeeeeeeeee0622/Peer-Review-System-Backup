import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static" color="inherit" sx={{ boxShadow: 1, backgroundColor: '#F7F7F7', top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1, fontFamily: 'PingFang SC' }}>
          &copy; 2023 Group8
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
