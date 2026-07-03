import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";
import logoImage from "../assets/images/Image1.png";

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.activities, path: "/activities" },
    { label: t.nav.gallery, path: "/gallery" },
    { label: t.nav.team, path: "/team" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.container}>

          {/* Logo */}
          <Link to="/" style={styles.logoLink}>
            <img src={logoImage} alt="Djolo logo" style={styles.logoImage} />
          </Link>

          {/* Desktop Links */}
          <ul style={styles.desktopLinks}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    ...styles.link,
                    ...(location.pathname === link.path ? styles.activeLink : {}),
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div style={styles.rightSide}>
            {/* Language Toggle */}
            <div style={styles.toggleWrap} onClick={toggleLang}>
              <div
                style={{
                  ...styles.toggleThumb,
                  transform: lang === "en" ? "translateX(35px)" : "translateX(0px)",
                  backgroundColor: lang === "en" ? "#20B2AA" : "#87CEEB",
                }}
              />
              <span style={styles.toggleLabelLeft}>DE</span>
              <span style={styles.toggleLabelRight}>EN</span>
            </div>

            {/* Hamburger */}
            <button
              style={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div style={{
        ...styles.drawer,
        maxHeight: menuOpen ? "500px" : "0px",
        opacity: menuOpen ? 1 : 0,
      }}>
        <ul style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <li key={link.path} style={styles.mobileItem}>
              <Link
                to={link.path}
                style={{
                  ...styles.mobileLink,
                  ...(location.pathname === link.path ? styles.activeMobileLink : {}),
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const styles = {
  nav: {
    backgroundColor: "#ffffff",
    borderBottom: "2px solid #87CEEB",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Segoe UI', sans-serif",
    boxShadow: "0 2px 12px rgba(135,206,235,0.15)",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoLink: { textDecoration: "none", display: "flex", alignItems: "center" },
  logoImage: {
    width: "100%",
    height: "48px",
    objectFit: "cover",

  },
  logoPlaceholder: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoCircle: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #87CEEB 0%, #20B2AA 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(32,178,170,0.35)",
  },
  logoCircleInner: {
    color: "#ffffff",
    fontWeight: "900",
    fontSize: "1.2rem",
  },
  logoTextWrap: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1",
  },
  logoMain: {
    fontSize: "1.3rem",
    fontWeight: "900",
    color: "#000000",
    letterSpacing: "2px",
  },
  logoSub: {
    fontSize: "0.7rem",
    fontWeight: "700",
    color: "#20B2AA",
    letterSpacing: "3px",
  },
  desktopLinks: {
    display: "flex",
    listStyle: "none",
    gap: "28px",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#000000",
    fontWeight: "500",
    fontSize: "0.92rem",
    paddingBottom: "4px",
  },
  activeLink: {
    color: "#20B2AA",
    fontWeight: "700",
    borderBottom: "2px solid #20B2AA",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  /* Toggle Switch */
  toggleWrap: {
    width: "64px",
    height: "28px",
    backgroundColor: "#e0f4f4",
    borderRadius: "14px",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 4px",
    border: "1.5px solid #87CEEB",
    userSelect: "none",
  },
  toggleThumb: {
    position: "absolute",
    top: "3px",
    left: "2px",
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    transition: "transform 0.25s ease, background-color 0.25s ease",
    zIndex: 1,
  },
  toggleLabelLeft: {
    fontSize: "0.65rem",
    fontWeight: "800",
    color: "#000000",
    zIndex: 2,
    letterSpacing: "0.5px",
  },
  toggleLabelRight: {
    fontSize: "0.65rem",
    fontWeight: "800",
    color: "#000000",
    zIndex: 2,
    letterSpacing: "0.5px",
  },
  /* Hamburger — visible only on mobile via inline media */
  hamburger: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#000000",
    padding: "4px",
    display: "none", // overridden by CSS in index.css
  },
  /* Mobile Drawer */
  drawer: {
    overflow: "hidden",
    transition: "max-height 0.35s ease, opacity 0.3s ease",
    backgroundColor: "#ffffff",
    borderBottom: "2px solid #87CEEB",
    position: "sticky",
    top: "72px",
    zIndex: 999,
  },
  mobileMenu: {
    listStyle: "none",
    margin: 0,
    padding: "8px 24px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  mobileItem: {
    borderBottom: "1px solid #f0f0f0",
  },
  mobileLink: {
    display: "block",
    padding: "13px 4px",
    textDecoration: "none",
    color: "#000000",
    fontWeight: "500",
    fontSize: "1rem",
  },
  activeMobileLink: {
    color: "#20B2AA",
    fontWeight: "700",
  },
};

export default Navbar;