import React,{useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {check} from '../stores/LoginStore'
import { Link ,useLocation } from 'react-router-dom';


export default function Login() {
  let location = useLocation();
  console.log(location.pathname);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(check(location.pathname))
  
    
  }, [])
  

  return (
    <div>
        <Card sx={{width:{laptop:'500px'},mx:'auto',p:2,}}>

              <Stack  direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography variant="h4" gutterBottom>Login</Typography>
              </Stack>

              <TextField  label="Name" variant="outlined" fullWidth sx={{mb:2}}/>

              <TextField  label="Password" variant="outlined" fullWidth sx={{mb:2}}/>

              <Stack  direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{mb:1}}>
                <Typography variant="body2" gutterBottom>Forget Password?</Typography>
              </Stack>

              <Button variant="contained" fullWidth>Submit</Button>
              
              <Stack  direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{mt:2}}>
                <Typography variant="body2" gutterBottom><Link to='/register'>Create Account?</Link></Typography>
              </Stack>
              
        </Card>
    </div>
  )
}
