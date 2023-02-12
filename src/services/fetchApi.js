import axios from 'axios';

const KEY = '4f1566ad36c0a1eb2cf16ddd2af1a0e7';

export async function fetchTrending() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const searchParams = {
    params: {
      api_key: KEY,
    },
  };

  try {
    return await axios.get(BASE_URL, searchParams);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDetails(id) {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}`;
  const searchParams = {
    params: {
      api_key: KEY,
    },
  };

  try {
    return await axios.get(BASE_URL, searchParams);
  } catch (error) {
    console.error(error);
  }
}
