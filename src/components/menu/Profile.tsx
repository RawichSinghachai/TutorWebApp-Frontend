import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/material/Avatar';
import {useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate()

  return (
    <div>
      <Avatar 
        sx={{":hover":{cursor:'pointer'}}} 
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
            <PersonIcon/>
        </Avatar>


      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
            <AccountCircleIcon sx={{mr:2}}/>
            Profile
        </MenuItem>


        <MenuItem onClick={()=>navigate('/register')}>
            <ArticleIcon sx={{mr:2}}/>
            Register
        </MenuItem>

        <MenuItem onClick={()=>navigate('/login')}>
            <LoginIcon sx={{mr:2}}/>
            LogIn
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <LogoutIcon sx={{mr:2}}/>
            Logout
        </MenuItem>
      </Menu>
    </div>
  );
}