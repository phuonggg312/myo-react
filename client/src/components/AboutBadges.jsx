
import prev from "../assets/images/image-removebg-preview-1.png"

const AboutBadges = () => (
    <section className="about-badges">
        <div className="container">
            <div className="row gx-5">
                <div className="col-md-5">
                    <h3 className="about-title">A LITTLE ABOUT US</h3>
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="col-md-7">
                    <ul className="badge-list">
                        {[1, 2, 3].map(i => (
                            <li key={i}><img src={prev} alt="" /></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
export default AboutBadges;
