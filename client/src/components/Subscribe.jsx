export default function Subscribe() {
  const onSubmit = (e) => {
    e.preventDefault(); 
    // TODO: calc API / show toast here
  };

  return (
    <section className="subscribes">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h3 className="sub-tt">Sign up to be inspired</h3>
            <p className="sub-ct">
              Subscribe to our newsletter for exclusive offers and receive a 10% discount on your first purchase.
            </p>
          </div>

          <div className="col-md-6">
            <form className="sub-form" onSubmit={onSubmit}>
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">Subscribe</button>
            </form>

            <p className="sub-note">
              By subscribing you agree to with our <a href="#">Privacy Policy</a> and provide consent to receive updates
              from our company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
