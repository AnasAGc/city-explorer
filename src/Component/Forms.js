import React from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import {FormControl,Button} from 'react-bootstrap/';
import InputGroup from 'react-bootstrap/InputGroup'


class Forms extends React.Component {
  // carfull how you write the props constructor
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handlSubmition = async (event) => {
    event.preventDefault();
    let cityName = event.target.searchQuery.value;
    // console.log(cityName);
    let key = "pk.0dce802ef0a078f73c16f0a005962190";
    let locURL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${cityName}&format=json`;

    try {
      let locResult = await axios.get(locURL);
      var newData = locResult.data[0];

      let wetherURL = `https://weather-city5.herokuapp.com/weatherForcast?cityLat=${newData.lat}&cityLon=${newData.lon}`;
      let weatherResult = await axios.get(wetherURL);

      let moviesUrl = `https://weather-city5.herokuapp.com/movies?cityName=${cityName}`;
      let moviesResult = await axios.get(moviesUrl);

      this.props.update(newData);
      this.props.showValue(false);
      this.props.weatherFunction(weatherResult.data);
      this.props.moviesFunction(moviesResult.data);
      this.setState({
        show: false,
      });

    } catch {
      this.setState({
        show: !this.state.show,
      });

      this.props.showValue(true);
    }
    console.log(this.state.show);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlSubmition}>
          
          {/* <input type="text" placeholder="city name" name="searchQuery" /> */}
          {/* <input type="submit" value="Explore" /> */}

          <InputGroup className="mb-3">
              <FormControl
              placeholder="Entet City Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              size="lg"
              name="searchQuery"
            />
            <Button type="submit"  size="lg"  variant="primary" id="button-addon2">
             Search
            </Button>
          </InputGroup>


        </form>
        {this.state.show &&<Alert variant="danger">Error  400 check it out!</Alert> }

           
        
      </div>
    );
  }
}

export default Forms;








// let wetherURL = `https://weather-city5.herokuapp.com/cityLat=${31.5159996}&cityLon=${34.4289168}`;
// let wetherURL = `http://localhost:3002/weather?cityLat=${newData.lat}&cityLon=${newData.lon}`;
//http://localhost:3002/weatherForcast?cityLat=31.5159996&cityLon=34.4289168
// console.log(newData.display_name.split(',')[0]);
// console.log(weatherResult.data);
// console.log(newData.lat);
// console.log(moviesResult.data);
