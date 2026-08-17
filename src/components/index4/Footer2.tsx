const Footer2 = () => {
    return (
        <>
            <div>
                {/* Start Footer Area */}
                <footer className="marketing-agency-footer-area pt-150">
                    <div className="container">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-lg-9 col-md-12">
                                    <span className="sub-title d-inline-block">
                                        Get in touch
                                    </span>
                                    <h2 className="mb-0 text-animation">
                                        Prepared to grow?
                                    </h2>
                                </div>
                                <div className="col-lg-3 col-md-12">
                                    <div
                                        className="text-lg-end"
                                        data-cue="slideInUp"
                                    >
                                        <a
                                            href="contact.html"
                                            className="link-btn menu_link d-inline-block text-center rounded-circle"
                                        >
                                            <span className="menu_link-text">
                                                Let's Chat
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 order-md-1 order-lg-1">
                                <div className="single-footer-widget">
                                    <a
                                        href="index.html"
                                        className="logo d-inline-block"
                                    >
                                        <img
                                            src="assets/images/logo.svg"
                                            alt="logo"
                                            className="black-logo"
                                        />
                                        <img
                                            src="assets/images/white-logo.svg"
                                            className="d-none"
                                            alt="logo"
                                        />
                                    </a>
                                    <span className="location d-block">
                                        Parker Avenue, Kingsley Road, New York
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 order-md-3 order-lg-2">
                                <div className="custom-links">
                                    <div className="row">
                                        <div className="col-6">
                                            <h3>Useful links</h3>
                                            <ul className="ps-0 mb-0 list-unstyled">
                                                <li>
                                                    <a href="services.html">
                                                        Services
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="works.html">
                                                        Works
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="careers.html">
                                                        Careers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="about.html">
                                                        About
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <h3>Useful links</h3>
                                            <ul className="ps-0 mb-0 list-unstyled">
                                                <li>
                                                    <a href="pricing.html">
                                                        Pricing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">
                                                        Blog single
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="work-single.html">
                                                        Work single
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="service-single.html">
                                                        Service single
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">More</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 order-md-2 order-lg-3">
                                <div className="single-footer-widget">
                                    <h3>Subscribe for updates</h3>
                                    <form className="newsletter-form">
                                        <input
                                            type="email"
                                            placeholder="Your email here"
                                            className="form-control bg-transparent shadow-none"
                                            name="email"
                                            required
                                            autoComplete="off"
                                        />
                                        <button type="submit">
                                            <i className="ri-arrow-right-up-line" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <p>
                                        © 2025{" "}
                                        <a
                                            href="https://nsatheme.com/"
                                            target="_blank"
                                        >
                                            NsaTheme
                                        </a>
                                        . All rights reserved.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-6">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End Footer Area */}
                {/* Back to Top */}
                <div className="back-to-top rounded-circle position-fixed text-center rounded-circle">
                    <img
                        src="assets/images/icons/up-arrow.svg"
                        alt="up-arrow"
                    />
                    <img
                        src="assets/images/icons/white-up-arrow.svg"
                        alt="white-up-arrow"
                    />
                </div>
                {/* End Back to Top */}
            </div>
        </>
    );
};

export default Footer2;
