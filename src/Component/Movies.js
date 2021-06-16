import React from "react";
import Movie from "./Movie";
import { CardColumns} from "react-bootstrap";
class Movies extends React.Component {
  
  
    render(){
        return(
            <CardColumns>
           <Movie data={this.props.data}/>
           </CardColumns>
        )
    }
}   


export default Movies;
