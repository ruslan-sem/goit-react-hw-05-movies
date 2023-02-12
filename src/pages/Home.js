import { fetchTrending } from 'services/fetchApi';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(json => setMovies([...json.data.results]));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};
