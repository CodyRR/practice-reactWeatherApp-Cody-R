import { useState} from 'react'
import {weatherData} from '../WeatherData'
import CityForcast from './CityForecast';

export default function CityList () {

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = Object.keys(weatherData)

    return (
        <div>
            <h1>Choose City</h1>
            <ul>
                {cities.map((city) => (
                    <li key={city} onClick={() => setSelectedCity(city)}>
                        {city}
                    </li>
                ))}
            </ul>

            <CityForcast selectedCity={selectedCity} />
        </div>
    )
}