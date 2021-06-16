import React from 'react';
import WeatherDay from './WeatherDay'


class Weather extends React.Component{
   

    render(){
        return(
            < WeatherDay show={this.props.show} cityWatherData={this.props.cityWatherData}/>
        )
    }
}
export default Weather;



