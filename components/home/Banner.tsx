const Banner = () => {
    return (
        <div className="creative-agency-banner-area position-relative z-1">
            <div
                className="container"
                data-cues="slideInUp"
                data-group="creativeAgencyBanner"
            >
                <div className="creative-agency-banner-content">
                    <span className="sub-title d-block fw-medium">
                        The creative agency
                    </span>
                    <div className="title">
                        <h1>Innovate. inspire</h1>
                        <h1>
                            <span className="d-inline-block">
                                ignite growth
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="creative-agency-banner-image mx-auto text-center position-relative">
                    <img
                        src="assets/images/banners/banner1.jpg"
                        className="main-image"
                        alt="banner-image"
                    />
                    <a
                        href="about.html"
                        className="link-btn menu_link d-inline-block rounded-circle"
                    >
                        <img
                            src="assets/images/icons/white-right-top-arrow.svg"
                            alt="right-top-arrow"
                        />
                        <span className="menu_link-text">Let's Chat</span>
                    </a>
                </div>
                <div className="creative-agency-banner-text">
                    <p>
                        At <strong>Lunex</strong>, we blend creativity and
                        strategy to create impactful brand experiences that
                        inspire and drive growth. 🚀
                    </p>
                </div>
                <ul className="creative-agency-banner-socials ps-0 mb-0 list-unstyled">
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            className="d-inline-block position-relative"
                        >
                            <i className="ri-instagram-line" />
                            Instagram
                            <img
                                src="assets/images/icons/right-top-arrow.svg"
                                alt="right-top-arrow"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            className="d-inline-block position-relative"
                        >
                            <i className="ri-twitter-x-fill" />
                            Twitter
                            <img
                                src="assets/images/icons/right-top-arrow.svg"
                                alt="right-top-arrow"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            className="d-inline-block position-relative"
                        >
                            <i className="ri-youtube-fill" />
                            YouTube
                            <img
                                src="assets/images/icons/right-top-arrow.svg"
                                alt="right-top-arrow"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Banner;
