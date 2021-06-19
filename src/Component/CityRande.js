import React from "react";
import Figure from "react-bootstrap/Figure";
import Alert from "react-bootstrap/Alert";

class CityRande extends React.Component {


  

  render() {
    return (
      <div className={"cityInfoComponent"}>
        {this.props.mapShowValue && (
          <Figure.Caption>
            <Alert variant="success ">
              {this.props.a.display_name}
            </Alert>
          </Figure.Caption>
        )}
        <Figure>
          {this.props.mapShowValue && (
            <Figure.Image
              width={800}
              height={800}
              alt="171x180"
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.props.a.lat},${this.props.a.lon} `}
            />
          )}

        </Figure>
      </div>
    );
  }
}




export default CityRande;

// {/*
//         {this.props.mapShowValue && (
//           <p> Location : {this.props.cityData.display_name} </p>
//         )}
//         {this.props.mapShowValue && (
//           <p> Latitude : {this.props.cityData.lat} </p>
//         )}
//         {this.props.mapShowValue && (
//           <p> Longitude : {this.props.cityData.lon} </p>
//         )}

//         {this.props.mapShowValue && (
//           <img
//             src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.props.cityData.lat},${this.props.cityData.lon} `}
//             alt="map" hight='300px' width='300px'
//           />
//         )} */}
