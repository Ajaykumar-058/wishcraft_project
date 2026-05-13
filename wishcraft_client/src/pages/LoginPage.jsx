import { GoogleLogin } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

import "./LoginPage.css";

function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  /* GOOGLE LOGIN */

  const handleSuccess = async (
    credentialResponse
  ) => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/google",
        {
          token:
            credentialResponse.credential,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/profile");

    } catch (err) {

      console.log(err);
    }
  };

  /* EMAIL LOGIN */

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/profile");

    } catch (err) {

      console.log(err);

      alert("Invalid credentials");
    }
  };

  /* SIGNUP */

  const handleSignup = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          email,
          password,
        }
      );

      alert("Signup successful");

      console.log(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  /* GUEST LOGIN */

  const handleGuest = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/guest"
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/profile");

    } catch (err) {

      console.log(err);
    }
  };

  return (

    <div className="login-container">

      {/* LEFT PANEL */}

      <div className="left-panel">

        <div className="branding">

          <div className="logo-star">
            ✦
          </div>

          <h1>WishCraft</h1>

          <p>
            Personalized greetings
            <br />
            that come from the heart
          </p>

        </div>

        <div className="feature-card">
          🎂 Birthday cards
        </div>

        <div className="feature-card">
          💝 Shayari
        </div>

        <div className="feature-card">
          🎊 Festivals
        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="right-panel">

        {/* SUBTITLE */}

        <p className="top-text">
          Continue with Email or Google
        </p>

        {/* EMAIL */}

        <input
          type="email"
          placeholder="Enter email"
          className="input-box"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Enter password"
          className="input-box"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {/* LOGIN */}

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* SIGNUP */}

        <button
          className="signup-btn"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        {/* DIVIDER */}

        <div className="divider">

          <span>
            OR
          </span>

        </div>

        {/* GOOGLE LOGIN */}

        <div className="google-btn">

          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() =>
              console.log(
                "Login Failed"
              )
            }
          />

        </div>

        {/* GUEST LOGIN */}

        <button
          className="guest-btn"
          onClick={handleGuest}
        >
          Continue as Guest
        </button>

      </div>

    </div>
  );
}

export default LoginPage;