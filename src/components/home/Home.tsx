import React,{useEffect} from 'react'
import Grid from '@mui/material/Grid';
import ImageHome from './ImageHome';
import TopicCard from './TopicCard'
import SubjectCard from './SubjectCard';
import Typography from '@mui/material/Typography';
import { useSelector,useDispatch } from 'react-redux';
import type { RootState } from '../../stores/store';
import {check} from '../../stores/HideMenu'
import { useLocation } from 'react-router-dom';

export default function Home() {

  let location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(check(location.pathname))
  
    
  }, [])

  const topicCard = useSelector((state:RootState)=>state.TopicCardStore)
  const subjectCard = useSelector((state:RootState)=>state.SubjectCardStore)

  return (
    <>
    <Grid container spacing={3} justifyContent='center'>
      
        <Grid item md={12} sm={12} xs={12}>
            <ImageHome/>
        </Grid>

        <Grid item md={12} sm={12} xs={12}>
          <Typography variant='h4' sx={{p:4}}>Topic</Typography>
        </Grid>
        
        
          {topicCard.map((data)=>{
            return  <Grid item md={3} sm={6} xs={6} key={data.id}>
                      <TopicCard  topic={data.topic}/>
                    </Grid>

          })}

        <Grid item md={12} xs={12}>
          <Typography variant="h4" sx={{py:4}}>Course Online</Typography>
        </Grid>

        
          {subjectCard.map((data,index)=>{
              return  <Grid item key={index} md={4} sm={6} xs={12} >
                        <SubjectCard  topic={data.topic} duration={data.duration} price={data.price}/> 
                      </Grid>                                     
            })}

    </Grid>
    </>
  )
}
