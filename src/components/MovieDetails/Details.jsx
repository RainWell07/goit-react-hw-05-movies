import PropTypes from "prop-types";
import { StyledDetails } from "./StyledDetails";


export default function Details({title, releaseYear, score, image, overview, genres,}) {
return (
<StyledDetails>
{image ? (
 <img
 src={`https://image.tmdb.org/t/p/w200/${image}`}
 alt=""
 width="200px"
 height="300px"
 />
 ) : (
  <img
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/800px-Placeholder_no_text.svg.png"
  alt="Actors"
  width="200px"
  height="300px"
  />
 )}

 <div>
 <h2> {title} ({releaseYear}) </h2>
 <p>Score: {score}%</p>
 <h3>Overview:</h3>
 <p>{overview}</p>
 <h4>Genres:</h4>
 <p>{genres.join(', ')}</p>
 </div>
</StyledDetails>
);
}

Details.propTypes = {
title: PropTypes.string,
releaseYear: PropTypes.number,
score: PropTypes.number,
image: PropTypes.string,
overview: PropTypes.string,
genres: PropTypes.arrayOf(PropTypes.string),
};