import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";
import logoImage from "../assets/images/Image1.png";

const Footer = () => {
  const { t } = useLang();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.activities, path: "/activities" },
    { label: t.nav.gallery, path: "/gallery" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Column 1 - Brand */}
        <div style={styles.col}>
          <img src={logoImage} alt="Djolo logo" style={styles.footerLogo} />
          <p style={styles.tagline}>
            {t.home.slogan}
          </p>
          {/* <div style={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://wa.me/4915751193470" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div> */}
        </div>

        {/* Column 2 - Quick Links */}
        <div style={styles.col}>
          <h3 style={styles.colTitle}>{t.footer.quickLinks}</h3>
          <ul style={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.path} style={styles.linkItem}>
                <Link to={link.path} style={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div style={styles.col}>
          <h3 style={styles.colTitle}>{t.footer.contactUs}</h3>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faLocationDot} style={styles.contactIcon} />
            <span>{t.footer.address}</span>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} style={styles.contactIcon} />
            <span>{t.footer.phone}</span>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.contactIcon} />
            <span>{t.footer.email}</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>
          &copy; {new Date().getFullYear()} DJOLO e.V. — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f0fafa",
    color: "#000000",
    fontFamily: "'Segoe UI', sans-serif",
    marginTop: "auto",
    borderTop: "2px solid #87CEEB",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "50px 20px 30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "space-between",
  },
  col: {
    flex: "1 1 220px",
    minWidth: "200px",
  },
  brand: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "#ffffff",
    margin: "0 0 10px",
  },
  accent: {
    color: "#87CEEB",
  },
  tagline: {
    fontSize: "0.9rem",
    color: "#aaaaaa",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  socials: {
    display: "flex",
    gap: "16px",
  },
  socialIcon: {
    color: "#87CEEB",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  colTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#87CEEB",
    marginBottom: "16px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  linkItem: {
    borderBottom: "1px solid #1a1a1a",
    paddingBottom: "8px",
  },
  link: {
    color: "#cccccc",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.2s",
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "14px",
    fontSize: "0.9rem",
    color: "#cccccc",
    lineHeight: "1.5",
  },
  contactIcon: {
    color: "#87CEEB",
    marginTop: "3px",
    minWidth: "16px",
  },
  bottomBar: {
    borderTop: "1px solid #1f1f1f",
    padding: "16px 20px",
    textAlign: "center",
  },
  bottomText: {
    fontSize: "0.8rem",
    color: "#666666",
    margin: 0,
  },
  footer: {
    backgroundColor: "#f0fafa",
    color: "#000000",
    fontFamily: "'Segoe UI', sans-serif",
    marginTop: "auto",
    borderTop: "2px solid #87CEEB",
  },
  brand: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "#000000",
    margin: "0 0 10px",
  },
  tagline: {
    fontSize: "0.9rem",
    color: "#444444",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  link: {
    color: "#333333",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
  linkItem: {
    borderBottom: "1px solid #d0eeee",
    paddingBottom: "8px",
  },
  contactItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "14px",
    fontSize: "0.9rem",
    color: "#333333",
    lineHeight: "1.5",
  },
  bottomBar: {
    borderTop: "1px solid #c0e8e8",
    padding: "16px 20px",
    textAlign: "center",
    backgroundColor: "#e0f4f4",
  },
  bottomText: {
    fontSize: "0.8rem",
    color: "#333333",
    margin: 0,
  },
  footerLogo: {
    height: "40px",
    width: "160px",
    marginBottom: "14px",
  },
};

export default Footer;