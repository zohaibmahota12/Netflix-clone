import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import TrendingMovies from "./components/TrendingMovies/TrendingMovies";
import Signin from "./components/Signin/Signin";
import SignUp from "./components/SignUp/SignUp";
import MoviesSection from "./components/MovieSection/MoviesSection";
import MovieDetailSection from "./components/MovieDetailSection/MovieDetailSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/detail_section"element={<MovieDetailSection />}/>
          <Route exact path="/trending_movies" element={<TrendingMovies />} />
          <Route exact path="/movies" element={<MoviesSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
