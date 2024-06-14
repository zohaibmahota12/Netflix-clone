import React from "react";
import "./trendingmovies.css";
import TrendingSlider from "../TrendingSlider/TrendingSlider";
import image1 from "../../assets/trendingmovies/1.jpg";
import image2 from "../../assets/trendingmovies/2.jpg";
import image3 from "../../assets/trendingmovies/3.jpg";
import image4 from "../../assets/trendingmovies/4.jpg";
import image5 from "../../assets/trendingmovies/5.jpg";
import image6 from "../../assets/trendingmovies/6.jpg";
import image7 from "../../assets/trendingmovies/7.jpg";
import image8 from "../../assets/trendingmovies/8.jpg";
import image9 from "../../assets/trendingmovies/9.jpg";
import image10 from "../../assets/trendingmovies/10.jpg";
import image11 from "../../assets/trendingmovies/11.jpg";
import image12 from "../../assets/trendingmovies/12.jpg";
import image13 from "../../assets/trendingmovies/13.jpg";
import image14 from "../../assets/trendingmovies/14.jpg";
import image15 from "../../assets/trendingmovies/15.jpg";
import image16 from "../../assets/trendingmovies/16.jpg";
import image17 from "../../assets/trendingmovies/17.jpg";
import image18 from "../../assets/trendingmovies/17.jpg";
import image19 from "../../assets/trendingmovies/18.jpg";
import image20 from "../../assets/trendingmovies/19.jpg";
import image21 from "../../assets/trendingmovies/20.jpg";
import image22 from "../../assets/trendingmovies/21.jpg";
import image23 from "../../assets/trendingmovies/22.jpg";
import image24 from "../../assets/trendingmovies/23.jpg";
import image25 from "../../assets/trendingmovies/24.jpg";
import image26 from "../../assets/trendingmovies/25.jpg";
import image27 from "../../assets/trendingmovies/26.jpg";
import image28 from "../../assets/trendingmovies/27.jpg";
import image29 from "../../assets/trendingmovies/28.jpg";
import image30 from "../../assets/trendingmovies/29.jpg";
import image31 from "../../assets/trendingmovies/30.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

function TrendingMovies() {
  // const images={image1 ,image2, image3,image4,image5,image6,image7,image8}
  // const numberOfImages = 40;
  // const images = [];

  // for (let i = 1; i <= numberOfImages; i++) {
  //   const imagePath = require(`../../assets/trendingmovies/${i}.jpg`).default;
  //   images.push(imagePath);
  //   console.log(images);
  // }
  return (
    <>
      <Header />
      <div className="trending-movies">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-6">
              <div
                className="trendint-title"
                style={{ paddingTop: "2rem", marginLeft: "1rem" }}
              >
                <h1 className="mt-4"> BingeWorthy TV Shows</h1>
                <p className="mt-2">
                  When it comes to great TV, portion control is for suckers.
                  Here are the best shows -- from sitcoms to dramas to reality
                  -- to devour all at once.
                </p>
              </div>
            </div>

            <TrendingSlider title={" Popular on Netflix"} />
            <TrendingSlider title={"TV Shows Based on Books"} />
            <TrendingSlider title={"New Releases"} />
            <TrendingSlider title={"TV Sci-Fi & Fantasy"} />
            <div className="blurr-section">
              <TrendingSlider title={"New Releases"} />
              <TrendingSlider title={"TV Sci-Fi & Fantasy"} />
            </div>

            <div className="inner-section text-center">
              <div className="col-12">
                <div className="inner-title">
                  <h1 className="text-center">There’s even more to watch.</h1>
                </div>
                <div className="col-12 col-md-12 col-xl-12 col-sm-6">
                  <div className="inner-des">
                    <p className="text-center">
                      Netflix has an extensive library of feature films,
                      documentaries, TV shows, anime, award-winning Netflix
                      originals, and more. Watch as much as you want, anytime
                      you want.
                    </p>
                  </div>
                  <div className="join-button text-center">
                    <button className="btn btn-join">JOIN NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================
                  Footer Start Here 
========================================================== */}

        <Footer />
      </div>
    </>
  );
}

export default TrendingMovies;
