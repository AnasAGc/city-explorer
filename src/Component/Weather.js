import React from 'react';



class Weather extends React.Component{
   

    render(){
        return(
          <div>
             {
                 this.props.cityWatherData.map((item)=>{
                    return(

                        <div>


                            {<p> Description: The temprture  {item.temp} with {item.description}   </p>}
                            {<p> Date: {item.data}</p>}
                            </div>

                    )
                    
                 })
             }

          </div>
        )
    }
}

export default Weather;


// <p> {this.props.cityWatherData[0].data }</p>
// <p> {this.props.cityWatherData.description}</p>

