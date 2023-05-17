import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReviewsAuthor, ReviewsContent, ReviewsItem, ReviewsList } from './Reviews.styled';
export const MY_KEY = '801dae059c6d6328a7993480e6d71c49';

const Rewievs = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovieReviews = async (movieId) => {
            try {
                 const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${MY_KEY}&language=en-US`
        );
                const data = response.data.results;
                const filteredData = data.map(({ author, content, id }) => ({
                    id,
                    author,
                    content,
                }));
                setReviews(filteredData);
    
            } catch (error) {
                console.log(error);
    
            }
        };
        fetchMovieReviews()
    
    }, [movieId]);

    return (
    <>
            {reviews && reviews.length !== 0 ? (<div>
                <ReviewsList>
                    {reviews.map(({ id, author, content }) => {
                        return <ReviewsItem key={id}>
                            <ReviewsAuthor>{author}</ReviewsAuthor>
                            <ReviewsContent>{content}</ReviewsContent>
                        </ReviewsItem>
                    })}
                </ReviewsList>
      </div>) : (
        <div> Sorry, but we don't have any reviews for this movie.</div>
      )}
    </>
  );

       
};
export default Rewievs;