import { fetchCast } from 'services/fetchApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import unknown from 'img/unknown.png';

const imageUrl = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(json => setCasts([...json.data.cast]));
  }, [movieId]);

  return (
    <div>
      <ul>
        {casts.map((cast, idx) => (
          <li key={idx}>
            <img
              src={
                cast.profile_path ? `${imageUrl}${cast.profile_path}` : unknown
              }
              alt={cast.name}
              width="96"
            />
            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
