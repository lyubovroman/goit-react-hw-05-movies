import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
    HomeContainer,
    HomeTitle,
     MoviesList,
  MoviesItem,
  MoviesImg,
  MoviesTitle,
  
 
} from './Home.styled';

export const MY_KEY = '801dae059c6d6328a7993480e6d71c49';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${MY_KEY}`
        );
        const data = response.data.results;
        const filteredData = data.map(({ id, title, name, poster_path }) => ({
          id,
          title: title || name,
          poster_path:`https://image.tmdb.org/t/p/w500/${poster_path}`,
        }));

        setPopularMovies(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
      <MoviesList>
        {popularMovies.map(({ id, title, poster_path }) => {
          return (
            <MoviesItem key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <MoviesImg src={poster_path} alt={title} />
                <MoviesTitle>{title}</MoviesTitle>
              </Link>
            </MoviesItem>
          );
        })}
      </MoviesList>
    </HomeContainer>
  );
};

export default Home;