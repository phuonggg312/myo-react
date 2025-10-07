// src/pages/PLP.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import product from "../assets/images/4c91ae5ade4cfcf73619fd1d65ad526e0b5759bb.png";

// demo data
const PRODUCTS = Array.from({ length: 36 }).map((_, i) => ({
  id: i + 1,
  title: `Home Brew Kit ${i + 1}`,
  price: 55 + (i % 5) * 3,
  oldPrice: 65 + (i % 5) * 3,
  rating: 4,
  reviews: 10 + (i % 7),
  badge: "Best seller",
  img: product,
}));

export default function PLP() {
  const [sortBy, setSortBy] = useState("Featured");
  const [visible, setVisible] = useState(25);

  const list = useMemo(() => {
    const arr = PRODUCTS.slice();
    switch (sortBy) {
      case "Price: Low to High":
        arr.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        arr.sort((a, b) => b.price - a.price);
        break;
      case "Newest":
        arr.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }
    return arr;
  }, [sortBy]);

  const countText = `Showing ${Math.min(visible, list.length)}–${list.length} of ${PRODUCTS.length}`;

  return (
    <section className="plp" id="plp">
      <div className="plp-toolbar">
        <div className="plp-toolbar__left">
          <label className="select" aria-label="Sort By">
            <span className="select__label">Sort By</span>
            <select
              className="select__field"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
            <svg className="select__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </label>
        </div>

        <div className="plp-toolbar__right">
          <span className="plp-toolbar__count" id="plp-count">{countText}</span>
        </div>
      </div>

      {/* GRID */}
      <div className="plp__layout">
        <section className="plp__grid">
          <ul className="product-grid product-carousel--ct__list">
            {list.slice(0, visible).map((p) => (
              <li key={p.id} className="product-carousel--ct__item">
                <article className="product-card product-card--best-seller">
                  <div className="product-card__media">
                    <Link to={`/category/product/${p.id}`} className="product-card__img-link">
                      <img className="product-card__img" src={p.img} alt={p.title} />
                    </Link>
                    <span className="product-card__badge product-card__badge--best-seller">
                      {p.badge}
                    </span>
                  </div>

                  <div className="product-card__body">
                    <h3 className="product-card__title">{p.title}</h3>
                    <div className="product-card__price">
                      <span className="product-card__price-current">${p.price.toFixed(2)}</span>
                      <span className="product-card__price-old">${p.oldPrice.toFixed(2)}</span>
                    </div>
                    <div className="product-card__rating">
                      <span className="product-card__stars">
                        {Array.from({ length: 5 }).map((_, i) =>
                          i < p.rating ? (
                            <i key={i} className="fa-solid fa-star" />
                          ) : (
                            <i key={i} className="fa-regular fa-star" />
                          )
                        )}
                      </span>
                      <span className="product-card__reviews">{p.reviews} reviews</span>
                    </div>
                  </div>

                  <div className="product-card__actions">
                    <button className="product-card__btn product-card__btn--add">Add to cart</button>
                    <button className="product-card__btn product-card__btn--quickview">Quick view</button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Show more */}
      <div className="plp--show-more">
        <p className="plp__tilte--show">
          Showing {Math.min(visible, list.length)}–{list.length}
        </p>
        {visible < list.length && (
          <button className="plp__btn--show" onClick={() => setVisible((v) => v + 12)}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
}
