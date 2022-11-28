import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MovieListSearch from "../components/MovieListSearch";
import SearchInput from "../components/SearchInput";

const Home = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // search requests
  const getMovieSearchRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=86d1516d&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setSearchMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieSearchRequest(searchValue);
  }, [searchValue]);

  // Popular movies
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

  return (
    <div className="flex-row">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="flex flex-wrap justify-center filter-filter">
        <MovieListSearch movies={searchMovies} />
      </div>
      <hr />
      <div className="flex justify-center p-2">
        <h1 className="text-xl">Popular movies - New</h1>
      </div>
      <div className="flex flex-wrap justify-center text-center filter-filter">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Home;
