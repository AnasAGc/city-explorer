import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
  
  
    render(){
        return(
           <Movie data={this.props.data}/>
        )
    }
}   


export default Movies;
