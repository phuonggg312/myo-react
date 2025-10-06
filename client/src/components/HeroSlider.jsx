
import Slider from "react-slick";

import heroBg from "../assets/images/23a6a4b5676fa0783705c435293b4a3cf866dc69.jpg";
import heroBottle from "../assets/images/image-removebg-preview.png";



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

export default function HeroSlider() {
  const slides = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    bg: heroBg,      
    bottle: heroBottle, 
    title: "MAKE YOUR OWN DRINKS",
    desc: "Describe exactly what the company does",
  }));

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings} className="hero-slider">
      {slides.map((s) => (
        <div className="hero-section" key={s.id}>
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${s.bg})` }}
          />
          <div className="hero-ct">
            <div className="img-hero">
              <img src={s.bottle} alt="" />
            </div>
            <h1 className="hero-title">{s.title}</h1>
            <p className="hero-desc">{s.desc}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
