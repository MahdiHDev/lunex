import BodyClassManager from "@/components/common/BodyClassManager";
import CounterNumber from "@/components/common/CounterNumber";
import SlideInDown from "@/components/common/SlideInDown";
import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import FeaturedWorksSection from "@/components/index8/FeaturedWorksSection";
import PartnersSection from "@/components/index8/PartnersSection";
import ReviewsSection from "@/components/index8/ReviewsSection";
import TopButton from "@/components/index8/TopButton";
import VideoBox from "@/components/index8/VideoBox";
import Navbar8 from "@/components/navbars/Navbar8";
import Image from "next/image";
import Link from "next/link";

import heroBanner6 from "public/assets/images/banners/hero_banner6.jpg";
import blog7 from "public/assets/images/blogs-two/blog7.jpg";
import blog8 from "public/assets/images/blogs-two/blog8.jpg";
import blog9 from "public/assets/images/blogs-two/blog9.jpg";
import leftDownArrow from "public/assets/images/icons/left_down_arrow.svg";
import rightDownArrow from "public/assets/images/icons/right_down_arrow.svg";
import object4 from "public/assets/images/objects/object4.png";
import object5 from "public/assets/images/objects/object5.png";
import object6 from "public/assets/images/objects/object6.png";
import object8 from "public/assets/images/objects/object8.png";
import object9 from "public/assets/images/objects/object9.png";
import teamMember from "public/assets/images/team_members.png";
import whiteLogo from "public/assets/images/white-logo.svg";

const page = () => {
    return (
        <>
            <BodyClassManager className="bg-dark" />
            <div>
                {/* Start Navbar Area */}
                <Navbar8 />
                {/* End Navbar Area */}
                {/* Lunex Banner Area */}
                <div className="lunex_banner_area position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <div className="lunex_banner_content mx-auto text-center">
                            <SlideInDown selector=".sub_title">
                                <span
                                    className="sub_title d-block fw-medium text-uppercase"
                                    data-cue="slideInDown"
                                >
                                    Creative team
                                </span>
                            </SlideInDown>
                            <TextAnimation
                                as="h1"
                                className="text-uppercase fw-bold mb-0 text_animation"
                            >
                                We’re your marketing expert
                            </TextAnimation>
                        </div>
                        <SlideInUp selector=".lunex_banner_image, .lunex_banner_text">
                            <div
                                className="row align-items-center"
                                data-cues="slideInUp"
                                data-group="hero_banner_content"
                            >
                                <div className="col-md-4">
                                    <div className="lunex_banner_image text-center">
                                        <Image
                                            src={heroBanner6}
                                            alt="hero_banner6"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="lunex_banner_text">
                                        <p>
                                            We believe that the surest measure
                                            of success is when a client partners
                                            with us more than half our clients
                                            stay with us for.
                                        </p>
                                        <a
                                            href="contact.html"
                                            className="btn primary_btn style_three"
                                        >
                                            <span className="d-inline-block position-relative">
                                                Get in Touch{" "}
                                                <i className="ri-arrow-right-up-line" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                    <div className="object4">
                        <Image src={object4} alt="object4" />
                    </div>
                </div>
                {/* End Lunex Banner Area */}
                {/* About Us Area */}
                <div className="about_us_area ptb-150 position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <VideoBox />
                        <div className="section_title style_four position-relative justify-content-md-end">
                            <TextAnimation className="mb-0 text-uppercase fw-semibold order-md-2 text_animation">
                                About Lunex
                            </TextAnimation>
                            <Image
                                src={leftDownArrow}
                                className="order-md-1"
                                alt="left_down_arrow"
                            />
                        </div>
                        <SlideInUp selector=".about_text_content">
                            <div
                                className="about_text_content"
                                data-cue="slideInUp"
                            >
                                <p>
                                    We are a full-service digital agency that
                                    empowers businesses to achieve their online
                                    goals. We are passionate about helping our
                                    clients succeed in the ever-evolving digital
                                    landscape. Our mission is to provide our
                                    clients with high-quality, results-driven
                                    digital marketing solutions that help them
                                    grow their businesses and achieve their
                                    desired outcomes.
                                </p>
                                <p>
                                    Our vision is to be the leading digital
                                    agency in the industry, recognized for our
                                    innovative strategies, exceptional client
                                    service, and measurable results. We believe
                                    that every business has the potential to
                                    succeed online, and we are committed to
                                    helping our clients reach their full
                                    potential.
                                </p>
                                <div className="funafcts_list">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="number lh-1 fw-medium">
                                                <CounterNumber
                                                    as="span"
                                                    value={19}
                                                />
                                                +
                                            </div>
                                            <div className="title text-uppercase fw-medium">
                                                Featured Work
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="number lh-1 fw-medium">
                                                <CounterNumber
                                                    as="span"
                                                    value={350}
                                                />
                                                +
                                            </div>
                                            <div className="title text-uppercase fw-medium">
                                                Projected Completed
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="btn primary_btn style_three"
                                >
                                    <span className="d-inline-block position-relative">
                                        Get in Touch{" "}
                                        <i className="ri-arrow-right-up-line" />
                                    </span>
                                </Link>
                            </div>
                        </SlideInUp>
                    </div>
                    <div className="object5">
                        <Image src={object5} alt="object5" />
                    </div>
                    <div className="object6">
                        <Image src={object6} alt="object6" />
                    </div>
                </div>
                {/* End About Us Area */}
                {/* Services Area */}
                <div className="services_area">
                    <div className="container-fluid max_w_1560px">
                        <TextAnimation
                            as="div"
                            className="section_title style_four position-relative text_animation"
                        >
                            <h2 className="mb-0 text-uppercase fw-semibold">
                                Services
                            </h2>
                            <Image
                                src={rightDownArrow}
                                alt="right_down_arrow"
                            />
                        </TextAnimation>
                        <SlideInUp selector=".item">
                            <div
                                className="services_items_list"
                                data-cues="slideInUp"
                                data-group="services_items_list"
                            >
                                <div className="item position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <div className="number fw-semibold lh-1">
                                                (01)
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="mb-0 fw-semibold">
                                                <Link href="/service-single">
                                                    Product design
                                                </Link>
                                            </h3>
                                        </div>
                                        <div className="col-lg-3 text-lg-end">
                                            <Link
                                                href="/service-single"
                                                className="btn primary_btn style_three"
                                            >
                                                <span className="d-inline-block position-relative">
                                                    View Service{" "}
                                                    <i className="ri-arrow-right-up-line" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <div className="number fw-semibold lh-1">
                                                (02)
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="mb-0 fw-semibold">
                                                <Link href="/service-single">
                                                    Interaction design
                                                </Link>
                                            </h3>
                                        </div>
                                        <div className="col-lg-3 text-lg-end">
                                            <Link
                                                href="/service-single"
                                                className="btn primary_btn style_three"
                                            >
                                                <span className="d-inline-block position-relative">
                                                    View Service{" "}
                                                    <i className="ri-arrow-right-up-line" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <div className="number fw-semibold lh-1">
                                                (03)
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="mb-0 fw-semibold">
                                                <Link href="service-single">
                                                    Animation
                                                </Link>
                                            </h3>
                                        </div>
                                        <div className="col-lg-3 text-lg-end">
                                            <Link
                                                href="/service-single"
                                                className="btn primary_btn style_three"
                                            >
                                                <span className="d-inline-block position-relative">
                                                    View Service{" "}
                                                    <i className="ri-arrow-right-up-line" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <div className="number fw-semibold lh-1">
                                                (04)
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h3 className="mb-0 fw-semibold">
                                                <Link href="/service-single">
                                                    Brand Strategy
                                                </Link>
                                            </h3>
                                        </div>
                                        <div className="col-lg-3 text-lg-end">
                                            <Link
                                                href="/service-single"
                                                className="btn primary_btn style_three"
                                            >
                                                <span className="d-inline-block position-relative">
                                                    View Service{" "}
                                                    <i className="ri-arrow-right-up-line" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Services Area */}
                {/* Text Scroll Area */}
                <div className="text_scroll_area ptb-150 overflow-hidden">
                    <div className="container-fluid px-0">
                        <div className="scroll_text_marquee d-flex align-items-center justify-content-center">
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                        </div>
                        <div className="scroll_text_marquee d-flex align-items-center justify-content-center">
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                        </div>
                    </div>
                </div>
                {/* End Text Scroll Area */}
                {/* Featured Works Area */}
                <div className="featured_works_area">
                    <div className="container-fluid max_w_1560px">
                        <div className="section_title style_four position-relative justify-content-md-end">
                            <TextAnimation className="mb-0 text-uppercase fw-semibold order-md-2 text_animation">
                                Featured Work
                            </TextAnimation>
                            <Image
                                src={leftDownArrow}
                                className="order-md-1"
                                alt="left_down_arrow"
                            />
                        </div>
                    </div>
                    <FeaturedWorksSection />
                </div>
                {/* End Featured Works Area */}
                {/* Team Area */}
                <div className="team_area ptb-150">
                    <div className="container-fluid max_w_1560px">
                        <div className="section_title style_four position-relative">
                            <TextAnimation className="mb-0 text-uppercase fw-semibold text_animation">
                                Meet the team
                            </TextAnimation>
                            <Image
                                src={rightDownArrow}
                                alt="right_down_arrow"
                            />
                        </div>
                        <SlideInUp selector=".team_members_content">
                            <div
                                className="team_members_content text-center"
                                data-cue="slideInUp"
                            >
                                <Image src={teamMember} alt="team_members" />
                                <div className="content text-start d-md-flex align-items-center justify-content-between">
                                    <p className="mb-0">
                                        We are a full-service digital agency
                                        that empowers businesses to achieve
                                        their online goals. We are passionate
                                        about helping our clients succeed in the
                                        ever-evolving digital landscape. Our
                                        mission is to provide our clients with
                                        high-quality, results-driven digital
                                        marketing solutions that help them grow
                                        their businesses and achieve their
                                        desired outcomes
                                    </p>
                                    <a
                                        href="team.html"
                                        className="btn primary_btn style_three"
                                    >
                                        <span className="d-inline-block position-relative">
                                            Meet the Team{" "}
                                            <i className="ri-arrow-right-up-line" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Team Area */}
                {/* Funfacts Area */}
                <div className="funfacts_area_two pb-125">
                    <div className="container-fluid max_w_1560px">
                        <SlideInUp selector=".funfact_item">
                            <div
                                className="row"
                                data-cues="slideInUp"
                                data-group="funfacts_list"
                            >
                                <div className="col-sm-6">
                                    <div className="funfact_item">
                                        <div className="number lh-1 fw-black">
                                            <CounterNumber
                                                as="span"
                                                value={50}
                                            />
                                            +
                                        </div>
                                        <div className="title text-lg-end text-uppercase fw-semibold">
                                            Projects Completed
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="funfact_item">
                                        <div className="number lh-1 fw-black">
                                            <CounterNumber
                                                as="span"
                                                value={90}
                                            />
                                            +
                                        </div>
                                        <div className="title text-lg-end text-uppercase fw-semibold">
                                            CREATIVE MINDS
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="funfact_item">
                                        <div className="number lh-1 fw-black">
                                            <CounterNumber
                                                as="span"
                                                value={20}
                                            />
                                            +
                                        </div>
                                        <div className="title text-lg-end text-uppercase fw-semibold">
                                            YEARS OF EXPERIENCE
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="funfact_item">
                                        <div className="number lh-1 fw-black">
                                            <CounterNumber
                                                as="span"
                                                value={30}
                                            />
                                            +
                                        </div>
                                        <div className="title text-lg-end text-uppercase fw-semibold">
                                            AWWARDS &amp; RECOGNITION
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Funfacts Area */}
                {/* Reviews Area */}
                <ReviewsSection />
                {/* End Reviews Area */}
                {/* Clients Area */}
                <div className="clients_area ptb-150">
                    <div className="container-fluid max_w_1560px">
                        <span className="sub_title d-block text-uppercase fw-medium text_animation">
                            Our clients
                        </span>
                        <PartnersSection />
                    </div>
                </div>
                {/* End Clients Area */}
                {/* Text Scroll Area */}
                <div className="text_scroll_area overflow-hidden">
                    <div className="container-fluid px-0">
                        <div className="scroll_text_marquee d-flex align-items-center justify-content-center">
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                        </div>
                        <div className="scroll_text_marquee d-flex align-items-center justify-content-center">
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                IDEAS INTO REALITY
                            </h3>
                            <div className="bar" />
                            <h3 className="mb-0 text-uppercase fw-black lh-1">
                                HOW IT WORKS
                            </h3>
                            <div className="bar" />
                        </div>
                    </div>
                </div>
                {/* End Text Scroll Area */}
                {/* Blog Area */}
                <div className="blog_area pt-150 pb-125">
                    <div className="container-fluid max_w_1560px">
                        <div className="section_title style_four position-relative">
                            <TextAnimation className="mb-0 text-uppercase fw-semibold text_animation">
                                Thoughts &amp; insights
                            </TextAnimation>
                            <Image
                                src={rightDownArrow}
                                alt="right_down_arrow"
                            />
                        </div>
                        <SlideInUp selector=".single_blog_post">
                            <div
                                className="row justify-content-center"
                                data-cues="slideInUp"
                                data-group="blog_list"
                            >
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_blog_post">
                                        <div className="image position-relative overflow-hidden">
                                            <Image src={blog7} alt="blog7" />
                                            <Link
                                                href="/blog-single"
                                                className="details_link_btn d-flex align-items-center justify-content-center fw-medium rounded-circle"
                                            >
                                                View
                                            </Link>
                                        </div>
                                        <span className="category block text-uppercase fw-medium">
                                            Artificial intelligence
                                        </span>
                                        <h3 className="mb-0">
                                            <a href="blog-single.html">
                                                Optimized Design Sets the
                                                Foundation for Growth
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_blog_post">
                                        <div className="image position-relative overflow-hidden">
                                            <Image src={blog8} alt="blog8" />
                                            <Link
                                                href="/blog-single"
                                                className="details_link_btn d-flex align-items-center justify-content-center fw-medium rounded-circle"
                                            >
                                                View
                                            </Link>
                                        </div>
                                        <span className="category block text-uppercase fw-medium">
                                            Marketing
                                        </span>
                                        <h3 className="mb-0">
                                            <a href="blog-single.html">
                                                Intelligent Design Opens Doors
                                                to New Opportunities
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_blog_post">
                                        <div className="image position-relative overflow-hidden">
                                            <Image src={blog9} alt="blog9" />
                                            <Link
                                                href="/blog-single"
                                                className="details_link_btn d-flex align-items-center justify-content-center fw-medium rounded-circle"
                                            >
                                                View
                                            </Link>
                                        </div>
                                        <span className="category block text-uppercase fw-medium">
                                            Design
                                        </span>
                                        <h3 className="mb-0">
                                            <a href="blog-single.html">
                                                Transformative Design Drives
                                                Growth Potential
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                <div className="container-fluid max_w_1560px">
                    <div className="blog_border_bottom" />
                </div>
                {/* End Blog Area */}
                {/* Let's Talk Area */}
                <div className="lets_talk_area position-relative z-1 pt-150">
                    <div className="container-fluid max_w_1560px">
                        <div className="lets_talk_content text-center">
                            <TextAnimation className="text_animation">
                                Let’s Talk
                            </TextAnimation>
                            <SlideInUp selector="div" delay={0.5}>
                                <div>
                                    <Link
                                        href="/contact"
                                        className="details_link_btn menu_link"
                                        data-cue="slideInUp"
                                    >
                                        <span className="d-block">
                                            <i className="ri-arrow-right-up-line" />
                                            <span className="menu_link_text d-block fw-medium">
                                                Let’s Chat
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </SlideInUp>
                        </div>
                        <div className="lets_talk_newsletter_form mx-auto text-center">
                            <TextAnimation as="h3" className="text_animation">
                                Newsletter for updates
                            </TextAnimation>
                            <SlideInUp selector="form">
                                <form data-cue="slideInUp">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="button"
                                        className="btn primary_btn style_three"
                                    >
                                        <span className="d-inline-block position-relative">
                                            Subscribe{" "}
                                            <i className="ri-arrow-right-up-line" />
                                        </span>
                                    </button>
                                </form>
                            </SlideInUp>
                        </div>
                    </div>
                    <div className="object8">
                        <Image src={object8} alt="object8" />
                    </div>
                    <div className="object9">
                        <Image src={object9} alt="object9" />
                    </div>
                </div>
                {/* End Let's Talk Area */}
                {/* Footer Area */}
                <footer className="footer_area_two pt-150 position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <SlideInUp selector=".footer_inner_box">
                            <div
                                className="footer_inner_box style_two p-0 bg-transparent rounded-0"
                                data-cue="slideInUp"
                            >
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="footer_logo_widget">
                                            <a
                                                href="index.html"
                                                className="d-inline-block"
                                            >
                                                <Image
                                                    src={whiteLogo}
                                                    alt="logo"
                                                />
                                            </a>
                                            <p>
                                                Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem
                                                accusantium doloremque laudanti
                                                mtota rem aperiam, eaque ipsa
                                                quae ab illo inve ntore
                                                veritatis et quasi architec to.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="footer_widgets_list">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="footer_widget">
                                                        <h3 className="text-white">
                                                            Quick links
                                                        </h3>
                                                        <ul className="links p-0 mb-0 list-unstyled">
                                                            <li>
                                                                <a href="index.html">
                                                                    Home
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="about.html">
                                                                    About Us
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="blog.html">
                                                                    Blog
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="services.html">
                                                                    Services
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="contact.html">
                                                                    Contact Us
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="footer_widget">
                                                        <h3 className="text-white">
                                                            Utility Pages
                                                        </h3>
                                                        <ul className="links p-0 mb-0 list-unstyled">
                                                            <li>
                                                                <a href="privacy-policy.html">
                                                                    Privacy
                                                                    Policy
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="terms-conditions.html">
                                                                    Terms &amp;
                                                                    Conditions
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="privacy-policy.html">
                                                                    Cookie
                                                                    Policy
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="terms-conditions.html">
                                                                    Refund
                                                                    Policy
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="privacy-policy.html">
                                                                    Disclaimer
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="footer_widget">
                                                        <h3 className="text-white">
                                                            Contact Info
                                                        </h3>
                                                        <ul className="links p-0 mb-0 list-unstyled">
                                                            <li>
                                                                <a href="tel:+024(453)-5432">
                                                                    +024(453)-5432
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="contact.html">
                                                                    Reach Us
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="mailto:lunex@example.com">
                                                                    lunex@example.com
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                        <ul className="footer_socials style_two row p-0 mx-0 mb-0 list-unstyled">
                            <li className="col-md-3 px-0">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="d-flex align-items-center justify-content-between text-uppercase fw-medium"
                                >
                                    Instagram
                                    <i className="ri-arrow-right-up-line" />
                                </a>
                            </li>
                            <li className="col-md-3 px-0">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="d-flex align-items-center justify-content-between text-uppercase fw-medium"
                                >
                                    Facebook
                                    <i className="ri-arrow-right-up-line" />
                                </a>
                            </li>
                            <li className="col-md-3 px-0">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="d-flex align-items-center justify-content-between text-uppercase fw-medium"
                                >
                                    Twitter
                                    <i className="ri-arrow-right-up-line" />
                                </a>
                            </li>
                            <li className="col-md-3 px-0">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="d-flex align-items-center justify-content-between text-uppercase fw-medium"
                                >
                                    YouTube
                                    <i className="ri-arrow-right-up-line" />
                                </a>
                            </li>
                        </ul>
                        <TextAnimation
                            as="div"
                            className="footer_logo_text lh-1 fw-black text_animation"
                        >
                            Lunex.
                        </TextAnimation>
                        <div className="copyright_area_two style_two text-center">
                            <ul className="p-0 mb-0 list-unstyled">
                                <li className="d-inline-block position-relative">
                                    © Copyright{" "}
                                    <span
                                        className="fw-bold text-white"
                                        id="currentYear"
                                    />
                                </li>
                                <li className="d-inline-block position-relative">
                                    Designed by{" "}
                                    <span className="fw-bold">Lunex</span>
                                </li>
                                <li className="d-inline-block position-relative">
                                    Powered by{" "}
                                    <strong className="text-white">
                                        Lunex
                                    </strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                {/* End Footer Area */}
                {/* Back To Top */}
                <TopButton />
                {/* End Back To Top */}
            </div>
        </>
    );
};

export default page;
