import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import myImage from './assets/weather.jpg';
import snow from './assets/snow.jpg';
import rain from './assets/rain.jpg';
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
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
      <div className="container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? rain : info.temp > 15 ? myImage : snow}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              component={"span"}
            >
              <p style={{ fontWeight: "bold"}}>
                Temperature:&nbsp;&nbsp;{info.temp}&deg;C
              </p>
              <p>Humidity:&nbsp;&nbsp;{info.humidity}</p>
              <p>Min Temp:&nbsp;&nbsp;{info.tempMin}&deg;C</p>
              <p>Max Temp:&nbsp;&nbsp;{info.tempMax}&deg;C</p>
              <p>
                The weather feels like&nbsp;{info.feelsLike}
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
