import { fetchCast } from 'services/fetchApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const imageUrl = 'https://image.tmdb.org/t/p/w200';

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(json => setCasts([...json.data.cast]));
  }, [movieId]);

  return (
    <div>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            {cast.profile_path && (
              <img
                src={`${imageUrl}${cast.profile_path}`}
                alt={cast.original_name}
                width="96"
              />
            )}
            <p>{cast.original_name}</p>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
