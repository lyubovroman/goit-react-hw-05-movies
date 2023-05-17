// import { useSearchParams, Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import {MoviesContainer,MoviesItem, MoviesForm,MoviesList, MoviesInput, MoviesSearchBtn, ItemTitle, ItemImg} from './Movies.styled'
// import { FcBinoculars } from "react-icons/fc";
// import axios from 'axios';
//   import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';


// export const MY_KEY = '801dae059c6d6328a7993480e6d71c49';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
// // const [searchQuery, setSearchQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieId = searchParams.get('movieId') ?? '';
//   const location = useLocation();
  

//   useEffect(() => {
// if (!movieId) {
//       return
//     };
    
//     const fetchSearchMovies = async () => {
//       try {
        
//      const response = await axios.get(
//           `https://api.themoviedb.org/3/search/movie?&api_key=${MY_KEY}&query=${movieId}&language=en-US&page=1&include_adult=false`
//         );

//         const data = response.data.results;
//         const filteredData = data.map(({ id, original_title,  poster_path }) => ({
//           id,
//           title: original_title,
//           poster: poster_path
//             // ? `https://image.tmdb.org/t/p/w500${poster_path}`
//             // : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/1200px-Question_mark.svg.png',
//         }));

//    setMovies(filteredData);

//   } catch (error) {
//    toast.error("Warning smth was going wrong")
    
//   }
//     };
//      fetchSearchMovies()
//   }, [ movieId, searchParams]);

//      const onChange = ({ target }) => {
//     setMovies(target.value);
//   };

//   const updateQueryString = event => {
//     const movieIdValue = event.target.value;
//     if (movieIdValue === '' || !movieIdValue) {
//       toast.error('Warning!Enter any search value')
//       return setSearchParams({})
//     } setSearchParams({movieId: movieIdValue})
//   };

//   const visibleMovies = movies.filter(movie =>
//     movie.includes(movieId)
//   );

//   // const handleSearchSubmit = event => {
//   //   event.preventDefault();
//   //   let value = event.target.elements.search.value;
//   //  setSearchQuery(value);
//   //   setSearchParams({ query: value });
//   //    setSearchQuery('');
  
//   // };
//   //  const handleSearchSubmit = event => {
//   //   event.preventDefault();
//   //   const query = searchQuery.trim();
//   //   if (query === '') {
//   //     return;
//   //   }
//   //   setSearchParams({ query });
//   // };


//   return (
//    <MoviesContainer>
           
//             <MoviesForm onSubmit={onChange}>
//         <MoviesInput
//           type="text"
//           placeholder="Search movie ..."
//           value={movieId}
//           onChange={updateQueryString}
   
//         />
//          <MoviesSearchBtn
//           type="submit">
//                    < FcBinoculars size="24px"/>
//         </MoviesSearchBtn>
//       </MoviesForm>
      
//        {movies && (
//         <MoviesList>
//           {visibleMovies.map(({ id, title, poster_path }) => {
//             return (
//               <MoviesItem key={id}>
//                 <Link to={`${id}`}state={{ from: location }} key={id}>
//                   <ItemImg src={poster_path} alt={title} />
//                   <ItemTitle>{title}</ItemTitle>
//                 </Link>
//               </MoviesItem>
//             );
//           })}
//         </MoviesList>
//       ) }
//        <ToastContainer position="top-center" autoClose={3000} limit={1} />
//     </MoviesContainer>
//   );

//         // { movies ? (<ul>
//         //   {movies.map({id, title, poster_path} => {
//         //     return (
//         //       <li key={id}>
//         //   <Link to={`${id}`} state={{ from: location }}>
//         //     <ItemImg src={poster} alt={title} />
//         //           <ItemTitle>{title}</ItemTitle>
//         //         </Link>
//         //       </li>
//         //     )
//         //   })}
//         // </ul>)}
      
           
       
           


  
 
// };

// export default Movies;


import { useSearchParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { MoviesContainer, MoviesItem, MoviesForm, MoviesList, MoviesInput, MoviesSearchBtn, ItemTitle, ItemImg } from './Movies.styled';
import { FcBinoculars } from "react-icons/fc";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MY_KEY = '801dae059c6d6328a7993480e6d71c49';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  const [searchQuery, setSearchQuery] = useState(movieId || '')
  const location = useLocation();

  useEffect(() => {
    if (movieId === null) {
      return;
    }

    const fetchSearchMovies = async () => {
      try {
        const response = await axios.get(
           `https://api.themoviedb.org/3/search/movie?api_key=${MY_KEY}&language=en-US&query=${movieId}&page=1&include_adult=false`
        );

        

        const data = response.data.results;

        const filteredData = data.map(({ id, title,original_title, poster_path}) => ({
          id,
          
          title: title || original_title,
          poster: poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/1200px-Question_mark.svg.png',
        }));

      
        setMovies(filteredData);

      } catch (error) {
       console.log(error);
      }
       
    };

    fetchSearchMovies();
  }, [searchParams, movieId]);

  // const updateQueryString = event => {
  //   const movieIdValue = event.target.value;
  //   if (movieIdValue === '' || !movieIdValue) {
  //     toast.error('Warning! Enter any search value');
  //     setSearchParams({});
  //   } else {
  //     setSearchParams({ movieId: movieIdValue });
  //   }
  // };

  // const visibleMovies = movies.filter(movie =>
  //   movie.title.includes(searchQuery)
  // );

  const handleSubmit = e => {
    e.preventDefault();
    const  movieId =  searchQuery.trim();
    if ( movieId === '') {
      return;
    }
    setSearchParams({ movieId });
  };
   const onChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <MoviesContainer>
      <MoviesForm onSubmit={event => handleSubmit(event)}>
        <MoviesInput
          type="text"
          placeholder="Search movie..."
          value={searchQuery}
      onChange={onChange}
          // value={searchQuery}
          // onChange={updateQueryString}
        />
        <MoviesSearchBtn type="submit">
          <FcBinoculars size="24px" />
        </MoviesSearchBtn>
      </MoviesForm>

      {movies && (
        <MoviesList>
          {movies.map(({ id, title, poster }) => {
            return(
            <MoviesItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <ItemImg src={poster} alt={title} />
                <ItemTitle>{title}</ItemTitle>
              </Link>
            </MoviesItem>
           );
          })}
        </MoviesList>
      )}

      <ToastContainer position="top-center" autoClose={3000} limit={1} />
    </MoviesContainer>
  );
};

export default Movies;
