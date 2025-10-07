
import Slider from "react-slick";
const PrevArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`t-arrow t-prev ${className || ""}`}
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
    className={`t-arrow t-next ${className || ""}`}
    style={style}
    onClick={onClick}
    aria-label="Next"
  >
    <i className="fa-solid fa-arrow-right" />
  </button>
);

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
    name: "Customer Name",
    stars: 5,
  },
  {
    id: 2,
    quote:
      "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
    name: "Customer Name",
    stars: 5,
  },
  {
    id: 3,
    quote:
      "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
    name: "Customer Name",
    stars: 5,
  },
];

export default function Testimonials() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    arrows: true,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { 
        breakpoint: 992, 
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true
        } 
      },
      { 
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true
        } 
      },
    ],
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="t-title">CUSTOMER TESTIMONIALS</h2>
        <p className="t-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Slider {...settings} className="t-slider">
          {TESTIMONIALS.map((t) => (
            <div key={t.id}>
              <div className="t-card">
                <div className="t-stars">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star" />
                  ))}
                </div>
                <p className="t-quote">{t.quote}</p>
                <div className="t-name">{t.name}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
