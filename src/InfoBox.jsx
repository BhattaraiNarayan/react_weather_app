import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import myImage from './assets/weather.jpg';
import './InfoBox.css';

const InfoBox = ({info}) => {

// let info = {
//   city:'kobe',  
//   feelsLike: 32.97,
//   humidity: 94,
//   temp: 27.56,
//   tempMax: 27.77,
//   tempMin: 26.34,
//   weather:"overcast clouds",
// };

  return (
    <div className="InfoBox">
      <div className='container'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={myImage}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min Temp={info.tempMin}&deg;C</p>
              <p>Max Temp={info.tempMax}&deg;C</p>
              <p>
                The weather is described as feels like&nbsp;{info.feelsLike}
                &deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox
