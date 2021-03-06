import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Details({ match }) {
  const [movie, setMovie] = useState({});
  const movie_id = match.params.id;
  const img_url = "https://image.tmdb.org/t/p/w500";

  const getMovieDetails = async () => {
    const key = "40eb5c5b89c9c1a36dad4afee71d3af8";

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en-US`
    );

    const json = await response.json();
    setMovie(json);
    // console.log(json);
  };

  useEffect(() => {
    getMovieDetails();
  }, [movie_id]);

  return (
    <div className="movie-details">
      <div className="movie-details-wrapper">
        <div className="movie-image">
          <img
            src={img_url + movie.poster_path}
            alt={movie.title + "picture"}
          />
        </div>
        <div className="movie-info">
          <h1>{movie.title}</h1>({`${movie.release_date}`})
          <p>{movie.overview}</p>
          <Link className="back" to={`/tranding`}>
            {`< BACK `}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Details;
