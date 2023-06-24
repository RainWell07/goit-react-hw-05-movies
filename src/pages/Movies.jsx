import { SearchMovies } from "components/API/API";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, lazy } from "react";
import {toast} from 'react-toastify';

const MovieList = lazy(() => import('../components/MovieList/MovieList'));
const SearchForm = lazy(() => import('../components/SearchForm/SearchForm'));

export default function Movies() {

    const [searchedMoviesArr, setSearchedMoviesArr] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = searchQuery => {
        setSearchParams({query: searchQuery});
    };

    useEffect(() => {
        const query = searchParams.get('query');
        if (!query) {
          return;
        }
        SearchMovies(query).then(resp => {
          const result = resp.data.results;
          if (result.length === 0) {
            toast.error('We`ry sorry but nothing found for your query, try something else');
            return;
          }

          return setSearchedMoviesArr([...result]);
        });
      }, [searchParams]);

    return (
    <>
    <SearchForm onSubmit={handleSubmit} />
    <MovieList moviesArr={searchedMoviesArr} />
    </>
);
}