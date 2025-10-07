import illustration from "../assets/images/image 2.png"; // đổi path đúng với dự án của bạn

export default function BrewFlow({
  title = "BREW YOUR OWN BEER",
  imgSrc = illustration,
  imgAlt = "Illustration: Brew → Ferment → Bottle → Enjoy",
}) {
  return (
    <section className="brew-flow">
      <div className="container">
        <h2 className="brew-flow__title">{title}</h2>

        <figure className="brew-flow__art">
          <img src={imgSrc} alt={imgAlt} />
        </figure>
      </div>
    </section>
  );
}
