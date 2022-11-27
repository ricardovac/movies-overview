import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=842da3f310c6c6938c121df031daad63&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setMovies(responseJson.results);
    } else {
      null;
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  const movieDescriptionHandler = (event, key) => {
    event.preventDefault;
    const elem = event.target;
    // navigate(`/${event.target}`)
    console.log(elem);
  };

  return (
    <>
      {props.movies.map((movie, key) => (
        <div className="m-2 hover:opacity-80">
          <div className="m-3 px-1 text-[10px] absolute text-white bg-black bg-opacity-75 rounded">
            {movie.release_date.slice(0, 4)}
          </div>
          <div
            className="cursor-pointer flex flex-col max-w-[175px] min-h-full min-w-full"
            onClick={(event) => movieDescriptionHandler(event, key)}
            key={key}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="h-full w-full object-cover rounded"
              alt="movie"
            ></img>
            <div className="text-sm">{movie.title}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
