import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import login from "../assets/login.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="login1">
        {/*--------------------- Main Container ------------------------*/}
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          {/*--------------------- Login Container ------------------------*/}
          <div className="row border rounded-5 p-3 bg-white shadow box-area">
            {/*------------------------- Left Box ---------------------------*/}
            <div
              className="col-md-6 d-flex justify-content-center align-items-center flex-column left-box"
              style={{ background: "hsl(199, 100%, 33%)" }}
            >
              <div className="featured-image mb-3">
                <img
                  src={login}
                  alt="login"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }} // Responsive image
                />
              </div>
            </div>
            {/*------------------ ------ Right Box --------------------------*/}
            <div className="col-md-6 right-box">
              <div className="row align-items-center">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="header-text mb-4">
                    <h2>Hello, Again</h2>
                    <p>We are happy to have you back.</p>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="exampleInputEmail1"
                      required
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="input-group mb-1">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control form-control-lg bg-light fs-6"
                      id="exampleInputPassword1"
                      required
                      placeholder="Password"
                    />
                  </div>
                  <div className="input-group mb-5 d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="formCheck"
                      />
                      <label
                        htmlFor="formCheck"
                        className="form-check-label text-secondary"
                      >
                        <small>Remember Me</small>
                      </label>
                    </div>
                    <div className="forgot">
                      <Link
                        to="/forgot-password"
                        onClick={() => {
                          Navigate("/forgot-password"); // Use navigate instead of Navigate
                        }}
                      >
                        Forget Password
                      </Link>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <button className="btn btn-lg btncolor w-100 fs-6">
                      Login
                    </button>
                  </div>

                  <div className="row">
                    <small>
                      Don't have an account?{" "}
                      <Link to={"/register"}>Sign Up</Link>
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
