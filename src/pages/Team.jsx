import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";

const teamMembers = [
  {
    name: "Didier Djourou",
    roleKey: "chair",
  },
  {
    name: null,
    roleKey: "viceChair",
  },
  {
    name: null,
    roleKey: "secretary",
  },
  {
    name: null,
    roleKey: "treasurer",
  },
];

const Team = () => {
  const { t } = useLang();

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.team.title}</h1>
        <div className="section-underline"></div>
      </section>

      {/* Team Grid */}
      <section className="section">
        <div style={styles.grid}>
          {teamMembers.map((member, index) => (
            <div className="card" key={index} style={styles.card}>
              {/* Avatar */}
              <div style={styles.avatar}>
                <FontAwesomeIcon
                  icon={faUser}
                  size="2x"
                  style={styles.avatarIcon}
                />
              </div>

              {/* Info */}
              <div style={styles.info}>
                <span style={styles.role}>
                  {t.team[member.roleKey]}
                </span>
                <h3 style={styles.name}>
                  {member.name ? member.name : t.team.tbd}
                </h3>
              </div>

              {/* Accent Bar */}
              <div style={styles.accentBar}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Note */}
      <section style={styles.noteSection}>
        <div style={styles.noteBox}>
          <p style={styles.noteText}>
            {t.lang === "de"
              ? "Weitere Vorstandsmitglieder werden in Kürze bekannt gegeben."
              : "Further board members will be announced soon."}
          </p>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "28px",
  },
  card: {
    textAlign: "center",
    padding: "40px 24px 28px",
    position: "relative",
    overflow: "hidden",
  },
  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: "#e8f6fd",
    border: "3px solid #87CEEB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  avatarIcon: {
    color: "#87CEEB",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  role: {
    fontSize: "0.75rem",
    fontWeight: "700",
    color: "#87CEEB",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  },
  name: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#000000",
  },
  accentBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "4px",
    backgroundColor: "#87CEEB",
  },
  noteSection: {
    backgroundColor: "#f9f9f9",
    padding: "40px 20px",
  },
  noteBox: {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#e8f6fd",
    borderRadius: "10px",
    padding: "24px",
    borderLeft: "4px solid #87CEEB",
  },
  noteText: {
    fontSize: "0.95rem",
    color: "#333333",
    lineHeight: "1.6",
    fontStyle: "italic",
  },
};

export default Team;