import React from "react";
import logo from "../../assets/logo/netflix.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg login-nav-bg">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <p className="text-center text-white mt-1">
              UNLIMITED TV SHOWS & MOVIES
            </p>
            <Link to="/signup">
              <button class="btn btn-join-now" type="submit">
                JOIN NOW
              </button>
            </Link>
            <Link to="/signin">
              <button class="btn btn-join-now" type="submit">
                SIGN IN
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
