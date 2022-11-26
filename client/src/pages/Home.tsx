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
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=86d1516d`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setSearchMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieSearchRequest(searchValue);
  }, [searchValue]);

  // random requests
  function pad(number, length) {
    var str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }

  const getMovieRequest = async () => {
    var movie = pad(Math.floor(Math.random() * 2155529 + 1), 7);
    const url = `http://www.omdbapi.com/?apikey=86d1516d&i=tt${movie}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
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
        <MovieList movies={movies} />
      </div>
      <hr />
    </div>
  );
};

export default Home;
