// src/components/Category.jsx
import React from "react";

export default function Category() {
  return (
    <section className="category">
      <div className="container">
        <h2 className="cate-tt">SHOP BY CATEGORY</h2>
        <p className="cate-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <nav className="cate-nav" role="tablist" aria-label="Shop by category">
          <div className="cate-bg">
            <button
              className="cate-pill is-active"
              role="tab"
              aria-selected="true"
              data-filter="all"
            >
              ALL
            </button>
            <button
              className="cate-pill"
              role="tab"
              aria-selected="false"
              data-filter="beer"
            >
              BEER
            </button>
            <button
              className="cate-pill"
              role="tab"
              aria-selected="false"
              data-filter="spirit"
            >
              SPIRIT
            </button>
            <button
              className="cate-pill"
              role="tab"
              aria-selected="false"
              data-filter="wine"
            >
              WINE
            </button>
          </div>
        </nav>

        <div className="cate-slider">
          {["beer", "wine", "spirit"].map((cat, i) => (
            <div className="cate-item" data-cat={cat} key={i}>
              <div className="cate-card">
                <img
                  src="/images/category.png" // ảnh để trong public/images
                  alt="Category"
                />
                <h4 className="cate-title">CATEGORY</h4>
                <p className="cate-description">
                  Short descriptions of Category
                </p>
                <button className="cate-btn">SHOP NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
