    import { useState, useEffect } from "react";
    import { Link } from "react-router-dom";
    import logo from "../assets/images/MYO Drinks Logo LScape Blk.png";

    export default function Header() {
        const [menuOpen, setMenuOpen] = useState(false);
        const [searchOpen, setSearchOpen] = useState(false);

        // close menu route / click out (easy)
        useEffect(() => {
            function onDocClick(e) {
                // if click out .menu-btn + .menu-tab then close
                const btn = document.querySelector(".menu-btn");
                const tab = document.querySelector(".menu-tab");
                if (!btn || !tab) return;
                if (!btn.contains(e.target) && !tab.contains(e.target)) {
                    setMenuOpen(false);
                }
            }
            document.addEventListener("click", onDocClick);
            return () => document.removeEventListener("click", onDocClick);
        }, []);

        return (
            <header className="header">
                {/* Promo bar */}
                <div className="promo-bar">
                    Sign up and get $10 discount <a href="#">Sign up</a>
                </div>

                <div className="header_top">
                    {/* Menu button */}
                    <button
                        className="menu-btn"
                        type="button"
                        aria-expanded={menuOpen}
                        aria-controls="main-menu"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    {/* MUST be adjacent sibling of .menu-btn */}
                    <div
                        className="menu-tab"
                        id="main-menu"
                        role="menu"
                        aria-hidden={!menuOpen}
                        style={{ display: menuOpen ? "block" : "none" }}
                    >
                        <ul className="menu-list">
                            <li><a href="#">BEER</a></li>
                            <li><a href="#">SPIRITS</a></li>
                            <li><a href="#">WINE</a></li>
                            <li><a href="#">CIDER</a></li>
                            <li><a href="#">SPECIALITY</a></li>

                            <li className="menu_resource"><a href="#">RESOURCES</a></li>
                            <li className="menu_help"><a href="#">HELP CENTRE</a></li>
                        </ul>
                    </div>


                    <Link to="/" className="logo">
                        <img src={logo} alt="MYO" />
                    </Link>
                    {/* Search mobile */}
                    <form
                        className="search search--mobile"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <button
                            type="button"
                            className="search_mode"
                            onClick={() => setSearchOpen((v) => !v)}
                            aria-expanded={searchOpen}
                        >
                            Search <i className="fa-solid fa-chevron-down"></i>
                        </button>
                        <input
                            type="search"
                            className="search_input"
                            placeholder="Find your perfect brew"
                        />
                        <button className="search_btn" type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>

                        <div
                            className="search_tab"
                            style={{ display: searchOpen ? "block" : "none" }}
                        >
                            <ul className="search_list">
                                <li>BEER</li>
                                <li>SPIRITS</li>
                                <li>WINE</li>
                                <li>CIDER</li>
                                <li>SPECIALITY</li>
                            </ul>
                        </div>
                    </form>

                    {/* currency */}
                    <button className="currency" type="button">
                        $AUD <i className="fa-solid fa-chevron-down"></i>
                    </button>

                    {/* action */}
                    <nav className="action">
                        <a href="#"><i className="fa-regular fa-user"></i></a>
                        <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    </nav>
                </div>

                {/* nav header */}
                <div className="header_bot">
                    <nav className="header-nav">
                        <ul>
                            <li>BEER</li>
                            <li>SPIRITS</li>
                            <li>WINE</li>
                            <li>CIDER</li>
                            <li>SPECIALTY</li>
                            <li>DEALS</li>
                        </ul>
                    </nav>
                    <a href="#" className="resources">RESOURCES</a>
                </div>
            </header>
        );
    }
