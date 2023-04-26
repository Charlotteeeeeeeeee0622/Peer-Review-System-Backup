import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import {Toolbar, List, ListItemButton, ListItemText, IconButton, Divider, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { RouterData } from "../mockData/routeData";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const drawerWidth = 240;
export default function Layout(props) {
    const location = useLocation();
    

    const getSandboxId = () => {
        let path = location.pathname.split("/")
        if (path[1] === "sandbox"){
            return parseInt(path[2])
        }
    };

    const [currentSandbox, setCurrentSandbox] = useState(getSandboxId);
    return (
        <Box sx={{ display: 'flex', height: '100vh', width: '100vw' ,}}>
        {/* Left Sidebar */}
        <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            
            //hide sidebar when in dashboard
            // display: location.pathname === "/"?"none" :"block",
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
        >
            <Toolbar sx={{backgroundColor:"#F7F7F7",}}>
                {/* <IconButton href={`/`}>
                    <ArrowBackIcon/>
                </IconButton> */}
                <IconButton disabled={location.pathname === "/student"} onClick={() => window.history.back()}>
                    <ArrowBackIcon/>
                </IconButton>
            </Toolbar>
            <Divider />
            <Box sx={{ flexGrow:1 ,backgroundColor:"#F7F7F7",}}>
                <List>
                    {RouterData.map(each=>(
                        <>
                        <ListItemButton component={Link} to={`/student/sandbox/${each.id}`} sx={{px:3, 
                        height:100,
                        '&.Mui-selected': {
                            backgroundColor: 'white',
                          },
                          '&.Mui-selected:hover': {
                            backgroundColor: 'white',
                          },
                    }}
                        onClick={()=>{setCurrentSandbox(each.id);
                            console.log(location.pathname.split("/")[2])}} 
                        selected={currentSandbox === each.id}>
                            <ListItemText 
                            primary={each.name}
                            primaryTypographyProps={{
                                sx: { fontFamily:"PingFang SC",fontSize:20,},
                            }}
                            sx={{borderBottom: 1, }}/>
                        </ListItemButton>
                        </>
                    ))}
                    

                </List>
                
            </Box>
        </Drawer>

        {/* Right side */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', 
            // maxWidth: `calc(100% - ${drawerWidth}px)`
            }}>
            {/* Top toolbar */}
            {/* <AppBar position="static" color='inherit' sx={{boxShadow:1,}}> 
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
                </Typography>
            </Toolbar>
            </AppBar> */}

            {/* Main article */}
            <Outlet/>
            {/* <Container maxWidth="xl" sx={{ flexGrow: 1, overflow: 'auto', width: '100%', boxSizing: 'border-box' }}>

            </Container> */}
        </Box>
    </Box>
      );

}