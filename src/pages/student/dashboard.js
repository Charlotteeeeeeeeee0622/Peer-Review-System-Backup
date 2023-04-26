import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { Stack } from '@mui/system';
import { RouterData } from '../../mockData/routeData';

const papreList =[
    {
        id:1,
        title:"Wordbank: An open repository for developmental vocabulary data",
        url:"https://langcog.stanford.edu/papers_new/frank-2016-jcl.pdf"
    },{
        id:2,
        title:"A common framework for quantifying the learnability of nouns and verbs",
        url:"http://www.zhouyuchen.me/assets/pdf/verb-alignment.pdf"
    },{
        id:3,
        title:"Wordbank: An open repository for developmental ",
        url:"https://langcog.stanford.edu/papers_new/frank-2016-jcl.pdf"
    },{
        id:4,
        title:"Wordbank: An open repository for developmental ",
        url:"https://langcog.stanford.edu/papers_new/frank-2016-jcl.pdf"
    },{
        id:5,
        title:"Wordbank: An open repository for developmental ",
        url:"https://langcog.stanford.edu/papers_new/frank-2016-jcl.pdf"
    },{
        id:6,
        title:"Wordbank: An open repository for developmental vocabulary data",
        url:"https://langcog.stanford.edu/papers_new/frank-2016-jcl.pdf"
    },
]


export default function Dashboard(props) {
    

    return(
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', }}>
            {/* Top toolbar */}
            <Header text="Dashboard"/>

            {/* Main content */}
            <Container maxWidth="xl" sx={{ flexGrow: 1, overflow: 'auto', width: '100%', boxSizing: 'border-box', mt:2, }}>
                <Stack container direction={"row"} spacing={10}>
                    <Stack item sx={{width:"45%"}}>
                        <Typography variant="h6" component="div" sx={{ ml:2, fontWeight: "bold", fontFamily: "Arial"}}>
                            Sandbox:
                        </Typography>
                        <List>
                            {RouterData.map((each)=>(
                                <>
                                <ListItemButton component="a" href={`/sandbox/${each.id}`}  >
                                    <ListItemText 
                                    primary={each.name} 
                                    primaryTypographyProps={{
                                        sx: { fontFamily: "Arial"},
                                    }}
                                    sx={{borderBottom: 1, }}/>
                                </ListItemButton>
                                </>
                            ))}             
                        </List>
                    </Stack>

                    <Stack item sx={{width:"45%"}}>
                        <Typography variant="h6" component="div" sx={{ ml:2, fontWeight: "bold", fontFamily: "Arial"}}>
                            Papers:
                        </Typography>
                        <List>
                            {papreList.map((each)=>(
                                <>
                                <ListItemButton component="a" href={each.url} >
                                    <ListItemText 
                                    primary={each.title} 
                                    primaryTypographyProps={{
                                        sx: { fontFamily: "Arial" },
                                    }}
                                    sx={{borderBottom: 1 }}/>
                                </ListItemButton>
                                </>
                            ))}             
                        </List>
                    </Stack>


                </Stack>
                

            </Container>

        </Box>
    )
    
}