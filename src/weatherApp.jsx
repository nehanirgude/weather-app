import SearchBox from './searchbox'
import InfoBox from './infoBox.jsx'
import { textAlign } from '@mui/system'
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);

    };
   return(<div>
    <h2 style={{textAlign: "center"}}>weather app by me</h2>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
   </div>) 
}