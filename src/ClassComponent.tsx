import React from 'react';
import FunctionalComponent from './FunctionalComponent'

// type will define what kind of values are needed for state
type GeolocationWeather = {
    lat: number,
    lon: number,
    weather: any,
    weatherTemp: number,
    weatherWeather: any
}

class Coordinates extends React.Component<{}, GeolocationWeather> {

    constructor(props: any) {
        super(props)
        this.state = {
            lat: 0,
            lon: 0,
            weather: {},
            weatherTemp: 0,
            weatherWeather: {}

        }
    }

    // methods only in classes - this will work like a function
    // any may need to be updated to array, object, etc.
    success = (pos: any) => {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);

        this.setState({
            lat: crd.latitude,
            lon: crd.longitude
        })

    // now fetch to the OpenWeather API using a key
    // API call will require lat, lon, and the key

    let url: string = `api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=7412735ac0d31e3b03ff67f2e2dfe147`
    
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(weatherData => {
        this.setState({
        weather: weatherData,
        weatherTemp: weatherData.main,
        weatherWeather: weatherData.weather[0]
    });
        console.log(this.state.weather)
    })
    }

    // navigator is built into JS - the 
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success)
    }

    render(){
        return(
            <div>
                <FunctionalComponent name={this.state.weather.name} temp={this.state.weatherTemp} weather={this.state.weatherWeather} />
            </div>
        )
    }
}

export default Coordinates;