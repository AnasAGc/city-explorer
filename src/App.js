import React from "react";
import Forms from "./Component/Forms";
import CityRande from "./Component/CityRande";
import Weather from "./Component/Weather";
import Movies from "./Component/Movies";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: "",
      showFlage:false,
      weatherData:[],
      moviesData:[],
    };
  }
  updateData = (newCityData) => {
    this.setState({
      cityData: newCityData,
    });
  };
  show=(showValue)=>{
    this.setState({
      showFlage:!showValue
    })
  }
  updatWeather=(weatherData)=>{
    this.setState({
      weatherData:weatherData
    })
  }

updatMovies=(update)=>{
    this.setState({
      moviesData:update
    })
    console.log(update);
  }
  
  

  render() {
    return (
      <div className='mainPage' >
        <Forms moviesFunction={this.updatMovies} weatherFunction={this.updatWeather} showValue={this.show} update={this.updateData} />
        <CityRande mapShowValue={this.state.showFlage} cityData={this.state.cityData} />
        <Weather cityWatherData={this.state.weatherData} />
        <Movies data={this.state.moviesData} />
      </div>
    );
  }
}

export default App;
