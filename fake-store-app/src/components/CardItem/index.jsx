import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardItem = ({product, index}) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: "100%" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title?.slice(0,15)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.description?.slice(0,150)}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CardItem