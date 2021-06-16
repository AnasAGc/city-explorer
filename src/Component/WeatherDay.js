import React from 'react';


class WeatherDay extends React.Component{

    render(){
        return(
            
            <div>
            {
                this.props.cityWatherData.map((item,inx)=>{
                   return(

                       <div key={inx}>


                           {<p> Description: The temprture  {item.temp} with {item.description}   </p>}
                           {<p> Date: {item.data}</p>}
                           </div>

                   )
                   
                })
            }

         </div>
        )
    }
};



export default WeatherDay;
