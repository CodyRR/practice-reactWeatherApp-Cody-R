import React, {useEffect, useRef, useState} from 'react'
import {weatherData} from '../WeatherData'

function CityForcast ({selectedCity}) {

    const [forecast, setForecast] = useState(null)
    const [invalidCity, setInvalidCity] = useState(false);
    const detailRef = useRef(null);

    useEffect(() => {

        if(selectedCity in weatherData){
            setForecast(weatherData[selectedCity])
            setInvalidCity(false);
        } else {
            if(selectedCity)
            {
                setForecast(null);
                setInvalidCity(true);
            }
        }

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
                <button onClick={clearDisplay}>Clear Data</button>
            </div>  
        )
    }

    function invalidDisplay() {
        return (
            <div>
                <h2>City is not in list.</h2>
            </div>
        )
    }

    function clearDisplay() {
        setForecast(null);
        setInvalidCity(false);
        
    }

    return (
        <div>
            {forecast && displayData()}
            {invalidCity && invalidDisplay()}
        </div>
    )
}

export default CityForcast