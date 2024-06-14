import React from "react";
import video1 from "../../assets/video/video1.mp4";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Header from "../Header/Header";
import image1 from "../../assets/background/2.webp";

import "./moviesection.css";
import TrendingSlider from "../TrendingSlider/TrendingSlider";
import Footer from "../Footer/Footer";

function MoviesSection() {
  const videoUrl =
    "https://www.youtube.com/watch?v=_rHLOXbFZtI&ab_channel=Netflix";
  return (
    <>
      <Header />
      <div className="moviesection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div class="video-player">
                <div style={{ width: "100%", height: "450px" }}>
                  <iframe
                    frameborder="0"
                    allowfullscreen="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    title="Rebel Moon | Official Teaser Trailer | Netflix"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_rHLOXbFZtI?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
                    id="widget2"
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="sidebar">
                <h3 class="sidebar-title">Tags</h3>
                <div class="sidebar-item tags">
                  <ul>
                    <li>
                      <a href="#">App</a>
                    </li>
                    <li>
                      <a href="#">IT</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Mac</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End sidebar tags--> */}

                {/* <!-- End sidebar categories--> */}

                <h3 class="sidebar-title">Related series</h3>
                <div class="sidebar-item recent-posts">
                  <div class="post-item clearfix">
                    <img src={image1} alt="" />
                    <h4>
                      <a href="">Rebal Moon Season 1</a>
                    </h4>
                    {/* <time datetime="2020-01-01">April 5, 2023</time> */}
                  </div>
                  <div class="post-item clearfix">
                    <img src={image1} alt="" />
                    <h4>
                      <a href="">Rebal Moon Season 1</a>
                    </h4>
                    {/* <time datetime="2020-01-01">April 5, 2023</time> */}
                  </div>
                  <div class="post-item clearfix">
                    <img src={image1} alt="" />
                    <h4>
                      <a href="">Rebal Moon Season 1</a>
                    </h4>
                    {/* <time datetime="2020-01-01">April 5, 2023</time> */}
                  </div>
                  <div class="post-item clearfix">
                    <img src={image1} alt="" />
                    <h4>
                      <a href="">Rebal Moon Season 1</a>
                    </h4>
                    {/* <time datetime="2020-01-01">April 5, 2023</time> */}
                  </div>
                  <div class="post-item clearfix">
                    <img src={image1} alt="" />
                    <h4>
                      <a href="">Rebal Moon Season 1</a>
                    </h4>
                    {/* <time datetime="2020-01-01">April 5, 2023</time> */}
                  </div>
                </div>

                {/* <!-- End sidebar recent posts--> */}
              </div>
              {/* <!-- End sidebar --> */}
            </div>

            <TrendingSlider title={" Popular on Netflix"} />
            <TrendingSlider title={"TV Shows Based on Books"} />
            <TrendingSlider title={"New Releases"} />
            <TrendingSlider title={"TV Sci-Fi & Fantasy"} />
            <div className="blurr-section">
              <TrendingSlider title={"New Releases"} />
              <TrendingSlider title={"TV Sci-Fi & Fantasy"} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviesSection;
