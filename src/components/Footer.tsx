const Footer = () => {
    return (
        <footer className="creative-agency-footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="footer-left-side position-relative">
                            <h2 className="mb-0">
                                Collaborate with
                                <img
                                    src="assets/images/users/user1.jpg"
                                    className="rounded-circle"
                                    alt="user-image"
                                />
                                <span>us</span>
                            </h2>
                            <a
                                href="contact.html"
                                className="link-btn menu_link text-center d-inline-block rounded-circle"
                                data-cue="slideInUp"
                            >
                                <img
                                    src="assets/images/icons/white-right-top-arrow.svg"
                                    alt="right-top-arrow"
                                />
                                <span className="menu_link-text">
                                    Let's Chat
                                </span>
                            </a>
                            <div className="newsletter-form-wrapper">
                                <span className="title d-block fw-medium">
                                    Subscribe for updates
                                </span>
                                <form className="newsletter-form position-relative">
                                    <input
                                        type="text"
                                        className="input-newsletter d-block w-100"
                                        placeholder="Your email here"
                                        name="email"
                                        required
                                        autoComplete="off"
                                    />
                                    <button type="submit">
                                        <i className="ri-send-plane-fill" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="footer-right-side">
                            <div className="socials">
                                <a
                                    href="#"
                                    className="d-inline-block"
                                    target="_blank"
                                >
                                    <i className="ri-facebook-circle-fill" />
                                </a>
                                <a
                                    href="#"
                                    className="d-inline-block"
                                    target="_blank"
                                >
                                    <i className="ri-instagram-line" />
                                </a>
                                <a
                                    href="#"
                                    className="d-inline-block"
                                    target="_blank"
                                >
                                    <i className="ri-threads-line" />
                                </a>
                                <a
                                    href="#"
                                    className="d-inline-block"
                                    target="_blank"
                                >
                                    <i className="ri-twitter-x-line" />
                                </a>
                                <a
                                    href="#"
                                    className="d-inline-block"
                                    target="_blank"
                                >
                                    <i className="ri-youtube-fill" />
                                </a>
                            </div>
                            <div className="custom-links row">
                                <div className="col-6">
                                    <h3>Useful links</h3>
                                    <ul className="ps-0 mb-0 list-unstyled">
                                        <li>
                                            <a href="services.html">Services</a>
                                        </li>
                                        <li>
                                            <a href="works.html">Works</a>
                                        </li>
                                        <li>
                                            <a href="careers.html">Careers</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <h3>Useful links</h3>
                                    <ul className="ps-0 mb-0 list-unstyled">
                                        <li>
                                            <a href="pricing.html">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li>
                                            <a href="error.html">404 error</a>
                                        </li>
                                        <li>
                                            <a href="#">More</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="location">
                                <div className="position-relative">
                                    <img
                                        src="assets/images/icons/map-marker.svg"
                                        alt="map-marker-icon"
                                    />
                                    <h3>The Empire State</h3>
                                    <span className="d-block">
                                        Parker Avenue, Kingsley Road, New York
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area position-relative">
                    <p>
                        © 2025{" "}
                        <a href="https://nsatheme.com/" target="_blank">
                            NsaTheme
                        </a>
                        . All rights reserved.
                    </p>
                    <div className="go-top rounded-circle">
                        <img
                            src="assets/images/icons/up-arrow.svg"
                            alt="up-arrow"
                        />
                        <img
                            src="assets/images/icons/white-up-arrow.svg"
                            alt="white-up-arrow"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
