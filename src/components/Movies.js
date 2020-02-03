import React from 'react';
import { movies } from '../data';


const Movies = () => {


  // movieGenres = (genres) => {
  //   let i;
  //   for (i = 0; i < genres.length; i++) {
  //     return (
  //     <ul>
  //     {genres[i] + "<br>"}
  //     </ul> 
  //     )
  //   }
  // }

  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        { movies.map(({ title, time, genres }, index ) => 
        <div key={index} className="movie" >
          <h3>
            { title } - { time } mins
          </h3>
          <ul>
            {genres.map((genre, index) => {
              return <li key={ index }>{genre}</li>;
              }
            )}
          </ul>
        </div>
          )}
    </div>
  )
}


export default Movies;


// { movies.map(({ title, time, genres }, index ) => 
// <div key={index} className="movie" >
//     <h3>
//         { title } - { time }
//     </h3>
//         { genres.map(genre => {
//           <ul>
//             {genre}
//           </ul>
//         }) }
// </div>




// genres: ["Action", "Adventure", "Fantasy"]

// let i;
// for (i = 0; i < genres.length; i++) {
//   <ul>
//   genres[i] + "<br>"
//   </ul>
// }