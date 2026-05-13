import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "./ProfilePage.css";

function ProfilePage() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  // HANDLE IMAGE

  const handleImage = (e) => {

    const file =
      e.target.files[0];

    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );
  };

  // SAVE PROFILE

  const handleSave =
    async () => {

      try {

        let imageUrl = "";

        // UPLOAD IMAGE

        if (image) {

          const formData =
            new FormData();

          formData.append(
            "image",
            image
          );

          const res =
            await axios.post(

              "http://localhost:5000/api/upload/profile",

              formData
            );

          imageUrl =
            res.data.imageUrl;
        }

        // SAVE USER

        const userData = {

          name: name,

          image: imageUrl
        };

        localStorage.setItem(

          "user",

          JSON.stringify(userData)
        );

        // GO HOME

        navigate("/home");

      } catch (err) {

        console.log(err);

        alert(
          "Profile upload failed"
        );
      }
    };

  return (

    <div className="profile-container">

      <div className="profile-card">

        {/* TITLE */}

        <h1>

          Profile Setup

        </h1>

        <p>

          Upload your profile photo
          and customize your account

        </p>

        {/* IMAGE PREVIEW */}

        {preview && (

          <img
            src={preview}
            alt="preview"
            className="profile-preview"
          />
        )}

        {/* NAME */}

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

        {/* IMAGE */}

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

        {/* BUTTON */}

        <button
          onClick={handleSave}
        >

          Save Profile

        </button>

      </div>

    </div>
  );
}

export default ProfilePage;