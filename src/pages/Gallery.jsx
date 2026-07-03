import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";


const images = [
  {
    src: "/src/assets/images/gallery1.jpg",
    caption: "Kinderprogramm – Pädagogische Konzentration mit dem Trommeln",
  },
  {
    src: "/src/assets/images/gallery2.jpg",
    caption: "Kinderprogramm – Pädagogische Konzentration mit dem Trommeln",
  },
  {
    src: "/src/assets/images/gallery3.jpg",
    caption: "Kinderprogramm – Pädagogische Konzentration mit dem Trommeln",
  },
  {
    src: "/src/assets/images/gallery4.jpg",
    caption: "Afrikanische Trommel Workshop – Haus der Vielfalt Dortmund",
  },
  {
    src: "/src/assets/images/gallery5.jpg",
    caption: "Afrikanische Trommel Workshop – Haus der Vielfalt Dortmund",
  },
  {
    src: "/src/assets/images/gallery6.jpg",
    caption: "Afrikanische Trommel Workshop – Haus der Vielfalt Dortmund",
  },
  {
    src: "/src/assets/images/gallery7.jpg",
    caption: "Afrikanische Trommel Workshop – Haus der Vielfalt Dortmund",
  },
];

const Gallery = () => {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState(null); // index of open image

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const prevImage = () =>
    setLightbox((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setLightbox((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.gallery.title}</h1>
        <div className="section-underline"></div>
        <p style={styles.pageSubtitle}>{t.gallery.subtitle}</p>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div style={styles.grid}>
          {images.map((img, index) => (
            <div
              key={index}
              style={styles.imgWrap}
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.caption}
                style={styles.img}
              />
              <div style={styles.imgOverlay}>
                <p style={styles.imgCaption}>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div style={styles.lightboxBg} onClick={closeLightbox}>
          <div
            style={styles.lightboxBox}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button style={styles.closeBtn} onClick={closeLightbox}>
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>

            {/* Prev */}
            <button style={styles.prevBtn} onClick={prevImage}>
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>

            <img
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              style={styles.lightboxImg}
            />

            {/* Next */}
            <button style={styles.nextBtn} onClick={nextImage}>
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>

            <p style={styles.lightboxCaption}>
              {images[lightbox].caption}
            </p>
            <p style={styles.lightboxCounter}>
              {lightbox + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px",
  },
  imgWrap: {
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
    aspectRatio: "4/3",
    backgroundColor: "#e8e8e8",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  imgOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.65)",
    padding: "12px 14px",
    transform: "translateY(100%)",
    transition: "transform 0.3s ease",
  },
  imgCaption: {
    color: "#ffffff",
    fontSize: "0.8rem",
    lineHeight: "1.4",
  },
  lightboxBg: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.92)",
    zIndex: 2000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  lightboxBox: {
    position: "relative",
    maxWidth: "800px",
    width: "100%",
    textAlign: "center",
  },
  lightboxImg: {
    width: "100%",
    borderRadius: "10px",
    maxHeight: "70vh",
    objectFit: "contain",
  },
  lightboxCaption: {
    color: "#cccccc",
    fontSize: "0.9rem",
    marginTop: "14px",
    lineHeight: "1.5",
  },
  lightboxCounter: {
    color: "#87CEEB",
    fontSize: "0.85rem",
    marginTop: "6px",
    fontWeight: "700",
  },
  closeBtn: {
    position: "absolute",
    top: "-40px",
    right: "0",
    background: "none",
    border: "none",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  prevBtn: {
    position: "absolute",
    left: "-50px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(135,206,235,0.2)",
    border: "none",
    color: "#ffffff",
    cursor: "pointer",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nextBtn: {
    position: "absolute",
    right: "-50px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(135,206,235,0.2)",
    border: "none",
    color: "#ffffff",
    cursor: "pointer",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Gallery;