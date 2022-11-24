import React, { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";
import typesApi from "../types/omdApiT";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=86d1516d`;

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
    <div>
      <div className="flex flex-wrap justify-center my-8 filter-filter">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Home;
