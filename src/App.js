import React from "react";
import Form from "./Component/Form";
import CityRande from "./Component/CityRande";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: "",
      show:'',
    };
  }
  updateData = (newCityData) => {
    this.setState({
      cityData: newCityData,
    });
  };
  show=(showValue)=>{
    this.setState({
      show:showValue
    })
  }

  render() {
    return (
      <dive>
        <Form showValue={this.show} update={this.updateData} />
        <CityRande showMapValue={this.state.show} cityData={this.state.cityData} />
      </dive>
    );
  }
}

export default App;
