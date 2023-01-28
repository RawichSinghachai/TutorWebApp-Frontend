import React from 'react'
import Card from '@mui/material/Card';

type Props = {}

export default function Title({}: Props) {
  return (
    <div>
      <Card elevation={0} sx={{display:'flex',justifyContent:'center'}}>
        <h2>video</h2>
        </Card>
    </div>
  )
}