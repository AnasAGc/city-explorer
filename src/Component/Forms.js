import React from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { FormControl, Button } from "react-bootstrap/";
import InputGroup from "react-bootstrap/InputGroup";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handlSubmition = async (event) => {
    event.preventDefault();
    let cityName = event.target.searchQuery.value;
    let key = "pk.0dce802ef0a078f73c16f0a005962190";
    let locURL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${cityName}&format=json`;

    axios
      .get(locURL)
      .then((locResult) => {
        let newData = locResult.data[0];
        this.weather(newData);
        this.movies(cityName);
        this.props.update(newData);
        this.props.showValue(false);
        this.setState({ show: false });
      })
      .catch(() => {
        this.setState({ show: !this.state.show });
      });
  };

  movies = (cityName) => {
    let url = `https://weather-city5.herokuapp.com/movies?cityName=${cityName}`;
    axios.get(url).then((moviesResult) => {
      let moviesData = moviesResult.data;
      this.props.moviesFunction(moviesData);
    });
  };

  weather = (newData) => {
    let url = `https://weather-city5.herokuapp.com/weatherForcast?cityLat=${newData.lat}&cityLon=${newData.lon}`;
    axios.get(url).then((weatherResult) => {
      let weatherDate = weatherResult.data;
      this.props.weatherFunction(weatherDate);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlSubmition}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Entet City Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              size="lg"
              name="searchQuery"
            />
            <Button
              type="submit"
              size="lg"
              variant="primary"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </form>
        {this.state.show && (
          <Alert variant="danger">Error 400 check it out!</Alert>
        )}
        
      </div>
    );
  }
}

export default Forms;
