import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo/netflix.png";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
function SignUp() {
  const [fullname, setfullname] = useState(" ");
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");

  function handleDate(e) {
    e.preventDefault();

    //  API post method

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        fullname,
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
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>
          {/* <h2 className="">Login</h2> */}
          <form onSubmit={handleDate}>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setfullname(e.target.value)}
              />
              <label for="floatingInput">Full Name </label>
            </div>
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
              <div className="mx-auto" style={{ width: "170px" }}>
                <Link to="/">
                  <button
                    class="btn  btn-login text-uppercase fw-bold "
                    type="submit"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className="term-and-condition mt-3">
                <span>
                  &nbsp;
                  <span> Netflix Log In </span> &nbsp;
                  <span>
                    <Link to="/signin">Sign in now</Link>
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

export default SignUp;
