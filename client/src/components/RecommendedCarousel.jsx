
import Slider from "react-slick";


import img from "../assets/images/f011d1222beefe058dbfc5b9cd9550e92431d270.jpg";
import { Link } from "react-router-dom";

const items = [
  { id: 1, title: "Home Brew Kit 1", img, cur: "$55.00", old: "$65.00", reviews: 10 },
  { id: 2, title: "Home Brew Kit 2", img, cur: "$42.00", old: "$49.00", reviews: 8 },
  { id: 3, title: "Home Brew Kit 3", img, cur: "$39.00", old: "$45.00", reviews: 5 },
  { id: 4, title: "Home Brew Kit 4", img, cur: "$72.00", old: "$80.00", reviews: 12 },
  { id: 5, title: "Home Brew Kit 5", img, cur: "$60.00", old: "$70.00", reviews: 4 },
  { id: 6, title: "Home Brew Kit 6", img, cur: "$58.00", old: "$66.00", reviews: 7 },
  { id: 7, title: "Home Brew Kit 7", img, cur: "$64.00", old: "$72.00", reviews: 9 },
];

function Arrow({ dir, onClick }) {
  return (
    <button
      type="button"
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className={`slick-${dir}`}
      onClick={onClick}
    >
      <i className={`fa-solid fa-arrow-${dir === "prev" ? "left" : "right"}`} />
    </button>
  );
}

export default function RecentlyViewed({ data = items }) {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    dots: true,
    arrows: true,
    prevArrow: <Arrow dir="prev" />,
    nextArrow: <Arrow dir="next" />,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 3 } },
      { breakpoint: 992,  settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="rv-carousel">
      <header className="rv-carousel__header">
        <h2 className="rv-carousel__title">You also might like</h2>
      </header>

      <div className="rv-carousel__viewport">
        <Slider {...settings} className="rv-carousel__list">
          {data.map((p) => (
            <div key={p.id} className="rv-carousel__item">
              <article className="product-card product-card--best-seller">
                <div className="product-card__media">
                       <Link to={`../product/${p.id}`} className="product-card__media">

                  <img className="product-card__img" src={p.img} alt={p.title} />
</Link>
                  <span className="product-card__badge product-card__badge--best-seller">Best seller</span>
                </div>

                <div className="product-card__body">
                  <h3 className="product-card__title">{p.title}</h3>

                  <div className="product-card__price">
                    <span className="product-card__price-current">{p.cur}</span>
                    <span className="product-card__price-old">{p.old}</span>
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
