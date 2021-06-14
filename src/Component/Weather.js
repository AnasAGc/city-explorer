import React from 'react';



class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
          <div>
              <p> {this.props.cityWatherData.city_name}</p>
              <p> {this.props.cityWatherData.description}</p>
              
          </div>
        )
    }
}

export default Weather;