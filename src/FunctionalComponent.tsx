import React from 'react'


type functionalProps = {
    name: string,
    temp: any,
    weather: any
}

const FunctionalComponent = ({name,temp,weather}: functionalProps) => {

    return(
        <div>
            <p>Your location is {name}</p>
            <p>Right now the temperature is {temp.temp}</p>
            <p>The high today will be {temp.temp_max} degrees and the low will be {temp.temp_min} degrees.</p>
            <p>The weather outside today will be {weather.description}</p>
        </div>
    )
}

export default FunctionalComponent;