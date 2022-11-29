import { AiOutlineArrowLeft } from "react-icons/ai";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import CategoriesDetail from "./pages/CategoriesDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<SignUp Icon={AiOutlineArrowLeft} />} />
        <Route path="login" element={<SignIn />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/genre/:id" element={<CategoriesDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
