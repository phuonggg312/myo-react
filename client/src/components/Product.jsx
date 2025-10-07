// src/pages/PLP.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import product from "../assets/images/4c91ae5ade4cfcf73619fd1d65ad526e0b5759bb.png"
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
    brand: i % 2 === 0 ? "Grainfather" : "Mangrove Jack's",
    equipment: i % 3 === 0 ? "Brewing" : "Fermenting",
    material: i % 4 === 0 ? "Glass" : "Steel",
    priceBucket: i % 2 === 0 ? "0-500" : "500-1000",
}));

export default function PLP() {
    const [filtersOpen, setFiltersOpen] = useState(false); // toggle aside
    const [openPanels, setOpenPanels] = useState({
        brand: true,
        eq: true,
        mat: true,
        price: true,
    });

    // filter state
    const [selectedBrands, setSelectedBrands] = useState(new Set(["Grainfather"]));
    const [selectedEquipments, setSelectedEquipments] = useState(new Set());
    const [material, setMaterial] = useState(""); // radio
    const [priceRange, setPriceRange] = useState([0, 500]);

    const [sortBy, setSortBy] = useState("Featured");
    const [visible, setVisible] = useState(25);

    const chips = useMemo(() => {
        const c = [];
        selectedBrands.forEach((b) => c.push({ type: "brand", label: b }));
        selectedEquipments.forEach((e) => c.push({ type: "equipment", label: e }));
        if (material) c.push({ type: "material", label: material });
        if (priceRange) c.push({ type: "price", label: `$${priceRange[0]}–$${priceRange[1]}` });
        return c;
    }, [selectedBrands, selectedEquipments, material, priceRange]);

    const filtered = useMemo(() => {
        let list = PRODUCTS.slice();

        if (selectedBrands.size) {
            list = list.filter((p) => selectedBrands.has(p.brand));
        }
        if (selectedEquipments.size) {
            list = list.filter((p) => selectedEquipments.has(p.equipment));
        }
        if (material) {
            list = list.filter((p) => p.material === material);
        }
        if (priceRange) {
            list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
        }

        switch (sortBy) {
            case "Price: Low to High":
                list.sort((a, b) => a.price - b.price);
                break;
            case "Price: High to Low":
                list.sort((a, b) => b.price - a.price);
                break;
            case "Newest":
                list.sort((a, b) => b.id - a.id);
                break;
            default:
                break;
        }
        return list;
    }, [sortBy, selectedBrands, selectedEquipments, material, priceRange]);

    const countText = `Showing ${Math.min(visible, filtered.length)}–${filtered.length} of ${PRODUCTS.length}`;

    // helpers
    const togglePanel = (key) => setOpenPanels((s) => ({ ...s, [key]: !s[key] }));

    const toggleSet = (set, value) => {
        const next = new Set(set);
        next.has(value) ? next.delete(value) : next.add(value);
        return next;
    };

    const removeChip = (chip) => {
        if (chip.type === "brand") setSelectedBrands((s) => toggleSet(s, chip.label));
        if (chip.type === "equipment") setSelectedEquipments((s) => toggleSet(s, chip.label));
        if (chip.type === "material") setMaterial("");
        if (chip.type === "price") setPriceRange([0, 500]);
    };

    const clearAll = () => {
        setSelectedBrands(new Set());
        setSelectedEquipments(new Set());
        setMaterial("");
        setPriceRange([0, 500]);
    };

    return (
        <section className={`plp ${filtersOpen ? "plp--with-filters" : ""}`} id="plp">
            {/* Toolbar */}
            <div className="plp-toolbar">
                <div className="plp-toolbar__left">
                    <button
                        className="btn-pill btn-pill--ghost"
                        id="filters-toggle"
                        type="button"
                        onClick={() => setFiltersOpen((v) => !v)}
                    >
                        <img src="/assets/img/Icon/icon.png" alt="" aria-hidden="true" />
                        {filtersOpen ? "Hide filters" : "Show filters"}
                    </button>

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
                    <div className="plp-toolbar__chips" id="active-chips">
                        {chips.map((chip) => (
                            <span key={`${chip.type}-${chip.label}`} className="chip chip--dark">
                                {chip.label}
                                <button className="chip__close" aria-label={`Remove ${chip.label}`} onClick={() => removeChip(chip)}>
                                    ×
                                </button>
                            </span>
                        ))}
                        {chips.length > 0 && (
                            <button className="plp-toolbar__clear" id="chips-clear" type="button" onClick={clearAll}>
                                Clear All
                            </button>
                        )}
                    </div>
                    <span className="plp-toolbar__count" id="plp-count">
                        {countText}
                    </span>
                </div>
            </div>

            <div className="plp__layout">
                {/* Filters */}
                <aside className="filters" aria-label="Filters">
                    <button
                        className="filters__clear"
                        type="button"
                        id="filters-close"
                        aria-label="Close filters"
                        onClick={() => setFiltersOpen(false)}
                    >
                        <i className="fa-solid fa-xmark" />
                    </button>

                    <div className="filters__head">
                        <span className="filters__status" id="filters-status">
                            {chips.length ? `${chips.length} filters selected` : "No filters selected"}
                        </span>
                    </div>

                    {/* Brand */}
                    <section className="filters__group" aria-labelledby="filter-brand-h">
                        <button
                            className="filters__title"
                            id="filter-brand-h"
                            aria-expanded={openPanels.brand}
                            aria-controls="filter-brand"
                            onClick={() => togglePanel("brand")}
                        >
                            Brand
                            <i className="fa-solid fa-chevron-down filters__chev" aria-hidden="true" />
                        </button>
                        {openPanels.brand && (
                            <div className="filters__panel" id="filter-brand" role="region" aria-labelledby="filter-brand-h">
                                <ul className="filters__list">
                                    {["Grainfather", "Mangrove Jack's"].map((b) => (
                                        <li key={b} className="filters__item">
                                            <label className="filters__option">
                                                <input
                                                    type="checkbox"
                                                    name="brand"
                                                    value={b}
                                                    checked={selectedBrands.has(b)}
                                                    onChange={() => setSelectedBrands((s) => toggleSet(s, b))}
                                                />
                                                <span className="filters__label">{b}</span>
                                                <span className="filters__count">—</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                                <button className="filters__more" type="button">Show more</button>
                            </div>
                        )}
                    </section>

                    {/* Equipment Type */}
                    <section className="filters__group" aria-labelledby="filter-eq-h">
                        <button
                            className="filters__title"
                            id="filter-eq-h"
                            aria-expanded={openPanels.eq}
                            aria-controls="filter-eq"
                            onClick={() => togglePanel("eq")}
                        >
                            Equipment Type
                            <i className="fa-solid fa-chevron-down filters__chev" aria-hidden="true" />
                        </button>
                        {openPanels.eq && (
                            <div className="filters__panel" id="filter-eq" role="region" aria-labelledby="filter-eq-h">
                                <ul className="filters__list">
                                    {["Brewing", "Fermenting"].map((e) => (
                                        <li key={e} className="filters__item">
                                            <label className="filters__option">
                                                <input
                                                    type="checkbox"
                                                    name="equipment"
                                                    value={e}
                                                    checked={selectedEquipments.has(e)}
                                                    onChange={() => setSelectedEquipments((s) => toggleSet(s, e))}
                                                />
                                                <span className="filters__label">{e}</span>
                                                <span className="filters__count">—</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>

                    {/* Material */}
                    <section className="filters__group" aria-labelledby="filter-mat-h">
                        <button
                            className="filters__title"
                            id="filter-mat-h"
                            aria-expanded={openPanels.mat}
                            aria-controls="filter-mat"
                            onClick={() => togglePanel("mat")}
                        >
                            Material
                            <i className="fa-solid fa-chevron-down filters__chev" aria-hidden="true" />
                        </button>
                        {openPanels.mat && (
                            <div className="filters__panel" id="filter-mat" role="region" aria-labelledby="filter-mat-h">
                                <ul className="filters__list">
                                    {["Glass", "Steel"].map((m) => (
                                        <li key={m} className="filters__item">
                                            <label className="filters__option">
                                                <input
                                                    type="radio"
                                                    name="material"
                                                    value={m}
                                                    checked={material === m}
                                                    onChange={() => setMaterial(m)}
                                                />
                                                <span className="filters__label">{m}</span>
                                                <span className="filters__count">—</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>

                    {/* Price */}
                    <section className="filters__group" aria-labelledby="filter-price-h">
                        <button
                            className="filters__title"
                            id="filter-price-h"
                            aria-expanded={openPanels.price}
                            aria-controls="filter-price"
                            onClick={() => togglePanel("price")}
                        >
                            Price
                            <i className="fa-solid fa-chevron-down filters__chev" aria-hidden="true" />
                        </button>
                        {openPanels.price && (
                            <div className="filters__panel" id="filter-price" role="region" aria-labelledby="filter-price-h">
                                <div className="filters__price">
                                    {/* chỉ minh hoạ – bạn có thể đổi thành range thực tế */}
                                    <div className="filters__price-fields">
                                        <input
                                            type="number"
                                            min="0"
                                            max="1000"
                                            value={priceRange[0]}
                                            aria-label="Min price"
                                            onChange={(e) => setPriceRange([+e.target.value || 0, priceRange[1]])}
                                        />
                                        <span>–</span>
                                        <input
                                            type="number"
                                            min="0"
                                            max="1000"
                                            value={priceRange[1]}
                                            aria-label="Max price"
                                            onChange={(e) => setPriceRange([priceRange[0], +e.target.value || 0])}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </aside>

                {/* GRID */}
                <section className="plp__grid">
                    <ul className="product-grid product-carousel--ct__list">
                        {filtered.slice(0, visible).map((p) => (
                            <li key={p.id} className="product-carousel--ct__item">
                                <article className="product-card product-card--best-seller">
                                    <div className="product-card__media">
                                        <Link to={`/category/product/${p.id}`} className="product-card__img-link">

                                            <img className="product-card__img" src={p.img} alt={p.title} /></Link>
                                        <span className="product-card__badge product-card__badge--best-seller">{p.badge}</span>
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

            <div className="plp--show-more">
                <p className="plp__tilte--show">Showing {Math.min(visible, filtered.length)}–{filtered.length}</p>
                {visible < filtered.length && (
                    <button className="plp__btn--show" onClick={() => setVisible((v) => v + 12)}>
                        Show more
                    </button>
                )}
            </div>
        </section>
    );
}
