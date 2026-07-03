import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faPeopleGroup,
  faPalette,
  faDove,
} from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";
import heroImage from "../assets/images/Image1.png";

const Home = () => {
  const { t } = useLang();

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
            <Link to="/about" style={styles.heroBtn}>
              {t.home.cta}
            </Link>
          </div>

          {/* Right — Hero Image */}
          <div style={styles.heroImageBox} className="hero-image-box">
            <img src={heroImage} alt="Djolo hero" style={styles.heroImage} />
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
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section style={styles.activitiesPreview}>
        <div className="section">
          <h2 className="section-title">{t.activities.title}</h2>
          <div className="section-underline"></div>
          <div className="grid-2">
            {t.activities.list.slice(0, 4).map((activity, index) => (
              <div className="card" key={index} style={styles.activityCard}>
                <h3 style={styles.activityTitle}>{activity.title}</h3>
                <p style={styles.activityDesc}>{activity.desc}</p>
              </div>
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
};

export default Home;