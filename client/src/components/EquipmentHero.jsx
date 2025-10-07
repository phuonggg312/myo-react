import Slider from "react-slick";

import bg1 from "../assets/images/bd1bb121fb57d780801ed019ed985026a9ecbc07.jpg";
import playIcon from "../assets/images/Vector.png";

const PrevArrow = (props) => (
  <button type="button" aria-label="Previous" className="kvp__arrow kvp__arrow--prev" onClick={props.onClick}>
    <i className="fa-solid fa-arrow-left" />
  </button>
);
const NextArrow = (props) => (
  <button type="button" aria-label="Next" className="kvp__arrow kvp__arrow--next" onClick={props.onClick}>
    <i className="fa-solid fa-arrow-right" />
  </button>
);

const defaultSlides = [
  {
    img: bg1,
    title: "GOT THE EQUIPMENT?",
    desc:
      "Describe exactly what the company does and what a customer can expect when working with the company. Avoid using verbose words or phrases.",
  },
  { img: bg1, title: "GOT THE EQUIPMENT?", desc: "Describe exactly what the company does and what a customer can expect when working with the company. Avoid using verbose words or phrases." },
  { img: bg1, title: "GOT THE EQUIPMENT?", desc: "Describe exactly what the company does and what a customer can expect when working with the company. Avoid using verbose words or phrases." },
];

export default function KvpHero({ slides = defaultSlides, onCtaClick }) {
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
    <section className="kvp">
      <Slider {...settings} className="kvp__wrapper">
        {slides.map((s, i) => (
          <div className="kvp__slide" key={i}>
            <img className="kvp__img" src={s.img} alt="" />
            <div className="kvp__overlay" />
            <div className="kvp__content">
              <h2 className="kvp__title">{s.title}</h2>
              <p className="kvp__desc">{s.desc}</p>
              <button className="kvp__btn" onClick={onCtaClick}>
                <img src={playIcon} alt="" /> RECIPE BUILDER
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
