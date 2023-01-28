import React,{useEffect} from 'react'
import Grid from '@mui/material/Grid';
import CardCourse from './CardCourse';
import { useSelector,useDispatch } from 'react-redux';
import {check} from '../../stores/HideMenu'
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';



type Props = {}

export default function ShowCourse({}: Props) {
  let location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(check(location.pathname))
  }, [])

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={12} sm={12} xs={12}>
          <Typography variant="h4" gutterBottom>
            MyCourse
          </Typography>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <CardCourse/>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <CardCourse/>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <CardCourse/>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <CardCourse/>
        </Grid>
        
      </Grid>
    </>
  )
}