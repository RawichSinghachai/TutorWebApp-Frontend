import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaymentIcon from '@mui/icons-material/Payment';
import FolderIcon from '@mui/icons-material/Folder';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import {useNavigate } from "react-router-dom";

const drawerWidth = 220;






const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar({open , onhandleDrawerClose ,setOpen}:any) {
  const theme = useTheme();

  const handleDrawerClose = () => {
    onhandleDrawerClose()
  };

  const closeMenu = () =>{
    setOpen(false)
}

  const navigate = useNavigate()

  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

            <ListItem onClick={()=>{navigate('/'),closeMenu()}}>
              <ListItemButton>
                <ListItemIcon>
                   <HomeIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" color="themeblue.text">
                      Home
                  </Typography>
              </ListItemButton>
            </ListItem>


            <ListItem onClick={()=>{navigate('/course'),closeMenu()}}>
              <ListItemButton>
                <ListItemIcon>
                   <SchoolIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" color="themeblue.text">
                    Classroom
                  </Typography>
              </ListItemButton>
            </ListItem>

            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                   <LibraryBooksIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" color="themeblue.text">
                    Blog
                  </Typography>
              </ListItemButton>
            </ListItem>


            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                   <PaymentIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" color="themeblue.text">
                    Payment
                  </Typography>
              </ListItemButton>
            </ListItem>


            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                   <FolderIcon /> 
                </ListItemIcon>
                  <Typography gutterBottom variant="h6" color="themeblue.text">
                    About Us
                  </Typography>
              </ListItemButton>
            </ListItem>
          
        </List>
        <Divider />
      </Drawer>

  );
}