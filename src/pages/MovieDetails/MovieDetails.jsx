import { useParams , useLocation,  Outlet} from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import axios from 'axios';
import Notiflix from 'notiflix';
import {
 DetailsTitle,DetailsText, DetailsContainer,MoviesIdImg, HelpContainer,AdditionalInfo,AdditionalLink, Container, BackLink
} from './MovieDetails.styled' ;

 const MY_KEY = '801dae059c6d6328a7993480e6d71c49';




const MovieDetails = () => {
  const [movie, setMovie] = useState([])
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${MY_KEY}`
        );

        const data = response.data;

        const movieObj = {
          title: data.title || data.name,
          average: data.vote_average,
          overview: data.overview,
          genres: data.genres.map(({ name }) => name).join(', '),
          poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          date: data.release_date.split('-')[0],
        };
        
        setMovie(movieObj);

        if (response.length === 0) {
          Notiflix.Notify.warning('There are no movies by this title');
        }
    
      } catch (error) {
        console.log(error);
        Notiflix.Notify.warning('This movie has not details.');
    
      }
  
    };
    fetchMovieDetails()
  }, [movieId]);

  

  return (
    <div>
      
      {movie && (
        <Container> 
          <BackLink  to={backLinkLocationRef.current}>Back to search</BackLink>
          
          
          <DetailsContainer>
            <MoviesIdImg src ={movie.poster} alt={movie.title} />
            <HelpContainer>
              
            <DetailsTitle>{movie.title} ({movie.date})</DetailsTitle>
              <DetailsText>User score: {movie.average}</DetailsText>
              <DetailsTitle>Overview</DetailsTitle>
              <DetailsText>{movie.overview}</DetailsText>
              <DetailsTitle>Genres</DetailsTitle>
              <DetailsText>{movie.genres}</DetailsText>
              

              <AdditionalInfo>
                <h3>Additional information:</h3>
              <AdditionalLink to="cast">Cast </AdditionalLink>
              
              <AdditionalLink to="reviews">Reviews </AdditionalLink>
              
              </AdditionalInfo>
              <div>
                  <Outlet/>
              </div>
</HelpContainer>
              
            </DetailsContainer>
      
        </Container>
      )}
     
    </div>
  )
 

};

export default MovieDetails;
