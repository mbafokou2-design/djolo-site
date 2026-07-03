import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faPalette,
  faDove,
} from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";

const Home = () => {
  const { t } = useLang();

  return (
    <div>
      {/* Hero Section */}
<section style={styles.hero}>
  <div style={styles.heroOverlay}>

    {/* Left — Text */}
    <div style={styles.heroContent}>
      <p style={styles.heroEyebrow}>DJOLO e.V. — Dortmund</p>
      <h1 style={styles.heroTitle}>{t.home.slogan}</h1>
      <p style={styles.heroIntro}>{t.home.intro}</p>
      <Link to="/about" style={styles.heroBtn}>
        {t.home.cta}
      </Link>
    </div>

    {/* Right — Logo Placeholder */}
    <div style={styles.heroImageBox}>
      <div style={styles.heroPlaceholder}>
        <div style={styles.placeholderCircle}>
          <span style={styles.placeholderLetter}>D</span>
        </div>
        <p style={styles.placeholderLabel}>— LOGO —</p>
        <p style={styles.placeholderSub}>Replace with real logo</p>
      </div>
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
              <FontAwesomeIcon
                icon={faHandshake}
                size="2x"
                style={styles.icon}
              />
              <h3 style={styles.cardTitle}>{t.about.focus1}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon
                icon={faPalette}
                size="2x"
                style={styles.icon}
              />
              <h3 style={styles.cardTitle}>{t.about.focus2}</h3>
            </div>
            <div className="card" style={styles.focusCard}>
              <FontAwesomeIcon icon={faDove} size="2x" style={styles.icon} />
              <h3 style={styles.cardTitle}>{t.about.focus3}</h3>
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

      {/* Contact Banner */}
      <section style={styles.banner}>
        <div style={styles.bannerContent}>
          <h2 style={styles.bannerTitle}>{t.contact.title}</h2>
          <p style={styles.bannerSub}>{t.footer.address}</p>
          <p style={styles.bannerSub}>{t.footer.phone}</p>
          <Link to="/contact" style={styles.bannerBtn}>
            {t.contact.send} →
          </Link>
        </div>
      </section>
    </div>
  );
};

const styles = {

  heroOverlay: {
    width: "100%",
    maxWidth: "1100px",
    padding: "60px 20px",
  },
  heroContent: {
    maxWidth: "650px",
  },

  heroTitle: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "900",
    color: "#ffffff",
    lineHeight: "1.15",
    marginBottom: "24px",
  },

hero: {
    width: "100%",
    minHeight: "90vh",
    background: "linear-gradient(160deg, #e0f4f4 0%, #ffffff 50%, #e8f6fd 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroEyebrow: {
    color: "#20B2AA",
    fontWeight: "700",
    fontSize: "0.9rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
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
  heroImageBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroPlaceholder: {
    width: "100%",
    maxWidth: "380px",
    aspectRatio: "1/1",
    border: "2px dashed #20B2AA",
    borderRadius: "16px",
    backgroundColor: "#f0fafa",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },
  placeholderCircle: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #87CEEB 0%, #20B2AA 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 16px rgba(32,178,170,0.3)",
  },
  placeholderLetter: {
    color: "#ffffff",
    fontWeight: "900",
    fontSize: "2.2rem",
  },
  placeholderLabel: {
    fontSize: "0.85rem",
    fontWeight: "700",
    color: "#20B2AA",
    letterSpacing: "3px",
    textTransform: "uppercase",
  },
  placeholderSub: {
    fontSize: "0.75rem",
    color: "#888888",
    fontStyle: "italic",
  },
};

export default Home;