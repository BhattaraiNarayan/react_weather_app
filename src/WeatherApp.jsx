import React, {useState} from 'react'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

const WeatherApp = () => {

    const[weatherInfo, setWeatherInfo] = useState({
        city:'kobe',  
        feelsLike: 32.97,
        humidity: 44,
        temp: 27.56,
        tempMax: 27.77,
        tempMin: 26.34,
        weather:"overcast clouds",
    });
    
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }



    return (
    <div style={{textAlign:"center", backgroundColor:'smoke', height:'800px'}}>
      <h1>Weather App by Narayan</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
