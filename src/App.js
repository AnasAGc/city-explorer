import React from "react";
import Forms from "./Component/Forms";
import CityRande from "./Component/CityRande";
import Weather from "./Component/Weather";
import Movies from "./Component/Movies";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: "",
      showFlage: false,
      weatherData: [],
      moviesData: [],
    };
  }
  updateData = (newCityData) => {
    this.setState({
      cityData: newCityData,
    });
    console.log(newCityData);
  };
  show = (showValue) => {
    this.setState({
      showFlage: !showValue,
    });
  };
  updatWeather = (weatherData) => {
    this.setState({
      weatherData: weatherData,
    });
  };

  updatMovies = (update) => {
    this.setState({
      moviesData: update,
    });
  };

  render() {
    return (
      <div>
        <h1 > City Explorer</h1>
        <Forms
          moviesFunction={this.updatMovies}
          weatherFunction={this.updatWeather}
          showValue={this.show}
          update={this.updateData}
        />
        <div className={"down_header"}>
          <CityRande
            mapShowValue={this.state.showFlage}
            a={this.state.cityData}
          />
          <Weather
            show={this.state.showFlage}
            cityWatherData={this.state.weatherData}
          />
        </div>
        <Movies data={this.state.moviesData} />
      </div>
    );
  }
}

export default App;
