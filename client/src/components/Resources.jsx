// src/components/Resources.jsx
import Slider from "react-slick";
import img1 from "../assets/images/rest1 (1).jpg";
import img2 from "../assets/images/rest1 (2).jpg";
import img3 from "../assets/images/rest1 (3).jpg";
import img4 from "../assets/images/rest1 (4).jpg";

const items = [
    { img: img1, tag: "Beer", tagClass: "badge--beer", title: "Video title heading", date: "12 Feb 2024", read: "5 min read" },
    { img: img2, tag: "Wine", tagClass: "badge--wine", title: "Video title heading", date: "12 Feb 2024", read: "5 min read" },
    { img: img3, tag: "Brewer’s choice", tagClass: "badge--choice", title: "Video title heading", date: "12 Feb 2024", read: "5 min read" },
    { img: img4, tag: "Award winner", tagClass: "badge--winner", title: "Video title heading", date: "12 Feb 2024", read: "5 min read" },
    { img: img4, tag: "Award winner", tagClass: "badge--winner", title: "Video title heading", date: "12 Feb 2024", read: "5 min read" },
    { img: img4, tag: "Award winner", tagClass: "badge--winner", title: "Video title heading", date: "12 Feb 2024", read: "5 min read" },
];

const PrevArrow = ({ className, style, onClick }) => (
    <button
        type="button"
        className={`hin-arrow slick-prev ${className || ""}`}
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
        className={`hin-arrow slick-next ${className || ""}`}
        style={style}
        onClick={onClick}
        aria-label="Next"
    >
        <i className="fa-solid fa-arrow-right" />
    </button>
);

export default function Resources() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2, //PC =2 row
        rows: 2,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1, rows: 2, arrows: false } },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    rows: 1,             // MB = 1 row
                    arrows: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: "18px",
                    prevArrow: <PrevArrow />,
                    nextArrow: <NextArrow />,
                }
            }
        ],
    };

    return (
        <section className="resources">
            <div className="resources__head">
                <p className="resources__eyebrow">RESOURCES</p>
                <h2 className="resources__title">HOW TO START BREWING?</h2>
                <p className="resources__sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="resources__cta btn-pill">EXPLORE RESOURCES</a>
            </div>

            <div className="resources__slider">
                <Slider {...settings}>
                    {items.map((it, idx) => (
                        <article className="r-card r-card--row" key={idx}>
                            <a className="r-card__media" href="#">
                                <img src={it.img} alt="" />
                            </a>
                            <div className="r-card__body">
                                <span className={`r-card__badge ${it.tagClass}`}>{it.tag}</span>
                                <h3 className="r-card__title">
                                    <a href="#">{it.title}</a>
                                </h3>
                                <p className="r-card__excerpt">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim…
                                </p>
                                <div className="r-card__meta">
                                    {it.date} <span>|</span> {it.read}
                                </div>
                            </div>
                        </article>
                    ))}
                </Slider>
            </div>
        </section>
    );
}