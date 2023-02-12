import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h2>Cast</h2>
      <p>{movieId}</p>
    </div>
  );
};
