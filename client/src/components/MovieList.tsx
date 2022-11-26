import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div className="m-2 hover:opacity-80">
          <div className="m-3 px-1 text-[10px] absolute text-white bg-black bg-opacity-75 rounded">
            {movie.release_date.slice(0, 4)}
          </div>
          <div className="cursor-pointer flex flex-col max-w-[175px] min-h-full min-w-full">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="h-full w-full object-cover"
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
