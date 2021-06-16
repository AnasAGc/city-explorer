import React from "react";
import { Card, Button } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((item, inx) => {
          return (
            <div key={inx}>
              {console.log(item)}
              {/* {<p> {item.title} </p>}
              {<p> {item.overview}</p>}
              {<p> {item.averageVotes}</p>}
              {<p> {item.popularity}</p>}
              {<p> {item.totalVotes}</p>} */}

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${item.imagel}`}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.overview}</Card.Text>
                  <Card.Text>Averg vots: {item.averageVotes}</Card.Text>
                  <Card.Text> Total Vots: {item.totalVotes}</Card.Text>
                  <Card.Text>Popularity: {item.popularity}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Movie;
