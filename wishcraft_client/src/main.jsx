import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  GoogleOAuthProvider
} from "@react-oauth/google";

/* CSS */

import "./index.css";

/* PAGES */

import LoginPage
from "./pages/LoginPage";

import ProfilePage
from "./pages/ProfilePage";

import HomePage
from "./pages/HomePage";

import PreviewPage
from "./pages/PreviewPage";

import GeneratedCard
from "./pages/GeneratedCard";

/* RENDER */

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <GoogleOAuthProvider
      clientId="118151344854-mu6hr0d2es0edu1csef6ai7jigltucqs.apps.googleusercontent.com"
    >

      <BrowserRouter>

        <Routes>

          {/* LOGIN */}

          <Route
            path="/"
            element={<LoginPage />}
          />

          {/* PROFILE */}

          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          {/* HOME */}

          <Route
            path="/home"
            element={<HomePage />}
          />

          {/* PREVIEW */}

          <Route
            path="/preview"
            element={<PreviewPage />}
          />

          {/* GENERATED CARD */}

          <Route
            path="/generate"
            element={<GeneratedCard />}
          />

        </Routes>

      </BrowserRouter>

    </GoogleOAuthProvider>

  </React.StrictMode>
);