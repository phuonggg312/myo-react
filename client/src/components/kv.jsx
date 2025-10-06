import Slider from "react-slick";

import bg from "../assets/images/bd1bb121fb57d780801ed019ed985026a9ecbc07 (1).jpg";

import play from "../assets/images/Vector.png";

const slides = [
  {
    img: bg,
    title: "GOT THE EQUIPMENT?",
    desc:
      "Describe exactly what the company does and what a customer can expect when working with the company. Avoid using verbose words or phrases.",
  },
  { img: bg, title: "GOT THE EQUIPMENT?", desc:
      "Describe exactly what the company does and what a customer can expect when working with the company. Avoid using verbose words or phrases." },
  { img: bg, title: "GOT THE EQUIPMENT?", desc:
      "Describe exactly what the company does and what a customer can expect when working with the company. Avoid using verbose words or phrases." },
];

function Arrow({ dir, onClick }) {
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className={`kv__arrow kv__arrow--${dir}`}
      onClick={onClick}
    >
      <i className={`fa-solid fa-chevron-${dir === "prev" ? "left" : "right"}`} />
    </button>
  );
}

export default function KV() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow dir="prev" />,
    nextArrow: <Arrow dir="next" />,
    responsive: [
      { breakpoint: 768, settings: { arrows: false } }, 
    ],
  };

  return (
    <section className="kv">
      <Slider {...settings} className="kv__wrapper">
        {slides.map((s, i) => (
          <div className="kv__slide" key={i}>
            <img className="kv__img" src={s.img} alt="" />
            <div className="kv__overlay" />
            <div className="kv__content">
              <h2 className="kv__title">{s.title}</h2>
              <p className="kv__desc">{s.desc}</p>
              <button className="kv__btn">
                <img src={play} alt="" aria-hidden="true" />
                RECIPE BUILDER
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
