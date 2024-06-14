import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo/netflix.png";
import "./signin.css";
import image1 from "../../assets/logo/netflix.png";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
function Signin() {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");

  function handleDate(e) {
    e.preventDefault();

    //  API post method

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="mybackground-image"></div>
        <div className="login-form ">
          <div className="from-logo text-center">
            <Link to="/">
              <img src={logo} alt="netflix" />
            </Link>
          </div>
          {/* <h2 className="">Login</h2> */}
          <form onSubmit={handleDate} netlify>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setemail(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="d-grid login-button">
              <button
                class="btn  btn-login text-uppercase fw-bold mx-auto"
                type="submit"
              >
                Sign in
              </button>
              <div className="term-and-condition mt-3">
                <span>
                  &nbsp;
                  <span>New to Netflix? </span> &nbsp;
                  <span>
                    <Link to="/signup">Sign up now</Link>
                  </span>
                </span>
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. &nbsp;
                  <a href="">Learn more.</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
