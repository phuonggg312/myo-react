

import featuredImg from "../assets/images/blog-1.jpg";
import thumbImg from "../assets/images/23a6a4b5676fa0783705c435293b4a3cf866dc69.jpg";

const smallPosts = [
  {
    id: 1,
    tag: { text: "BEER", cls: "is-beer" },
    title: "Blog title heading will go here",
    href: "#",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "12 Feb 2024",
    read: "5 min read",
    img: thumbImg,
  },
  {
    id: 2,
    tag: { text: "BEER", cls: "is-beer" },
    title: "Blog title heading will go here",
    href: "#",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "12 Feb 2024",
    read: "5 min read",
    img: thumbImg,
  },
  {
    id: 3,
    tag: { text: "BEER", cls: "is-beer" },
    title: "Blog title heading will go here",
    href: "#",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "12 Feb 2024",
    read: "5 min read",
    img: thumbImg,
  },
];

export default function Resources() {
  return (
    <section className="resources-sec">
      <div className="container">
        <p className="rs-eyebrow">RESOURCES</p>
        <h2 className="rs-title">WHAT&apos;S TRENDING RIGHT NOW?</h2>
        <p className="rs-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="featured">
          <p>Featured blog posts</p>
        </div>

        <div className="row g-4">
          {/* LEFT: Featured post */}
          <div className="col-lg-6">
            <article className="rs-featured">
              <a href="#" className="thumb is-video">
                <img src={featuredImg} alt="" />
              </a>

              <div className="tags">
                <span className="tag is-spirit">SPIRIT</span>
                <span className="tag is-brewer">BREWER&apos;S CHOICE</span>
              </div>

              <h3 className="post-title">
                <a href="#">Blog title heading will go here</a>
              </h3>

              <p className="excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                <a href="#" className="read-more">Read more</a>
              </p>

              <div className="meta">
                <time dateTime="2024-02-12">12 Feb 2024</time>
                <span className="dot">|</span>
                <span>5 min read</span>
              </div>
            </article>
          </div>

          {/* RIGHT: 3 small posts */}
          <div className="col-lg-6">
            <ul className="rs-list">
              {smallPosts.map((p) => (
                <li className="rs-item" key={p.id}>
                  <a href={p.href} className="thumb">
                    <img src={p.img} alt="" />
                  </a>
                  <div className="info">
                    <span className={`tag ${p.tag.cls}`}>{p.tag.text}</span>
                    <h4 className="post-title">
                      <a href={p.href}>{p.title}</a>
                    </h4>
                    <p className="excerpt">
                      {p.excerpt} <a href={p.href} className="read-more">Read more</a>
                    </p>
                    <div className="meta">
                      <time>{p.date}</time>
                      <span className="dot">|</span>
                      <span>{p.read}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-3">
          <a href="#" className="rs-more">SEE ALL CONTENTS</a>
        </div>
      </div>
    </section>
  );
}
