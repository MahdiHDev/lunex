import BackToTop from "@/components/common/BackToTop";
import GoTop from "@/components/common/GoTop";
import ScrambleText from "@/components/common/ScrambleText";
import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import PartnersSllider from "@/components/index3/PartnerSlider";
import CyberTestimonial from "@/components/index9/CyberTestimonial";
import CyberVideoModal from "@/components/index9/CyberVideoModal";
import FunfactsSection from "@/components/index9/FunfactsSection";
import ProjectList from "@/components/index9/ProjectList";
import Navbar9 from "@/components/navbars/Navbar9";
import Image from "next/image";
import Link from "next/link";

import banner4 from "public/assets/images/banners/banner4.jpg";
import blog21 from "public/assets/images/blogs/blog21.jpg";
import blog22 from "public/assets/images/blogs/blog22.jpg";
import blog23 from "public/assets/images/blogs/blog23.jpg";
import like from "public/assets/images/icons/like.svg";
import mapMarker from "public/assets/images/icons/map-marker.svg";
import star from "public/assets/images/icons/star.svg";
import whiteRightTopArrow from "public/assets/images/icons/white-right-top-arrow.svg";
import border3 from "public/assets/images/shapes/border3.svg";
import shape5 from "public/assets/images/shapes/shape5.svg";
import user1 from "public/assets/images/users/user1.jpg";
import user6 from "public/assets/images/users/user6.jpg";
import user7 from "public/assets/images/users/user7.jpg";
import user8 from "public/assets/images/users/user8.jpg";
import user9 from "public/assets/images/users/user9.jpg";
import video4 from "public/assets/images/videos/video4.jpg";

const page = () => {
    return (
        <div>
            <div>
                <ScrambleText />
                {/* Start Navbar Area */}
                <Navbar9 />
                {/* End Navbar Area */}
                {/* Start Cyber Security Agency Banner Area */}
                <div className="digital-agency-banner-area pb-150">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <SlideInUp selector="img, p">
                                    <div
                                        className="digital-agency-banner-image position-relative style-two"
                                        data-cues="slideInUp"
                                        data-group="digitalAgencyBannerImage"
                                    >
                                        <Image
                                            src={banner4}
                                            alt="banner-image"
                                        />
                                        <p>
                                            We safeguard your business in the
                                            digital realm by combining advanced
                                            security strategies, cutting-edge
                                            technology, and tailored solutions
                                            to protect assets, enhance trust,
                                            and ensure your brand thrives in a
                                            secure online environment.
                                        </p>
                                    </div>
                                </SlideInUp>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <SlideInUp selector=".sub-title, h1, .ratings, d-block, .users_wrapper">
                                    <div
                                        className="digital-agency-banner-content"
                                        data-cues="slideInUp"
                                        data-group="digitalAgencyBannerContent"
                                    >
                                        <span className="sub-title d-block position-relative">
                                            Cyber safety, always on
                                        </span>
                                        <h1>Guarding your digital future</h1>
                                        <div className="ratings">
                                            <div className="d-flex align-items-center">
                                                <Image src={star} alt="star" />
                                                <Image src={star} alt="star" />
                                                <Image src={star} alt="star" />
                                                <Image src={star} alt="star" />
                                                <Image src={star} alt="star" />
                                            </div>
                                            <span className="d-block">
                                                Trusted by 199+ clients
                                                worldwide
                                            </span>
                                        </div>
                                        <div className="users_wrapper">
                                            <div className="users d-flex align-items-center">
                                                <Image
                                                    src={user9}
                                                    className="rounded-circle"
                                                    alt="user"
                                                />
                                                <Image
                                                    src={user8}
                                                    className="rounded-circle"
                                                    alt="user"
                                                />
                                                <Image
                                                    src={user7}
                                                    className="rounded-circle"
                                                    alt="user"
                                                />
                                                <Image
                                                    src={user6}
                                                    className="rounded-circle"
                                                    alt="user"
                                                />
                                                <span className="d-inline-block">
                                                    You
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SlideInUp>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Cyber Security Agency Banner Area */}
                {/* Start Funfacts Area */}
                <FunfactsSection />
                {/* End Funfacts Area */}
                {/* Start Brief Area */}
                <div className="brief-area pb-150">
                    <div className="container">
                        <div className="brief-content mw-100 m-0">
                            <p className="mw-100">
                                &quot;We specialize in delivering innovative
                                cybersecurity solutions that blend strategic
                                protection with advanced technology. Our expert
                                team is dedicated to safeguarding your business
                                from evolving digital threats while ensuring
                                compliance and resilience. By building trust and
                                reinforcing your digital infrastructure, we help
                                drive sustainable growth and protect your brand
                                reputation. Through tailored, impactful
                                strategies, we empower you to confidently
                                navigate the complex cyber landscape and focus
                                on what matters most—your success.&quot; 🔐
                            </p>
                        </div>
                    </div>
                </div>
                {/* End Brief Area */}
                {/* Start Video Area */}
                <div className="video-area bg-color ptb-150">
                    <div className="container">
                        <SlideInUp selector=".video-content">
                            <div
                                className="video-content position-relative z-1 text-center"
                                data-cues="slideInUp"
                            >
                                <h2 className="fw-normal mx-auto">
                                    We see security as an ongoing journey,{" "}
                                    <Image src={video4} alt="image" />{" "}
                                    <span>not just a one-time solution.</span>
                                </h2>
                                <CyberVideoModal />
                                <div className="shape5">
                                    <Image src={shape5} alt="shape5" />
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Video Area */}
                {/* Start Services Area */}
                <div className="services-area bg-color pb-125">
                    <div className="container">
                        <div className="creative-agency-section-title">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-12">
                                    <div className="left-side">
                                        <TextAnimation className="text-animation">
                                            Our security <span>offerings</span>
                                        </TextAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="right-side">
                                        <p>
                                            Advanced cybersecurity solutions to
                                            safeguard your digital assets and
                                            ensure business resilience.
                                        </p>
                                        <Link
                                            href="/services"
                                            className="default-btn"
                                        >
                                            All Services
                                            <i className="ri-arrow-right-line" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SlideInUp selector=".single-service-item" individual>
                            <div className="row" data-cues="slideInUp">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-service-item">
                                        <Link
                                            href="/service-single"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                        >
                                            <i className="ri-arrow-right-up-line" />
                                        </Link>
                                        <h3 className="fw-normal">
                                            <Link href="/service-single">
                                                Network security
                                            </Link>
                                        </h3>
                                        <p>
                                            Protects your network from
                                            unauthorized access, malware, and
                                            cyber threats.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-service-item">
                                        <Link
                                            href="/service-single"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                        >
                                            <i className="ri-arrow-right-up-line" />
                                        </Link>
                                        <h3 className="fw-normal">
                                            <Link href="/service-single">
                                                Threat response
                                            </Link>
                                        </h3>
                                        <p>
                                            Monitors, detects, and acts fast to
                                            stop potential security breaches.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-service-item">
                                        <Link
                                            href="/service-single"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                        >
                                            <i className="ri-arrow-right-up-line" />
                                        </Link>
                                        <h3 className="fw-normal">
                                            <Link href="/service-single">
                                                Data protection
                                            </Link>
                                        </h3>
                                        <p>
                                            Secures sensitive information
                                            against leaks, theft, and
                                            corruption.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-service-item">
                                        <Link
                                            href="/service-single"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                        >
                                            <i className="ri-arrow-right-up-line" />
                                        </Link>
                                        <h3 className="fw-normal">
                                            <Link href="/service-single">
                                                Vulnerability testing
                                            </Link>
                                        </h3>
                                        <p>
                                            Finds and fixes system flaws before
                                            hackers can exploit them.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-service-item">
                                        <Link
                                            href="/service-single"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                        >
                                            <i className="ri-arrow-right-up-line" />
                                        </Link>
                                        <h3 className="fw-normal">
                                            <Link href="/service-single">
                                                Incident recovery
                                            </Link>
                                        </h3>
                                        <p>
                                            Restores systems, data, and
                                            operations after a cyber attack.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-service-item">
                                        <Link
                                            href="/service-single"
                                            className="link-btn d-inline-block rounded-circle text-center"
                                        >
                                            <i className="ri-arrow-right-up-line" />
                                        </Link>
                                        <h3 className="fw-normal">
                                            <Link href="/service-single">
                                                Security training
                                            </Link>
                                        </h3>
                                        <p>
                                            Educates teams to recognize and
                                            prevent cyber risks effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Services Area */}
                {/* Start Boost Area */}
                <div className="boost-area ptb-150">
                    <div className="container">
                        <div className="boost-content text-center position-relative">
                            <TextAnimation className="fw-normal mx-auto position-relative text-animation">
                                Effortlessly protect your valuable digital
                                assets
                                <Image src={border3} alt="border" />
                            </TextAnimation>
                            <p className="mx-auto">
                                Effortlessly strengthen your digital defenses
                                with our expert cybersecurity solutions. We
                                protect your systems from threats, ensure
                                continuous monitoring, and safeguard your data,
                                helping you maintain trust, compliance, and
                                long-term business resilience.
                            </p>
                            <div className="icons">
                                <div className="rounded-circle text-center">
                                    <i className="ri-instagram-line" />
                                </div>
                                <div className="rounded-circle text-center">
                                    <i className="ri-at-line" />
                                </div>
                                <div className="rounded-circle text-center">
                                    <Image src={like} alt="like" />
                                </div>
                                <div className="rounded-circle text-center">
                                    <i className="ri-twitter-x-line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Boost Area */}
                {/* Start Projects Area */}
                <div className="projects-area pb-150">
                    <div className="container">
                        <div className="dev-agency-section-title">
                            <div className="row align-items-end">
                                <div className="col-lg-7 col-md-12">
                                    <div className="left-side">
                                        <TextAnimation className="text-animation">
                                            Our security <span>projects</span>
                                        </TextAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="right-side">
                                        <p>
                                            A glimpse into our expertise—explore
                                            projects that showcase our
                                            commitment to securing and
                                            innovating the digital world.
                                        </p>
                                        <Link
                                            href="/works"
                                            className="default-btn style-two"
                                        >
                                            All Projects
                                            <i className="ri-arrow-right-up-line" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProjectList />
                    </div>
                </div>
                {/* End Projects Area */}
                {/* Start Testimonials Area */}
                <CyberTestimonial />
                {/* End Testimonials Area */}
                {/* Start Blog Area */}
                <div className="blog-area ptb-150">
                    <div className="container">
                        <div className="marketing-agency-section-title position-relative z-1 text-center mx-auto">
                            <span className="sub-title d-inline-block text-uppercase">
                                Insights
                            </span>
                            <TextAnimation className="fw-normal text-animation">
                                Explore our articles
                            </TextAnimation>
                        </div>
                        <SlideInUp selector=".single-blog-item">
                            <div
                                className="row justify-content-center"
                                data-cues="slideInUp"
                            >
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-blog-item">
                                        <Link
                                            href="/blog-single"
                                            className="image d-block"
                                        >
                                            <Image
                                                src={blog21}
                                                alt="blog-image"
                                            />
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title d-block">
                                                Branding
                                            </span>
                                            <h3>
                                                <Link href="/blog-single">
                                                    The power of trust-building
                                                    in cybersecurity
                                                </Link>
                                            </h3>
                                            <Link
                                                href="/blog-single"
                                                className="link-btn d-flex align-items-center justify-content-between"
                                            >
                                                Read More{" "}
                                                <i className="ri-arrow-right-line" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-blog-item">
                                        <Link
                                            href="/blog-single"
                                            className="image d-block"
                                        >
                                            <Image
                                                src={blog22}
                                                alt="blog-image"
                                            />
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title d-block">
                                                Design
                                            </span>
                                            <h3>
                                                <Link href="/blog-single">
                                                    Proactive strategies that
                                                    prevent cyber threats
                                                </Link>
                                            </h3>
                                            <Link
                                                href="/blog-single"
                                                className="link-btn d-flex align-items-center justify-content-between"
                                            >
                                                Read More{" "}
                                                <i className="ri-arrow-right-line" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-blog-item">
                                        <Link
                                            href="/blog-single"
                                            className="image d-block"
                                        >
                                            <Image
                                                src={blog23}
                                                alt="blog-image"
                                            />
                                        </Link>
                                        <div className="content">
                                            <span className="sub-title d-block">
                                                Development
                                            </span>
                                            <h3>
                                                <Link href="blog-single">
                                                    User-friendly security to
                                                    build client confidence
                                                </Link>
                                            </h3>
                                            <Link
                                                href="blog-single"
                                                className="link-btn d-flex align-items-center justify-content-between"
                                            >
                                                Read More{" "}
                                                <i className="ri-arrow-right-line" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                        <div className="view-articles-btn text-center text-animation">
                            <Link href="/blog" className="default-btn">
                                More Articles
                                <i className="ri-arrow-right-line" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* End Blog Area */}
                {/* Start Partners Area */}
                <div className="partners-area pb-150">
                    <div className="container">
                        <div className="marketing-agency-section-title position-relative z-1 text-center mx-auto">
                            <span className="sub-title d-inline-block mb-0">
                                Our trusted partners
                            </span>
                        </div>
                    </div>
                    {/* <div className="container-fluid">
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
                    </div> */}
                    <PartnersSllider />
                </div>
                {/* End Partners Area */}
                {/* Start Footer Area */}
                <footer className="creative-agency-footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="footer-left-side position-relative">
                                    <h2 className="mb-0">
                                        Collaborate with
                                        <Image
                                            src={user1}
                                            className="rounded-circle mx-2 mx-lg-4"
                                            alt="user-image"
                                        />
                                        <span>us</span>
                                    </h2>
                                    <SlideInUp
                                        selector=".link-btn"
                                        individual
                                        delay={0}
                                    >
                                        <Link
                                            href="/contact"
                                            className="link-btn menu_link text-center d-inline-block rounded-circle"
                                            data-cue="slideInUp"
                                        >
                                            <Image
                                                src={whiteRightTopArrow}
                                                alt="right-top-arrow"
                                            />
                                            <span className="menu_link-text">
                                                Let&apos;s Chat
                                            </span>
                                        </Link>
                                    </SlideInUp>
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
                                    <div className="socials d-flex gap-1">
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
                                                    <Link href="/services">
                                                        Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/works">
                                                        Works
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/careers">
                                                        Careers
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog">
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about">
                                                        About
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <h3>Useful links</h3>
                                            <ul className="ps-0 mb-0 list-unstyled">
                                                <li>
                                                    <Link href="/pricing">
                                                        Pricing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/faq">FAQ</Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">
                                                        Contact
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/error">
                                                        404 error
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="#">More</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="location">
                                        <div className="position-relative">
                                            <Image
                                                src={mapMarker}
                                                alt="map-marker-icon"
                                            />
                                            <h3>The Empire State</h3>
                                            <span className="d-block">
                                                Parker Avenue, Kingsley Road,
                                                New York
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
                            <GoTop />
                        </div>
                    </div>
                </footer>

                {/* End Footer Area */}
                {/* Back to Top */}
                <BackToTop />
                {/* End Back to Top */}
            </div>
        </div>
    );
};

export default page;
