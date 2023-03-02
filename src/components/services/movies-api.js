import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '69985e4f01a18f2ea21ebbfec884ea1f',
  },
});

export const searchMovies = async (name, page) => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: name,
      page,
      include_adult: 'false',
      language: 'en-US',
    },
  });
  return data;
};

export const trendingFilms = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const movieCast = async (id) => {
  const {data} = await instance.get (`/movie/${id}/credits`);
  return data;
}

export const movieDetails = async (id) => {
  const {data} = await instance.get (`/movie/${id}`);
  return data;
}



export const movieReviews= async (id) => {
  const {data} = await instance.get (`/movie/${id}/reviews`);
  return data.results;
}