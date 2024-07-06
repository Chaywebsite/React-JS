import React from "react";


function Movie(data){
    return <div className="movie">
        <figure>
            <img src={data.path}/>
            <figcaption>
                <h3>{data.name}</h3>
                <p>{data.gener}</p>
            </figcaption>
        </figure>
    </div>
}
export default Movie;