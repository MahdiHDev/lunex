import Navbar2 from "@/components/navbars/Navbar2";

/* eslint-disable @next/next/no-img-element */
export default function page() {
    return (
        <div>
            <div>
                {/* Preloader */}
                {/* <div className="preloader-area position-fixed top-0 start-0 end-0 bottom-0 text-center">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="loader" />
                    </div>
                </div> */}
                {/* End Preloader */}
                {/* Start Navbar Area */}
                <Navbar2 />
                {/* End Navbar Area */}
                {/* Start Menu Popup Area */}
                <div className="menu-popup-area position-fixed start-0 end-0 top-0 bottom-0">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="meanu-popup-nav">
                                            <div
                                                className="accordion"
                                                id="navbarAccordion"
                                            >
                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                    <button
                                                        className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed active"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navbarCollapseOne"
                                                        aria-expanded="false"
                                                        aria-controls="navbarCollapseOne"
                                                    >
                                                        Home
                                                    </button>
                                                    <div
                                                        id="navbarCollapseOne"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#navbarAccordion"
                                                    >
                                                        <div className="accordion-body">
                                                            <div className="accordion">
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                        href="index.html"
                                                                    >
                                                                        Creative
                                                                        Agency
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        className="accordion-link fw-semibold text-decoration-none active"
                                                                        href="index-2.html"
                                                                    >
                                                                        Digital
                                                                        Agency
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                        href="index-3.html"
                                                                    >
                                                                        Development
                                                                        Agency
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                        href="index-4.html"
                                                                    >
                                                                        Digital
                                                                        Marketing
                                                                        Agency
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                        href="index-5.html"
                                                                    >
                                                                        UI/UX
                                                                        Design
                                                                        Agency
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                        href="index-6.html"
                                                                    >
                                                                        Branding
                                                                        Agency
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                        href="index-7.html"
                                                                    >
                                                                        Content
                                                                        Creation
                                                                        Agency
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                        href="index-8.html"
                                                                    >
                                                                        SEO
                                                                        Agency
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                        href="index-9.html"
                                                                    >
                                                                        Cyber
                                                                        Security
                                                                        Agency
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                    <button
                                                        className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navbarCollapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="navbarCollapseTwo"
                                                    >
                                                        Works
                                                    </button>
                                                    <div
                                                        id="navbarCollapseTwo"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#navbarAccordion"
                                                    >
                                                        <div className="accordion-body">
                                                            <div className="accordion">
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="works.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Works
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="work-single.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Work
                                                                        Single
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                    <button
                                                        className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navbarCollapseThree"
                                                        aria-expanded="false"
                                                        aria-controls="navbarCollapseThree"
                                                    >
                                                        Careers
                                                    </button>
                                                    <div
                                                        id="navbarCollapseThree"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#navbarAccordion"
                                                    >
                                                        <div className="accordion-body">
                                                            <div className="accordion">
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="careers.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Careers
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="career-single.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Career
                                                                        Single
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                    <button
                                                        className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navbarCollapseFour"
                                                        aria-expanded="false"
                                                        aria-controls="navbarCollapseFour"
                                                    >
                                                        Pages
                                                    </button>
                                                    <div
                                                        id="navbarCollapseFour"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#navbarAccordion"
                                                    >
                                                        <div className="accordion-body">
                                                            <div
                                                                className="accordion"
                                                                id="navbarAccordion2"
                                                            >
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="about.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        About Us
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="team.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Team
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <button
                                                                        className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#navbarCollapseOne1"
                                                                        aria-expanded="false"
                                                                        aria-controls="navbarCollapseOne1"
                                                                    >
                                                                        Services
                                                                    </button>
                                                                    <div
                                                                        id="navbarCollapseOne1"
                                                                        className="accordion-collapse collapse"
                                                                        data-bs-parent="#navbarAccordion2"
                                                                    >
                                                                        <div className="accordion-body">
                                                                            <div className="accordion">
                                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                                    <a
                                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                                        href="services.html"
                                                                                    >
                                                                                        Services
                                                                                    </a>
                                                                                </div>
                                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                                    <a
                                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                                        href="service-single.html"
                                                                                    >
                                                                                        Service
                                                                                        Single
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="pricing.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Pricing
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="book-a-call.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Book A
                                                                        Call
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <button
                                                                        className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#navbarCollapseOne2"
                                                                        aria-expanded="false"
                                                                        aria-controls="navbarCollapseOne2"
                                                                    >
                                                                        My
                                                                        Account
                                                                    </button>
                                                                    <div
                                                                        id="navbarCollapseOne2"
                                                                        className="accordion-collapse collapse"
                                                                        data-bs-parent="#navbarAccordion2"
                                                                    >
                                                                        <div className="accordion-body">
                                                                            <div className="accordion">
                                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                                    <a
                                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                                        href="signin.html"
                                                                                    >
                                                                                        Signin
                                                                                    </a>
                                                                                </div>
                                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                                    <a
                                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                                        href="signup.html"
                                                                                    >
                                                                                        Signup
                                                                                    </a>
                                                                                </div>
                                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                                    <a
                                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                                        href="forgot-password.html"
                                                                                    >
                                                                                        Forgot
                                                                                        Password?
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="faq.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        FAQ
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="privacy-policy.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Privacy
                                                                        Policy
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="terms-conditions.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Terms
                                                                        &amp;
                                                                        Conditions
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="error.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        404
                                                                        Error
                                                                        Page
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                    <button
                                                        className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navbarCollapseFive"
                                                        aria-expanded="false"
                                                        aria-controls="navbarCollapseFive"
                                                    >
                                                        Blogs
                                                    </button>
                                                    <div
                                                        id="navbarCollapseFive"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#navbarAccordion"
                                                    >
                                                        <div className="accordion-body">
                                                            <div className="accordion">
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="blog.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Blog
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="blog-single.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Blog
                                                                        Single
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                    <button
                                                        className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navbarCollapseSix"
                                                        aria-expanded="false"
                                                        aria-controls="navbarCollapseSix"
                                                    >
                                                        Contacts
                                                    </button>
                                                    <div
                                                        id="navbarCollapseSix"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#navbarAccordion"
                                                    >
                                                        <div className="accordion-body">
                                                            <div className="accordion">
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="contact.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Contact
                                                                        Style 1
                                                                    </a>
                                                                </div>
                                                                <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                    <a
                                                                        href="contact-2.html"
                                                                        className="accordion-link fw-semibold text-decoration-none"
                                                                    >
                                                                        Contact
                                                                        Style 2
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="menu-contact-info">
                                            <div className="location">
                                                <h5>The Empire State</h5>
                                                <p>
                                                    Parker Avenue, Kingsley
                                                    Road, New York
                                                </p>
                                            </div>
                                            <h4>support@lunex.com</h4>
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
                        </div>
                    </div>
                    <button
                        type="button"
                        className="menu-popup-close-btn position-absolute rounded-circle text-center border-0 p-0"
                    >
                        <i className="ri-close-line" />
                    </button>
                </div>
                {/* End Menu Popup Area */}
                {/* Start Digital Agency Area */}
                <div className="digital-agency-banner-area pb-150">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div
                                    className="digital-agency-banner-content"
                                    data-cues="slideInUp"
                                    data-group="digitalAgencyBannerContent"
                                >
                                    <span className="sub-title d-block position-relative">
                                        Digital agency
                                    </span>
                                    <h1>We drive you to digital world</h1>
                                    <div className="ratings">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/icons/star.svg"
                                                alt="star"
                                            />
                                            <img
                                                src="assets/images/icons/star.svg"
                                                alt="star"
                                            />
                                            <img
                                                src="assets/images/icons/star.svg"
                                                alt="star"
                                            />
                                            <img
                                                src="assets/images/icons/star.svg"
                                                alt="star"
                                            />
                                            <img
                                                src="assets/images/icons/star.svg"
                                                alt="star"
                                            />
                                        </div>
                                        <span className="d-block">
                                            Trusted globally by over 199+
                                            clients
                                        </span>
                                    </div>
                                    <div className="users d-flex align-items-center">
                                        <img
                                            src="assets/images/users/user2.jpg"
                                            className="rounded-circle"
                                            alt="user"
                                        />
                                        <img
                                            src="assets/images/users/user3.jpg"
                                            className="rounded-circle"
                                            alt="user"
                                        />
                                        <img
                                            src="assets/images/users/user4.jpg"
                                            className="rounded-circle"
                                            alt="user"
                                        />
                                        <img
                                            src="assets/images/users/user5.jpg"
                                            className="rounded-circle"
                                            alt="user"
                                        />
                                        <span className="d-inline-block">
                                            You
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div
                                    className="digital-agency-banner-image position-relative"
                                    data-cues="slideInUp"
                                    data-group="digitalAgencyBannerImage"
                                >
                                    <img
                                        src="assets/images/banners/banner2.jpg"
                                        alt="banner-image"
                                    />
                                    <p>
                                        At <strong>Lunex</strong>, we propel
                                        your business into the digital world by
                                        combining innovative strategies,
                                        cutting-edge design, and tailored
                                        solutions to drive growth, boost
                                        engagement, and ensure your brand
                                        thrives in the digital landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Digital Agency Area */}
                {/* Start Funfacts Area */}
                <div className="funfacts-area pb-125">
                    <div className="container">
                        <span className="d-block funfacts-sub-title">
                            Completion milestone
                        </span>
                        <div
                            className="d-flex justify-content-between"
                            data-cues="slideInUp"
                        >
                            <div className="funfact-box text-center">
                                <div className="number fw-medium lh-1">
                                    <span className="odometer" data-count={199}>
                                        00
                                    </span>
                                    +
                                </div>
                                <span className="sub-title d-block">
                                    Proud clients
                                </span>
                            </div>
                            <div className="funfact-box text-center">
                                <div className="number fw-medium lh-1">
                                    <span className="odometer" data-count={212}>
                                        00
                                    </span>
                                    +
                                </div>
                                <span className="sub-title d-block">
                                    Completed initiatives
                                </span>
                            </div>
                            <div className="funfact-box text-center">
                                <div className="number fw-medium lh-1">
                                    <span className="odometer" data-count={11}>
                                        00
                                    </span>
                                    +
                                </div>
                                <span className="sub-title d-block">
                                    Trophies
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Funfacts Area */}
                {/* Start Services Area */}
                <div className="services-area pb-150">
                    <div className="container">
                        <div className="digital-agency-section-title">
                            <span className="sub-title position-relative d-block">
                                Services
                            </span>
                            <div className="row align-items-end">
                                <div className="col-lg-8 col-md-8">
                                    <h2 className="text-animation">
                                        Our digital offerings
                                    </h2>
                                </div>
                                <div className="col-lg-4 col-md-4 text-md-end">
                                    <a
                                        href="services.html"
                                        className="default-btn style-two"
                                    >
                                        View Services
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="services-list" data-cues="slideInUp">
                            <div className="item position-relative">
                                <div className="number d-inline-block rounded-circle">
                                    01
                                </div>
                                <h3 className="mb-0 fw-normal">
                                    <a href="service-single.html">
                                        Digital strategy &amp; consulting
                                    </a>
                                </h3>
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block lh-1"
                                >
                                    <img
                                        src="assets/images/icons/big-right-top-arrow2.svg"
                                        alt="big-right-top-arrow"
                                    />
                                </a>
                                <a
                                    href="service-single.html"
                                    className="image d-block"
                                >
                                    <img
                                        src="assets/images/services/service1.jpg"
                                        alt="service-image"
                                    />
                                </a>
                            </div>
                            <div className="item position-relative">
                                <div className="number d-inline-block rounded-circle">
                                    02
                                </div>
                                <h3 className="mb-0 fw-normal">
                                    <a href="service-single.html">
                                        Branding &amp; identity design
                                    </a>
                                </h3>
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block lh-1"
                                >
                                    <img
                                        src="assets/images/icons/big-right-top-arrow2.svg"
                                        alt="big-right-top-arrow"
                                    />
                                </a>
                                <a
                                    href="service-single.html"
                                    className="image d-block"
                                >
                                    <img
                                        src="assets/images/services/service2.jpg"
                                        alt="service-image"
                                    />
                                </a>
                            </div>
                            <div className="item position-relative">
                                <div className="number d-inline-block rounded-circle">
                                    03
                                </div>
                                <h3 className="mb-0 fw-normal">
                                    <a href="service-single.html">
                                        Web development &amp; design
                                    </a>
                                </h3>
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block lh-1"
                                >
                                    <img
                                        src="assets/images/icons/big-right-top-arrow2.svg"
                                        alt="big-right-top-arrow"
                                    />
                                </a>
                                <a
                                    href="service-single.html"
                                    className="image d-block"
                                >
                                    <img
                                        src="assets/images/services/service3.jpg"
                                        alt="service-image"
                                    />
                                </a>
                            </div>
                            <div className="item position-relative">
                                <div className="number d-inline-block rounded-circle">
                                    04
                                </div>
                                <h3 className="mb-0 fw-normal">
                                    <a href="service-single.html">
                                        Social media management
                                    </a>
                                </h3>
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block lh-1"
                                >
                                    <img
                                        src="assets/images/icons/big-right-top-arrow2.svg"
                                        alt="big-right-top-arrow"
                                    />
                                </a>
                                <a
                                    href="service-single.html"
                                    className="image d-block"
                                >
                                    <img
                                        src="assets/images/services/service4.jpg"
                                        alt="service-image"
                                    />
                                </a>
                            </div>
                            <div className="item position-relative">
                                <div className="number d-inline-block rounded-circle">
                                    05
                                </div>
                                <h3 className="mb-0 fw-normal">
                                    <a href="service-single.html">
                                        Search engine optimization
                                    </a>
                                </h3>
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block lh-1"
                                >
                                    <img
                                        src="assets/images/icons/big-right-top-arrow2.svg"
                                        alt="big-right-top-arrow"
                                    />
                                </a>
                                <a
                                    href="service-single.html"
                                    className="image d-block"
                                >
                                    <img
                                        src="assets/images/services/service5.jpg"
                                        alt="service-image"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Services Area */}
                {/* Start Case Studies Area */}
                <div className="case-studies-area">
                    <div className="container">
                        <div className="digital-agency-section-title">
                            <span className="sub-title position-relative d-block">
                                Case studies
                            </span>
                            <div className="row align-items-end">
                                <div className="col-lg-8 col-md-8">
                                    <h2 className="text-animation">
                                        Our latest case studies
                                    </h2>
                                </div>
                                <div className="col-lg-4 col-md-4 text-md-end">
                                    <a
                                        href="works.html"
                                        className="default-btn style-two"
                                    >
                                        View Case Studies
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <div
                                    className="case-studies-list"
                                    data-cues="slideInUp"
                                >
                                    <div className="item position-relative">
                                        <h3>
                                            <a href="work-single.html">
                                                Project digital transformation
                                                initiative
                                            </a>
                                        </h3>
                                        <span className="d-block date">
                                            17 Mar 2025
                                        </span>
                                        <a
                                            href="work-single.html"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                        >
                                            <img
                                                src="assets/images/icons/big-right-top-arrow2.svg"
                                                alt="big-right-top-arrow"
                                            />
                                            <img
                                                src="assets/images/icons/white-right-top-arrow3.svg"
                                                alt="big-right-top-arrow"
                                            />
                                        </a>
                                    </div>
                                    <div className="item position-relative">
                                        <h3>
                                            <a href="work-single.html">
                                                Brand elevation strategy launch
                                            </a>
                                        </h3>
                                        <span className="d-block date">
                                            12 Feb 2025
                                        </span>
                                        <a
                                            href="work-single.html"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                        >
                                            <img
                                                src="assets/images/icons/big-right-top-arrow2.svg"
                                                alt="big-right-top-arrow"
                                            />
                                            <img
                                                src="assets/images/icons/white-right-top-arrow3.svg"
                                                alt="big-right-top-arrow"
                                            />
                                        </a>
                                    </div>
                                    <div className="item position-relative">
                                        <h3>
                                            <a href="work-single.html">
                                                Innovation through digital
                                                design
                                            </a>
                                        </h3>
                                        <span className="d-block date">
                                            05 Jan 2025
                                        </span>
                                        <a
                                            href="work-single.html"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                        >
                                            <img
                                                src="assets/images/icons/big-right-top-arrow2.svg"
                                                alt="big-right-top-arrow"
                                            />
                                            <img
                                                src="assets/images/icons/white-right-top-arrow3.svg"
                                                alt="big-right-top-arrow"
                                            />
                                        </a>
                                    </div>
                                    <div className="item position-relative">
                                        <h3>
                                            <a href="work-single.html">
                                                Creative vision for growth
                                            </a>
                                        </h3>
                                        <span className="d-block date">
                                            30 Dec 2025
                                        </span>
                                        <a
                                            href="work-single.html"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                        >
                                            <img
                                                src="assets/images/icons/big-right-top-arrow2.svg"
                                                alt="big-right-top-arrow"
                                            />
                                            <img
                                                src="assets/images/icons/white-right-top-arrow3.svg"
                                                alt="big-right-top-arrow"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div
                                    className="case-studies-image"
                                    data-cue="slideInUp"
                                >
                                    <div className="images position-relative">
                                        <div className="image">
                                            <img
                                                src="assets/images/case-studies/case-study1.jpg"
                                                alt="case-studies-image"
                                            />
                                            <p>
                                                The Project digital
                                                transformation initiative is
                                                aimed at reshaping brands
                                                through innovative digital
                                                strategies. Our team integrates
                                                advanced technologies &amp;
                                                creative solutions to enhance
                                                user experiences, streamline
                                                processes, &amp; drive
                                                measurable growth.
                                            </p>
                                        </div>
                                        <div className="image">
                                            <img
                                                src="assets/images/case-studies/case-study9.jpg"
                                                alt="case-studies-image"
                                            />
                                            <p>
                                                The Brand elevation strategy
                                                launch is aimed at reshaping
                                                brands through innovative
                                                digital strategies. Our team
                                                integrates advanced technologies
                                                &amp; creative solutions to
                                                enhance user experiences,
                                                streamline processes, &amp;
                                                drive measurable growth.
                                            </p>
                                        </div>
                                        <div className="image">
                                            <img
                                                src="assets/images/case-studies/case-study10.jpg"
                                                alt="case-studies-image"
                                            />
                                            <p>
                                                The Innovation through digital
                                                design is aimed at reshaping
                                                brands through innovative
                                                digital strategies. Our team
                                                integrates advanced technologies
                                                &amp; creative solutions to
                                                enhance user experiences,
                                                streamline processes, &amp;
                                                drive measurable growth.
                                            </p>
                                        </div>
                                        <div className="image">
                                            <img
                                                src="assets/images/case-studies/case-study11.jpg"
                                                alt="case-studies-image"
                                            />
                                            <p>
                                                The Creative vision for growth
                                                is aimed at reshaping brands
                                                through innovative digital
                                                strategies. Our team integrates
                                                advanced technologies &amp;
                                                creative solutions to enhance
                                                user experiences, streamline
                                                processes, &amp; drive
                                                measurable growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Case Studies Area */}
                {/* Start Pricing Area */}
                <div className="pricing-area ptb-150">
                    <div className="container">
                        <div className="digital-agency-section-title">
                            <span className="sub-title position-relative d-block">
                                Our pricing
                            </span>
                            <div className="row align-items-end">
                                <div className="col-lg-8 col-md-8">
                                    <h2 className="text-animation">
                                        Choose best pricing plan
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div
                            className="pricing-table table-responsive"
                            data-cue="slideInUp"
                        >
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" className="fw-normal">
                                            <a
                                                href="book-a-call.html"
                                                className="user d-inline-block"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="assets/images/users/user6.jpg"
                                                        className="rounded-circle"
                                                        alt="user-image"
                                                    />
                                                    <span className="d-block fw-medium">
                                                        Book a call
                                                    </span>
                                                </div>
                                            </a>
                                        </th>
                                        <th scope="col" className="fw-normal">
                                            <span className="d-block">
                                                Starter
                                            </span>
                                            <div className="price lh-1 fw-medium">
                                                $999 <span>/month</span>
                                            </div>
                                            <a
                                                href="#"
                                                className="default-btn style-two"
                                            >
                                                Choose plan
                                            </a>
                                        </th>
                                        <th scope="col" className="fw-normal">
                                            <span className="d-block">
                                                Standard
                                            </span>
                                            <div className="price lh-1 fw-medium">
                                                $1,299 <span>/month</span>
                                            </div>
                                            <a
                                                href="#"
                                                className="default-btn style-two"
                                            >
                                                Choose plan
                                            </a>
                                        </th>
                                        <th scope="col" className="fw-normal">
                                            <span className="d-block">Pro</span>
                                            <div className="price lh-1 fw-medium">
                                                $2,599 <span>/month</span>
                                            </div>
                                            <a
                                                href="#"
                                                className="default-btn style-two"
                                            >
                                                Choose plan
                                            </a>
                                        </th>
                                        <th scope="col" className="fw-normal">
                                            <span className="d-block">
                                                Ultimate
                                            </span>
                                            <div className="price lh-1 fw-medium">
                                                $4,799 <span>/month</span>
                                            </div>
                                            <a
                                                href="#"
                                                className="default-btn style-two"
                                            >
                                                Choose plan
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Digital strategy &amp; consulting
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Branding &amp; identity design</td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Web development &amp; design</td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-close-line" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Social media management</td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-close-line" />
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                        <td>
                                            <i className="ri-check-line" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Work schedule: 5 days/week | monthly
                                            hours
                                        </td>
                                        <td className="fw-medium">80 hrs</td>
                                        <td className="fw-medium">120 hrs</td>
                                        <td className="fw-medium">150 hrs</td>
                                        <td className="fw-medium">240 hrs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* End Pricing Area */}
                {/* Start Blog Area */}
                <div className="blog-area">
                    <div className="container">
                        <div className="digital-agency-section-title">
                            <span className="sub-title position-relative d-block">
                                Insights
                            </span>
                            <div className="row align-items-end">
                                <div className="col-lg-8 col-md-8">
                                    <h2 className="text-animation">
                                        Our latest stories
                                    </h2>
                                </div>
                                <div className="col-lg-4 col-md-4 text-md-end">
                                    <a
                                        href="blog.html"
                                        className="default-btn style-two"
                                    >
                                        View Insights
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="blogs-list" data-cues="slideInUp">
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="content position-relative">
                                            <span className="date d-block">
                                                22 Mar 2025
                                            </span>
                                            <h3>
                                                <a href="blog-single.html">
                                                    The power of storytelling in
                                                    branding
                                                </a>
                                            </h3>
                                            <p>
                                                Storytelling builds emotional
                                                connections, strengthens brand
                                                identity, and inspires loyalty.
                                            </p>
                                            <a
                                                href="blog-single.html"
                                                className="link-btn d-inline-block rounded-circle text-center"
                                            >
                                                <img
                                                    src="assets/images/icons/big-right-top-arrow2.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                                <img
                                                    src="assets/images/icons/white-right-top-arrow3.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5">
                                        <a
                                            href="blog-single.html"
                                            className="image d-block"
                                        >
                                            <img
                                                src="assets/images/blogs/blog4.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="content position-relative">
                                            <span className="date d-block">
                                                21 Mar 2025
                                            </span>
                                            <h3>
                                                <a href="blog-single.html">
                                                    Creative campaigns that
                                                    inspire action
                                                </a>
                                            </h3>
                                            <p>
                                                Storytelling builds emotional
                                                connections, strengthens brand
                                                identity, and inspires loyalty.
                                            </p>
                                            <a
                                                href="blog-single.html"
                                                className="link-btn d-inline-block rounded-circle text-center"
                                            >
                                                <img
                                                    src="assets/images/icons/big-right-top-arrow2.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                                <img
                                                    src="assets/images/icons/white-right-top-arrow3.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5">
                                        <a
                                            href="blog-single.html"
                                            className="image d-block"
                                        >
                                            <img
                                                src="assets/images/blogs/blog5.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="content position-relative">
                                            <span className="date d-block">
                                                18 Mar 2025
                                            </span>
                                            <h3>
                                                <a href="blog-single.html">
                                                    The importance of ux/ui in
                                                    building customer trust
                                                </a>
                                            </h3>
                                            <p>
                                                Storytelling builds emotional
                                                connections, strengthens brand
                                                identity, and inspires loyalty.
                                            </p>
                                            <a
                                                href="blog-single.html"
                                                className="link-btn d-inline-block rounded-circle text-center"
                                            >
                                                <img
                                                    src="assets/images/icons/big-right-top-arrow2.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                                <img
                                                    src="assets/images/icons/white-right-top-arrow3.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5">
                                        <a
                                            href="blog-single.html"
                                            className="image d-block"
                                        >
                                            <img
                                                src="assets/images/blogs/blog6.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Area */}
                {/* Start Awards Area */}
                <div className="awards-area ptb-150">
                    <div className="container">
                        <div className="digital-agency-section-title">
                            <span className="sub-title position-relative d-block">
                                Our recognitions
                            </span>
                            <div className="row align-items-end">
                                <div className="col-lg-8 col-md-8">
                                    <h2 className="text-animation">
                                        Our wins &amp; honors
                                    </h2>
                                </div>
                                <div className="col-lg-4 col-md-4 text-md-end">
                                    <a
                                        href="about.html"
                                        className="default-btn style-two"
                                    >
                                        View All
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="achievements-list"
                            data-cues="slideInUp"
                        >
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-xxl-6 col-lg-4 col-md-3">
                                        <div className="left-side d-flex justify-content-between align-items-center">
                                            <span className="d-block">
                                                2025
                                            </span>
                                            <div className="icon text-center rounded-circle position-relative">
                                                <i className="ri-stack-line" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-lg-8 col-md-9">
                                        <div className="right-side d-md-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="number d-inline-block rounded-circle text-center">
                                                    01
                                                </div>
                                                <h3 className="mb-0">
                                                    <a href="#" target="_blank">
                                                        Future innovator’s
                                                        trophy
                                                    </a>
                                                </h3>
                                            </div>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="link-btn d-inline-block rounded-circle text-center"
                                            >
                                                <img
                                                    src="assets/images/icons/big-right-top-arrow2.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                                <img
                                                    src="assets/images/icons/white-right-top-arrow3.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-xxl-6 col-lg-4 col-md-3">
                                        <div className="left-side d-flex justify-content-between align-items-center">
                                            <span className="d-block">
                                                2025
                                            </span>
                                            <div className="icon text-center rounded-circle position-relative">
                                                <i className="ri-quill-pen-line" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-lg-8 col-md-9">
                                        <div className="right-side d-md-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="number d-inline-block rounded-circle text-center">
                                                    02
                                                </div>
                                                <h3 className="mb-0">
                                                    <a href="#" target="_blank">
                                                        Mastermind of strategy
                                                    </a>
                                                </h3>
                                            </div>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="link-btn d-inline-block rounded-circle text-center"
                                            >
                                                <img
                                                    src="assets/images/icons/big-right-top-arrow2.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                                <img
                                                    src="assets/images/icons/white-right-top-arrow3.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-xxl-6 col-lg-4 col-md-3">
                                        <div className="left-side d-flex justify-content-between align-items-center">
                                            <span className="d-block">
                                                2023
                                            </span>
                                            <div className="icon text-center rounded-circle position-relative">
                                                <i className="ri-compasses-2-line" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-lg-8 col-md-9">
                                        <div className="right-side d-md-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="number d-inline-block rounded-circle text-center">
                                                    03
                                                </div>
                                                <h3 className="mb-0">
                                                    <a href="#" target="_blank">
                                                        Digital excellence
                                                        trophy
                                                    </a>
                                                </h3>
                                            </div>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="link-btn d-inline-block rounded-circle text-center"
                                            >
                                                <img
                                                    src="assets/images/icons/big-right-top-arrow2.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                                <img
                                                    src="assets/images/icons/white-right-top-arrow3.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-xxl-6 col-lg-4 col-md-3">
                                        <div className="left-side d-flex justify-content-between align-items-center">
                                            <span className="d-block">
                                                2022
                                            </span>
                                            <div className="icon text-center rounded-circle position-relative">
                                                <i className="ri-artboard-2-line" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-lg-8 col-md-9">
                                        <div className="right-side d-md-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="number d-inline-block rounded-circle text-center">
                                                    04
                                                </div>
                                                <h3 className="mb-0">
                                                    <a href="#" target="_blank">
                                                        Visionary design award
                                                    </a>
                                                </h3>
                                            </div>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="link-btn d-inline-block rounded-circle text-center"
                                            >
                                                <img
                                                    src="assets/images/icons/big-right-top-arrow2.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                                <img
                                                    src="assets/images/icons/white-right-top-arrow3.svg"
                                                    alt="big-right-top-arrow"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Awards Area */}
                {/* Start Feedback Area */}
                <div className="feedback-area pb-150">
                    <div className="container">
                        <div className="digital-agency-section-title">
                            <span className="sub-title position-relative d-block">
                                Feedback
                            </span>
                            <div className="row align-items-end">
                                <div className="col-lg-8 col-md-8">
                                    <h2 className="text-animation">
                                        Client journeys
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div
                            className="feedbackSwiper position-relative"
                            data-cue="slideInUp"
                        >
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="feedback-item">
                                            <div className="ratings d-flex align-items-center">
                                                <span className="fw-medium d-inline-block">
                                                    Flexport
                                                </span>
                                                <img
                                                    src="assets/images/icons/star.svg"
                                                    alt="star"
                                                />
                                                <img
                                                    src="assets/images/icons/star.svg"
                                                    alt="star"
                                                />
                                                <img
                                                    src="assets/images/icons/star.svg"
                                                    alt="star"
                                                />
                                                <img
                                                    src="assets/images/icons/star.svg"
                                                    alt="star"
                                                />
                                                <img
                                                    src="assets/images/icons/star.svg"
                                                    alt="star"
                                                />
                                            </div>
                                            <h3>
                                                “A game changer for our brand”
                                            </h3>
                                            <p>
                                                The team’s creative strategy
                                                transformed our brand&apos;s
                                                presence. With a fresh and
                                                engaging design, we gained a new
                                                identity that resonates deeply
                                                with our audience, positioning
                                                us as a standout in a
                                                competitive market. Our brand
                                                recognition has skyrocketed
                                                since the launch.
                                            </p>
                                            <div className="info d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user6.jpg"
                                                    className="rounded-circle"
                                                    alt="user"
                                                />
                                                <div>
                                                    <h4 className="fw-normal">
                                                        Sarah Thompson
                                                    </h4>
                                                    <span className="d-block">
                                                        CEO, InnovateTech
                                                        Solutions
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="feedback-item">
                                            <div className="ratings d-flex align-items-center">
                                                <span className="fw-medium d-inline-block">
                                                    SupplyHog
                                                </span>
                                                <img
                                                    src="assets/images/icons/star.svg"
                                                    alt="star"
                                                />
                                                <img
                                                    src="assets/images/icons/star.svg"
                                                    alt="star"
                                                />
                                                <img
                                                    src="assets/images/icons/star.svg"
                                                    alt="star"
                                                />
                                                <img
                                                    src="assets/images/icons/star.svg"
                                                    alt="star"
                                                />
                                            </div>
                                            <h3>“Innovative and impactful”</h3>
                                            <p>
                                                The agency’s creative approach
                                                was exactly what our business
                                                needed. Their work made us stand
                                                out in an already crowded
                                                market. We’ve seen an impressive
                                                increase in website traffic and
                                                customer inquiries, all thanks
                                                to their fresh ideas and
                                                strategic thinking.
                                            </p>
                                            <div className="info d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user1.jpg"
                                                    className="rounded-circle"
                                                    alt="user"
                                                />
                                                <div>
                                                    <h4 className="fw-normal">
                                                        Emily Roberts
                                                    </h4>
                                                    <span className="d-block">
                                                        Founder, Urban
                                                        Innovators
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-navigation d-flex align-items-center">
                                <div className="swiper-button-prev">
                                    <img
                                        src="assets/images/icons/left-arrow.svg"
                                        alt="left-arrow"
                                    />
                                </div>
                                <div className="swiper-button-next">
                                    <img
                                        src="assets/images/icons/right-arrow.svg"
                                        alt="right-arrow"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Feedback Area */}
                {/* Start Partners Area */}
                <div className="partners-area pb-150">
                    <div className="container">
                        <div className="partners-list">
                            <div
                                className="row justify-content-center"
                                data-cues="slideInUp"
                            >
                                <div className="col-md-4 col-6">
                                    <div className="partner-item text-center">
                                        <img
                                            src="assets/images/partners/partner1.svg"
                                            alt="partner-image"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="partner-item text-center">
                                        <img
                                            src="assets/images/partners/partner2.svg"
                                            alt="partner-image"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="partner-item text-center">
                                        <img
                                            src="assets/images/partners/partner3.svg"
                                            alt="partner-image"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="partner-item text-center">
                                        <img
                                            src="assets/images/partners/partner4.svg"
                                            alt="partner-image"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="partner-item text-center">
                                        <img
                                            src="assets/images/partners/partner5.svg"
                                            alt="partner-image"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="partner-item text-center">
                                        <img
                                            src="assets/images/partners/partner6.svg"
                                            alt="partner-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Partners Area */}
                {/* Start FAQ Area */}
                <div className="faq-area pb-150">
                    <div className="container">
                        <div className="digital-agency-section-title">
                            <span className="sub-title position-relative d-block">
                                FAQ
                            </span>
                            <div className="row align-items-end">
                                <div className="col-lg-8 col-md-8">
                                    <h2 className="text-animation">
                                        Popular questions
                                    </h2>
                                </div>
                                <div className="col-lg-4 col-md-4 text-md-end">
                                    <a
                                        href="faq.html"
                                        className="default-btn style-two"
                                    >
                                        View FAQ
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="digital-agency-faq-accordion accordion"
                            id="digitalAgencyFaqAccordion"
                            data-cues="slideInUp"
                        >
                            <div className="accordion-item">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    What services do you offer as a creative
                                    agency?
                                    <span className="number d-inline-block rounded-circle text-center">
                                        01
                                    </span>
                                </button>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#digitalAgencyFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            We offer a wide range of services,
                                            including branding, graphic design,
                                            web development, digital marketing,
                                            social media strategy, content
                                            creation, UX/UI design, and
                                            advertising campaigns. Our team
                                            tailors each solution to fit the
                                            unique needs of your business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    How can a creative agency help my business
                                    grow?
                                    <span className="number d-inline-block rounded-circle text-center">
                                        02
                                    </span>
                                </button>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#digitalAgencyFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            A creative agency can help your
                                            business by crafting a strong,
                                            unique brand identity, improving
                                            your online presence, engaging your
                                            target audience, and driving
                                            measurable results through
                                            innovative marketing strategies. We
                                            focus on both creative and strategic
                                            solutions to ensure long-term
                                            growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    How long does it take to complete a project?
                                    <span className="number d-inline-block rounded-circle text-center">
                                        03
                                    </span>
                                </button>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#digitalAgencyFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            The duration of a project depends on
                                            its scope and complexity. A simple
                                            logo design might take a couple of
                                            weeks, while a full-scale website
                                            redesign could take several months.
                                            We work closely with you to provide
                                            a realistic timeline and keep you
                                            informed throughout the process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    What makes your agency different from
                                    others?
                                    <span className="number d-inline-block rounded-circle text-center">
                                        04
                                    </span>
                                </button>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#digitalAgencyFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            Our team combines creativity with
                                            strategy, ensuring that every
                                            project not only looks great but
                                            also drives business results. We
                                            focus on building long-term
                                            partnerships with our clients,
                                            offering personalized solutions, and
                                            staying ahead of industry trends to
                                            ensure your brand stands out.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    How do you determine the cost of a project?
                                    <span className="number d-inline-block rounded-circle text-center">
                                        05
                                    </span>
                                </button>
                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#digitalAgencyFaqAccordion"
                                >
                                    <div className="accordion-body">
                                        <p>
                                            The cost of a project depends on
                                            factors like the complexity of the
                                            work, the resources required, and
                                            the timeline. We provide detailed
                                            quotes after understanding your
                                            goals and project requirements. We
                                            ensure transparency and work with
                                            you to create a budget that fits
                                            your needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End FAQ Area */}
                {/* Start Footer Area */}
                <footer className="digital-agency-footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-lg-7 col-md-6">
                                <div className="footer-left-side">
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
                                    <div className="d-md-flex align-items-center">
                                        <h2 className="mb-0 fw-normal">
                                            Collaborate with us
                                        </h2>
                                        <a
                                            href="contact.html"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                            data-cue="slideInUp"
                                        >
                                            <img
                                                src="assets/images/circle-text.svg"
                                                alt="circle-text"
                                            />
                                            <img
                                                src="assets/images/icons/big-right-top-arrow.svg"
                                                alt="right-top-arrow"
                                            />
                                        </a>
                                    </div>
                                    <span className="location fw-medium d-block">
                                        Parker Avenue, Kingsley Road, New York
                                    </span>
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
                                                <i className="ri-arrow-right-line" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-lg-5 col-md-6">
                                <div className="footer-right-side">
                                    <div className="custom-links row">
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
                                                    <a href="faq.html">FAQ</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">
                                                        Contact
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="book-a-call.html">
                                                        Book a call
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">More</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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
                    <div className="copyright-area text-center">
                        <div className="container">
                            <p>
                                © 2025{" "}
                                <a href="https://nsatheme.com/" target="_blank">
                                    NsaTheme
                                </a>
                                . All rights reserved.
                            </p>
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
                {/* LTR / RTL */}
                <button
                    id="toggleBootstrapDirection"
                    className="ltr-rtl-btn border-0 position-fixed d-inline-block text-uppercase fw-semibold"
                >
                    <span className="d-block">LTR / RTL</span>
                </button>
                {/* End LTR / RTL */}
                {/* Link of JS files */}
            </div>
        </div>
    );
}
