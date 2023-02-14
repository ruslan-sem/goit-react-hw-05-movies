import { fetchQuery } from 'services/fetchApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query') ?? '';

  const handleSubmin = event => {
    query = event.target.elements.query.value.toLowerCase().trim();
    const nextParams = query !== '' ? { query } : {};

    event.preventDefault();
    setSearchParams(nextParams);
    event.target.reset();
  };

  useEffect(() => {
    fetchQuery(query).then(json => setMovies([...json.data.results]));
  }, [query]);

  return (
    <main>
      <form onSubmit={handleSubmin}>
        <input type="text" name="query" autoComplete="off" autoFocus required />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
