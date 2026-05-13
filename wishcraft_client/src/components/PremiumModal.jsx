import "./PremiumModal.css";

function PremiumModal({
  setShowPremium
}) {

  return (

    <div className="premium-overlay">

      <div className="premium-modal">

        {/* CLOSE */}

        <button
          className="close-btn"
          onClick={() =>
            setShowPremium(false)
          }
        >
          ✕
        </button>

        {/* ICON */}

        <div className="premium-icon">

          👑

        </div>

        {/* TITLE */}

        <h1>

          Unlock Premium

        </h1>

        <p>

          Get access to 500+
          exclusive greeting templates

        </p>

        {/* FEATURES */}

        <div className="premium-features">

          <div>
            ✅ All premium templates
          </div>

          <div>
            ✅ No watermark on shares
          </div>

          <div>
            ✅ HD quality downloads
          </div>

          <div>
            ✅ Early access to new cards
          </div>

        </div>

        {/* PRICE */}

        <h2>

          ₹99
          <span>/ month</span>

        </h2>

        {/* BUTTON */}

        <button
          className="subscribe-btn"
        >

          Subscribe Now

        </button>

        <button
          className="later-btn"
          onClick={() =>
            setShowPremium(false)
          }
        >

          Maybe later

        </button>

      </div>

    </div>
  );
}

export default PremiumModal;