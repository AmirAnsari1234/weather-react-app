import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        temp: 32.02,
        temp_min: 22.02,
        temp_max: 32.02,
        humidity: 65,
        feels_like: 38.72,
        weather: "broken clouds",
        city: "Bareilly",
        country: "IN"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }   

    return (
        <div style={{textAlign: 'center', marginTop: '20px', border: '2px solid black', width: '400px', marginLeft: 'auto', marginRight: 'auto', padding: '10px', borderRadius: '10px', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)'   }}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}