import React from "react";
import Forms from "./Component/Forms";
import CityRande from "./Component/CityRande";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: "",
      showFlage:false,
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

  

  render() {
    return (
      <div className='mainPage' >
        <Forms showValue={this.show} update={this.updateData} />
        <CityRande mapShowValue={this.state.showFlage} cityData={this.state.cityData} />
      </div>
    );
  }
}

export default App;
