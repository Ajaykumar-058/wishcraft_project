import html2canvas from "html2canvas";

import { useNavigate } from "react-router-dom";

import "./GeneratedCard.css";

function GeneratedCard() {

  const navigate = useNavigate();

  // USER

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  // TEMPLATE

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

  // DOWNLOAD

  const downloadCard =
    async () => {

      const card =
        document.getElementById(
          "wish-card"
        );

      const canvas =
        await html2canvas(card);

      const image =
        canvas.toDataURL(
          "image/png"
        );

      const link =
        document.createElement("a");

      link.href = image;

      link.download =
        "wishcraft-card.png";

      link.click();
    };

  // SHARE WHATSAPP

  const shareWhatsApp =
    () => {

      window.open(

        "https://wa.me/",

        "_blank"
      );
    };

  return (

    <div className="generated-page">

      {/* TOP */}

      <div className="generated-top">

        <button
          className="back-btn"
          onClick={() =>
            navigate("/home")
          }
        >

          ← Back

        </button>

        <h1>

          Preview & Share

        </h1>

        <span className="category-badge">

          {templateCategory}

        </span>

      </div>

      {/* MAIN */}

      <div className="generated-layout">

        {/* LEFT */}

        <div className="card-preview">

          <div
            id="wish-card"
            className="generated-card"
            style={{
              backgroundImage:
                `url(${templateImage})`
            }}
          >

            {/* PROFILE */}

            <div className="card-user">

              {user.image ? (

                <img
                  src={user.image}
                  alt="profile"
                  className="card-profile"
                />

              ) : (

                <div className="card-letter">

                  {
                    user.name
                    ?.charAt(0)
                  }

                </div>
              )}

              <h3>

                {user.name}

              </h3>

            </div>

            {/* CARD TITLE */}

            <div className="card-center">

              <h2>

                {templateTitle}

              </h2>

            </div>

          </div>

          <div className="ready-badge">

            Card ready to share

          </div>

        </div>

        {/* RIGHT */}

        <div className="share-panel">

          <h2>

            Ready to share?

          </h2>

          <p>

            Your name and photo
            are merged onto the card

          </p>

          {/* USER INFO */}

          <div className="share-user">

            {user.image ? (

              <img
                src={user.image}
                alt="profile"
                className="share-user-image"
              />

            ) : (

              <div className="share-letter">

                {
                  user.name
                  ?.charAt(0)
                }

              </div>
            )}

            <div>

              <h3>

                {user.name}

              </h3>

              <span>

                Appears on the card

              </span>

            </div>

          </div>

          {/* BUTTONS */}

          <button
            className="share-btn"
            onClick={
              shareWhatsApp
            }
          >

            Share now

          </button>

          <button
            className="download-btn"
            onClick={
              downloadCard
            }
          >

            Download PNG

          </button>

          <button
            className="regen-btn"
            onClick={() =>
              navigate("/home")
            }
          >

            Regenerate

          </button>

          {/* SOCIALS */}

          <div className="social-section">

            <p>

              SHARE TO

            </p>

            <div className="social-icons">

              <div>

                WhatsApp

              </div>

              <div>

                Instagram

              </div>

              <div>

                Email

              </div>

              <div>

                More

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default GeneratedCard;