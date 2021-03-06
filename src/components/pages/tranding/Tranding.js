import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tranding() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const IMG_API = "https://image.tmdb.org/t/p/w500";
  const key = "40eb5c5b89c9c1a36dad4afee71d3af8";

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1)`;
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (path) => {
    fetch(path)
      .then((response) => response.json())
      .then((response) => {
        setMovies([...movies, ...response.results]);
        setCurrentPage(response.page);
      });
  };

  const handleClick = () => {
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${
      currentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  return (
    <>
      <div className="movies">
        {movies.length > 0 &&
          movies.map((movie, id) => (
            <Link to={`/details/${movie.id}`} key={id} className="link">
              <div className="movie">
                <div className="img">
                  <img src={IMG_API + movie.poster_path} alt={movie.title} />
                </div>
                  <div className="info">
                    <div className="info-title">{movie.title}</div>
                    <div className="info-rating">{movie.vote_average}</div>
                  </div>
              </div>
            </Link>
          ))}
      </div>
      <button className="btn" onClick={handleClick}>
        load more
      </button>
    </>
  );
}

export default Tranding;
