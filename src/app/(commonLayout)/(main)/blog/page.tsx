import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import Image from "next/image";

import blog13 from "public/assets/images/blogs/blog13.jpg";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            {/* Start Blog Page Banner Area */}
            <div className="blog-page-banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="content">
                                <span className="sub-title d-block">
                                    Our blogs
                                </span>
                                <TextAnimation
                                    as="h1"
                                    className="text-animation"
                                >
                                    Digital <span>insights</span>
                                </TextAnimation>
                                <p>
                                    Stay ahead with our expert digital insights,
                                    offering the latest trends and strategies to
                                    help drive your success in the digital
                                    world.
                                </p>
                            </div>
                        </div>
                        <SlideInUp
                            selector=".image"
                            className="col-lg-7 col-md-12"
                        >
                            <div className="image" data-cue="slideInUp">
                                <a href="blog-single.html" className="d-block">
                                    <Image src={blog13} alt="blog-image" />
                                </a>
                                <div className="d-md-flex align-items-center justify-content-between">
                                    <h3 className="mb-0">
                                        <a href="blog-single.html">
                                            Essential digital tools for business
                                        </a>
                                    </h3>
                                    <a
                                        href="blog-single.html"
                                        className="link-btn d-flex align-items-center"
                                    >
                                        <i className="ri-arrow-right-up-line" />
                                        <span className="d-inline-block">
                                            Read More
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
            </div>
            {/* End Blog Page Banner Area */}
            {/* Start Blog Area */}
            <div className="blog-area ptb-150">
                <div className="container">
                    <SlideInUp selector=".main-blog-buttons">
                        <ul
                            className="main-blog-buttons text-center ps-0 list-unstyled"
                            data-cue="slideInUp"
                        >
                            <li className="d-inline-block">
                                <a href="blog.html" className="d-block active">
                                    All post
                                </a>
                            </li>
                            <li className="d-inline-block">
                                <a href="blog-growth.html" className="d-block">
                                    Growth
                                </a>
                            </li>
                            <li className="d-inline-block">
                                <a
                                    href="blog-technology.html"
                                    className="d-block"
                                >
                                    Technology
                                </a>
                            </li>
                            <li className="d-inline-block">
                                <a href="blog-social.html" className="d-block">
                                    Social
                                </a>
                            </li>
                            <li className="d-inline-block">
                                <a
                                    href="blog-branding.html"
                                    className="d-block"
                                >
                                    Branding
                                </a>
                            </li>
                        </ul>
                    </SlideInUp>
                    <SlideInUp
                        selector=".item"
                        individual
                        delay={0}
                        className="main-blogs-list"
                        data-cues="slideInUp"
                    >
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <a
                                            href="blog-single.html"
                                            className="d-block"
                                        >
                                            <img
                                                src="assets/images/blogs/blog14.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                        <div className="info d-flex align-items-center justify-content-between">
                                            <div className="date d-flex align-items-center">
                                                <a
                                                    href="blog-single.html"
                                                    className="comments d-block"
                                                >
                                                    02 comments
                                                </a>
                                                <span className="d-block">
                                                    21 Mar 2025
                                                </span>
                                            </div>
                                            <a
                                                href="blog-single.html"
                                                className="category d-inline-block"
                                            >
                                                Growth
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h2 className="fw-normal">
                                            <a href="blog-single.html">
                                                The power of storytelling in
                                                branding
                                            </a>
                                        </h2>
                                        <a
                                            href="blog-single.html"
                                            className="link-btn d-flex align-items-center"
                                        >
                                            <i className="ri-arrow-right-up-line" />
                                            <span className="d-inline-block">
                                                Read More
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h2 className="fw-normal">
                                            <a href="blog-single.html">
                                                Creative campaigns that inspire
                                                action
                                            </a>
                                        </h2>
                                        <a
                                            href="blog-single.html"
                                            className="link-btn d-flex align-items-center"
                                        >
                                            <i className="ri-arrow-right-up-line" />
                                            <span className="d-inline-block">
                                                Read More
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <a
                                            href="blog-single.html"
                                            className="d-block"
                                        >
                                            <img
                                                src="assets/images/blogs/blog15.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                        <div className="info d-flex align-items-center justify-content-between">
                                            <div className="date d-flex align-items-center">
                                                <a
                                                    href="blog-single.html"
                                                    className="comments d-block"
                                                >
                                                    01 comment
                                                </a>
                                                <span className="d-block">
                                                    20 Feb 2025
                                                </span>
                                            </div>
                                            <a
                                                href="blog-single.html"
                                                className="category d-inline-block"
                                            >
                                                Technology
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <a
                                            href="blog-single.html"
                                            className="d-block"
                                        >
                                            <img
                                                src="assets/images/blogs/blog16.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                        <div className="info d-flex align-items-center justify-content-between">
                                            <div className="date d-flex align-items-center">
                                                <a
                                                    href="blog-single.html"
                                                    className="comments d-block"
                                                >
                                                    03 comments
                                                </a>
                                                <span className="d-block">
                                                    15 Jan 2025
                                                </span>
                                            </div>
                                            <a
                                                href="blog-single.html"
                                                className="category d-inline-block"
                                            >
                                                Social
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h2 className="fw-normal">
                                            <a href="blog-single.html">
                                                The importance of ux/ui in
                                                building customer trust
                                            </a>
                                        </h2>
                                        <a
                                            href="blog-single.html"
                                            className="link-btn d-flex align-items-center"
                                        >
                                            <i className="ri-arrow-right-up-line" />
                                            <span className="d-inline-block">
                                                Read More
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h2 className="fw-normal">
                                            <a href="blog-single.html">
                                                Building a strong brand online
                                            </a>
                                        </h2>
                                        <a
                                            href="blog-single.html"
                                            className="link-btn d-flex align-items-center"
                                        >
                                            <i className="ri-arrow-right-up-line" />
                                            <span className="d-inline-block">
                                                Read More
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <a
                                            href="blog-single.html"
                                            className="d-block"
                                        >
                                            <img
                                                src="assets/images/blogs/blog17.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                        <div className="info d-flex align-items-center justify-content-between">
                                            <div className="date d-flex align-items-center">
                                                <a
                                                    href="blog-single.html"
                                                    className="comments d-block"
                                                >
                                                    01 comment
                                                </a>
                                                <span className="d-block">
                                                    20 Feb 2025
                                                </span>
                                            </div>
                                            <a
                                                href="blog-single.html"
                                                className="category d-inline-block"
                                            >
                                                Branding
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideInUp>
                    <nav
                        className="pagination-area d-flex align-items-center justify-content-center text-center"
                        data-cue="slideInUp"
                    >
                        <a
                            href="javascript:void(0);"
                            className="prev page-numbers"
                        >
                            <i className="ri-arrow-left-s-line" />
                        </a>
                        <a href="javascript:void(0);" className="page-numbers">
                            01
                        </a>
                        <span
                            className="page-numbers current"
                            aria-current="page"
                        >
                            02
                        </span>
                        <a href="javascript:void(0);" className="page-numbers">
                            03
                        </a>
                        <a href="javascript:void(0);" className="page-numbers">
                            04
                        </a>
                        <a href="javascript:void(0);" className="page-numbers">
                            05
                        </a>
                        <a
                            href="javascript:void(0);"
                            className="next page-numbers"
                        >
                            <i className="ri-arrow-right-s-line" />
                        </a>
                    </nav>
                </div>
            </div>
            {/* End Blog Area */}
            {/* Start Footer Area */}
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
                                        {`Let's Chat`}
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
                                                <a href="services.html">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="works.html">Works</a>
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
                                                <a href="about.html">About</a>
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
                                                <a href="error.html">
                                                    404 error
                                                </a>
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
                                            Parker Avenue, Kingsley Road, New
                                            York
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
            {/* End Footer Area */}
            {/* LTR / RTL */}
            <button
                id="toggleBootstrapDirection"
                className="ltr-rtl-btn border-0 position-fixed d-inline-block text-uppercase fw-semibold"
            >
                <span className="d-block">LTR / RTL</span>
            </button>
            {/* End LTR / RTL */}
        </div>
    );
};

export default page;
