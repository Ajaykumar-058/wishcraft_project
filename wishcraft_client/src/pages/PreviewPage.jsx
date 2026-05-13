import { useNavigate }
from "react-router-dom";

import "./PreviewPage.css";

function PreviewPage() {

  const navigate = useNavigate();

  // GET TEMPLATE DATA

  const templateImage =
    localStorage.getItem(
      "templateImage"
    );

  const templateTitle =
    localStorage.getItem(
      "templateTitle"
    );

  const templateCategory =
    localStorage.getItem(
      "templateCategory"
    );

  return (

    <div className="preview-container">

      <div className="preview-card">

        {/* IMAGE */}

        <img
          src={templateImage}
          alt="preview"
        />

        {/* TITLE */}

        <h1>

          {templateTitle}

        </h1>

        {/* CATEGORY */}

        <p>

          {templateCategory}

        </p>

        {/* BUTTON */}

        <button
          onClick={() =>
            navigate("/generate")
          }
        >

          Generate Card

        </button>

      </div>

    </div>
  );
}

export default PreviewPage;