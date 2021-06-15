import React from "react";
import axios from "axios";
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
    let key = "pk.0dce802ef0a078f73c16f0a005962190";
    let locURL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${cityName}&format=json`;
    
    try {
      let locResult = await axios.get(locURL);
      var newData = locResult.data[0];
      // let wetherURL = `https://weather-city5.herokuapp.com/cityLat=${31.5159996}&cityLon=${34.4289168}`;   
      // let wetherURL = `http://localhost:3002/weather?cityLat=${newData.lat}&cityLon=${newData.lon}`;   

      let wetherURL = `https://weather-city5.herokuapp.com/weather?cityLat=${newData.lat}&cityLon=${newData.lon}`;   
      let weatherResult=await axios.get(wetherURL);
      // console.log(weatherResult.data);
      
      // console.log(newData.lat);
      this.props.update(newData);
      this.props.showValue(false);
      this.props.weatherFunction(weatherResult.data.citywither);
      console.log(weatherResult.data.citywither);
    } catch {
      this.setState({
        show:true,
      });
      
      
      this.props.showValue(true);
    }
  };
  handl=()=>{

  }


  render() {
    return (
      <div className='formComponent' >
        <form onSubmit={this.handlSubmition}>
          <input type="text" placeholder="city name" name="searchQuery" />
          <input type="submit" value="Explore" />
        </form>
        {this.state.show && <p>Error Status Code: 400</p>}
      </div>
    );
  }
}

export default Forms;
