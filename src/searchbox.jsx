import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
export default function SearchBox({updateInfo}){
    let [city, setCity]=useState("");
    
      
    let getWeatherInfo=async()=>{
        // API_KEY="629b370f990acff605f70d4b136a66ef";
         const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=629b370f990acff605f70d4b136a66ef&units=metric`);
            
       
        let jsonResponse=await response.json();
        // console.log(jsonResponse);
        let result={
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        }
        console.log(result);
        return result;

    }
    
    let handleChange=(event)=>{
        setCity(event.target.value);

    }
    
    let handleSubmit=async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo= await getWeatherInfo();
       updateInfo(newInfo);
    };

    return(
       <div className="searchbox">
        <h3>search for weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city"
         label="city name"
         variant="outlined"  
         required 
         value={city}
         onChange={handleChange}/>
        <br></br><br></br>
        <Button variant="outlined" onClick={getWeatherInfo}>search</Button>
        </form>
       </div>
    )
}