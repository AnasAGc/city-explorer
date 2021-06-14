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
      let newData = locResult.data[0];
      console.log(newData);
      this.props.update(newData);
      this.props.showValue(false);
    } catch {
      this.setState({
        show:true,
      });

      this.props.showValue(true);
    }
  };

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
