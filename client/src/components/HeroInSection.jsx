// src/components/HeroIn.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg01 from "../assets/images/09fa047f7ef2a641caaec5922d4d21f8ae752b1c.png";
import playIcon from "../assets/images/Vector.png";

const PrevArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`hin-arrow slick-prev ${className || ""}`}
    style={style}
    onClick={onClick}
    aria-label="Previous"
  >
    <i className="fa-solid fa-arrow-left" />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`hin-arrow slick-next ${className || ""}`}
    style={style}
    onClick={onClick}
    aria-label="Next"
  >
    <i className="fa-solid fa-arrow-right" />
  </button>
);

const slides = [
  { bg: bg01, title: "MAKE YOUR OUT DRINK", desc: "Descrip exactly what the company does and what the customer can expect when working with the company. Avoid using verbose words or phrases." },
  { bg: bg01, title: "MAKE YOUR OUT DRINK", desc: "Descrip exactly what the company does and what the customer can expect when working with the company. Avoid using verbose words or phrases." },
  { bg: bg01, title: "MAKE YOUR OUT DRINK", desc: "Descrip exactly what the company does and what the customer can expect when working with the company. Avoid using verbose words or phrases." },
  { bg: bg01, title: "MAKE YOUR OUT DRINK", desc: "Descrip exactly what the company does and what the customer can expect when working with the company. Avoid using verbose words or phrases." },
  { bg: bg01, title: "MAKE YOUR OUT DRINK", desc: "Descrip exactly what the company does and what the customer can expect when working with the company. Avoid using verbose words or phrases." },
];

export default function HeroIn() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="hero-in-section">
      <Slider {...settings} className="hero-in-slider">
        {slides.map((s, i) => (
          <div key={i}>
            <div
              className="hero-in-bg"
              style={{ backgroundImage: `url(${s.bg})` }}
              role="img"
              aria-label={s.title}
            >
              <div className="hero-in-ct">
                <h1 className="hero-in-tt">{s.title}</h1>
                <p className="hero-in-desc">{s.desc}</p>
                <button className="hero-in-btn">
                  <img src={playIcon} alt="" aria-hidden="true" />
                  RECIPE BUILDER
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
