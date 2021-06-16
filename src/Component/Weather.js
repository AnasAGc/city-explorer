import React from 'react';
import WeatherDay from './WeatherDay'


class Weather extends React.Component{
   

    render(){
        return(
            < WeatherDay cityWatherData={this.props.cityWatherData}/>
        )
    }
}
export default Weather;



