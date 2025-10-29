import { useState} from 'react'
import {weatherData} from '../WeatherData'
import CityForcast from './CityForecast';

export default function CityList () {

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = Object.keys(weatherData);
    let errorCityTest = "Kansas City"

    return (
        <div id="container">
            <h1>Choose City</h1>
            <ul>
                {cities.map((city) => (
                    <li key={city} onClick={() => setSelectedCity(city)}>
                        {city}
                    </li>
                ))}
                <li key="errorTest" onClick={() => setSelectedCity(errorCityTest)}>Error</li>
            </ul>

            <CityForcast selectedCity={selectedCity} />
        </div>
    )
}