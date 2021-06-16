import React from 'react'



class Movie extends React.Component{

    render(){
        return(
            <div>
                  {
                 this.props.data.map((item,inx)=>{
                    return(

                        <div key={inx}>


                            {<p>  {item.title}   </p>}
                            {<p> {item.overview}</p>}
                            {<p> {item.averageVotes}</p>}
                            {<p> {item.popularity}</p>}
                            {<p> {item.totalVotes}</p>}

                            </div>

                    )
                    
                 })
             }
            </div>
        )
    }
}


export default Movie;
