import  React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Sidebar from './conponents/menu/Sidebar';
import Header from './conponents/menu/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './conponents/Home';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux'
import FormLogin from './conponents/FormLogin';
import FormRegister from './conponents/FormRegister';
import Footer from './conponents/Footer';




export default function App() {
  const hide = useSelector((state) => state.LoginStore.hide)


  // const drawerWidth = 200;

  let drawerWidth
  if(hide === true){
    drawerWidth = 200
  }if(hide === false){
    drawerWidth = 0
  }


  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );
  
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {hide && <Header open={open} onhandleDrawerOpen={handleDrawerOpen}/>}
      {hide && <Sidebar open={open} setOpen={setOpen} onhandleDrawerClose={handleDrawerClose}/>}
      

      


      <Main open={open}  sx={{pt:8, height:'100%', width:'100%',}}>
      <DrawerHeader />
        <Routes> 
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<FormLogin/>} />
          <Route path='/register' element={<FormRegister/>} />
        </Routes>
      </Main>
    </Box>
    {hide && <Footer/>}
    </>
    
  );
}
