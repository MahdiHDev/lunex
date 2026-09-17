import CounterNumber from "@/components/common/CounterNumber";
import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import TeamSection from "@/components/index7/TeamSection";
import TestimonialsSection from "@/components/index7/TestimonialsSection";
import WhyChooseUsModal from "@/components/index7/WhyChooseUsModal";
import Navbar7 from "@/components/navbars/Navbar7";
import Image from "next/image";
import Link from "next/link";

import about7 from "public/assets/images/abouts/about7.jpg";
import about8 from "public/assets/images/abouts/about8.jpg";
import author from "public/assets/images/banners/author.jpg";
import heroBanner2 from "public/assets/images/banners/hero_banner2.jpg";
import heroBanner3 from "public/assets/images/banners/hero_banner3.jpg";
import heroBanner4 from "public/assets/images/banners/hero_banner4.jpg";
import heroBanner5 from "public/assets/images/banners/hero_banner5.jpg";
import star from "public/assets/images/banners/star.svg";
import blur from "public/assets/images/blur.png";
import bolt from "public/assets/images/icons/bolt.svg";
import vector from "public/assets/images/icons/vector.svg";
import object3 from "public/assets/images/objects/object3.svg";
import portfolio1 from "public/assets/images/portfolio/portfolio1.jpg";
import portfolio2 from "public/assets/images/portfolio/portfolio2.jpg";
import portfolio3 from "public/assets/images/portfolio/portfolio3.jpg";
import portfolio4 from "public/assets/images/portfolio/portfolio4.jpg";
import portfolio5 from "public/assets/images/portfolio/portfolio5.jpg";

const page = () => {
    return (
        <div>
            <div>
                {/* Start Navbar Area */}
                <Navbar7 />
                {/* End Navbar Area */}

                {/* Banner Wrapper Area */}
                <div className="banner_wrapper_area pb-150 position-relative z-1 overflow-hidden">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="banner_wrapper_content">
                                    <TextAnimation
                                        as="h1"
                                        className="text-uppercase fw-black text_animation"
                                    >
                                        We Think-&amp;{" "}
                                        <Image
                                            src={heroBanner2}
                                            alt="hero_banner2"
                                        />{" "}
                                        Solve
                                    </TextAnimation>

                                    <SlideInUp selector="div">
                                        <div>
                                            <Link
                                                href="/pricing"
                                                className="btn primary_btn style_two"
                                                data-cue="slideInUp"
                                            >
                                                <span className="d-inline-block position-relative">
                                                    Get a Free SEO Audit{" "}
                                                    <i className="ri-arrow-right-up-line" />
                                                </span>
                                            </Link>
                                        </div>
                                    </SlideInUp>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="banner_wrapper_image position-relative">
                                    <Image src={star} alt="star" />
                                    <div className="scroll_down">
                                        <span className="d-inline-block fw-medium position-relative">
                                            Scroll Down{" "}
                                            <i className="ri-arrow-down-line" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SlideInUp selector=".banner_wrapper_bottom">
                            <div
                                className="banner_wrapper_bottom text-center"
                                data-cue="slideInUp"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="left_side">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Image
                                                        src={heroBanner3}
                                                        alt="hero_banner3"
                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <Image
                                                        src={heroBanner4}
                                                        alt="hero_banner4"
                                                    />
                                                </div>
                                            </div>
                                            <div className="quote_box text-start">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5">
                                                        <div className="author d-flex align-items-center">
                                                            <Image
                                                                src={author}
                                                                alt="author"
                                                            />
                                                            <div>
                                                                <h4>
                                                                    John Carter
                                                                </h4>
                                                                <span className="d-block">
                                                                    Manager at
                                                                    Business
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <p>
                                                            &quot;I was blown
                                                            away by the web
                                                            solutions from
                                                            Lunex! They
                                                            perfectly captured
                                                            my startup&apos;s
                                                            vision and created a
                                                            stunning website.
                                                            Their
                                                            professionalism is
                                                            unparalleled!&quot;
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="right_side">
                                            <Image
                                                src={heroBanner5}
                                                alt="hero_banner5"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="satisfied_customers mx-auto d-flex align-items-center justify-content-center">
                                    <div className="icon rounded-circle text-center">
                                        <i className="ri-star-fill" />
                                    </div>
                                    <span className="d-inline-block">
                                        <strong>Over 17K+</strong>
                                        &nbsp;Satisfied Customers
                                    </span>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End Banner Wrapper Area */}
                {/* Text Slider Area */}
                <div className="text_slider_area with_border overflow-hidden">
                    <SlideInUp selector=".container-fluid">
                        <div
                            className="container-fluid px-0"
                            data-cue="slideInUp"
                        >
                            <div className="scroll_text_marquee d-flex align-items-center justify-content-center">
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    IDEAS INTO REALITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    IDEAS INTO REALITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                            </div>
                        </div>
                    </SlideInUp>
                </div>
                {/* End Text Slider Area */}
                {/* About Us Area */}
                <div className="about_us_area ptb-150 position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about_us_left_side">
                                    <TextAnimation className="text-uppercase fw-black text_animation">
                                        Connecting you with marketing
                                    </TextAnimation>
                                    <Link
                                        href="/about"
                                        className="btn black_btn style_two with_border"
                                    >
                                        <span className="d-inline-block position-relative">
                                            More About Us{" "}
                                            <i className="ri-arrow-right-up-line" />
                                        </span>
                                    </Link>
                                    <Image src={about8} alt="about8" />
                                    <p>
                                        We believe that the surest measure of
                                        success is when a client partners with
                                        us more than half our clients stay with
                                        us for longer than a single project.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <SlideInUp selector=".about_us_right_side">
                                    <div
                                        className="about_us_right_side"
                                        data-cue="slideInUp"
                                    >
                                        <Image src={about7} alt="about7" />
                                    </div>
                                </SlideInUp>
                            </div>
                        </div>
                    </div>
                    <div className="object3">
                        <Image src={object3} alt="object3" />
                    </div>
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End About Us Area */}
                {/* Services Area */}
                <div className="services_area position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <TextAnimation
                            as="div"
                            className="section_title position-relative style_three text_animation"
                        >
                            <div className="row align-items-end">
                                <div className="col-lg-7">
                                    <div className="title position-relative d-inline-block">
                                        <h2 className="mb-0 fw-black text-uppercase">
                                            Services
                                        </h2>
                                        <Image src={vector} alt="vector" />
                                    </div>
                                    <p>
                                        We believe that the surest measure of
                                        success is when a client partners with
                                        us more than half our clients stay with
                                        us for longer than a single project.
                                    </p>
                                </div>
                                <div className="col-lg-5 text-lg-end">
                                    <a
                                        href="services.html"
                                        className="btn black_btn style_two with_border"
                                    >
                                        <span className="d-inline-block position-relative">
                                            View All Services{" "}
                                            <i className="ri-arrow-right-up-line" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </TextAnimation>
                    </div>
                    <SlideInUp selector=".service_item_wrapper">
                        <div
                            className="container-fluid px-0 max-w-full"
                            data-cues="slideInUp"
                            data-group="services_list"
                        >
                            <div className="service_item_wrapper">
                                <div className="service_item position-relative">
                                    <div className="container-fluid max_w_1560px position-relative">
                                        <div className="row align-items-center mx-0">
                                            <div className="col-lg-5 order-2 order-lg-1 px-0">
                                                <h3 className="mb-0">
                                                    Digital Marketing
                                                </h3>
                                            </div>
                                            <div className="col-lg-2 order-1 order-lg-2 px-0">
                                                <div className="number lh-1 fw-bold">
                                                    01
                                                </div>
                                            </div>
                                            <div className="col-lg-5 order-3 order-lg-3 px-0">
                                                <div className="content position-relative">
                                                    <p className="mb-0">
                                                        We believe that the
                                                        surest measure of
                                                        success is when a client
                                                        partners with us more
                                                        than half our clients
                                                        stay with us for longer
                                                        than a single project.
                                                    </p>
                                                    <a
                                                        href="service-single.html"
                                                        className="details_link_btn"
                                                    >
                                                        <i className="ri-arrow-right-up-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <img
                                                src="assets/images/services/service1.jpg"
                                                alt="service1"
                                            />
                                        </div>
                                    </div>
                                    <a
                                        href="service-single.html"
                                        className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                    />
                                </div>
                            </div>
                            <div className="service_item_wrapper">
                                <div className="service_item position-relative">
                                    <div className="container-fluid max_w_1560px position-relative">
                                        <div className="row align-items-center mx-0">
                                            <div className="col-lg-5 order-2 order-lg-1 px-0">
                                                <h3 className="mb-0">
                                                    Website Design
                                                </h3>
                                            </div>
                                            <div className="col-lg-2 order-1 order-lg-2 px-0">
                                                <div className="number lh-1 fw-bold">
                                                    02
                                                </div>
                                            </div>
                                            <div className="col-lg-5 order-3 order-lg-3 px-0">
                                                <div className="content position-relative">
                                                    <p className="mb-0">
                                                        We believe that the
                                                        surest measure of
                                                        success is when a client
                                                        partners with us more
                                                        than half our clients
                                                        stay with us for longer
                                                        than a single project.
                                                    </p>
                                                    <a
                                                        href="service-single.html"
                                                        className="details_link_btn"
                                                    >
                                                        <i className="ri-arrow-right-up-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <img
                                                src="assets/images/services/service2.jpg"
                                                alt="service2"
                                            />
                                        </div>
                                    </div>
                                    <a
                                        href="service-single.html"
                                        className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                    />
                                </div>
                            </div>
                            <div className="service_item_wrapper">
                                <div className="service_item position-relative">
                                    <div className="container-fluid max_w_1560px position-relative">
                                        <div className="row align-items-center mx-0">
                                            <div className="col-lg-5 order-2 order-lg-1 px-0">
                                                <h3 className="mb-0">
                                                    Digital Advertising
                                                </h3>
                                            </div>
                                            <div className="col-lg-2 order-1 order-lg-2 px-0">
                                                <div className="number lh-1 fw-bold">
                                                    03
                                                </div>
                                            </div>
                                            <div className="col-lg-5 order-3 order-lg-3 px-0">
                                                <div className="content position-relative">
                                                    <p className="mb-0">
                                                        We believe that the
                                                        surest measure of
                                                        success is when a client
                                                        partners with us more
                                                        than half our clients
                                                        stay with us for longer
                                                        than a single project.
                                                    </p>
                                                    <a
                                                        href="service-single.html"
                                                        className="details_link_btn"
                                                    >
                                                        <i className="ri-arrow-right-up-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <img
                                                src="assets/images/services/service3.jpg"
                                                alt="service3"
                                            />
                                        </div>
                                    </div>
                                    <a
                                        href="service-single.html"
                                        className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                    />
                                </div>
                            </div>
                            <div className="service_item_wrapper">
                                <div className="service_item position-relative">
                                    <div className="container-fluid max_w_1560px position-relative">
                                        <div className="row align-items-center mx-0">
                                            <div className="col-lg-5 order-2 order-lg-1 px-0">
                                                <h3 className="mb-0">
                                                    Content Marketing
                                                </h3>
                                            </div>
                                            <div className="col-lg-2 order-1 order-lg-2 px-0">
                                                <div className="number lh-1 fw-bold">
                                                    04
                                                </div>
                                            </div>
                                            <div className="col-lg-5 order-3 order-lg-3 px-0">
                                                <div className="content position-relative">
                                                    <p className="mb-0">
                                                        We believe that the
                                                        surest measure of
                                                        success is when a client
                                                        partners with us more
                                                        than half our clients
                                                        stay with us for longer
                                                        than a single project.
                                                    </p>
                                                    <a
                                                        href="service-single.html"
                                                        className="details_link_btn"
                                                    >
                                                        <i className="ri-arrow-right-up-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <img
                                                src="assets/images/services/service4.jpg"
                                                alt="service4"
                                            />
                                        </div>
                                    </div>
                                    <a
                                        href="service-single.html"
                                        className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                    />
                                </div>
                            </div>
                            <div className="service_item_wrapper">
                                <div className="service_item service_item_last_child position-relative">
                                    <div className="container-fluid max_w_1560px position-relative">
                                        <div className="row align-items-center mx-0">
                                            <div className="col-lg-5 order-2 order-lg-1 px-0">
                                                <h3 className="mb-0">
                                                    SEO Marketing
                                                </h3>
                                            </div>
                                            <div className="col-lg-2 order-1 order-lg-2 px-0">
                                                <div className="number lh-1 fw-bold">
                                                    05
                                                </div>
                                            </div>
                                            <div className="col-lg-5 order-3 order-lg-3 px-0">
                                                <div className="content position-relative">
                                                    <p className="mb-0">
                                                        We believe that the
                                                        surest measure of
                                                        success is when a client
                                                        partners with us more
                                                        than half our clients
                                                        stay with us for longer
                                                        than a single project.
                                                    </p>
                                                    <a
                                                        href="service-single.html"
                                                        className="details_link_btn"
                                                    >
                                                        <i className="ri-arrow-right-up-line" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <img
                                                src="assets/images/services/service5.jpg"
                                                alt="service5"
                                            />
                                        </div>
                                    </div>
                                    <a
                                        href="service-single.html"
                                        className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </SlideInUp>
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End Services Area */}
                {/* Our Success Stories Area */}
                <div className="success_stories_area pt-150 pb-125 position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <TextAnimation
                            as="div"
                            className="section_title text-center mx-auto text_animation"
                        >
                            <h2 className="mb-0 text-uppercase fw-black">
                                Lunex&apos;s Success Stories
                            </h2>
                        </TextAnimation>
                        <SlideInUp selector=".col-lg-3, .col-sm-6">
                            <div
                                className="row justify-content-center"
                                data-cues="slideInUp"
                                data-group="success_stories_list"
                            >
                                <div className="col-lg-3 col-sm-6">
                                    <div className="success_story_box">
                                        <h3 className="fw-semibold lh-1">
                                            <CounterNumber
                                                value={20}
                                                className="counter_number fw-semibold"
                                                as="strong"
                                            />
                                            +
                                        </h3>
                                        <span className="d-block">
                                            Award-Winning
                                        </span>
                                        <div className="border-top" />
                                        <p>
                                            There are many variations of pas but
                                            the in some form.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="success_story_box">
                                        <h3 className="fw-semibold lh-1">
                                            <CounterNumber
                                                value={80}
                                                className="counter_number fw-semibold"
                                                as="strong"
                                            />
                                            %
                                        </h3>
                                        <span className="d-block">
                                            Business Growth
                                        </span>
                                        <div className="border-top" />
                                        <p>
                                            There are many variations of pas but
                                            the in some form.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="success_story_box">
                                        <h3 className="fw-semibold lh-1">
                                            <CounterNumber
                                                value={10}
                                                className="counter_number fw-semibold"
                                                as="strong"
                                            />
                                            k+
                                        </h3>
                                        <span className="d-block">
                                            Project Completed
                                        </span>
                                        <div className="border-top" />
                                        <p>
                                            There are many variations of pas but
                                            the in some form.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="success_story_box">
                                        <h3 className="fw-semibold lh-1">
                                            <CounterNumber
                                                value={8}
                                                className="counter_number fw-semibold"
                                                as="strong"
                                            />
                                            k+
                                        </h3>
                                        <span className="d-block">
                                            Happy Clients
                                        </span>
                                        <div className="border-top" />
                                        <p>
                                            There are many variations of pas but
                                            the in some form.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End Our Success Stories Area */}
                {/* Why Choose Us Area */}
                <div className="why_choose_us_area pb-150 position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="why_choose_us_left_side position-relative z-1">
                                    <TextAnimation className="text-uppercase fw-black text_animation">
                                        Watch the video to discover more
                                    </TextAnimation>
                                    <SlideInUp selector=".btn_wrapper">
                                        <div className="btn_wrapper">
                                            <Link
                                                href="/contact"
                                                className="btn black_btn style_two with_border"
                                                data-cue="slideInUp"
                                            >
                                                <span className="d-inline-block position-relative">
                                                    Contact Us{" "}
                                                    <i className="ri-arrow-right-up-line" />
                                                </span>
                                            </Link>
                                        </div>
                                    </SlideInUp>
                                    <div className="image text-center">
                                        <Image src={star} alt="star" />
                                    </div>
                                    <Image
                                        src={blur}
                                        className="shape"
                                        alt="blur"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="why_choose_us_right_side">
                                    <p>
                                        We believe that the surest measure of
                                        success is when a client partners with
                                        us more than half our clients stay with
                                        us for longer than a single project.
                                    </p>
                                    <WhyChooseUsModal />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End Why Choose Us Area */}
                {/* Work Process Area */}
                <div className="work_process_area position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <TextAnimation
                            as="div"
                            className="section_title position-relative style_three right_side text_animation"
                        >
                            <div className="row align-items-end">
                                <div className="col-lg-7 order-1 order-lg-2 text-md-end">
                                    <div className="title position-relative d-inline-block">
                                        <h2 className="mb-0 fw-black text-uppercase">
                                            Work Process
                                        </h2>
                                        <Image src={vector} alt="vector" />
                                    </div>
                                    <p>
                                        We believe that the surest measure of
                                        success is when a client partners with
                                        us more than half our clients stay with
                                        us for longer than a single project.
                                    </p>
                                </div>
                                <div className="col-lg-5 order-2 order-lg-1 text-md-end text-lg-start">
                                    <Link
                                        href="/services"
                                        className="btn black_btn style_two with_border"
                                    >
                                        <span className="d-inline-block position-relative">
                                            View All Services{" "}
                                            <i className="ri-arrow-right-up-line" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </TextAnimation>
                        <SlideInUp selector=".col-lg-4, .col-sm-6">
                            <div
                                className="row justify-content-center"
                                data-cues="slideInUp"
                                data-group="work_process_list"
                            >
                                <div className="col-lg-4 col-sm-6">
                                    <div className="work_process_box position-relative text-center z-1">
                                        <h3 className="mb-0 text-uppercase">
                                            Step 01
                                        </h3>
                                        <div className="box">
                                            <h4>Subscribe to a Plan</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consect urna tellus dignissim
                                                duis at.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="work_process_box position-relative text-center z-1">
                                        <h3 className="mb-0 text-uppercase">
                                            Step 02
                                        </h3>
                                        <div className="box">
                                            <h4>Make Your Request</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consect urna tellus dignissim
                                                duis at.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="work_process_box position-relative text-center z-1">
                                        <h3 className="mb-0 text-uppercase">
                                            Step 03
                                        </h3>
                                        <div className="box">
                                            <h4>Get Your Design in Time</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consect urna tellus dignissim
                                                duis at.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                        <SlideInUp selector=".satisfied_customers">
                            <div
                                className="satisfied_customers mx-auto d-flex align-items-center justify-content-center"
                                data-cue="slideInUp"
                            >
                                <div className="icon rounded-circle text-center">
                                    <i className="ri-star-line" />
                                </div>
                                <span className="d-inline-block">
                                    <strong>Over 17K+</strong>&nbsp;Satisfied
                                    Customers
                                </span>
                            </div>
                        </SlideInUp>
                    </div>
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End Work Process Area */}
                {/* Portfolio Area */}
                <div className="portfolio_area ptb-150 position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <TextAnimation
                            as="div"
                            className="section_title position-relative style_three text_animation"
                        >
                            <div className="row align-items-end">
                                <div className="col-lg-7">
                                    <div className="title position-relative d-inline-block">
                                        <h2 className="mb-0 fw-black text-uppercase">
                                            Our Portfolio
                                        </h2>
                                        <Image src={vector} alt="vector" />
                                    </div>
                                    <p>
                                        We believe that the surest measure of
                                        success is when a client partners with
                                        us more than half our clients stay with
                                        us for longer than a single project.
                                    </p>
                                </div>
                                <div className="col-lg-5 text-lg-end">
                                    <Link
                                        href="/portfolio"
                                        className="btn black_btn style_two with_border"
                                    >
                                        <span className="d-inline-block position-relative">
                                            View All Works{" "}
                                            <i className="ri-arrow-right-up-line" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </TextAnimation>
                        <SlideInUp selector=".col-lg-6, .col-lg-6">
                            <div
                                className="row align-items-center"
                                data-cues="slideInUp"
                                data-group="portfolio_list"
                            >
                                <div className="col-lg-6">
                                    <div className="portfolio_image text-center">
                                        <Image
                                            src={portfolio1}
                                            alt="portfolio"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="load_more_items_list">
                                        <div className="item position-relative z-1 d-flex align-items-center justify-content-between">
                                            <h3 className="mb-0">
                                                Creative Process
                                            </h3>
                                            <span className="category d-inline-block">
                                                App Design
                                            </span>
                                            <div className="image">
                                                <Image
                                                    src={portfolio2}
                                                    alt="portfolio2"
                                                />
                                            </div>
                                            <a
                                                href="work-single.html"
                                                className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                            />
                                        </div>
                                        <div className="item position-relative z-1 d-flex align-items-center justify-content-between">
                                            <h3 className="mb-0">
                                                Growth Story
                                            </h3>
                                            <span className="category d-inline-block">
                                                Web Design
                                            </span>
                                            <div className="image">
                                                <Image
                                                    src={portfolio3}
                                                    alt="portfolio3"
                                                />
                                            </div>
                                            <a
                                                href="work-single.html"
                                                className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                            />
                                        </div>
                                        <div className="item position-relative z-1 d-flex align-items-center justify-content-between">
                                            <h3 className="mb-0">Saas App</h3>
                                            <span className="category d-inline-block">
                                                App Design
                                            </span>
                                            <div className="image">
                                                <Image
                                                    src={portfolio4}
                                                    alt="portfolio4"
                                                />
                                            </div>
                                            <a
                                                href="work-single.html"
                                                className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                            />
                                        </div>
                                        <div className="item position-relative z-1 d-flex align-items-center justify-content-between">
                                            <h3 className="mb-0">
                                                Fintech Web
                                            </h3>
                                            <span className="category d-inline-block">
                                                Web App Design
                                            </span>
                                            <div className="image">
                                                <Image
                                                    src={portfolio5}
                                                    alt="portfolio5"
                                                />
                                            </div>
                                            <a
                                                href="work-single.html"
                                                className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End Portfolio Area */}
                {/* Team Area */}
                <div className="team_area_two pb-150 position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <TextAnimation
                            as="div"
                            className="section_title position-relative style_three right_side text_animation"
                        >
                            <div className="row align-items-end">
                                <div className="col-lg-7 order-1 order-lg-2 text-md-end">
                                    <div className="title position-relative d-inline-block">
                                        <h2 className="mb-0 fw-black text-uppercase">
                                            Our Team
                                        </h2>
                                        <Image src={vector} alt="vector" />
                                    </div>
                                    <p>
                                        We believe that the surest measure of
                                        success is when a client partners with
                                        us more than half our clients stay with
                                        us for longer than a single project.
                                    </p>
                                </div>
                                <div className="col-lg-5 order-2 order-lg-1 text-md-end text-lg-start">
                                    <Link
                                        href="/team"
                                        className="btn black_btn style_two with_border"
                                    >
                                        <span className="d-inline-block position-relative">
                                            View All Team Member{" "}
                                            <i className="ri-arrow-right-up-line" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </TextAnimation>
                        <TeamSection />
                    </div>
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End Team Area */}
                {/* Text Slider Area */}
                <div className="text_slider_area with_border overflow-hidden">
                    <SlideInUp selector=".container-fluid ">
                        <div
                            className="container-fluid px-0"
                            data-cue="slideInUp"
                        >
                            <div className="scroll_text_marquee d-flex align-items-center justify-content-center">
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    IDEAS INTO REALITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    IDEAS INTO REALITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                            </div>
                        </div>
                    </SlideInUp>
                </div>
                {/* End Text Slider Area */}
                {/* Testimonials Area */}
                <div className="testimonials_area pt-150 position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <TextAnimation
                            as="div"
                            className="section_title position-relative style_three text_animation"
                        >
                            <div className="row align-items-end">
                                <div className="col-lg-7">
                                    <div className="title position-relative d-inline-block">
                                        <h2 className="mb-0 fw-black text-uppercase">
                                            Testimonials
                                        </h2>
                                        <Image src={vector} alt="vector" />
                                    </div>
                                    <p>
                                        We believe that the surest measure of
                                        success is when a client partners with
                                        us more than half our clients stay with
                                        us for longer than a single project.
                                    </p>
                                </div>
                            </div>
                        </TextAnimation>
                    </div>
                    {/* <div className="container-fluid px-0">
                        <div
                            className="testimonials_slides owl-carousel owl-theme"
                            data-cue="slideInUp"
                        >
                            <div className="testimonial_item">
                                <div className="ratings d-flex align-items-center">
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                </div>
                                <p>
                                    “Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas.”
                                </p>
                                <div className="reviewer d-flex align-items-center">
                                    <img
                                        src="assets/images/users/user1.jpg"
                                        alt="user"
                                    />
                                    <div>
                                        <h4>Mason Logan</h4>
                                        <span className="d-block">
                                            Manager at Business
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial_item">
                                <div className="ratings d-flex align-items-center">
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                </div>
                                <p>
                                    “Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas.”
                                </p>
                                <div className="reviewer d-flex align-items-center">
                                    <img
                                        src="assets/images/users/user2.jpg"
                                        alt="user"
                                    />
                                    <div>
                                        <h4>Aelira Evangelle</h4>
                                        <span className="d-block">
                                            Developer at Marketing
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial_item">
                                <div className="ratings d-flex align-items-center">
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                </div>
                                <p>
                                    “Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas.”
                                </p>
                                <div className="reviewer d-flex align-items-center">
                                    <img
                                        src="assets/images/users/user1.jpg"
                                        alt="user"
                                    />
                                    <div>
                                        <h4>Mason Logan</h4>
                                        <span className="d-block">
                                            Manager at Business
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial_item">
                                <div className="ratings d-flex align-items-center">
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                    <i className="ri-star-fill" />
                                </div>
                                <p>
                                    “Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas.”
                                </p>
                                <div className="reviewer d-flex align-items-center">
                                    <img
                                        src="assets/images/users/user2.jpg"
                                        alt="user"
                                    />
                                    <div>
                                        <h4>Aelira Evangelle</h4>
                                        <span className="d-block">
                                            Developer at Marketing
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <TestimonialsSection />
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End Testimonials Area */}
                {/* Our Blog Area */}
                <div className="blog_area pt-150 pb-125 position-relative z-1 ">
                    <div className="container-fluid max_w_1560px">
                        <div className="section_title text-center mx-auto text_animation">
                            <h2 className="mb-0 text-uppercase fw-black">
                                Discover Our Newest Articles
                            </h2>
                        </div>
                        <div
                            className="row justify-content-center"
                            data-cues="slideInUp"
                            data-group="blog_list"
                        >
                            <div className="col-lg-4 col-sm-6">
                                <div className="blog_single_article_post">
                                    <div className="image position-relative">
                                        <a
                                            href="blog-single.html"
                                            className="d-block overflow-hidden"
                                        >
                                            <img
                                                src="assets/images/blogs-two/blog4.jpg"
                                                alt="blog4"
                                            />
                                        </a>
                                        <a
                                            href="blog.html"
                                            className="category d-inline-block"
                                        >
                                            App Design
                                        </a>
                                    </div>
                                    <div className="content">
                                        <span className="date d-block">
                                            June 27, 2025
                                        </span>
                                        <h3 className="mb-0">
                                            <a href="blog-single.html">
                                                10 Powerful Tips to Improve and
                                                Elevate Your Design
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="blog_single_article_post">
                                    <div className="image position-relative">
                                        <a
                                            href="blog-single.html"
                                            className="d-block overflow-hidden"
                                        >
                                            <img
                                                src="assets/images/blogs-two/blog5.jpg"
                                                alt="blog4"
                                            />
                                        </a>
                                        <a
                                            href="blog.html"
                                            className="category d-inline-block"
                                        >
                                            Web Design
                                        </a>
                                    </div>
                                    <div className="content">
                                        <span className="date d-block">
                                            June 26, 2025
                                        </span>
                                        <h3 className="mb-0">
                                            <a href="blog-single.html">
                                                What’s the Best Design Tool to
                                                Choose in 2025?
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="blog_single_article_post">
                                    <div className="image position-relative">
                                        <a
                                            href="blog-single.html"
                                            className="d-block overflow-hidden"
                                        >
                                            <img
                                                src="assets/images/blogs-two/blog6.jpg"
                                                alt="blog4"
                                            />
                                        </a>
                                        <a
                                            href="blog.html"
                                            className="category d-inline-block"
                                        >
                                            Writing
                                        </a>
                                    </div>
                                    <div className="content">
                                        <span className="date d-block">
                                            June 25, 2025
                                        </span>
                                        <h3 className="mb-0">
                                            <a href="blog-single.html">
                                                6 Effective Exercises to Help
                                                You Become a Great UX Designer
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End Our Blog Area */}
                {/* Partners Area */}
                <div className="partners_area position-relative z-1 ">
                    <div className="container-fluid max_w_1560px">
                        <div
                            className="partners_slides owl-carousel owl-theme"
                            data-cue="slideInUp"
                        >
                            <div className="partner_item text-center">
                                <img
                                    src="assets/images/partners/partner1.svg"
                                    alt="partner1"
                                />
                            </div>
                            <div className="partner_item text-center">
                                <img
                                    src="assets/images/partners/partner2.svg"
                                    alt="partner2"
                                />
                            </div>
                            <div className="partner_item text-center">
                                <img
                                    src="assets/images/partners/partner3.svg"
                                    alt="partner3"
                                />
                            </div>
                            <div className="partner_item text-center">
                                <img
                                    src="assets/images/partners/partner4.svg"
                                    alt="partner4"
                                />
                            </div>
                            <div className="partner_item text-center">
                                <img
                                    src="assets/images/partners/partner5.svg"
                                    alt="partner5"
                                />
                            </div>
                            <div className="partner_item text-center">
                                <img
                                    src="assets/images/partners/partner1.svg"
                                    alt="partner1"
                                />
                            </div>
                            <div className="partner_item text-center">
                                <img
                                    src="assets/images/partners/partner2.svg"
                                    alt="partner2"
                                />
                            </div>
                            <div className="partner_item text-center">
                                <img
                                    src="assets/images/partners/partner3.svg"
                                    alt="partner3"
                                />
                            </div>
                            <div className="partner_item text-center">
                                <img
                                    src="assets/images/partners/partner4.svg"
                                    alt="partner4"
                                />
                            </div>
                            <div className="partner_item text-center">
                                <img
                                    src="assets/images/partners/partner5.svg"
                                    alt="partner5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                {/* End Partners Area */}
                {/* Footer Area */}
                <footer className="footer_area_two pt-150 position-relative z-1">
                    <div className="container-fluid max_w_1560px">
                        <div
                            className="row"
                            data-cues="slideInUp"
                            data-group="footer_list"
                        >
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="footer_two_widget">
                                            <h3>Quick links</h3>
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
                                                    <a href="blog.html">Blog</a>
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
                                    <div className="col-sm-6">
                                        <div className="footer_two_widget">
                                            <h3>Utility Pages</h3>
                                            <ul className="links p-0 mb-0 list-unstyled">
                                                <li>
                                                    <a href="privacy-policy.html">
                                                        Privacy Policy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="terms-conditions.html">
                                                        Terms &amp; Conditions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="privacy-policy.html">
                                                        Cookie Policy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="terms-conditions.html">
                                                        Refund Policy
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
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer_newsletter_box">
                                    <h3>We’d Love to Hear from You</h3>
                                    <form>
                                        <input
                                            type="text"
                                            className="form-control shadow-none rounded-0 border-0 fw-medium"
                                            placeholder="Type Your Email"
                                        />
                                        <button type="submit">
                                            <i className="ri-send-plane-fill" />
                                        </button>
                                    </form>
                                    <p>
                                        Reach out and let’s craft something
                                        remarkable together.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul className="footer_socials row p-0 mx-0 mb-0 list-unstyled">
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
                        <div className="footer_logo_text lh-1 fw-black text_animation">
                            Lunex.
                        </div>
                        <div className="copyright_area_two text-center">
                            <ul className="p-0 mb-0 list-unstyled">
                                <li className="d-inline-block position-relative">
                                    © Copyright{" "}
                                    <span
                                        className="fw-bold"
                                        id="currentYear"
                                    />
                                </li>
                                <li className="d-inline-block position-relative">
                                    Designed by{" "}
                                    <span className="fw-bold">Lunex</span>
                                </li>
                                <li className="d-inline-block position-relative">
                                    Powered by <strong>Lunex</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img
                        src="assets/images/objects/blur.png"
                        className="shape"
                        alt="blur"
                    />
                    <div className="border_lines">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </div>
                </footer>
                {/* End Footer Area */}
                {/* Back To Top */}
                <div className="back_to_top position-fixed text-center rounded-circle">
                    <i className="ri-arrow-up-s-line" />
                </div>
                {/* End Back To Top */}
            </div>
        </div>
    );
};

export default page;
