import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchDetails } from 'services/fetchApi';

const imageUrl = 'https://image.tmdb.org/t/p/w200';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchDetails(movieId).then(json => setMovie(json.data));
  }, [movieId]);

  return (
    <main>
      <Link to={backLinkHref}>&lt; Go back</Link>
      <div style={{ display: 'flex', gap: '16px' }}>
        {movie.poster_path && (
          <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
        )}
        <div>
          <h2>
            {movie.title}
            {movie.release_date && ` (${movie.release_date.slice(0, 4)})`}
          </h2>
          <p>User Score: {`${Math.round(movie.vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie.genres && (
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          )}
        </div>
      </div>
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
