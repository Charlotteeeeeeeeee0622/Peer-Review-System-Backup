import React from 'react';

import { Link } from 'react-router-dom';

import {
  // Button,
  // Avatar,
  // TextField,
  // InputAdornment,
  // Divider,
  Typography,
  ListItemIcon,
  Box,
  Container,
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar
} from '@mui/material';

import { Stack } from '@mui/system';

import {
  // AddOutlined,
  // SearchOutlined,
  Image,
  FolderOpen
} from '@mui/icons-material';

import Footer from '../../components/Footer';
import Header from '../../components/Header';


const Sandboxes = [
  {
    id: 1,
    name: 'Sandbox 1',
    imageUrl: 'https://picsum.photos/199',
  },
  {
    id: 2,
    name: 'Sandbox 2',
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: 3,
    name: 'Sandbox 3',
    imageUrl: 'https://picsum.photos/201',
  },
];

const Modules = [
  {
    id: 1,
    name: 'Module 1',
    imageUrl: 'https://picsum.photos/200/150',
  },
  {
    id: 2,
    name: 'Module 2',
    imageUrl: 'https://picsum.photos/200/150',
  },
  {
    id: 3,
    name: 'Module 3',
    imageUrl: 'https://picsum.photos/200/150',
  },
  {
    id: 4,
    name: 'Module 4',
    imageUrl: 'https://picsum.photos/200/150',
  },
  {
    id: 5,
    name: 'Module 5',
    imageUrl: 'https://picsum.photos/200/150',
  },
  {
    id: 6,
    name: 'Module 6',
    imageUrl: 'https://picsum.photos/199/149',
  },]


// function Title() {
//   return (
//     <div>
//       <span style={{ marginLeft: '1rem' }}></span>
//       <Typography variant="h5" component="span">
//         Modules
//       </Typography>
//       <span style={{ marginLeft: '15rem' }}></span>
//       <Typography variant="h5" component="span">
//         Sandboxes
//       </Typography>
//       <Divider />
//     </div>
//   );
// }

const HeaderComp = () => {
  // const user = {
  //   name: 'John Doe',
  //   avatarUrl: 'https://picsum.photos/100',
  // };


  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', }}>


      <Header text="Dashboard" />
      {/* <Avatar src={user.avatarUrl} />
          <span className="username">{user.name}</span>
          <div className='profile-button'>
            <Link to={'profile'}>
              <Button color="primary">
                View Profile
              </Button>
            </Link>
            </div> */}

      {/* <div className="new-buttons">
            <Link to={'module'}>
              <Button color="primary">
                {<AddOutlined />}
                New Module
              </Button>
            </Link>

            <Link to={'assignment'}>
              <Button color="primary">
                {<AddOutlined />}
                New Assignment
              </Button>
            </Link>

          </div> */}

      {/* <div className="search-box">
            <TextField
              label="Search for sandboxes or courses"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </div> */}


      {/* Main content */}

      <Container maxWidth="xl" sx={{ flexGrow: 1, overflow: 'auto', width: '100%', boxSizing: 'border-box', mt: 2, }}>

        <Stack container direction={"row"} spacing={10}>
          <Stack item sx={{ width: "45%" }}>
            <Typography variant="h6" component="div" sx={{ ml: 2, fontWeight: "bold", fontFamily: "Arial" }}>
              Modules:
            </Typography>
            <List>
              {Modules.map((each) => (
                <ListItemButton component="a" href={`/module/${each.id}`} key={each.id} sx={{ borderRadius: 2, mb: 1, bgcolor: 'background.paper', marginBottom: '3rem' }}>
                  <ListItemIcon>
                    <FolderOpen />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Module ${each.id}`}
                    primaryTypographyProps={{
                      sx: { fontFamily: 'Arial', fontWeight: 'medium' },
                    }}
                    sx={{ borderBottom: 1 }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Stack>

          <Stack item sx={{ width: "45%" }}>
            <Typography variant="h6" component="div" sx={{ ml: 2, fontWeight: "bold", fontFamily: "Arial" }}>
              Sandboxes
            </Typography>
            <List>
              {Sandboxes.map((each) => (
                <Link to={`/sandbox/instructor/${each.id}`} key={each.id}>
                  <ListItemButton sx={{ borderRadius: 2, mb: 1, bgcolor: 'background.paper' }}>
                    <ListItemAvatar>
                      <img src={each.imageUrl} alt={each.name} width="40" height="40" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={each.name}
                      primaryTypographyProps={{
                        sx: { fontFamily: 'Arial', fontWeight: 'medium' },
                      }}
                      sx={{ borderBottom: 1 }}
                    />
                    <ListItemIcon>
                      <Image />
                    </ListItemIcon>
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </Stack>


        </Stack>


      </Container>
      <Footer />

    </Box>


  );
};

export default HeaderComp;