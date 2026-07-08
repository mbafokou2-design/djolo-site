import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../context/LanguageContext";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";
import gallery7 from "../assets/images/gallery7.jpg";
import foot1 from "../assets/images/football.jpg";
import foot2 from "../assets/images/football1.jpg";
import foot3 from "../assets/images/football2.jpg";
import foot4 from "../assets/images/football3.jpg";
import Kid from "../assets/images/Kids.jpg";


const categories = [
  {
    key: "drumming",
    labelKey: "catDrumming",
    images: [gallery1, gallery2, gallery3],
  },
  {
    key: "workshop",
    labelKey: "catWorkshop",
    images: [gallery4, gallery5, gallery6, gallery7],
  },
  {
    key: "football",
    labelKey: "catFootball",
    images: [foot1, foot2, foot3, foot4],
  },
  {
    key: "kids",
    labelKey: "catKids",
    images: [Kid],
  },
];

const CategorySlider = ({ category, label }) => {
  const [index, setIndex] = useState(0);

  if (category.images.length === 0) {
    return (
      <div style={styles.categoryBlock}>
        <h3 style={styles.categoryTitle}>{label}</h3>
        <div style={styles.emptyBox}>
          <p style={styles.emptyText}>Photos coming soon</p>
        </div>
      </div>
    );
  }

  const prev = () => setIndex((i) => (i === 0 ? category.images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === category.images.length - 1 ? 0 : i + 1));

  return (
    <div style={styles.categoryBlock}>
      <h3 style={styles.categoryTitle}>{label}</h3>
      <div style={styles.sliderWrap}>
        {category.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={label}
            style={{
              ...styles.sliderImg,
              opacity: index === i ? 1 : 0,
              zIndex: index === i ? 1 : 0,
            }}
          />
        ))}
        {category.images.length > 1 && (
          <>
            <button style={{ ...styles.sliderArrow, left: "10px" }} onClick={prev}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button style={{ ...styles.sliderArrow, right: "10px" }} onClick={next}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div style={styles.sliderCounter}>
              {index + 1} / {category.images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Gallery = () => {
  const { t } = useLang();
  const [searchParams] = useSearchParams();
  const targetCategory = searchParams.get("category");
  const refs = useRef({});

  useEffect(() => {
    if (targetCategory && refs.current[targetCategory]) {
      refs.current[targetCategory].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [targetCategory]);

  return (
    <div>
      <section style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>{t.gallery.title}</h1>
        <div className="section-underline"></div>
        <p style={styles.pageSubtitle}>{t.gallery.subtitle}</p>
      </section>

      <section className="section">
        {categories.map((cat) => (
          <div key={cat.key} ref={(el) => (refs.current[cat.key] = el)}>
            <CategorySlider category={cat} label={t.gallery[cat.labelKey]} />
          </div>
        ))}
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
    color: "#20B2AA",
    fontSize: "1rem",
    marginTop: "8px",
  },
  categoryBlock: {
    marginBottom: "56px",
    scrollMarginTop: "90px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  categoryTitle: {
    fontSize: "1.3rem",
    fontWeight: "800",
    color: "#000000",
    marginBottom: "18px",
    borderLeft: "4px solid #20B2AA",
    paddingLeft: "14px",
    maxWidth: "800px",
  },
  sliderWrap: {
    position: "relative",
    width: "100%",
    maxWidth: "800px",
    aspectRatio: "4 / 3",
    maxHeight: "520px",
    margin: "0 auto",
    borderRadius: "14px",
    overflow: "hidden",
    backgroundColor: "#e8e8e8",
  },
  sliderImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.6s ease-in-out",
  },
sliderArrow: {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255,255,255,0.85)",
  border: "none",
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  cursor: "pointer",
  color: "#000000",
  zIndex: 5,
},
sliderCounter: {
  position: "absolute",
  bottom: "12px",
  right: "12px",
  backgroundColor: "rgba(0,0,0,0.6)",
  color: "#ffffff",
  fontSize: "0.8rem",
  padding: "4px 10px",
  borderRadius: "12px",
  zIndex: 5,
},
  emptyBox: {
    width: "100%",
    maxWidth: "800px",
    height: "200px",
    border: "2px dashed #87CEEB",
    borderRadius: "14px",
    backgroundColor: "#f0fafa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "#888888",
    fontStyle: "italic",
  },
};

export default Gallery;

