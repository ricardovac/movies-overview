import { AiOutlineArrowLeft } from "react-icons/ai";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Contact from "./pages/Contact";
import Friends from "./pages/Friends";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
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
          <Route path="friends" element={<Friends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
