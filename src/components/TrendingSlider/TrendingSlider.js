import { useState } from "react";
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
import "./trendingslider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
function TrendingSlider({ title, myimage }) {
  // const carouselId = `carouselExampleControls_${props.title.replace(
  //   /\s/g,
  //   "_"
  // )}`;

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2, // Show 2 items
      slidesToSlide: 2, // Slide 2 items at a time
    },
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="col-12  mb-3 mt-4">
          <div className="popular1-title">
            <h5> {title}</h5>
          </div>
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={500}
          keyBoardControl={true}
          customTransition="all .2"
          transitionDuration={200}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <Link to="/detail_section">
            <div class="col-lg-12">
              <div class="trending-image" style={{ width: "100%" }}>
                <img src={image21} class="card-img-top" alt="..." />
                <div class="mt-2">
                  <p class="text-center">Zohiab Hassan</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/detail_section">
            <div class="col-lg-12">
              <div class="trending-image" style={{ width: "100%" }}>
                <img src={image15} class="card-img-top" alt="..." />
                <div class="mt-2">
                  <p class="text-center"> Zohiab Hassan</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail_section">
            <div class="col-lg-12">
              <div class="trending-image" style={{ width: "100%" }}>
                <img src={image19} class="card-img-top" alt="..." />
                <div class="mt-2">
                  <p class="text-center"> Zohiab Hassan</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail_section">
            <div class="col-lg-12">
              <div class="trending-image" style={{ width: "100%" }}>
                <img src={image30} class="card-img-top" alt="..." />
                <div class="mt-2">
                  <p class="text-center"> Zohiab Hassan</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail_section">
            <div class="col-lg-12">
              <div class="trending-image" style={{ width: "100%" }}>
                <img src={image28} class="card-img-top" alt="..." />
                <div class="mt-2">
                  <p class="text-center"> Zohiab Hassan</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail_section">
            <div class="col-lg-12">
              <div class="trending-image" style={{ width: "100%" }}>
                <img src={image27} class="card-img-top" alt="..." />
                <div class="mt-2">
                  <p class="text-center"> Zohiab Hassan</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail_section">
            <div class="col-lg-12">
              <div class="trending-image" style={{ width: "100%" }}>
                <img src={image26} class="card-img-top" alt="..." />
                <div class="mt-2">
                  <p class="text-center"> Zohiab Hassan</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail_section">
            <div class="col-lg-12">
              <div class="trending-image" style={{ width: "100%" }}>
                <img src={image24} class="card-img-top" alt="..." />
                <div class="mt-2">
                  <p class="text-center">by Zohiab Hassan</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail_section">
            <div class="col-lg-12">
              <div class="trending-image" style={{ width: "100%" }}>
                <img src={image11} class="card-img-top" alt="..." />
                <div class="mt-2">
                  <p class="text-center">by Zohiab Hassan</p>
                </div>
              </div>
            </div>
          </Link>
        </Carousel>
      </div>

      {/* <section
        className="trending-slider mb-4 mt-4 "
        style={{ backgroundColor: " #181818" }}
      >
        

        
          <div
            id={carouselId}
            class="carousel carousel-dark slide "
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="trending-image" style={{ width: "100%" }}>
                      <img src={image1} class="card-img-top" alt="..." />
                      <div class="mt-2">
                        <p class="text-center">by Zohiab Hassan</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="trending-image" style={{ width: "100%" }}>
                      <img src={image2} class="card-img-top" alt="..." />
                      <div class="mt-2">
                        <p class="text-center">by Zohiab Hassan</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="trending-image" style={{ width: "100%" }}>
                      <img src={image3} class="card-img-top" alt="..." />
                      <div class="mt-2">
                        <p class="text-center">by Zohiab Hassan</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="trending-image" style={{ width: "100%" }}>
                      <img src={image7} class="card-img-top" alt="..." />
                      <div class="mt-2">
                        <p class="text-center">by Zohiab Hassan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="trending-image" style={{ width: "100%" }}>
                      <img src={image4} class="card-img-top" alt="..." />
                      <div class="mt-2">
                        <p class="text-center">by Zohiab Hassan</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="trending-image" style={{ width: "100%" }}>
                      <img src={image8} class="card-img-top" alt="..." />
                      <div class="mt-2">
                        <p class="text-center">by Zohiab Hassan</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="trending-image" style={{ width: "100%" }}>
                      <img src={image5} class="card-img-top" alt="..." />
                      <div class="mt-2">
                        <p class="text-center">by Zohiab Hassan</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="trending-image" style={{ width: "100%" }}>
                      <img src={image6} class="card-img-top" alt="..." />
                      <div class="mt-2">
                        <p class="text-center">by Zohiab Hassan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default TrendingSlider;
