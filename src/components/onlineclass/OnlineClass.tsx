import React,{useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ViewVideo from './Content';
import Title from './Title';
import Topic from './Topic';
import { useDispatch } from 'react-redux';
import {check} from '../../stores/HideMenu'
import {useLocation } from 'react-router-dom';
type Props = {}

export default function OnlineClass({}: Props) {
  let location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(check(location.pathname))
  }, [])

  return (
    <>
      <Grid container spacing={3}  justifyContent='center'>

        <Grid item md={12} sm={12} xs={12} >
          <Title/>
        </Grid>

        <Grid item md={3} sm={4} xs={12}>
          <Topic/>
        </Grid>

        <Grid item md={12} sm={12} xs={12}>
          <ViewVideo/>
        </Grid>
        
      </Grid>
    </>
  )
}