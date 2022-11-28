import { Link } from "react-router-dom";
import { dbMoviesT } from "../types/dbmoviesT";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie: dbMoviesT, e: any) => (
        <div className="m-2 hover:opacity-90 tracking-wide hover:tracking-normal ease-in duration-150">
          <div className="m-3 px-1 text-[10px] absolute text-white bg-black bg-opacity-75 rounded">
            {movie.release_date.slice(0, 4)}
          </div>
          <Link to={`/movies/${movie.id}`}>
            <div className="cursor-pointer flex flex-col max-w-[175px] min-h-full min-w-full items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="h-full w-full object-cover rounded"
                alt="movie"
              ></img>
              <div className="text-sm">{movie.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieList;
