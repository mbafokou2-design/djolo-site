import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLang } from "../context/LanguageContext";
import { faLocationDot, faPhone, faEnvelope, faPaperPlane, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// Replace with your real Formspree endpoint
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

const Contact = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.contact.title}</h1>
        <div className="section-underline"></div>
        <p style={styles.pageSubtitle}>{t.contact.subtitle}</p>
      </section>

      {/* Content */}
      <section className="section">
        <div style={styles.wrapper}>

          {/* Left — Info */}
          <div style={styles.infoCol}>
            <div style={styles.infoCard}>
              <div style={styles.infoItem}>
                <div style={styles.infoIconWrap}>
                  <FontAwesomeIcon icon={faLocationDot} style={styles.infoIcon} />
                </div>
                <div>
                  <p style={styles.infoLabel}>{t.contact.address}</p>
                  <p style={styles.infoValue}>Am Hartweg 151</p>
                  <p style={styles.infoValue}>44149 Dortmund</p>
                </div>
              </div>

              <div style={styles.divider}></div>

              <div style={styles.infoItem}>
                <div style={styles.infoIconWrap}>
                  <FontAwesomeIcon icon={faEnvelope} style={styles.infoIcon} />
                </div>
                <div>
                  <p style={styles.infoLabel}>{t.contact.emailLabel}</p>
                  <a href="mailto:info@djolo.de" style={styles.infoLink}>
                    info@djolo.de
                  </a>
                </div>
                <div style={styles.infoIconWrap}>
                  <FontAwesomeIcon icon={faPhone} style={styles.infoIcon} />
                </div>
                <div>
                  <p style={styles.infoLabel}>{t.contact.phone}</p>
                  <a href="tel:+4915751193470" style={styles.infoLink}>
                    +49 15751 19 34 70
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div style={styles.mapWrap}>
              <iframe
                title="DJOLO e.V. Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.3!2d7.4385!3d51.5055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQW0gSGFydHdlZyAxNTEsIDQ0MTQ5IERvcnRtdW5k!5e0!3m2!1sen!2sde!4v1"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right — Form */}
          <div style={styles.formCol}>
            {status === "success" ? (
              <div style={styles.successBox}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  size="3x"
                  style={{ color: "#87CEEB", marginBottom: "16px" }}
                />
                <h3 style={styles.successTitle}>
                  {t.lang === "de"
                    ? "Nachricht gesendet!"
                    : "Message sent!"}
                </h3>
                <p style={styles.successSub}>
                  {t.lang === "de"
                    ? "Wir melden uns so schnell wie möglich bei Ihnen."
                    : "We will get back to you as soon as possible."}
                </p>
                <button
                  style={styles.resetBtn}
                  onClick={() => setStatus("idle")}
                >
                  {t.lang === "de" ? "Neue Nachricht" : "New Message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                {/* Name */}
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>{t.contact.name}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder={t.contact.name}
                  />
                </div>

                {/* Email */}
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>{t.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder={t.contact.email}
                  />
                </div>

                {/* Message */}
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>{t.contact.message}</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...styles.input, resize: "vertical" }}
                    placeholder={t.contact.message}
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p style={styles.errorMsg}>
                    {t.lang === "de"
                      ? "Fehler beim Senden. Bitte versuche es erneut."
                      : "Error sending message. Please try again."}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  style={styles.submitBtn}
                  disabled={status === "sending"}
                >
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ marginRight: "8px" }}
                  />
                  {status === "sending"
                    ? t.lang === "de"
                      ? "Wird gesendet..."
                      : "Sending..."
                    : t.contact.send}
                </button>
              </form>
            )}
          </div>
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
  pageSubtitle: {
    color: "#87CEEB",
    fontSize: "1rem",
    marginTop: "8px",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "flex-start",
  },
  infoCol: {
    flex: "1 1 280px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  infoCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "28px",
    borderTop: "4px solid #87CEEB",
  },
  infoItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
  },
  infoIconWrap: {
    width: "44px",
    height: "44px",
    backgroundColor: "#e8f6fd",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "44px",
  },
  infoIcon: {
    color: "#87CEEB",
  },
  infoLabel: {
    fontSize: "0.75rem",
    fontWeight: "700",
    color: "#87CEEB",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "4px",
  },
  infoValue: {
    fontSize: "0.95rem",
    color: "#000000",
    lineHeight: "1.6",
  },
  infoLink: {
    fontSize: "0.95rem",
    color: "#000000",
    textDecoration: "none",
    fontWeight: "600",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e0e0e0",
    margin: "20px 0",
  },
  mapWrap: {
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid #e0e0e0",
  },
  formCol: {
    flex: "2 1 340px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: "700",
    color: "#000000",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  input: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1.5px solid #e0e0e0",
    fontSize: "0.95rem",
    color: "#000000",
    outline: "none",
    fontFamily: "'Segoe UI', sans-serif",
    transition: "border 0.2s",
    backgroundColor: "#ffffff",
  },
  submitBtn: {
    backgroundColor: "#87CEEB",
    color: "#000000",
    border: "none",
    borderRadius: "30px",
    padding: "14px 32px",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s",
  },
  errorMsg: {
    color: "#cc0000",
    fontSize: "0.9rem",
    backgroundColor: "#fff0f0",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #ffcccc",
  },
  successBox: {
    textAlign: "center",
    padding: "60px 20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  successTitle: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#000000",
    marginBottom: "10px",
  },
  successSub: {
    fontSize: "0.95rem",
    color: "#555555",
    marginBottom: "24px",
  },
  resetBtn: {
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    borderRadius: "30px",
    padding: "12px 28px",
    fontWeight: "700",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  donationBox: {
    maxWidth: "700px",
    margin: "50px auto 0",
    backgroundColor: "#f0fafa",
    border: "2px solid #87CEEB",
    borderRadius: "14px",
    padding: "32px",
  },
  donationHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "6px",
  },
  donationTitle: {
    fontSize: "1.4rem",
    fontWeight: "800",
    color: "#000000",
  },
  donationSubtitle: {
    fontSize: "0.95rem",
    color: "#20B2AA",
    fontWeight: "700",
    marginBottom: "18px",
  },
  donationDetails: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "18px 20px",
    marginBottom: "16px",
  },
  donationLine: {
    fontSize: "0.9rem",
    color: "#000000",
    lineHeight: "1.9",
    fontFamily: "monospace",
  },
  donationNote: {
    fontSize: "0.85rem",
    color: "#555555",
    fontStyle: "italic",
    lineHeight: "1.6",
  },
};

export default Contact;