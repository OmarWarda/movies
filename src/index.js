import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Appv1 from './Appv1';
// import StarRating from './StarRating';

// function Test () {
//   const [movieRating, setMovieRating] = useState (0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} />
//       <p>You have rated this movie {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (
  <React.StrictMode>
    <Appv1 />
    {/* <StarRating
      maxRating={'hahha'}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating maxRating={8} color="red" size={60} defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
