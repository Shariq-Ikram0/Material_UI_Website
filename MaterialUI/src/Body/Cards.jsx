import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import card1 from '../assets/3.png'

export default function ActionAreaCard({ title, image }) {
  return (
    <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography align='center' gutterBottom variant="h6" component="div">
          { title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

