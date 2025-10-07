// src/components/Category.jsx
import  { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import cateimg from "../assets/images/category.png";

const RAW_ITEMS = [
  { id: 1,  cat: "beer"   },
  { id: 2,  cat: "beer"   },
  { id: 3,  cat: "beer"   },
  { id: 4,  cat: "beer"   },
  { id: 5,  cat: "wine"   },
  { id: 6,  cat: "wine"   },
  { id: 7,  cat: "wine"   },
  { id: 8,  cat: "spirit" },
  { id: 9,  cat: "spirit" },
  { id: 10, cat: "spirit" },
];

export default function Category() {
  const [active, setActive] = useState("all");

  const items = useMemo(() => {
    if (active === "all") return RAW_ITEMS;
    return RAW_ITEMS.filter((x) => x.cat === active);
  }, [active]);
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`cate-arrow cate-prev ${className || ""}`}
      style={style}
      onClick={onClick}
      aria-label="Previous"
    >
      <i className="fa-solid fa-arrow-left" />
    </button>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`cate-arrow cate-next ${className || ""}`}
      style={style}
      onClick={onClick}
      aria-label="Next"
    >
      <i className="fa-solid fa-arrow-right" />
    </button>
  );
};

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: true,
    prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992,  settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2, dots: true } },
      { breakpoint: 220,  settings: { slidesToShow: 1, dots: true } },
    ],
  };

  return (
    <section className="category">
      <div className="container">
        <h2 className="cate-tt">SHOP BY CATEGORY</h2>
        <p className="cate-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        {/* NAV FILTER */}
        <nav className="cate-nav" role="tablist" aria-label="Shop by category">
          <div className="cate-bg">
            {["all", "beer", "spirit", "wine"].map((k) => (
              <button
                key={k}
                className={`cate-pill ${active === k ? "is-active" : ""}`}
                role="tab"
                aria-selected={active === k ? "true" : "false"}
                data-filter={k}
                onClick={() => setActive(k)}
              >
                {k.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>

        {/* SLIDER */}
        <Slider {...settings} className="cate-slider">
          {items.map((it) => (
            <div className="cate-item" data-cat={it.cat} key={it.id}>
              <div className="cate-card">
                <img src={cateimg} alt="Category" />
                <h4 className="cate-title">CATEGORY</h4>
                <p className="cate-description">Short descriptions of Category</p>
                {/* <button className="cate-btn">SHOP NOW</button> */}
                <Link className="cate-btn" to="/category">SHOP NOW</Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
