import React from "react";
import image1 from "../../assets/background/4.jpg";
import "./moviesdetailsection.css";
// import TrendingMovies from "../TrendingMovies/TrendingMovies";
import TrendingSlider from "../TrendingSlider/TrendingSlider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function MovieDetailSection() {
  return (
    <>
      <Header />
      <div class="background-section">
        <div class="image-overlay"></div>
        <img src={image1} alt="Background Image" class="background-image" />
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="movie-detail">
                <div class="movie-detail-content ">
                  <h1 className="mb-4">Stranger Things</h1>
                  <p className="mt-2 ">
                    Stranger Things" ek American science fiction, horror, aur
                    supernatural elements se bharpoor TV series hai jo Netflix
                    par available hai. Ye series Duffer Brothers ke dwara banayi
                    gayi hai. Is series ka pratham season 2016 mein release hua
                    tha. Yeh series 1980s ke madiyat par adharit hai aur ek
                    small town mein sthapit hai jahan anjaan shaktiyon aur ajeeb
                    o garib ghatnaon ka parda-faash hota hai.
                  </p>
                </div>
                <div class="movie-detail-buttons ">
                  <Link to="/movies">
                    <button class="btn btn-light">
                      <i class="fas fa-play"></i> &nbsp; Play
                    </button>
                  </Link>
                  <Link to="/">
                    <button class="btn btn-light">
                      <i class="fas fa-info"></i>&nbsp; More Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div class="movie-slider-section">
          <div className="row">
            <div className="col-12">
              <div class="movie-slider">
                <TrendingSlider title={"TV Shows Based on Books"} />
              </div>
            </div>
            <div className="col-12">
              <div class="movie-slider">
                <TrendingSlider title={"New Releases"} />
              </div>
            </div>
            <div className="col-12">
              <div class="movie-slider">
                <TrendingSlider title={"TV Sci-Fi & Fantasy"} />
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MovieDetailSection;
