import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faPeopleGroup,
  faPalette,
  faDove,
} from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";

const About = () => {
  const { t } = useLang();

  const focusAreas = [
    { icon: faHandshake, text: t.about.focus1 },
    { icon: faPeopleGroup, text: t.about.focus2 },
    { icon: faPalette, text: t.about.focus3 },
    { icon: faDove, text: t.about.focus4 },
  ];

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.about.title}</h1>
        <div className="section-underline"></div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div style={styles.contentWrap}>
          {/* Text Block */}
          <div style={styles.textBlock}>
            <h2 style={styles.subTitle}>DJOLO e.V.</h2>
            <p style={styles.bodyText}>{t.about.text}</p>
          </div>

          {/* Info Card */}
          <div style={styles.infoCard}>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>
                {t.contact.address}
              </span>
              <span style={styles.infoValue}>
                Am Hartweg 151, 44149 Dortmund
              </span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>
                {t.contact.phone}
              </span>
              <span style={styles.infoValue}>
                +49 15751 19 34 70
              </span>
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
            {focusAreas.map((area, index) => (
              <div className="card" key={index} style={styles.focusCard}>
                <div style={styles.iconWrap}>
                  <FontAwesomeIcon
                    icon={area.icon}
                    size="2x"
                    style={styles.icon}
                  />
                </div>
                <p style={styles.focusText}>{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section style={styles.missionBanner}>
        <div style={styles.missionContent}>
          <p style={styles.missionQuote}>
            "Eine Bessere Chance für Migranten"
          </p>
          <p style={styles.missionSub}>— DJOLO e.V., Dortmund</p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  pageHeader: {
    backgroundColor: "#f0fafa",
    borderBottom: "3px solid #87CEEB",
    padding: "60px 20px 40px",
    textAlign: "center",
  },
  pageTitle: {
    fontSize: "clamp(1.8rem, 4vw, 3rem)",
    fontWeight: "900",
    color: "#000000",
    marginBottom: "16px",
  },
  contentWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "flex-start",
  },
  textBlock: {
    flex: "2 1 320px",
  },
  subTitle: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#000000",
    marginBottom: "16px",
    borderLeft: "4px solid #87CEEB",
    paddingLeft: "14px",
  },
  bodyText: {
    fontSize: "1rem",
    color: "#333333",
    lineHeight: "1.85",
  },
  infoCard: {
    flex: "1 1 240px",
    backgroundColor: "#f4f4f4",
    borderRadius: "12px",
    padding: "28px",
    borderTop: "4px solid #87CEEB",
  },
  infoRow: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "20px",
  },
  infoLabel: {
    fontSize: "0.75rem",
    fontWeight: "700",
    color: "#87CEEB",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  infoValue: {
    fontSize: "0.95rem",
    color: "#000000",
    fontWeight: "500",
  },
  focusSection: {
    backgroundColor: "#f9f9f9",
  },
  focusCard: {
    textAlign: "center",
    padding: "40px 24px",
  },
  iconWrap: {
    width: "64px",
    height: "64px",
    backgroundColor: "#e8f6fd",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  icon: {
    color: "#87CEEB",
  },
  focusText: {
    fontSize: "0.95rem",
    color: "#333333",
    lineHeight: "1.6",
    fontWeight: "500",
  },
  missionBanner: {
    backgroundColor: "#87CEEB",
    padding: "60px 20px",
    textAlign: "center",
  },
  missionContent: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  missionQuote: {
    fontSize: "clamp(1.3rem, 3vw, 2rem)",
    fontWeight: "800",
    color: "#000000",
    fontStyle: "italic",
    marginBottom: "12px",
  },
  missionSub: {
    fontSize: "0.9rem",
    color: "#1a1a1a",
    fontWeight: "600",
  },
};

export default About;