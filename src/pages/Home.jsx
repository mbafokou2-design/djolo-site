import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faPeopleGroup,
  faPalette,
  faDove,
  faScaleBalanced,
  faMasksTheater,
} from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";
import heroImage from "../assets/images/Image1.png";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import slideDrumming from "../assets/images/gallery1.jpg";
import slideWorkshop from "../assets/images/gallery4.jpg";
import slideFootball from "../assets/images/football.jpg";
import slideKids from "../assets/images/kids.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const slideImages = {
    drumming: slideDrumming,
    workshop: slideWorkshop,
    football: slideFootball,
    kids: slideKids,
  };
  const { t } = useLang();

  const [current, setCurrent] = useState(0);
  const slides = t.activities.featured;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goPrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} className="hero-overlay">

          {/* Left — Text */}
          <div style={styles.heroContent}>
            <p style={styles.heroEyebrow}>DJOLO e.V. — Dortmund</p>
            <h1 style={styles.heroTitle}>{t.home.slogan}</h1>
            <p style={styles.heroIntro}>{t.home.intro}</p>
            <p style={{ ...styles.heroIntro, fontStyle: "italic", color: "#20B2AA", fontSize: "0.95rem" }}>
              {t.about.meaning}
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link to="/about" style={styles.heroBtn}>
                {t.home.cta}
              </Link>
              <Link to="/donation" style={styles.donationBtn}>
                <FontAwesomeIcon icon={faHandHoldingHeart} style={{ marginRight: "8px" }} />
                {t.donation.subtitle}
              </Link>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div style={styles.heroImageBox} className="hero-image-box">
            <img src={heroImage} alt="Djolo hero" style={styles.heroImage} />
          </div>

        </div>
      </section>
      {/* Slideshow */}
      <section style={styles.slideSection}>
        <div style={styles.slideWrap}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                ...styles.slideItem,
                opacity: current === index ? 1 : 0,
                zIndex: current === index ? 1 : 0,
              }}
            >
              <img
                src={slideImages[slide.category]}
                alt={slide.title}
                style={styles.slideImg}
              />
              <div style={styles.slideCaption}>
                <p style={styles.slideCaptionText}>{slide.title}</p>
              </div>
            </div>
          ))}

          <button style={{ ...styles.slideArrow, left: "16px" }} onClick={goPrev}>
            ‹
          </button>
          <button style={{ ...styles.slideArrow, right: "16px" }} onClick={goNext}>
            ›
          </button>

          <div style={styles.slideDots}>
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                style={{
                  ...styles.dot,
                  backgroundColor: current === index ? "#20B2AA" : "#cceeee",
                }}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Focus Areas */}
      <section style={styles.focusSection}>
        <div className="section">
          <h2 className="section-title">{t.about.focusTitle}</h2>
          <div className="section-underline"></div>
          <div className="grid-3">
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faHandshake} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus1}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faPeopleGroup} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus2}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faPalette} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus3}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faDove} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus4}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faScaleBalanced} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus5}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faMasksTheater} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus6}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section style={styles.activitiesPreview}>
        <div className="section">
          <h2 className="section-title">{t.activities.title}</h2>
          <div className="section-underline"></div>
          <div className="grid-2">
            {t.activities.featured.map((activity, index) => (
              <Link
                to={`/gallery?category=${activity.category}`}
                className="card"
                key={index}
                style={{ ...styles.activityCard, textDecoration: "none" }}
              >
                <h3 style={styles.activityTitle}>{activity.title}</h3>
              </Link>
            ))}
          </div>
          <div style={styles.ctaWrap}>
            <Link to="/activities" style={styles.outlineBtn}>
              {t.nav.activities} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    width: "100%",
    minHeight: "90vh",
    background: "linear-gradient(160deg, #e0f4f4 0%, #ffffff 50%, #e8f6fd 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroOverlay: {
    width: "100%",
    maxWidth: "1100px",
    padding: "60px 20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "48px",
    alignItems: "center",
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  heroEyebrow: {
    color: "#20B2AA",
    fontWeight: "700",
    fontSize: "0.9rem",
    letterSpacing: "2px",
    // textTransform: "uppercase",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "900",
    color: "#000000",
    lineHeight: "1.15",
    marginBottom: "24px",
  },
  heroIntro: {
    fontSize: "1.05rem",
    color: "#333333",
    lineHeight: "1.75",
    marginBottom: "36px",
    maxWidth: "560px",
  },
  heroBtn: {
    display: "inline-block",
    backgroundColor: "#20B2AA",
    color: "#ffffff",
    padding: "14px 32px",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "0.95rem",
    textDecoration: "none",
  },
  heroImageBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroImage: {
    width: "100%",
    maxWidth: "520px",
    borderRadius: "28px",
    objectFit: "cover",
  },
  focusSection: {
    backgroundColor: "#f9f9f9",
  },
  focusCard: {
    textAlign: "center",
    padding: "36px 24px",
  },
  icon: {
    color: "#87CEEB",
    marginBottom: "16px",
  },
  cardTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#000000",
    lineHeight: "1.5",
  },
  activitiesPreview: {
    backgroundColor: "#ffffff",
  },
  activityCard: {
    borderLeft: "4px solid #87CEEB",
    borderRadius: "8px",
  },
  activityTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#000000",
    marginBottom: "8px",
  },
  activityDesc: {
    fontSize: "0.9rem",
    color: "#555555",
    lineHeight: "1.6",
  },
  ctaWrap: {
    textAlign: "center",
    marginTop: "36px",
  },
  outlineBtn: {
    display: "inline-block",
    border: "2px solid #87CEEB",
    color: "#000000",
    padding: "12px 28px",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "0.95rem",
    textDecoration: "none",
  },
  banner: {
    backgroundColor: "#87CEEB",
    padding: "60px 20px",
    textAlign: "center",
  },
  bannerContent: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  bannerTitle: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#000000",
    marginBottom: "12px",
  },
  bannerSub: {
    fontSize: "0.95rem",
    color: "#1a1a1a",
    marginBottom: "8px",
  },
  bannerBtn: {
    display: "inline-block",
    marginTop: "20px",
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "12px 28px",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "0.95rem",
    textDecoration: "none",
  },
  donationBtn: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    color: "#20B2AA",
    border: "2px solid #20B2AA",
    padding: "14px 28px",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "0.95rem",
    textDecoration: "none",
  },
  slideSection: {
    backgroundColor: "#ffffff",
    padding: "60px 20px",
  },
  slideWrap: {
    position: "relative",
    maxWidth: "900px",
    height: "480px",
    margin: "0 auto",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(32,178,170,0.15)",
  },
  slideItem: {
    position: "absolute",
    inset: 0,
    transition: "opacity 0.6s ease",
  },
  slideImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  slideCaption: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
    padding: "40px 28px 24px",
  },
  slideCaptionText: {
    color: "#ffffff",
    fontSize: "1.1rem",
    fontWeight: "700",
    lineHeight: "1.4",
  },
  slideArrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255,255,255,0.85)",
    border: "none",
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    fontSize: "1.5rem",
    color: "#000000",
    cursor: "pointer",
    zIndex: 2,
  },
  slideDots: {
    position: "absolute",
    bottom: "12px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
    zIndex: 2,
  },
  dot: {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Home;