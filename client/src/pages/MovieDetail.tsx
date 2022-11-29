import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState<any>({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=842da3f310c6c6938c121df031daad63`
        );
        setMovies(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:mx-auto w-2/3">
        <div className="bg-white shadow-lg border-gray-100 border sm:rounded-3xl p-8 flex space-x-8">
          <img
            className="shadow-lg w-1/3 h-1/3 rounded-xl"
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt=""
          ></img>
          <div className="flex flex-col space-y-4 justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold">{movies.title}</h2>
                <div className="bg-yellow-400 font-bold rounded-xl p-2">
                  {movies.vote_average?.toFixed(1)}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">{movies.status}</div>
                <div className="text-lg text-gray-800">
                  {movies.release_date}
                </div>
              </div>
              <p className="text-gray-400 ">{movies.overview}</p>
            </div>
            <div className="flex flex-col gap-4">
              {movies.genres
                ? movies.genres.map((item, i) => (
                    <div className="flex text-2xl font-bold" key={i}>
                      {item.name}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
