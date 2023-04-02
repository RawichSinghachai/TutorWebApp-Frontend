import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImageHome() {
  return (
    <Card sx={{ Width: '100%' ,borderRadius:5}} >
      <CardMedia
        sx={{ height:500 }}
        image="https://i.pinimg.com/564x/ee/db/9f/eedb9f473f10c1cfdac12402bea00373.jpg"
        title="green iguana"
      />
    </Card>
  );
}