import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h2>Reviews</h2>
      <p>{movieId}</p>
    </div>
  );
};
