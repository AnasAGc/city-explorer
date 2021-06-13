import React from "react";

class CityRande extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.setState={
        show:this.props.showMapValue;
    }
  }

  render() {
    return (
      <div>
        <p> Location : {this.props.cityData.display_name} </p>
        <p> Latitude : {this.props.cityData.lat} </p>
        <p> Longitude : {this.props.cityData.lon} </p>
        { && (
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.props.cityData.lat},${this.props.cityData.lon} `}
            alt="map"
          />
        )}
      </div>
    );
  }
}

export default CityRande;
