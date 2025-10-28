import React, {useEffect, useRef, useState} from 'react'
import {weatherData} from '../WeatherData'

function CityForcast ({selectedCity}) {

    const [forecast, setForecast] = useState(null)
    const detailRef = useRef(null);

    useEffect(() => {

        setForecast(weatherData[selectedCity])

    }, [selectedCity]);

    const handleFocus = () => {

        if(detailRef.current) {
            detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function displayData(){
        return(
            <div>
                <h2>Weather in {selectedCity}</h2>
                <p>Weather: {forecast["summary"]}</p>
                <button onClick={handleFocus}>View Details</button>
                <p ref={detailRef}>Details: {forecast["details"]}</p>
            </div>  
        )
    }

    return (
        <div>
            {forecast && displayData()}
        </div>
    )
}

export default CityForcast