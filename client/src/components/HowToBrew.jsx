import { useState, useCallback } from "react";
import icon from "../assets/images/icon.png";
import thumb from "../assets/images/topic1 (2).jpg";

export default function HowToBrew({
  eyebrow = "MYO Drinks × GRAINFATHER",
  title = "How to brew",
  desc = "Describe exactly what your product or service does and how it makes customers' lives better. Avoid using verbose words or phrases.",
  ctaHref = "/assets/files/brewing-instructions.pdf", 
  ctaText = "Download our brewing instructions",
  embedUrl = "https://www.youtube.com/embed/Hqmbo0ROBQw?autoplay=1&rel=0&playsinline=1",
}) {
  const [playing, setPlaying] = useState(false);

  const play = useCallback(() => setPlaying(true), []);
  const onKey = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setPlaying(true);
    }
  }, []);

  return (
    <section className="howto" id="how-to-brew">
      <div className="howto__head">
        <p className="howto__eyebrow">{eyebrow}</p>
        <h2 className="howto__title">{title}</h2>
        <p className="howto__desc">{desc}</p>

        <a className="howto__btn" href={ctaHref} download>
          <img src={icon} alt="" aria-hidden="true" />
          {ctaText}
        </a>
      </div>

      {/* Video thumbnail / iframe */}
      {!playing ? (
        <figure
          className="howto__video"
          role="button"
          aria-label="Play video"
          tabIndex={0}
          onClick={play}
          onKeyDown={onKey}
          data-embed={embedUrl}
        >
          <img className="howto__thumb" src={thumb} alt="How to brew video" />
          <span className="howto__overlay" aria-hidden="true" />
          <span className="howto__play" aria-hidden="true">
            <i className="howto__play-icon fa-solid fa-play" />
          </span>
        </figure>
      ) : (
        <div className="howto__video" role="region" aria-label="How to brew video">
          <iframe
            className="howto__iframe"
            src={embedUrl}
            title="How to brew"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
}
