import { useParams, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDetails } from 'services/fetchApi';

const imageUrl = 'https://image.tmdb.org/t/p/w200';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({
    poster_path: '',
    release_date: '',
    genres: [],
  });

  useEffect(() => {
    fetchDetails(movieId).then(json => setMovie(json.data));
  }, [movieId]);

  return (
    <main>
      <img src={`${imageUrl}${movie.poster_path}`} alt={movie.original_title} />
      <h2>
        {movie.original_title} ({movie.release_date.slice(0, 4)})
      </h2>
      <p>User Score: {`${Math.round(movie.vote_average * 10)}%`}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </main>
  );
};
