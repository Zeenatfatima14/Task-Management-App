import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; 
import { loginUser } from "../Services/api"; 

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate(); 

  const { user, token, setUser, setToken, setPicture, setUserId } = useUser(); 

  useEffect(() => {
    if (user && token) {
      navigate("/");
    }
  }, [user, token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password });

      setUser(response.email);
      console.log(response.token);
      setToken(response.token);
      setPicture(response.picture);
      setUserId(response._id);

      navigate("/");
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  return (
    <Wrapper className="d-flex align-items-center justify-content-center mt-5">
      <GlassMorphism className="col-10 col-md-8 col-lg-6 p-3">
        <h1 className="display-6">Sign In</h1>
        <p className="text-sm fw-bolder">Get things done.</p>
        <form className="py-3" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputPassword3"
              className="col-sm-2 col-form-label"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          <p className="text-sm mt-2 mb-0">
            Don't have an account?{" "}
            <strong
              className="text-decoration-underline"
              onClick={() => navigate("/register")}
            >
              create an account
            </strong>
          </p>
        </form>
      </GlassMorphism>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div``;

const GlassMorphism = styled.div`
  background: rgba(155, 155, 155, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
`;
