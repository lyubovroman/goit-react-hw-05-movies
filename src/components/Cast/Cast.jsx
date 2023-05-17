import {  useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { CastItem, CastItemImg, CastList, CastName,CastText } from "./Cast.styled";


 export const MY_KEY = '801dae059c6d6328a7993480e6d71c49';

const Cast = () => {
  // Исправлено: должно быть useState, а не { cast, setCast } = useState([])
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieActors = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${MY_KEY}&language=en-US`
        );

        const data = response.data.cast; // Исправлено: data.response.cast -> response.data.cast
        const filteredData = data.map(({ id, name, profile_path, character }) => ({
          id,
          name,
          character,
          profile: profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : 'https://e7.pngegg.com/pngimages/491/220/png-clipart-woman-question-mark-mysterious-people-woman.png',
        }));

        setCast(filteredData);
      } catch (error) { // Исправлено: event -> error
        console.log(error);
      }
    };

    fetchMovieActors();
  }, [movieId]);

  return (
    <>
      {cast !== null && cast.length !== 0  ? (
        <CastList>
          {cast.map(({ id, name, character, profile }) => {
            return (
              <CastItem key={id}>
                <CastItemImg src={profile} alt={name} />
                <CastName>{name}</CastName>
                <CastText>Character: {character}</CastText>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <p>Sorry, but we don't have a list of cast for this movie.</p>
      )}
    </>
  );
};

export default Cast;
