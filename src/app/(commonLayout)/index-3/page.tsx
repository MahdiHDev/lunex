import HeroReveal from "@/components/common/HeroReveal";
import ScrambleText from "@/components/common/ScrambleText";
import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import TextAnimation2 from "@/components/common/TextAnimation2";
import ZoomIn from "@/components/common/ZoomIn";
import FeedbackSlider from "@/components/index3/FeedbackSlider";
import PartnersSllider from "@/components/index3/PartnerSlider";
import ProjectsArea from "@/components/index3/ProjectArea";
import Navbar3 from "@/components/navbars/Navbar3";
import Image from "next/image";
import Link from "next/link";

import about1 from "public/assets/images/abouts/about1.jpg";
import elements from "public/assets/images/abouts/element.svg";
import star from "public/assets/images/abouts/star.png";
import banner from "public/assets/images/banners/banner3.jpg";
import appDev from "public/assets/images/icons/app-dev.svg";
import ecommerceSolution from "public/assets/images/icons/ecommerce-solutions.svg";
import maintananceSupport from "public/assets/images/icons/maintenance-support.svg";
import menu from "public/assets/images/icons/menu.svg";
import rightTopArrow from "public/assets/images/icons/right-top-arrow.svg";
import webDev from "public/assets/images/icons/web-dev.svg";
import whiteRightTopArrow from "public/assets/images/icons/white-right-top-arrow.svg";
import logo from "public/assets/images/logo.svg";
import border1 from "public/assets/images/shapes/border1.svg";
import border2 from "public/assets/images/shapes/border2.svg";
import logoWhite from "public/assets/images/white-logo.svg";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            <ScrambleText />
            <HeroReveal />
            {/* Sidemenu Area */}
            <div className="sidemenu-area d-none d-lg-block">
                <a href="index.html" className="logo d-inline-block">
                    <Image
                        src={logo}
                        alt="logo"
                        className="black-logo"
                        // width={150}
                        // height={50}
                    />
                    <Image
                        src={logoWhite}
                        className="d-none"
                        alt="logo"
                        // width={150}
                        // height={50}
                    />
                </a>
                <button className="navbar-toggler" type="button">
                    <Image src={menu} alt="menu" />
                </button>
                <div className="socials">
                    <a href="#" className="d-block" target="_blank">
                        <i className="ri-facebook-circle-fill" />
                    </a>
                    <a href="#" className="d-block" target="_blank">
                        <i className="ri-instagram-line" />
                    </a>
                    <a href="#" className="d-block" target="_blank">
                        <i className="ri-threads-line" />
                    </a>
                    <a href="#" className="d-block" target="_blank">
                        <i className="ri-twitter-x-line" />
                    </a>
                    <a href="#" className="d-block" target="_blank">
                        <i className="ri-youtube-fill" />
                    </a>
                </div>
            </div>
            {/* End Sidemenu Area */}
            {/* Start Navbar Area */}
            <Navbar3 />
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
                                                                    className="accordion-link fw-semibold text-decoration-none"
                                                                    href="index-2.html"
                                                                >
                                                                    Digital
                                                                    Agency
                                                                </a>
                                                            </div>
                                                            <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                <a
                                                                    className="accordion-link fw-semibold text-decoration-none active"
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
                                                                    UI/UX Design
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
                                                                    SEO Agency
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
                                                                    Work Single
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
                                                                    Book A Call
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
                                                                    My Account
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
                                                                    Terms &amp;
                                                                    Conditions
                                                                </a>
                                                            </div>
                                                            <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                <a
                                                                    href="error.html"
                                                                    className="accordion-link fw-semibold text-decoration-none"
                                                                >
                                                                    404 Error
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
                                                                    Blog Single
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
                                                Parker Avenue, Kingsley Road,
                                                New York
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
            {/* Start Dev Agency Banner Area */}
            <div className="dev-agency-banner-area position-relative z-1">
                <div className="container">
                    <div className="dev-agency-banner-content">
                        <div className="h1 fw-normal">
                            <div className="one">
                                <span className="d-block">Create</span>
                            </div>
                            <div className="two position-relative">
                                <span className="d-block">transform</span>
                            </div>
                            <div className="three">
                                <span className="d-block">&amp; code</span>
                            </div>
                        </div>
                        <SlideInUp selector="p" individual>
                            <p data-cue="slideInUp">
                                We design, develop, and code innovative digital
                                solutions to bring ideas to life.
                            </p>
                        </SlideInUp>
                    </div>
                    <SlideInUp selector=".dev-agency-banner-text">
                        <div
                            className="dev-agency-banner-text"
                            data-cue="slideInUp"
                        >
                            <a
                                href="contact.html"
                                className="link-btn menu_link text-center d-inline-block rounded-circle"
                            >
                                <Image
                                    src="assets/images/icons/white-right-top-arrow.svg"
                                    alt="right-top-arrow"
                                    width={12}
                                    height={12}
                                />
                                <span className="menu_link-text">
                                    {`Let's`} Chat
                                </span>
                            </a>
                            <p>
                                We create and code impactful digital products
                                from concept to execution.
                            </p>
                        </div>
                    </SlideInUp>
                    <div className="shape4">
                        <Image src={banner} alt="banner3" />
                    </div>
                </div>
                <div className="border1">
                    <Image src={border1} alt="border1" />
                </div>
                <div className="border2">
                    <Image src={border2} alt="border2" />
                </div>
            </div>
            {/* End Dev Agency Banner Area */}
            {/* Start About Area */}
            <div className="about-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <TextAnimation2
                                as={"div"}
                                className="about-content text-animation"
                            >
                                <div className="text-animation-item">
                                    <Image
                                        src={elements}
                                        className="rotateme"
                                        alt="element-image"
                                        height={65}
                                        width={65}
                                    />
                                </div>
                                <p className="fw-medium text-animation-item">
                                    We combine creativity and technology to
                                    transform ideas into impactful digital
                                    solutions. Driven by innovation and a{" "}
                                    <Image src={star} alt="star" /> commitment
                                    to client satisfaction, we strive to exceed
                                    expectations and deliver exceptional
                                    results.
                                </p>
                            </TextAnimation2>
                            <SlideInUp selector=".about-btn">
                                <div className="about-btn" data-cue="slideInUp">
                                    <a
                                        href="contact.html"
                                        className="link-btn menu_link d-inline-block text-center position-relative rounded-circle"
                                    >
                                        <Image
                                            src={rightTopArrow}
                                            alt="right-top-arrow"
                                        />
                                        <Image
                                            src={whiteRightTopArrow}
                                            alt="white-right-top-arrow"
                                        />
                                        <span className="menu_link-text">
                                            Let&apos;s Chat
                                        </span>
                                    </a>
                                </div>
                            </SlideInUp>
                        </div>
                        <div className="col-lg-5">
                            <ZoomIn selector=".about-image">
                                <div className="about-image" data-cue="zoomIn">
                                    <Image src={about1} alt="about-image" />
                                    <div className="d-flex align-items-center">
                                        <span className="sub-title d-block">
                                            We rank in the top
                                        </span>
                                        <div className="number">5%</div>
                                    </div>
                                </div>
                            </ZoomIn>
                        </div>
                    </div>
                </div>
            </div>
            {/* End About Area */}
            {/* Start Services Area */}
            <div className="services-area ptb-150">
                <div className="container">
                    <div className="dev-agency-section-title">
                        <div className="row align-items-end">
                            <div className="col-lg-7 col-md-12">
                                <div className="left-side">
                                    <TextAnimation className="text-animation">
                                        Discover our <span>offerings</span>
                                    </TextAnimation>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="right-side">
                                    <Link
                                        href="services"
                                        className="default-btn style-two mt-0"
                                    >
                                        View Services
                                        <i className="ri-arrow-right-up-line" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SlideInUp
                        selector=".item"
                        individual
                        delay={0}
                        className="dev-services-list"
                        data-cues="slideInUp"
                    >
                        <div className="item position-relative">
                            <div className="icon">
                                <Image src={webDev} alt="icon" />
                            </div>
                            <h3>
                                <Link href="service-single">
                                    Brand strategy
                                </Link>
                            </h3>
                            <p>
                                We help define your brand’s identity and create
                                a roadmap for consistent growth, positioning,
                                and market presence.
                            </p>
                            <Link
                                href="service-single"
                                className="link-btn d-inline-block"
                            >
                                <i className="ri-arrow-right-line" />
                            </Link>
                        </div>
                        <div className="item position-relative">
                            <div className="icon">
                                <Image src={appDev} alt="icon" />
                            </div>
                            <h3>
                                <Link href="service-single">
                                    Creative design
                                </Link>
                            </h3>
                            <p>
                                From logos to websites, our creative design
                                solutions bring your brand to life with visually
                                stunning and user-centric designs.
                            </p>
                            <Link
                                href="service-single"
                                className="link-btn d-inline-block"
                            >
                                <i className="ri-arrow-right-line" />
                            </Link>
                        </div>
                        <div className="item position-relative">
                            <div className="icon">
                                <Image src={ecommerceSolution} alt="icon" />
                            </div>
                            <h3>
                                <Link href="service-single">
                                    Digital marketing
                                </Link>
                            </h3>
                            <p>
                                We craft tailored digital marketing strategies
                                that engage your audience, boost conversions,
                                &amp; build brand loyalty across multiple
                                platforms.
                            </p>
                            <Link
                                href="service-single"
                                className="link-btn d-inline-block"
                            >
                                <i className="ri-arrow-right-line" />
                            </Link>
                        </div>
                        <div className="item position-relative">
                            <div className="icon">
                                <Image src={maintananceSupport} alt="icon" />
                            </div>
                            <h3>
                                <Link href="service-single">
                                    Web development
                                </Link>
                            </h3>
                            <p>
                                Our expert web development team creates
                                high-performance websites &amp; applications
                                that enhance experience &amp; functionality.
                            </p>
                            <Link
                                href="service-single"
                                className="link-btn d-inline-block"
                            >
                                <i className="ri-arrow-right-line" />
                            </Link>
                        </div>
                    </SlideInUp>
                </div>
            </div>
            {/* End Services Area */}
            {/* Start Projects Area */}
            <ProjectsArea />
            {/* End Projects Area */}
            {/* Start Feedback Area */}
            <div className="feedback-area pb-150">
                <div className="container">
                    <div className="dev-agency-section-title">
                        <div className="row align-items-end">
                            <div className="col-xl-7 col-lg-9 col-md-12">
                                <div className="left-side">
                                    <span className="sub-title d-block">
                                        Valued clients
                                    </span>
                                    <h2 className="text-animation">
                                        Respected and valued clients
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Feedback Area */}
                <FeedbackSlider />
                {/* End Feedack Area */}
            </div>
            {/* End Feedback Area */}
            {/* Start Partners Area */}
            {/* <div className="partners-area pb-150">
                <div className="container-fluid">
                    <div className="partnersSwiperOne swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner1.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner2.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner3.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner4.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner5.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner6.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner1.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner2.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="partnersSwiperTwo swiper" dir="rtl">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner1.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner2.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner3.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner4.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner5.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner6.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner1.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="partner-item">
                                    <img
                                        src="assets/images/partners/partner2.svg"
                                        alt="partner-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <PartnersSllider />
            {/* End Partners Area */}
            {/* Start Blog Area */}
            <div className="blog-area pb-150">
                <div className="container">
                    <div className="dev-agency-section-title">
                        <div className="row align-items-end">
                            <div className="col-lg-7 col-md-12">
                                <div className="left-side">
                                    <h2 className="text-animation">
                                        Our recent <span>posts</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="right-side">
                                    <a
                                        href="blog.html"
                                        className="default-btn style-two mt-0"
                                    >
                                        View Posts
                                        <i className="ri-arrow-right-up-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dev-blogs-list" data-cues="slideInUp">
                        <div className="blog-item position-relative">
                            <div className="content position-relative">
                                <ul className="meta ps-0 list-unstyled">
                                    <li className="d-inline-block position-relative">
                                        Jan 2025
                                    </li>
                                    <li className="d-inline-block position-relative">
                                        10 PM
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-single.html">
                                        The power of storytelling in branding
                                    </a>
                                </h3>
                                <p>
                                    Storytelling in branding creates emotional
                                    connections, builds trust, and fosters
                                    customer loyalty through compelling
                                    narratives that engage audiences.
                                </p>
                            </div>
                            <a
                                href="blog-single.html"
                                className="image d-block"
                            >
                                <img
                                    src="assets/images/blogs/blog7.jpg"
                                    alt="blog-image"
                                />
                            </a>
                        </div>
                        <div className="blog-item position-relative">
                            <div className="content position-relative">
                                <ul className="meta ps-0 list-unstyled">
                                    <li className="d-inline-block position-relative">
                                        Feb 2025
                                    </li>
                                    <li className="d-inline-block position-relative">
                                        11 AM
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-single.html">
                                        Creative campaigns that inspire action
                                    </a>
                                </h3>
                                <p>
                                    Crafting innovative campaigns that drive
                                    engagement and inspire meaningful action,
                                    turning ideas into impactful results.
                                </p>
                            </div>
                            <a
                                href="blog-single.html"
                                className="image d-block"
                            >
                                <img
                                    src="assets/images/blogs/blog8.jpg"
                                    alt="blog-image"
                                />
                            </a>
                        </div>
                        <div className="blog-item position-relative">
                            <div className="content position-relative">
                                <ul className="meta ps-0 list-unstyled">
                                    <li className="d-inline-block position-relative">
                                        Mar 2025
                                    </li>
                                    <li className="d-inline-block position-relative">
                                        12 PM
                                    </li>
                                </ul>
                                <h3>
                                    <a href="blog-single.html">
                                        The importance of ux/ui in building
                                        customer trust
                                    </a>
                                </h3>
                                <p>
                                    Good UX/UI design enhances user experience,
                                    making websites and apps intuitive and easy
                                    to navigate, which builds trust, boosts
                                    customer satisfaction, and encourages
                                    long-term engagement.
                                </p>
                            </div>
                            <a
                                href="blog-single.html"
                                className="image d-block"
                            >
                                <img
                                    src="assets/images/blogs/blog9.jpg"
                                    alt="blog-image"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Area */}
            {/* Start Transform Area */}
            <div className="transform-area">
                <div className="container">
                    <div className="transform-content">
                        <h2 className="text-animation">
                            Bring your vision to life with simple, effective
                            solutions
                        </h2>
                        <p>
                            Discover our collection of diverse projects that
                            showcase our expertise and commitment. From elegant
                            designs to advanced functionalities, our work
                            highlights creativity and precision.
                        </p>
                    </div>
                    <div
                        className="transform-boxes mx-auto position-relative"
                        data-cues="slideInUp"
                    >
                        <img
                            src="assets/images/shapes/border.svg"
                            className="border-image"
                            alt="border-image"
                        />
                        <div className="box1">
                            <h3 className="fw-normal">Design perfection</h3>
                            <p>
                                Browse through our collection of varied projects
                                that showcase our commitment and expertise.
                            </p>
                        </div>
                        <div className="box2" />
                        <div className="box3" />
                    </div>
                </div>
            </div>
            {/* End Transform Area */}
            {/* Start FAQ Area */}
            <div className="faq-area ptb-150">
                <div className="container">
                    <div className="dev-agency-section-title">
                        <div className="row align-items-end">
                            <div className="col-lg-7 col-md-12">
                                <div className="left-side">
                                    <span className="sub-title d-block">
                                        Need help?
                                    </span>
                                    <h2 className="text-animation">
                                        Questions we get asked
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="right-side">
                                    <a
                                        href="faq.html"
                                        className="default-btn style-two"
                                    >
                                        View FAQ
                                        <i className="ri-arrow-right-up-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="dev-agency-faq-accordion accordion"
                        id="devAgencyFaqAccordion"
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
                                <span className="number d-inline-block rounded-circle text-center">
                                    01
                                </span>
                                What services do you offer as a creative agency?
                            </button>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#devAgencyFaqAccordion"
                            >
                                <div className="accordion-body">
                                    <p>
                                        We offer a wide range of services,
                                        including branding, graphic design, web
                                        development, digital marketing, social
                                        media strategy, content creation, UX/UI
                                        design, and advertising campaigns. Our
                                        team tailors each solution to fit the
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
                                <span className="number d-inline-block rounded-circle text-center">
                                    02
                                </span>
                                How can a creative agency help my business grow?
                            </button>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#devAgencyFaqAccordion"
                            >
                                <div className="accordion-body">
                                    <p>
                                        A creative agency can help your business
                                        by crafting a strong, unique brand
                                        identity, improving your online
                                        presence, engaging your target audience,
                                        and driving measurable results through
                                        innovative marketing strategies. We
                                        focus on both creative and strategic
                                        solutions to ensure long-term growth.
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
                                <span className="number d-inline-block rounded-circle text-center">
                                    03
                                </span>
                                How long does it take to complete a project?
                            </button>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#devAgencyFaqAccordion"
                            >
                                <div className="accordion-body">
                                    <p>
                                        The duration of a project depends on its
                                        scope and complexity. A simple logo
                                        design might take a couple of weeks,
                                        while a full-scale website redesign
                                        could take several months. We work
                                        closely with you to provide a realistic
                                        timeline and keep you informed
                                        throughout the process.
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
                                <span className="number d-inline-block rounded-circle text-center">
                                    04
                                </span>
                                What makes your agency different from others?
                            </button>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                data-bs-parent="#devAgencyFaqAccordion"
                            >
                                <div className="accordion-body">
                                    <p>
                                        Our team combines creativity with
                                        strategy, ensuring that every project
                                        not only looks great but also drives
                                        business results. We focus on building
                                        long-term partnerships with our clients,
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
                                <span className="number d-inline-block rounded-circle text-center">
                                    05
                                </span>
                                How do you determine the cost of a project?
                            </button>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                data-bs-parent="#devAgencyFaqAccordion"
                            >
                                <div className="accordion-body">
                                    <p>
                                        The cost of a project depends on factors
                                        like the complexity of the work, the
                                        resources required, and the timeline. We
                                        provide detailed quotes after
                                        understanding your goals and project
                                        requirements. We ensure transparency and
                                        work with you to create a budget that
                                        fits your needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End FAQ Area */}
            {/* Start Let's Talk Area */}
            <div className="lets-talk-area pb-150">
                <div className="container">
                    <div className="lets-talk-content text-center">
                        <h2 className="text-animation d-flex align-items-center justify-content-center">
                            <span>Let's</span> do this!
                        </h2>
                        <a
                            href="contact.html"
                            className="link-btn menu_link d-inline-block text-center position-relative rounded-circle"
                        >
                            <img
                                src="assets/images/icons/right-top-arrow.svg"
                                alt="right-top-arrow"
                            />
                            <img
                                src="assets/images/icons/white-right-top-arrow.svg"
                                alt="white-right-top-arrow"
                            />
                            <span className="menu_link-text">Let's Chat</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* End Let's Talk Area */}
            {/* Start Footer Area */}
            <footer className="dev-agency-footer-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 order-1 order-lg-1">
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
                                <a
                                    href="tel:+1800987-6543"
                                    className="number d-inline-block"
                                >
                                    +1 (800) 987-6543
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 order-3 order-lg-2">
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
                        <div className="col-lg-4 col-sm-6 order-2 order-lg-3">
                            <div className="single-footer-widget">
                                <h3>Subscribe for updates</h3>
                                <form className="newsletter-form">
                                    <input
                                        type="email"
                                        placeholder="Your email here"
                                        className="form-control bg-transparent rounded-0 shadow-none"
                                        name="email"
                                        required
                                        autoComplete="off"
                                    />
                                    <button type="submit">
                                        Subscribe
                                        <i className="ri-arrow-right-up-line" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area text-center">
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
                <img src="assets/images/icons/up-arrow.svg" alt="up-arrow" />
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
    );
};

export default page;
