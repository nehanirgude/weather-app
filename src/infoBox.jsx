import "./infoBox.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";
export default function InfoBox({info}){
   const INIT_URL="https://unsplash.com/photos/a-plane-flying-through-a-cloudy-sky-at-sunset--ID0K0Unex4"
  
    return(<div className="InfoBox">
        <h1>weather info</h1>
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={INIT_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {info.city}
        </Typography>
        <Typography  variant="body2" color="text.secondary" component={"span"}>
             <p>feels_like={info.feelsLike}&deg;</p>
            <p>Temperature={info.temp}&deg;</p>
            <p>Min Temp={info.tempMin}&deg;</p>
            <p>Max Temp={info.tempMax}&deg;</p>
            <p>Humidity={info.humidity}&deg;</p>
            <p>weather={info.weather}&deg;</p>
            <p>
                the weather can be describe as <i>{info.weather}</i>and feels like {info.feelslike}&deg;c
            </p>
           
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>)
}