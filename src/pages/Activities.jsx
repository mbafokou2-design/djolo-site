import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faDrum,
  faPersonWalking,
  faChildren,
  faBrain,
  faUsers,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";


const icons = [
  faFutbol,
  faDrum,
  faPersonWalking,
  faChildren,
  faBrain,
  faUsers,
  faHouseChimney,
];

const Activities = () => {
  const { t } = useLang();

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.activities.title}</h1>
        <div className="section-underline"></div>
      </section>

      {/* Activities Grid */}
      <section className="section">
        <div style={styles.grid}>
          {t.activities.list.map((activity, index) => {
            const CardTag = activity.category ? Link : "div";
            const cardProps = activity.category
              ? { to: `/gallery?category=${activity.category}` }
              : {};

            return (
              <CardTag
                key={index}
                className="card"
                style={{
                  ...styles.card,
                  textDecoration: "none",
                  cursor: activity.category ? "pointer" : "default",
                }}
                {...cardProps}
              >
                <div style={styles.iconWrap}>
                  <FontAwesomeIcon
                    icon={icons[index]}
                    size="xl"
                    style={styles.icon}
                  />
                </div>
                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{activity.title}</h3>
                  <p style={styles.cardDesc}>{activity.desc}</p>
                </div>
              </CardTag>
            );
          })}
        </div>
      </section>

      {/* Bottom Banner */}
      <section style={styles.banner}>
        <div style={styles.bannerContent}>
          <h2 style={styles.bannerTitle}>{t.activities.joinUs}</h2>
          <p style={styles.bannerSub}>{t.footer.address}</p>
          <p style={styles.bannerSub}>{t.footer.phone}</p>
          <p style={styles.bannerSub}>{t.footer.email}</p>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    padding: "28px",
    borderLeft: "4px solid #87CEEB",
  },
  iconWrap: {
    minWidth: "52px",
    height: "52px",
    backgroundColor: "#e8f6fd",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#87CEEB",
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#000000",
    marginBottom: "8px",
    lineHeight: "1.4",
  },
  cardDesc: {
    fontSize: "0.9rem",
    color: "#555555",
    lineHeight: "1.65",
  },
  banner: {
    backgroundColor: "#f9f9f9",
    borderTop: "4px solid #87CEEB",
    padding: "50px 20px",
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
    color: "#444444",
    lineHeight: "1.7",
  },
};

export default Activities;