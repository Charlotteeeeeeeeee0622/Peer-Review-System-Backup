import React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Notifications, ExitToApp } from '@mui/icons-material';
// import { Outlet, useLocation } from 'react-router-dom';
// import { useState } from 'react';

export default function Header(props) {
    return (
        <AppBar position="static" color='inherit' sx={{ boxShadow: 1, backgroundColor: "#F7F7F7" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "PingFang SC" }}>
                    {props.text}
                </Typography>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <ExitToApp />
                </IconButton>
            </Toolbar>
        </AppBar>
    )

}