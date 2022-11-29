import { Link } from "react-router-dom";
import { omdApiT } from "../shared/omdApiT";

const MovieListSearch = (props) => {
  return (
    <>
      {props.movies.map((movie: omdApiT) => (
        <>
          <div className="m-2 hover:opacity-90 tracking-wide hover:tracking-normal ease-in duration-150">
            <div className="m-3 px-1 text-[10px] absolute text-white bg-black bg-opacity-75 rounded">
              {movie.Year}
            </div>
            <Link to={`/movies/${movie.imdbID}`}>
              <div className="cursor-pointer flex flex-col max-w-[175px] min-h-full min-w-full">
                <img
                  src={movie.Poster}
                  className="h-full w-full object-cover"
                  alt="movie"
                ></img>
                <div className="text-sm">{movie.Title}</div>
              </div>
            </Link>
          </div>
        </>
      ))}
    </>
  );
};

export default MovieListSearch;
