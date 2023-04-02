import React,{useEffect} from 'react'
import Grid from '@mui/material/Grid';
import ImageHome from './PageHome/ImageHome';
import TopicCard from './PageHome/TopicCard'
import SubjectCard from './PageHome/SubjectCard';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {check} from '../stores/LoginStore'
import { useLocation } from 'react-router-dom';

export default function Home() {

  let location = useLocation();
  console.log(location.pathname);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(check(location.pathname))
  
    
  }, [])

  const topicCard = useSelector((state)=>state.TopicCardStore)
  const subjectCard = useSelector((state)=>state.SubjectCardStore)

  return (
    <>
    <Grid container spacing={3} justifyContent='center'>
      
        <Grid item laptop={12} mobile={12}>
            <ImageHome/>
        </Grid>

        <Grid item laptop={12} mobile={12}>
          <Typography variant='h4' sx={{p:4}}>Topic</Typography>
        </Grid>
        
        
          {topicCard.map((data)=>{
            return  <Grid item laptop={3} mobile={6} key={data.id}>
                      <TopicCard  topic={data.topic}/>
                    </Grid>

          })}

        <Grid item laptop={12} mobile={12}>
          <Typography variant="h4" sx={{py:4}}>Course Online</Typography>
        </Grid>

        
          {subjectCard.map((data,index)=>{
              return  <Grid item key={index} laptop={4} tablet={6} mobile={12} >
                        <SubjectCard  topic={data.topic} duration={data.duration} price={data.price}/> 
                      </Grid>                                     
            })}

    </Grid>
    </>
  )
}
