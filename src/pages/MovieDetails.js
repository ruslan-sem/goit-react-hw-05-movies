import { useParams, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <main>
      <h1>Movie details page</h1>
      <p>Movie ID: {movieId}</p>
      <Outlet />
    </main>
  );
};
