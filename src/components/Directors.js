import React from 'react';
import { directors } from '../data';

const Directors = () => {



        // { movies.map(({ title, time, genres }, index ) => 
        // <div key={index} className="movie" >
        //   <h3>
        //     { title } - { time } mins
        //   </h3>

  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      { directors.map(({ name, movies }, index ) => 
        <div key={ index } >
            {name}
            <ul>
              {movies.map((movie, index) => {
                return (
                  <li key={index}>{movie}</li>
                )
              })
              }
            </ul>
        </div>
    
    )}
    </div>
  );
}

export default Directors
