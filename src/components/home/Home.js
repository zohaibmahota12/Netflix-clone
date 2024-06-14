import React, { useEffect, useRef } from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo/netflix.png";
import HeroSection from "../Hero/HeroSection";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play().catch((error) => {
      // Handle play error
      console.error("Video autoplay failed:", error);
    });
  }, []);
  return (
    <>
      <div className="home-page ">
        <div className="container-fluid  netflix-navbar ">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ms-4">
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="" />
              </Link>

              <ul className="navbar-nav me-auto  me-4 mb-2 mb-lg-0"></ul>
              <form className="d-flex" role="search">
                <Link to="/signin">
                  <button className="btn btn-cust">Sign in</button>
                </Link>
              </form>
            </div>
          </nav>
        </div>
        <div className="hero-section">
          <div className="hero-image">
            <img
              alt=""
              aria-hidden="true"
              data-uia="nmhp-card-hero+background+image"
              src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/e8a81955-6c75-4cd2-add0-5492eb26cc1f/PK-en-20230814-popsignuptwoweeks-perspective_alpha_website_small.jpg"
              srcset="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/e8a81955-6c75-4cd2-add0-5492eb26cc1f/PK-en-20230814-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/e8a81955-6c75-4cd2-add0-5492eb26cc1f/PK-en-20230814-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/e8a81955-6c75-4cd2-add0-5492eb26cc1f/PK-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
              className="default-ltr-cache-ve3cf8 eae08lb0"
            />
          </div>
          <div className="center-content">
            <div className="netflix-title text-section">
              <h1>Unlimited movies, TV shows, and more</h1>
              <p>Watch anywhere. Cancel anytime.</p>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="search-bar">
              <input
                autocomplete="email"
                minlength="5"
                maxlength="50"
                type="email"
                id="dd4b3208e4638"
                name="email"
                placeholder="Email address"
                data-uia="field-email"
                value=""
              />
              <Link to="/trending_movies">
                <button className="search-button">Get Started</button>
              </Link>
            </div>
          </div>
          <div className="hero-divider"></div>
        </div>
        <div className="hero-setion2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="hero-title">
                  <h1 className="mt-4 pt-4">Enjoy on your TV</h1>
                  <p className="mt-2 pt-2">
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                    Blu-ray players, and more.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="default-ltr-cache-7cljuy ejqbulh3">
                  <div className="default-ltr-cache-bjn8wh">
                    <img
                      alt=""
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                      data-uia="nmhp-card-animation-asset-image"
                      className="default-ltr-cache-1d3w5wq"
                    />
                    <div className="default-ltr-cache-m5f3qu e15c37ii14">
                      <video
                        ref={videoRef}
                        data-uia="nmhp-card-animation-asset-video"
                        autoPlay
                        playsInline
                        loop
                      >
                        <source
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-divider"></div>
        <div className="hero-section3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="default-ltr-cache-vgp0nn ejqbulh3">
                  <div className="default-ltr-cache-bjn8wh mt-4">
                    <img
                      alt=""
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                      data-uia="nmhp-card-animation-asset-image"
                      className="default-ltr-cache-1d3w5wq"
                    />
                    <div className="default-ltr-cache-xfttou e15c37ii6">
                      <div className="default-ltr-cache-1cn8kex">
                        <img
                          data-uia="nmhp-card-animation-asset-animation"
                          alt=""
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                          className="default-ltr-cache-1t1z3a4"
                        />
                      </div>
                      <div className="default-ltr-cache-tcf860">
                        <div className="default-ltr-cache-162uqtg e15c37ii4">
                          Stranger Things
                        </div>
                        <div className="default-ltr-cache-44ib4m e15c37ii3">
                          Downloading...
                        </div>
                      </div>
                      <div className="default-ltr-cache-1q4up1i e15c37ii5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hero3-title mt-4 p-4">
                  <h1 className="mt-4 ">
                    Download your shows to watch offline
                  </h1>
                  <p>
                    Save your favorites easily and always have something to
                    watch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-divider"></div>
        <div className="hero-section4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="hero4-title mt-4 p-4">
                  <h1 className="mt-4 ">Watch everywhere</h1>
                  <p>
                    Stream unlimited movies and TV shows on your phone, tablet,
                    laptop, and TV.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-divider"></div>
        <div className="hero-section5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="hero5-image">
                  <img
                    src="https://occ-0-3631-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="hero5-title  mt-4 p-4">
                  <h1 className="mt-4 ">Create profiles for kids</h1>
                  <p>
                    Send kids on adventures with their favorite characters in a
                    space made just for them—free with your membership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-divider"></div>
        {/* FAQ section start here  */}

        <div className="hero-section6">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="faq-section mb-4 mt-4">
                  <div className="faq-title">
                    <h1 className="text-center mb-4">
                      Frequently Asked Questions
                    </h1>
                  </div>
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          What is Netflix?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Netflix is a streaming service that offers a wide
                          variety of award-winning TV shows, movies, anime,
                          documentaries, and more on thousands of
                          internet-connected devices.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          How much does Netflix cost?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Watch Netflix on your smartphone, tablet, Smart TV,
                          laptop, or streaming device, all for one fixed monthly
                          fee. Plans range from Rs250 to Rs1,100 a month. No
                          extra costs, no contracts.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Where can I watch?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Watch anywhere, anytime. Sign in with your Netflix
                          account to watch instantly on the web at netflix.com
                          from your personal computer or on any
                          internet-connected device that offers the Netflix app,
                          including smart TVs, smartphones, tablets, streaming
                          media players and game consoles.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          How do I cancel?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Netflix is flexible. There are no pesky contracts and
                          no commitments. You can easily cancel your account
                          online in two clicks. There are no cancellation fees –
                          start or stop your account anytime.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          What can I watch on Netflix?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Netflix has an extensive library of feature films,
                          documentaries, TV shows, anime, award-winning Netflix
                          originals, and more. Watch as much as you want,
                          anytime you want.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Is Netflix good for kids?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          The Netflix Kids experience is included in your
                          membership to give parents control while kids enjoy
                          family-friendly TV shows and movies in their own
                          space. <br /> <br />
                          Kids profiles come with PIN-protected parental
                          controls that let you restrict the maturity rating of
                          content kids can watch and block specific titles you
                          don’t want kids to see.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search-bar text-center">
                    <p
                      className="text-center mt-4 fw-400"
                      style={{ fontSize: "1.4rem" }}
                    >
                      Ready to watch? Enter your email to create or restart your
                      membership.
                    </p>
                    <div className="center-bar justify-content-center d-flex">
                      <form class="d-flex" role="search">
                        <input
                          class="form-control me-2"
                          type="search"
                          placeholder="Email address"
                          aria-label="Search"
                        />
                        <Link to="/trending_movies">
                          <button class="btn btn-cst" type="submit">
                            Get Started
                          </button>
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>

        {/* <Navbar /> */}
      </div>
    </>
  );
}

export default Home;
