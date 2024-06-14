import React from "react";
import logo from "../../assets/logo/netflix.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container neflix-navbar">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <Link to="/">
              <img src={logo} alt="netflix logo" />
            </Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex" role="search">
              <button class="btn btn-cust">Sign in</button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
