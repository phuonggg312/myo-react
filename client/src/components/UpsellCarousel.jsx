import { useMemo, useState } from "react";
import Slider from "react-slick";


import kitImg from "../assets/images/2135f58d00265db5b7d52f0fd792171c018b7be2.png";
import { Link } from "react-router-dom";

const DATA = [
  { id: 1, cat: "beer", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 2, cat: "beer", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 3, cat: "beer", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 4, cat: "beer", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 5, cat: "brew", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 6, cat: "beer", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 7, cat: "brew", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 8, cat: "brew", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 9, cat: "beer", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 10, cat: "beer", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 11, cat: "beer", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 12, cat: "brew", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 13, cat: "brew", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
  { id: 14, cat: "beer", title: "Home Brew Kit 2", price: 75, old: 85, reviews: 12, img: kitImg },
];

const PrevArrow = ({ className, style, onClick }) => (
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

const NextArrow = ({ className, style, onClick }) => (
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

export default function UpsellCarousel() {
  const [active, setActive] = useState("brew");
  const items = useMemo(
    () => DATA.filter((x) => active === "all" ? true : x.cat === active),
    [active]
  );

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: true,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, dots: true } },
      { breakpoint: 220, settings: { slidesToShow: 1, dots: true } },
    ],
  };

  return (
    <section className="upsell-carousel">
      <header className="upsell-carousel__header">
        <h2 className="upsell-carousel__title">Elevate your brew experience</h2>
        <p className="upsell-carousel__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <nav className="upsell-carousel__nav" role="tablist" aria-label="Elevate your brew experience">
          <div className="cate-bg">
            {[
              { key: "brew", label: "Beer Starter" },
              { key: "beer", label: "Brew Master" },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`cate-pill ${active === tab.key ? "is-active" : ""}`}
                role="tab"
                aria-selected={active === tab.key ? "true" : "false"}
                data-filter={tab.key}
                onClick={() => setActive(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <div className="upsell-carousel__viewport">
        <Slider {...settings} className="upsell-carousel__list">
          {items.map((p) => (
            <div key={p.id} className="upsell-carousel__item" data-cat={p.cat}>
              <article className="product-card product-card--best-seller">
                <div className="product-card__media">
                  <Link to={`/category/product/${p.id}`} className="product-card__img-link">
                    <img className="product-card__img" src={p.img} alt={p.title} />

                  </Link>
                  <span className="product-card__badge product-card__badge--best-seller">Best seller</span>
                </div>

                <div className="product-card__body">
                  <h3 className="product-card__title">{p.title}</h3>
                  <div className="product-card__price">
                    <span className="product-card__price-current">${p.price.toFixed(2)}</span>
                    <span className="product-card__price-old">${p.old.toFixed(2)}</span>
                  </div>
                  <div className="product-card__rating">
                    <span className="product-card__stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star" />
                    </span>
                    <span className="product-card__reviews">{p.reviews} reviews</span>
                  </div>
                </div>

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--add">Add to cart</button>
                  <button className="product-card__btn product-card__btn--quickview">Quick view</button>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
