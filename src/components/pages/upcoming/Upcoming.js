import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UpcomingMovies() {
  const IMG_API = `https://image.tmdb.org/t/p/w500`;
  const [movies, setMovies] = useState([]);

  const getMovieData = async () => {
    const key = "40eb5c5b89c9c1a36dad4afee71d3af8";

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
    );

    const json = await response.json();
    const data = json.results;

    setMovies(data);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <div className="movies">
        {movies.length > 0 &&
          movies.map((movie, id) => (
            <Link to={`/details/${movie.id}`} key={id}>
              <div className="movie">
                <div className="img">
                  <img src={IMG_API + movie.poster_path} alt={movie.title} />
                  <div className="info">
                    <div className="info-title">{movie.title}</div>
                    <div className="info-rating">{movie.vote_average}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}

export default UpcomingMovies;
