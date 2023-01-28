import React  from 'react'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import {useNavigate } from "react-router-dom";
import Profile from './Profile';


const drawerWidth = 220;

type appbar = {
  theme?:any,
  open:boolean
}


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }:appbar) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));





export default function Header({open,onhandleDrawerOpen}:any) { 

    const handleDrawerOpen = () => {
        onhandleDrawerOpen()
    };
    
    const navigate = useNavigate()

  return (
    <AppBar position="fixed" open={open}>
    <Toolbar sx={{display:'flex' , justifyContent:'space-between'}}>
        <Stack direction="row" alignItems="center">
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>

        
            <Typography sx={{":hover":{cursor:'pointer'}}} onClick={()=>navigate('/')}>
              TutorWebApp
            </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{mr:2}}>
            <Profile/>
        </Stack>
      


    </Toolbar>
  </AppBar>
  );
}