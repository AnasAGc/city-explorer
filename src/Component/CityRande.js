import React from "react";

class CityRande extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapFlag: true,
    };
    this.setState = {
      mapFlag: this.props.mapShowValue,
    };
  }

  render() {
    return (
      <div className={'cityInfoComponent'}>
        {this.props.mapShowValue && (
          <p> Location : {this.props.cityData.display_name} </p>
        )}
        {this.props.mapShowValue && (
          <p> Latitude : {this.props.cityData.lat} </p>
        )}
        {this.props.mapShowValue && (
          <p> Longitude : {this.props.cityData.lon} </p>
        )}

        {this.props.mapShowValue && (
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.props.cityData.lat},${this.props.cityData.lon} `}
            alt="map" hight='300px' width='300px'
          />
        )}
      </div>
    );
  }
}

export default CityRande;
