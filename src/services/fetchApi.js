import axios from 'axios';

const KEY = '4f1566ad36c0a1eb2cf16ddd2af1a0e7';
const searchParams = {
  params: {
    api_key: KEY,
  },
};

export async function fetchTrending() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

  try {
    return await axios.get(BASE_URL, searchParams);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchQuery(query) {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  searchParams.params.query = query;

  try {
    return await axios.get(BASE_URL, searchParams);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDetails(id) {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}`;

  try {
    return await axios.get(BASE_URL, searchParams);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCast(id) {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/credits`;

  try {
    return await axios.get(BASE_URL, searchParams);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchReviews(id) {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;

  try {
    return await axios.get(BASE_URL, searchParams);
  } catch (error) {
    console.error(error);
  }
}
