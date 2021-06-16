import React from "react";
import Table from "react-bootstrap/Table";

class WeatherDay extends React.Component {
  render() {
    return (
      <Table className="table_weather" striped bordered hover variant="white">
        {this.props.show &&<thead>
          <tr>
            <th>Date</th>
            <th>Temprture</th>
            <th>Description</th>
          </tr>
        </thead>}
        {this.props.cityWatherData.map((item, inx) => {
          return (
            <tbody key={inx}>
              <tr>
                <td>{item.data}</td>
                <td>{item.temp}</td>
                <td>{item.description} </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    );
  }
}

export default WeatherDay;
