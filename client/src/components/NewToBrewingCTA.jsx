import Slider from "react-slick";
import img from "../assets/images/bd1bb121fb57d780801ed019ed985026a9ecbc07 (1).jpg";

function Arrow({ dir, onClick }) {
  return (
    <button
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className={`kv__arrow kv__arrow--${dir}`}
      onClick={onClick}
      type="button"
    >
      <i className={`fa-solid fa-arrow-${dir === "prev" ? "left" : "right"}`} />
    </button>
  );
}

export default function BrewCtaMobile() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    speed: 500,
    prevArrow: <Arrow dir="prev" />,
    nextArrow: <Arrow dir="next" />,
  };

  const slides = [img, img, img];

  return (
    <section className="brew-cta kv">
      <div className="kv__wrapper">
        <Slider {...settings}>
          {slides.map((src, i) => (
            <div className="kv__slide" key={i}>
              <img className="kv__img" src={src} alt="" />
              <div className="kv__overlay" />
              <div className="kv__content">
                <h2 className="kv__title">GOT THE EQUIPMENT?</h2>
                <p className="kv__desc">
                  Describe exactly what the company does and what a customer can expect when working with the company.
                  Avoid using verbose words or phrases.
                </p>
                <button className="kv__btn">
                  <img src="/assets/img/Vector.png" alt="" />
                  RECIPE BUILDER
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
