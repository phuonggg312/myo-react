import { useState } from "react";

// Nếu ảnh đang ở src/assets/img (khuyên dùng import)
import imgBeer from "../assets/images/topic1 (1).jpg";
import imgWine from "../assets/images/topic1 (2).jpg";
import imgSpirit from "../assets/images/topic1 (3).jpg";

// Dữ liệu chung
const TOPICS = [
  {
    key: "beer",
    title: "BEER",
    img: imgBeer,
    pills: ["WHAT DO I NEED TO START?", "WHY HOME BREW?", "HOW DO I HOME BREW?"],
  },
  {
    key: "wine",
    title: "WINE",
    img: imgWine,
    pills: ["WHAT DO I NEED TO START?", "WHY HOME BREW?", "HOW DO I HOME BREW?"],
  },
  {
    key: "spirit",
    title: "SPIRIT",
    img: imgSpirit,
    pills: ["WHAT DO I NEED TO START?", "WHY HOME BREW?", "HOW DO I HOME BREW?"],
  },
];

export default function Topics() {
  // accordion cho mobile
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey((cur) => (cur === key ? null : key));

  return (
    <>
      <section className="topics topics--pc">
        <div className="topics-grid">
          {TOPICS.map((t) => (
            <article className={`topic-card ${t.key}`} key={t.key}>
              <img className="topic-img" src={t.img} alt={t.title} />
              <div className="topic-bar">
                <span>{t.title}</span>
              </div>
              <div className="topic-panel">
                <h3 className="topic-title">{t.title}</h3>
                {t.pills.map((p, i) => (
                  <button key={i} className="topic-pill">
                    {p}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TOPICS – MB */}
      <section className="topics topics--mb">
        <h2 className="cate-tt">START YOUR BREW JOURNEY</h2>
        <p className="cate-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="topics-grid">
          {TOPICS.map((t) => {
            const isOpen = openKey === t.key;
            return (
              <article className={`topic-card ${t.key} ${isOpen ? "is-open" : ""}`} key={t.key}>
                <button
                  className="mb-head"
                  type="button"
                  aria-expanded={isOpen ? "true" : "false"}
                  onClick={() => toggle(t.key)}
                >
                  {t.title}
                </button>
                <div className="mb-panel" role="region" aria-label={`${t.title} panel`}>
                  {t.pills.map((p, i) => (
                    <button key={i} className="topic-pill">
                      {p}
                    </button>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
