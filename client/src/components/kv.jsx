import Slider from "react-slick";

import kvimg from "../assets/images/bd1bb121fb57d780801ed019ed985026a9ecbc07 (1).jpg";
import icon from "../assets/images/Vector.png";

const slides = [
  { img: kvimg, title: "GOT THE EQUIPMENT?", desc: "Describe exactly what the company does and what a customer can expect when working with the company. Avoid using verbose words or phrases." },
  { img: kvimg, title: "GOT THE EQUIPMENT?", desc: "Describe exactly what the company does and what a customer can expect when working with the company. Avoid using verbose words or phrases." },
  { img: kvimg, title: "GOT THE EQUIPMENT?", desc: "Describe exactly what the company does and what a customer can expect when working with the company. Avoid using verbose words or phrases." },
];

export default function KV() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    adaptiveHeight: false,
  };

  return (
    <section className="kv">
      <div className="kv__wrapper">
        <Slider {...settings}>
          {slides.map((s, i) => (
            <div className="kv__slide" key={i}>
              <img className="kv__img" src={s.img} alt="" />
              <div className="kv__overlay" />
              <div className="kv__content">
                <h2 className="kv__title">{s.title}</h2>
                <p className="kv__desc">{s.desc}</p>
                <button className="kv__btn" type="button">
                  <img src={icon} alt="" /> RECIPE BUILDER
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
