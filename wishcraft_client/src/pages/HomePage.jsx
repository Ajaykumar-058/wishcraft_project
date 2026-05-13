import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PremiumModal from "../components/PremiumModal";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPremium, setShowPremium] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const categories = ["All", "Birthday", "Shayari", "Festival", "Love", "Motivation"];

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/templates");
      setTemplates(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const filteredTemplates =
    selectedCategory === "All"
      ? templates
      : templates.filter((item) => item.category === selectedCategory);

  const handleTemplate = (template) => {
    localStorage.setItem("templateImage", template.image_url);
    localStorage.setItem("templateTitle", template.title);
    localStorage.setItem("templateCategory", template.category);
    localStorage.setItem("templateQuote", template.quote);
    navigate("/preview");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const slideLeft = () => {
    const slider = document.getElementById("template-slider");
    slider.scrollLeft -= 380;
  };

  const slideRight = () => {
    const slider = document.getElementById("template-slider");
    slider.scrollLeft += 380;
  };

  if (loading) {
    return <div className="loading">Loading Templates...</div>;
  }

  return (
    <div className="home-container">

      {/* TOPBAR */}
      <div className="topbar">

        {/* LOGO */}
        <div className="logo">✦ WishCraft</div>

        {/* PROFILE */}
        <div className="profile-area">

          <div className="profile-box">

            {/* AVATAR */}
            <div className="avatar">
              {user.image ? (
                <img src={user.image} alt="profile" className="avatar-image" />
              ) : (
                <span>{user.name ? user.name.charAt(0) : "G"}</span>
              )}
            </div>

            {/* NAME ONLY - Premium Creator removed */}
            <div className="profile-info">
              <h3 className="profile-name">
                {user.name ? user.name : "Guest"}
              </h3>
            </div>

          </div>

          {/* LOGOUT */}
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>

        </div>
      </div>

      {/* FILTERS */}
      <div className="category-row">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active-category" : "category-btn"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* HEADER */}
      <div className="home-header">
        <h1>Trending Templates</h1>
        <p>Create beautiful greeting cards instantly</p>
      </div>

      {/* SLIDER */}
      <div className="slider-wrapper">

        <button className="slide-btn left-btn" onClick={slideLeft}>
          <FaChevronLeft />
        </button>

        <div className="template-slider" id="template-slider">
          {filteredTemplates.map((item) => (
            <div className="template-card" key={item.id}>

              <img src={item.image_url} alt={item.title} />

              <div className="template-content">
                <h3>{item.title}</h3>
                <p>{item.category}</p>

                <div className="template-quote">✨ "{item.quote}"</div>

                {item.is_premium ? (
                  <span className="premium-badge">Premium</span>
                ) : (
                  <span className="free-badge">Free</span>
                )}

                <button
                  onClick={() => {
                    if (item.is_premium) {
                      setShowPremium(true);
                    } else {
                      handleTemplate(item);
                    }
                  }}
                >
                  Use Template
                </button>
              </div>

            </div>
          ))}
        </div>

        <button className="slide-btn right-btn" onClick={slideRight}>
          <FaChevronRight />
        </button>

      </div>

      {/* PREMIUM MODAL */}
      {showPremium && <PremiumModal setShowPremium={setShowPremium} />}

    </div>
  );
}

export default HomePage;