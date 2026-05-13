import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

import "./App.css";

function App() {

  // Google Login
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

      console.log(res.data);

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Google Login Success");

    } catch (err) {

      console.log(err);
    }
  };

  // Guest Login
  const handleGuest = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/guest"
      );

      console.log(res.data);

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Guest Login Success");

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

        <div className="signin-header">

          <h2>Sign in</h2>

          <p>
            Choose how you want to continue
          </p>

        </div>

        {/* Google Login */}
        <div className="google-btn">

          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() =>
              console.log("Login Failed")
            }
          />

        </div>

        <div className="divider">
          <span>
            or
          </span>
        </div>

        {/* Guest Login */}
        <button
          className="guest-btn"
          onClick={handleGuest}
        >
          Continue as Guest
        </button>

        <p className="bottom-text">
          New here? Just sign in —
          we’ll create your account
          automatically.
        </p>

      </div>

    </div>
  );
}

export default App;