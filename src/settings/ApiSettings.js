import axios from 'axios';

export const MY_KEY = '801dae059c6d6328a7993480e6d71c49';

export const fetchTrendingMovies = async() => {
try {
    return await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${MY_KEY}`
    );
  } catch (event) {
    console.log(event);
  }
};

export const fetchSearchMovies = async (searchByWord) => {
  try {
    return await axios.get(
      'https://api.themoviedb.org/3/search/movie?api_key=${MY_KEY}&language=en-US&query=${searchByWord}&page=1&include_adult=fals'
    );
  } catch (event) {
    console.log(event
    );
    
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    return await axios.get(
      'https://api.themoviedb.org/3/movie/${movieId}?api_key=<${MY_KEY}&language=en-US'

    )
    
  } catch (event) {
    console.log(event);
    
  }
};
export const fetchMovieActors = async (movieId) => {
  try {
    return await axios.get(
      'https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${MY_KEY}&language=en-US'
    )
  } catch (event) {
    console.log(event);
  
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    return await axios.get(
      'https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${MY_KEY}&language=en-US&page=1'
    )
    
  } catch (event) {
    console.log(event);
    
  }
}

