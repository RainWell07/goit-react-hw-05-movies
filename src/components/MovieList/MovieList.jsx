import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import MovieListItem from "components/MovieList-ITEM/MovieList";
import { StyledMovieList } from "./StyledMovieList";

export default function MovieList({ moviesArr }) {
  const location = useLocation();

  return (
    <StyledMovieList>
      {moviesArr.map((trendingMovie) => (
      <MovieListItem
      key={trendingMovie.id}
      id={trendingMovie.id}
      title={trendingMovie.title}
      location={location}
      image={trendingMovie.image}
      />
      ))}
    </StyledMovieList>
  );
}

MovieList.propTypes = {
  moviesArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};