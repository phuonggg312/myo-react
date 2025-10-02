import React from "react";
import Slider from "react-slick";

// Import CSS của react-slick (nếu chưa import ở App.jsx thì import ở đây cũng được)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import ảnh từ thư mục assets
import hero2 from "../assets/images/image-removebg-preview.png";
import hero1 from "../assets/images/23a6a4b5676fa0783705c435293b4a3cf866dc69.jpg";

const HeroSlider = () => {
  const settings = {
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 700,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
    adaptiveHeight: false,
  };

  const slides = [
    {
      bg: hero1,
      img: hero2,
      title: "MAKE YOUR OWN DRINKS",
      desc: "Describe exactly what the company does",
    },
    {
      bg: hero1,
      img: hero2,
      title: "SPECIAL BREW EXPERIENCE",
      desc: "Elevate your brewing with premium quality",
    },
  ];

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {slides.map((s, idx) => (
          <div key={idx} className="hero-section">
            {/* Background */}
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${s.bg})` }}
            ></div>

            {/* Content */}
            <div className="hero-ct container">
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              {s.img && (
                <img src={s.img} alt={s.title} className="hero-img" />
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
