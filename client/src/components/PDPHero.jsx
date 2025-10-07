import { useState } from "react";
import pd1 from "../assets/images/6c5e45dd16bce9e92794f70054516bcb6f500222.png"
import pd2 from "../assets/images/6229663401390640c8f58dbfb152746776241345.png"

import pd3 from "../assets/images/6c5e45dd16bce9e92794f70054516bcb6f500222.png"

import pd4 from "../assets/images/6c5e45dd16bce9e92794f70054516bcb6f500222.png"

import pd5 from "../assets/images/6229663401390640c8f58dbfb152746776241345.png"
// icon
import ic1 from "../assets/images/2737a8d3962eca755a25bcf2730e079cd2e62262.png"
import ic2 from "../assets/images/f5476a3099bb4c9888ea8036562f8614e93ad486.png"
import ic3 from "../assets/images/f5476a3099bb4c9888ea8036562f8614e93ad486.png"




export default function PDPHero({
    images = [
        pd1, pd2, pd3, pd4, pd5,
    ],
    title = "Kit Bundle",
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const onThumbClick = (idx) => {
        setActiveIndex(idx);
      
    };

    return (
        <section className="pdp">
            <div className="pdp__hero">
                <img
                    id="mainImage"
                    className="pdp__hero-bg"
                    src={images[activeIndex]}
                    alt={title}
                />

                {/* Thumbnails */}
                <div className="pdp__thumbs">
                    {images.map((src, i) => (
                        <button
                            key={i}
                            className={`pdp__thumb ${i === activeIndex ? "is-active" : ""}`}
                            onClick={() => onThumbClick(i)}
                            type="button"
                            aria-label={`Thumbnail ${i + 1}`}
                            aria-pressed={i === activeIndex}
                        >
                            <img src={src} alt="" />
                        </button>
                    ))}
                </div>

                <div className="pdp-card__hero">
                    <article className="pdp-card">
                        <header className="pdp-card__head">
                            <div className="pdp-card__badges">
                                <span className="badge badge--beer">BEER</span>
                                <span className="badge badge--sale">SALE</span>
                            </div>

                            <div className="pdp-card__topline">
                                <h1 className="pdp-card__title">Kit Bundle</h1>
                                <div className="pdp-card__price">
                                    <span className="price__now">$2,800.00</span>
                                    <span className="price__compare">Valued at $3,100.00</span>
                                </div>
                            </div>

                            <div className="pdp-card__meta">
                                <span className="sku">SKU:4040255</span>
                                <div className="rating">
                                    <span className="stars" aria-label="4 of 5">★★★★☆</span>
                                    <span className="reviews">10 reviews</span>
                                </div>
                            </div>
                        </header>

                        <p className="pdp-card__desc">
                            This Ale Beer Recipe Kit creates a full bodied, malty beer that&apos;s based on the traditional
                            Oktoberfest style. It has a light red hue, subtle bitterness, caramel sweetness and{" "}
                            <a className="see-more" href="#">see more</a>
                        </p>

                        <CardActions />

                        <p className="pdp-card__shipping">
                            Free shipping over $50 • or 4 interest-free payments with Afterpay
                        </p>
                    </article>

                    <article className="pdp-card pad-card--features" aria-labelledby="featuresTitle">
                        <section className="features">
                            <h3 id="featuresTitle" className="features__title">FEATURES</h3>

                            <ul className="features__list">
                                <li className="feature">
                                    <div className="feature__cell feature__cell--type">
                                        <img className="icon" src={ic1} alt="" />
                                        <span className="text">Pale Ale</span>
                                    </div>
                                    <div className="feature__cell">
                                        <img className="icon" src={ic2} alt="" />
                                        <span className="text">Newtowner<br />like style</span>
                                    </div>
                                    <div className="feature__cell">
                                        <img className="icon" src={ic3} alt="" />
                                        <span className="text">Fruity &amp;<br />Smooth</span>
                                    </div>
                                </li>

                               <li className="feature">
                                    <div className="feature__cell feature__cell--type">
                                        <img className="icon" src={ic1} alt="" />
                                        <span className="text">Pale Ale</span>
                                    </div>
                                    <div className="feature__cell">
                                        <img className="icon" src={ic2} alt="" />
                                        <span className="text">Newtowner<br />like style</span>
                                    </div>
                                    <div className="feature__cell">
                                        <img className="icon" src={ic3} alt="" />
                                        <span className="text">Fruity &amp;<br />Smooth</span>
                                    </div>
                                </li>

                            </ul>
                        </section>
                    </article>
                </div>
            </div>
        </section>
    );
}

function CardActions() {
    const [qty, setQty] = useState(1);
    const dec = () => setQty((v) => Math.max(1, v - 1));
    const inc = () => setQty((v) => v + 1);
    const onChange = (e) => setQty(Math.max(1, Number(e.target.value) || 1));

    return (
        <div className="pdp-card__actions">
            <div className="qty">
                <button className="qty__btn" aria-label="decrease" onClick={dec}>−</button>
                <input
                    className="qty__input"
                    type="number"
                    value={qty}
                    min="1"
                    inputMode="numeric"
                    onChange={onChange}
                />
                <button className="qty__btn" aria-label="increase" onClick={inc}>+</button>
            </div>
            <button className="btn btn--primary">ADD TO CART</button>
            <button className="btn btn--wish" aria-label="Add to wishlist">
                <img src="/assets/img/heart.png" alt="" />
            </button>
        </div>
    );
}
