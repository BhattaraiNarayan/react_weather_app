import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './SearchBox.css'

const SearchBox = ({ updateInfo}) => {
 
const [city, setCity] = useState("");
const [error, setError] = useState(false);

const API_URL =
  "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "0f36c3a0ab524158acc6ffd15ef23a6a";

const getWeather = async () => {

const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log(data);

    const result={
      city:data.name,
      temp:data.main.temp,
      tempMin:data.main.temp_min,
      tempMax:data.main.temp_max,
      humidity:data.main.humidity,
      feelsLike:data.main.feels_like,
      weather:data.weather[0].description,
    };
    console.log(result);
    return result;
}

let handleChange=(e)=>{
    setCity(e.target.value);
}

let handleSubmit=async(e)=>{ 

try {

e.preventDefault();
console.log(city);
getWeather(city); 
setCity("");
let newInfo = await getWeather();
updateInfo(newInfo);

} catch (error) {
  setError(true);
}
};


  return (
    <div className='SearchBox'>
      <h3>
        Enter the city name below to get the weather information
      </h3>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city}  onChange={handleChange} required />
        <br />
        <br />
        <Button variant="contained" type='submit' >
          Search
        </Button>
        {error && <p style={{color:"red"}}>City not found. Please enter a valid city name.</p>}
      </form>
    </div>
  );
}
export default SearchBox
