const Navbar4 = () => {
    return (
        <div className="navbar-area style-three top-0 start-0 end-0 h-auto">
            <div className="container">
                <nav className="navbar p-0 navbar-expand-lg">
                    <a className="navbar-brand" href="index.html">
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
                    <button className="navbar-toggler" type="button">
                        <img src="assets/images/icons/menu2.svg" alt="menu" />
                        Menu
                    </button>
                    <div className="navbar-popup-menu">
                        <div className="top d-flex align-items-center justify-content-between">
                            <span className="d-block">Menu</span>
                            <button
                                type="button"
                                className="bg-transparent p-0 border-0"
                            >
                                <i className="ri-close-fill" />
                            </button>
                        </div>
                        <ul className="ps-0 mb-0 list-unstyled">
                            <li className="fw-medium">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="fw-medium">
                                <a href="about.html">About Us</a>
                            </li>
                            <li className="fw-medium">
                                <a href="works.html">Works</a>
                            </li>
                            <li className="fw-medium">
                                <a href="careers.html">Careers</a>
                            </li>
                            <li className="fw-medium">
                                <a href="blog.html">Blog</a>
                            </li>
                            <li className="fw-medium">
                                <a href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                        <div className="info">
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
                            <a
                                href="mailto:support@lunex.com"
                                className="email"
                            >
                                support@lunex.com
                            </a>
                        </div>
                    </div>
                    <div className="others-option d-flex align-items-center">
                        <button
                            type="button"
                            className="light-dark-btn d-inline-block p-0 bg-transparent border-0 lh-1"
                            id="light-dark-btn"
                        >
                            <i className="ri-sun-line" />
                        </button>
                        <a
                            href="contact.html"
                            className="link-btn d-inline-block"
                        >
                            Let&apos;s Chat{" "}
                            <i className="ri-arrow-right-line" />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar4;
