import { AiOutlineArrowLeft } from "react-icons/ai";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=842da3f310c6c6938c121df031daad63&language=en-US&page=1`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.results);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<SignUp Icon={AiOutlineArrowLeft} />} />
        <Route path="login" element={<SignIn />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="movies" element={<Movies />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          {/* <Route path="/categories/:id" element={<CategoriesDetail />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
