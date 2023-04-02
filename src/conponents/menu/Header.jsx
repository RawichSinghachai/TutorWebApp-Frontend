import React  from 'react'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";



const drawerWidth = 200;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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





export default function Header({open,onhandleDrawerOpen}) { 

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

        
            <Typography >
                Persistent drawer
            </Typography>
        </Stack>


        <h4>mid</h4>

        <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={4}>
            <Typography onClick={()=>navigate('/login')}>Login</Typography>
        </Stack>
      


    </Toolbar>
  </AppBar>
  );
}