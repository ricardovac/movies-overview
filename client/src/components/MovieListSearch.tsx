import React from "react";
import typesApi from "../types/omdApiT";

const MovieListSearch = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <>
          <div className="m-2 hover:opacity-80">
            <div className="m-3 px-1 text-[10px] absolute text-white bg-black bg-opacity-75 rounded">
              {movie.Year}
            </div>
            <div className="cursor-pointer flex flex-col max-w-[175px] min-h-full min-w-full">
              <img
                src={movie.Poster}
                className="h-full w-full object-cover"
                alt="movie"
              ></img>
              <div className="text-sm">{movie.Title}</div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default MovieListSearch;
