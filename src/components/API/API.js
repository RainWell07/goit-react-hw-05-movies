import axios from "axios";
import {toast} from 'react-toastify';

const API_KEY = 'b84bf3c41af2e965861f2ebafe96d09a'
const BASE_URL = 'https://api.themoviedb.org/3/'


async function TrendMovies() {
    const response = await axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .catch(function (error) {
      if (error.response) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else if (error.request) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      }
    });

    return response;
}

async function SearchMovies(query) {
    const response = await axios
    .get(`${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`)
    .catch(function (error) {
        if (error.response) {
        toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
        } else if (error.request) {
        toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
        } else {
        toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
        }
    })

    return response;
}

async function MovieDetails(id) {
    const response = await axios
    .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
    .catch (function (error) {
        if (error.response) {
        toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
        } else if (error.request) {
        toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
        } else {
        toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
        }
    })

    return response;
}

async function MovieCredits(id) {
    const response = await axios
    .get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`)
    .catch (function (error) {
    if (error.response) {
    toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
    } else if (error.request) {
    toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
    } else {
    toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
    }
    })

    return response;
}

async function MovieReviews(id) {
  const response = await axios
  .get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`)
  .catch (function (error) {
  if (error.response) {
  toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
  } else if (error.request) {
  toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
  } else {
  toast.error('Oops, i think something went wrong! Please try to reload your page and try again!')
  }
  })

  return response;
}

export {
  MovieReviews,
  MovieCredits,
  MovieDetails,
  SearchMovies,
  TrendMovies,
}