import CounterNumber from "@/components/common/CounterNumber";
import ScrollColorChange from "@/components/common/ScrollColorChange";
import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import BackToTop from "@/components/index6/BackToTop";
import CaseStudiesSlider from "@/components/index6/Casestudiessection";
import FeaturesList from "@/components/index6/FeaturesList";
import FeedbackSlider from "@/components/index6/Feedbackslider";
import ServiceSlider from "@/components/index6/ServiceSlider";
import TrustedPartner from "@/components/index6/TrustedPartner";
import Navbar6 from "@/components/navbars/Navbar6";
import Image from "next/image";
import Link from "next/link";

// image imports
import about6 from "public/assets/images/abouts/about6.jpg";
import audiences from "public/assets/images/banners/audiences.jpg";
import girlsWithLaptop from "public/assets/images/banners/girls_with_laptop.jpg";
import heroBanner1 from "public/assets/images/banners/hero_banner1.png";
import visitors from "public/assets/images/banners/visitors.jpg";
import faqImage from "public/assets/images/faq.jpg";
import arrowLongRight from "public/assets/images/icons/arrow_long_right.svg";
import bolt from "public/assets/images/icons/bolt.svg";
import whiteArrowLongRight from "public/assets/images/icons/white_arrow_long_right.svg";
import object2 from "public/assets/images/objects/object2.svg";
import processGroupMeeting from "public/assets/images/process_group_meeting.jpg";
import team1 from "public/assets/images/team-two/team1.jpg";
import team2 from "public/assets/images/team-two/team2.jpg";
import team3 from "public/assets/images/team-two/team3.jpg";
import team4 from "public/assets/images/team-two/team4.jpg";
import team5 from "public/assets/images/team-two/team5.jpg";
import whiteLogo from "public/assets/images/white-logo.svg";
import whyChooseUse from "public/assets/images/why_choose_us.jpg";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            <Navbar6 />
            <ScrollColorChange />

            <div>
                {/* Hero Banner Area */}
                <div className="hero_banner_area position-relative z-1 overflow-hidden">
                    <div className="container-fluid">
                        <SlideInUp selector=".hero_banner_content, .seo-button">
                            <div
                                className="hero_banner_content text-center mx-auto position-relative z-1"
                                data-cues="slideInUp"
                                data-group="hero_banner_content"
                            >
                                <h1 className="fw-bold">
                                    Comprehensive Branding Agency for Your
                                    Business{" "}
                                    <Image
                                        src={girlsWithLaptop}
                                        alt="girls-with-laptop"
                                    />{" "}
                                    Needs
                                </h1>
                                <div className="seo-button">
                                    <a
                                        href="pricing.html"
                                        className="btn primary_btn"
                                    >
                                        <span className="d-inline-block position-relative">
                                            Get a Free SEO Audit{" "}
                                            <i className="ri-arrow-right-up-line" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </SlideInUp>
                        <SlideInUp selector=".left_image, .center_image, .right_image">
                            <div className="hero_banner_image position-relative z-1">
                                <div
                                    className="row"
                                    data-cues="slideInUp"
                                    data-group="hero_banner_image"
                                >
                                    <div className="col-lg-4 col-md-6 order-1 order-lg-1">
                                        <div className="left_image">
                                            <Image
                                                src={visitors}
                                                alt="visitors"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-3 order-lg-2">
                                        <div className="center_image text-center position-relative">
                                            <Image
                                                src={heroBanner1}
                                                alt="hero_banner1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 order-2 order-lg-3">
                                        <div className="right_image">
                                            <Image
                                                src={audiences}
                                                alt="audiences"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="object2">
                                    <Image src={object2} alt="object2" />
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                    <div className="scroll_text_area overflow-hidden position-relative z-1">
                        <div className="container-fluid px-0">
                            <div className="scroll_text_marquee d-flex align-items-center justify-content-center">
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    IDEAS INTO REALITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    IDEAS INTO REALITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    HOW IT WORKS
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    DOCUMENTATION
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                                <h3 className="mb-0 text-uppercase fw-semibold text-white lh-1">
                                    JOIN THE COMMUNITY
                                </h3>
                                <Image
                                    src={bolt}
                                    className="w-auto d-inline-block"
                                    alt="bolt"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Hero Banner Area */}
                {/* About Us Area */}
                <div className="about_us_area ptb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <SlideInUp selector=".about_us_title">
                                    <div
                                        className="about_us_title d-inline-block"
                                        data-cue="slideInUp"
                                    >
                                        <span className="d-flex align-items-center text-uppercase">
                                            ABOUT US
                                            <Image
                                                src={arrowLongRight}
                                                alt="arrow_long_right"
                                            />
                                        </span>
                                    </div>
                                </SlideInUp>
                            </div>
                            <div className="col-lg-9">
                                <div className="about_us_content">
                                    <h2 className="on_scroll_color_change fw-semibold text-uppercase">
                                        We believe that the surest measure of
                                        success is when a client partners with
                                        us more than half our clients stay with
                                        us for longer than a single project.
                                    </h2>
                                    <SlideInUp selector=".row">
                                        <div
                                            className="row"
                                            data-cues="slideInUp"
                                            data-group="about_us_content"
                                        >
                                            <div className="col-lg-4">
                                                <div className="about_us_text">
                                                    <div className="number lh-1 position-relative fw-medium d-inline-block">
                                                        <CounterNumber
                                                            value={25}
                                                        />
                                                        <span className="text_animation">
                                                            M
                                                        </span>
                                                    </div>
                                                    <p>
                                                        Lunex is a creative
                                                        agency offering
                                                        marketing, development,
                                                        design, and a range of
                                                        digital solutions. We’ve
                                                        secured over $15M in
                                                        funding.
                                                    </p>
                                                    <a
                                                        href="about.html"
                                                        className="btn primary_btn"
                                                    >
                                                        <span className="d-inline-block position-relative">
                                                            Know More{" "}
                                                            <i className="ri-arrow-right-up-line" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="about_us_image text-center">
                                                    <Image
                                                        src={about6}
                                                        alt="about"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </SlideInUp>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Us Area */}
                {/* Trusted Partner Area */}
                <TrustedPartner />
                {/* End Trusted Partner Area */}
                {/* Services Area */}
                <div className="services_area bg_image">
                    <div className="white_top_rectangle bg_f8f9fd" />
                    <div className="ptb-150 overflow-hidden">
                        <div className="container">
                            <TextAnimation
                                as="div"
                                className="section_title white_color style_two text_animation"
                            >
                                <div className="sub_title d-inline-block">
                                    <span className="d-flex align-items-center text-uppercase">
                                        Our Approach
                                        <Image
                                            src={whiteArrowLongRight}
                                            alt="white_arrow_long_right"
                                        />
                                    </span>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <h2 className="mb-0 fw-bold">
                                            We Offer a Wide Range of Design
                                            Services
                                        </h2>
                                    </div>
                                    <div className="col-lg-5">
                                        <p>
                                            Our agency powers growth and success
                                            in the fast-paced digital marketing
                                            space. Let’s turn your vision into
                                            reality.
                                        </p>
                                    </div>
                                </div>
                            </TextAnimation>
                        </div>
                        <ServiceSlider />
                        <div className="container">
                            <SlideInUp selector=".browse_all_services_btn">
                                <div
                                    className="browse_all_services_btn text-center"
                                    data-cue="slideInUp"
                                >
                                    <Link href="services">
                                        Browse all services{" "}
                                        <i className="ri-arrow-right-up-line" />
                                    </Link>
                                </div>
                            </SlideInUp>
                        </div>
                    </div>
                    <div className="white_bottom_rectangle bg_white" />
                </div>
                {/* End Services Area */}
                {/* Features Area */}
                <div className="features_area bg_white pb-150">
                    <div className="container">
                        <TextAnimation
                            as="div"
                            className="section_title style_two text_animation"
                        >
                            <div className="sub_title d-inline-block">
                                <span className="d-flex align-items-center text-uppercase">
                                    Features
                                    <Image
                                        src={arrowLongRight}
                                        alt="arrow_long_right"
                                    />
                                </span>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h2 className="mb-0 fw-bold">
                                        Unlocking the Potential of Digital
                                        Branding
                                    </h2>
                                </div>
                                <div className="col-lg-5">
                                    <p>
                                        Our agency powers growth and success in
                                        the fast-paced digital marketing space.
                                        Let’s turn your vision into reality.
                                    </p>
                                </div>
                            </div>
                        </TextAnimation>
                    </div>
                    <FeaturesList />
                </div>
                {/* End Features Area */}
                {/* Our Process Area */}
                <div className="our_process_area pt-150">
                    <div className="container">
                        <div className="section_title text-center mx-auto">
                            <div className="sub_title d-inline-block">
                                <span className="d-flex align-items-center text-uppercase">
                                    Our Process
                                    <Image
                                        src={arrowLongRight}
                                        alt="arrow_long_right"
                                    />
                                </span>
                            </div>
                            <TextAnimation className="mb-0 text_animation fw-bold">
                                A Step-by-Step Approach to Digital Branding
                            </TextAnimation>
                        </div>
                        <SlideInUp selector=".our_process_inner_box">
                            <div
                                className="our_process_inner_box position-relative z-1"
                                data-cue="slideInUp"
                            >
                                <div className="row align-items-center gx-0">
                                    <div className="col-lg-6">
                                        <div className="image text-center">
                                            <Image
                                                src={processGroupMeeting}
                                                alt="process_group_meeting"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <div className="box position-relative z-1">
                                                <h3 className="fw-semibold">
                                                    Come up With a Blue Print
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incidid labore et dolore.
                                                </p>
                                                <a
                                                    href="pricing.html"
                                                    className="link_btn"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                            </div>
                                            <div
                                                className="box position-relative z-1"
                                                style={{
                                                    backgroundImage:
                                                        "url(assets/images/bg_image/bg_image1.jpg)",
                                                }}
                                            >
                                                <h3 className="fw-semibold">
                                                    Execute to Achieve
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incidid labore et dolore.
                                                </p>
                                                <a
                                                    href="pricing.html"
                                                    className="link_btn"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                            </div>
                                            <div className="box position-relative z-1">
                                                <h3 className="fw-semibold">
                                                    Monitor &amp; Report
                                                </h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incidid labore et dolore.
                                                </p>
                                                <a
                                                    href="pricing.html"
                                                    className="link_btn"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Our Process Area */}
                {/* Funfacts & Why Choose Us Area */}
                <div className="funfacts_why_choose_us_area">
                    <div className="white_top_rectangle bg_f8f9fd" />
                    {/* Funfacts */}
                    <div className="funfacts_area pt-150 pb-125">
                        <SlideInUp
                            selector=".funfact_box"
                            className="container"
                        >
                            <div
                                className="row"
                                data-cues="slideInUp"
                                data-group="funfacts_list"
                            >
                                <div className="col-sm-6">
                                    <div className="funfact_box">
                                        <div className="number lh-1 fw-bold text-white">
                                            <CounterNumber
                                                value={25}
                                                className="counter_number"
                                                as="span"
                                            />
                                            +
                                        </div>
                                        <div className="quote text-white fw-medium lh-1">
                                            {`//`}
                                        </div>
                                        <div className="title text-lg-end text-uppercase text-white fw-medium">
                                            Awards &amp; Recognitions
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="funfact_box">
                                        <div className="number lh-1 fw-bold text-white">
                                            <CounterNumber
                                                value={98}
                                                as="span"
                                                className="counter_number"
                                            />
                                            %
                                        </div>
                                        <div className="quote text-white fw-medium lh-1">
                                            {`//`}
                                        </div>
                                        <div className="title text-lg-end text-uppercase text-white fw-medium">
                                            Clients Satisfaction
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="funfact_box">
                                        <div className="number lh-1 fw-bold text-white">
                                            <CounterNumber
                                                value={15}
                                                as="span"
                                                className="counter_number"
                                            />
                                            +
                                        </div>
                                        <div className="quote text-white fw-medium lh-1">
                                            {`//`}
                                        </div>
                                        <div className="title text-lg-end text-uppercase text-white fw-medium">
                                            Years of experience in particular
                                            field
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="funfact_box">
                                        <div className="number lh-1 fw-bold text-white">
                                            <CounterNumber
                                                value={12}
                                                as="span"
                                                className="counter_number"
                                            />
                                            K
                                        </div>
                                        <div className="quote text-white fw-medium lh-1">
                                            {`//`}
                                        </div>
                                        <div className="title text-lg-end text-uppercase text-white fw-medium">
                                            Cases overseen
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                    {/* End Funfacts */}
                    {/* Why Choose Us Area */}
                    <div className="why_choose_us_area pb-150">
                        <div className="container">
                            <TextAnimation
                                as="div"
                                className="section_title white_color style_two text_animation"
                            >
                                <div className="sub_title d-inline-block">
                                    <span className="d-flex align-items-center text-uppercase">
                                        Why Choose Us
                                        <Image
                                            src={whiteArrowLongRight}
                                            alt="white_arrow_long_right"
                                        />
                                    </span>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <h2 className="mb-0 fw-bold">
                                            Effective Branding at a Price You
                                            Can Afford
                                        </h2>
                                    </div>
                                    <div className="col-lg-5">
                                        <p>
                                            Our agency powers growth and success
                                            in the fast-paced digital marketing
                                            space. Let’s turn your vision into
                                            reality.
                                        </p>
                                    </div>
                                </div>
                            </TextAnimation>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <SlideInUp
                                        selector=".accordion-item"
                                        className="why_choose_us_content"
                                    >
                                        <div
                                            className="accordion"
                                            id="whyChooseUsAccordion"
                                            data-cues="slideInUp"
                                            data-group="why_choose_us_content"
                                        >
                                            <div className="accordion-item rounded-0 bg-transparent">
                                                <button
                                                    className="accordion-button d-block text-start p-0 fw-semibold bg-transparent shadow-none"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#wCUCollapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="wCUCollapseOne"
                                                >
                                                    <span>01</span> Expertise
                                                    Teams
                                                </button>
                                                <div
                                                    id="wCUCollapseOne"
                                                    className="accordion-collapse collapse show"
                                                    data-bs-parent="#whyChooseUsAccordion"
                                                >
                                                    <div className="accordion-body pb-0">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit, sed
                                                            do eiusmod tempor
                                                            incidid unt ut labo
                                                            magna.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item rounded-0 bg-transparent">
                                                <button
                                                    className="accordion-button d-block text-start p-0 fw-semibold bg-transparent shadow-none collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#wCUCollapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="wCUCollapseTwo"
                                                >
                                                    <span>02</span> Tailored
                                                    Solutions
                                                </button>
                                                <div
                                                    id="wCUCollapseTwo"
                                                    className="accordion-collapse collapse"
                                                    data-bs-parent="#whyChooseUsAccordion"
                                                >
                                                    <div className="accordion-body pb-0">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit, sed
                                                            do eiusmod tempor
                                                            incidid unt ut labo
                                                            magna.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item rounded-0 bg-transparent">
                                                <button
                                                    className="accordion-button d-block text-start p-0 fw-semibold bg-transparent shadow-none collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#wCUCollapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="wCUCollapseThree"
                                                >
                                                    <span>03</span> Client
                                                    Centric Approach
                                                </button>
                                                <div
                                                    id="wCUCollapseThree"
                                                    className="accordion-collapse collapse"
                                                    data-bs-parent="#whyChooseUsAccordion"
                                                >
                                                    <div className="accordion-body pb-0">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit, sed
                                                            do eiusmod tempor
                                                            incidid unt ut labo
                                                            magna.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item rounded-0 bg-transparent">
                                                <button
                                                    className="accordion-button d-block text-start p-0 fw-semibold bg-transparent shadow-none collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#wCUCollapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="wCUCollapseFour"
                                                >
                                                    <span>04</span> 24/7
                                                    Customer Support
                                                </button>
                                                <div
                                                    id="wCUCollapseFour"
                                                    className="accordion-collapse collapse"
                                                    data-bs-parent="#whyChooseUsAccordion"
                                                >
                                                    <div className="accordion-body pb-0">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit, sed
                                                            do eiusmod tempor
                                                            incidid unt ut labo
                                                            magna.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SlideInUp>
                                </div>
                                <div className="col-lg-6">
                                    <SlideInUp selector=".why_choose_us_image">
                                        <div
                                            className="why_choose_us_image text-center"
                                            data-cue="slideInUp"
                                        >
                                            <Image
                                                src={whyChooseUse}
                                                alt="why-choose-us"
                                            />
                                        </div>
                                    </SlideInUp>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Why Choose Us Area */}
                    <div className="white_bottom_rectangle bg_f8f9fd" />
                </div>
                {/* End Funfacts & Why Choose Us Area */}
                {/* Case Studies Area */}
                <div className="case_studies_area pb-150">
                    <div className="container">
                        <TextAnimation
                            as="div"
                            className="section_title style_two text_animation"
                        >
                            <div className="sub_title d-inline-block">
                                <span className="d-flex align-items-center text-uppercase">
                                    Our Case Study
                                    <Image
                                        src={arrowLongRight}
                                        alt="arrow_long_right"
                                    />
                                </span>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h2 className="mb-0 fw-bold">
                                        Highlights from Our Most Recent Projects
                                    </h2>
                                </div>
                                <div className="col-lg-5">
                                    <p>
                                        Our agency powers growth and success in
                                        the fast-paced digital marketing space.
                                        Let’s turn your vision into reality.
                                    </p>
                                </div>
                            </div>
                        </TextAnimation>
                    </div>
                    <CaseStudiesSlider />
                </div>
                {/* End Case Studies Area */}
                {/* Feedback Area */}
                <div className="feedback_area bg_white ptb-150">
                    <div className="container">
                        <TextAnimation
                            as="div"
                            className="section_title style_two text_animation"
                        >
                            <div className="sub_title d-inline-block">
                                <span className="d-flex align-items-center text-uppercase">
                                    Clients Feedback
                                    <Image
                                        src={arrowLongRight}
                                        alt="arrow_long_right"
                                    />
                                </span>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h2 className="mb-0 fw-bold">
                                        Take a Look at What <br />
                                        Our Clients Say
                                    </h2>
                                </div>
                                <div className="col-lg-5">
                                    <p>
                                        Our agency powers growth and success in
                                        the fast-paced digital marketing space.
                                        Let’s turn your vision into reality.
                                    </p>
                                </div>
                            </div>
                        </TextAnimation>
                        <FeedbackSlider />
                    </div>
                </div>
                {/* End Feedback Area */}
                {/* Team Area */}
                <div className="team_area pt-150">
                    <div className="container">
                        <TextAnimation
                            as="div"
                            className="section_title text-center mx-auto text_animation"
                        >
                            <div className="sub_title d-inline-block">
                                <span className="d-flex align-items-center text-uppercase">
                                    Branding Agency People
                                    <Image
                                        src={arrowLongRight}
                                        alt="arrow_long_right"
                                    />
                                </span>
                            </div>
                            <h2 className="mb-0 fw-bold">
                                Leading Digital Minds Working for Your Success
                            </h2>
                        </TextAnimation>
                    </div>
                    <div className="container-fluid">
                        <SlideInUp selector=".row">
                            <div
                                className="row align-items-center justify-content-center"
                                data-cues="slideInUp"
                                data-group="team_list"
                            >
                                <div className="col-lg-4 col-sm-6">
                                    <div className="team_member position-relative">
                                        <Image src={team1} alt="team" />
                                        <div className="content">
                                            <span className="d-block text-white">
                                                Founder
                                            </span>
                                            <h3 className="mb-0 text-white fw-semibold">
                                                Megan Wilson
                                            </h3>
                                        </div>
                                        <div className="socials lh-1 d-flex align-items-center">
                                            <a href="#" target="_blank">
                                                <i className="ri-facebook-fill" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <i className="ri-instagram-line" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <i className="ri-twitter-x-line" />
                                            </a>
                                            <a href="#" target="_blank">
                                                <i className="ri-linkedin-fill" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="team_member position-relative">
                                                        <Image
                                                            src={team2}
                                                            alt="team"
                                                        />
                                                        <div className="content">
                                                            <span className="d-block text-white">
                                                                Co-founder
                                                            </span>
                                                            <h3 className="mb-0 text-white fw-semibold">
                                                                Zylen Orion
                                                            </h3>
                                                        </div>
                                                        <div className="socials lh-1 d-flex align-items-center">
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-facebook-fill" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-instagram-line" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-twitter-x-line" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-linkedin-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="team_member position-relative">
                                                        <Image
                                                            src={team3}
                                                            alt="team"
                                                        />
                                                        <div className="content">
                                                            <span className="d-block text-white">
                                                                Manager
                                                            </span>
                                                            <h3 className="mb-0 text-white fw-semibold">
                                                                Veyron Lorien
                                                            </h3>
                                                        </div>
                                                        <div className="socials lh-1 d-flex align-items-center">
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-facebook-fill" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-instagram-line" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-twitter-x-line" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-linkedin-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="team_member position-relative">
                                                        <Image
                                                            src={team4}
                                                            alt="team"
                                                        />
                                                        <div className="content">
                                                            <span className="d-block text-white">
                                                                Web Developer
                                                            </span>
                                                            <h3 className="mb-0 text-white fw-semibold">
                                                                Nyxelle Daxel
                                                            </h3>
                                                        </div>
                                                        <div className="socials lh-1 d-flex align-items-center">
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-facebook-fill" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-instagram-line" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-twitter-x-line" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-linkedin-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="team_member position-relative">
                                                        <Image
                                                            src={team5}
                                                            alt="team"
                                                        />
                                                        <div className="content">
                                                            <span className="d-block text-white">
                                                                Web Designer
                                                            </span>
                                                            <h3 className="mb-0 text-white fw-semibold">
                                                                Serenya Fenrir
                                                            </h3>
                                                        </div>
                                                        <div className="socials lh-1 d-flex align-items-center">
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-facebook-fill" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-instagram-line" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-twitter-x-line" />
                                                            </a>
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                            >
                                                                <i className="ri-linkedin-fill" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Team Area */}
                {/* FAQ Area */}
                <div className="faq_area bg_image">
                    <div className="white_top_rectangle bg_f8f9fd" />
                    <div className="container ptb-150">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="faq_content">
                                    <div className="sub_title d-inline-block text-white">
                                        <span className="d-flex align-items-center text-uppercase">
                                            FAQ
                                            <Image
                                                src={whiteArrowLongRight}
                                                alt="white_arrow_long_right"
                                            />
                                        </span>
                                    </div>
                                    <TextAnimation className="text-white text_animation fw-bold">
                                        Have Questions? We’ve got Answers
                                    </TextAnimation>
                                    <SlideInUp
                                        selector=".accordion"
                                        delay={0.3}
                                    >
                                        <div
                                            className="accordion"
                                            id="faqAccordion"
                                            data-cues="slideInUp"
                                            data-group="faq_content"
                                        >
                                            <div className="accordion-item rounded-0 bg-transparent">
                                                <button
                                                    className="accordion-button d-block text-start p-0 fw-semibold bg-transparent shadow-none"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    What is the difference
                                                    between SEO and PPC?
                                                </button>
                                                <div
                                                    id="collapseOne"
                                                    className="accordion-collapse collapse show"
                                                    data-bs-parent="#faqAccordion"
                                                >
                                                    <div className="accordion-body px-0 pb-0">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit, sed
                                                            do eiusmod tempor
                                                            incidid unt ut labo
                                                            magna.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item rounded-0 bg-transparent">
                                                <button
                                                    className="accordion-button d-block text-start p-0 fw-semibold bg-transparent shadow-none collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    What is included in your SEO
                                                    services?
                                                </button>
                                                <div
                                                    id="collapseTwo"
                                                    className="accordion-collapse collapse"
                                                    data-bs-parent="#faqAccordion"
                                                >
                                                    <div className="accordion-body px-0 pb-0">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit, sed
                                                            do eiusmod tempor
                                                            incidid unt ut labo
                                                            magna.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item rounded-0 bg-transparent">
                                                <button
                                                    className="accordion-button d-block text-start p-0 fw-semibold bg-transparent shadow-none collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Do you provide support after
                                                    the campaign ends?
                                                </button>
                                                <div
                                                    id="collapseThree"
                                                    className="accordion-collapse collapse"
                                                    data-bs-parent="#faqAccordion"
                                                >
                                                    <div className="accordion-body px-0 pb-0">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit, sed
                                                            do eiusmod tempor
                                                            incidid unt ut labo
                                                            magna.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SlideInUp>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div
                                    className="faq_image position-relative z-1"
                                    data-cue="slideInUp"
                                >
                                    <Image src={faqImage} alt="faq-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="white_bottom_rectangle bg_f8f9fd" />
                </div>
                {/* End FAQ Area */}
                {/* Text Slider Area */}
                <div className="text_slider_area overflow-hidden">
                    <SlideInUp selector=".scroll_text_marquee" individual>
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
                {/* Blog Area */}
                <div className="blog_area pt-150">
                    <div className="container">
                        <TextAnimation
                            as="div"
                            className="section_title style_two text_animation"
                        >
                            <div className="sub_title d-inline-block">
                                <span className="d-flex align-items-center text-uppercase">
                                    Read Articles
                                    <Image
                                        src={arrowLongRight}
                                        alt="arrow_long_right"
                                    />
                                </span>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h2 className="mb-0 fw-bold">
                                        Dive Into Our Branding &amp; Growth
                                        Articles
                                    </h2>
                                </div>
                                <div className="col-lg-5">
                                    <p>
                                        Our agency powers growth and success in
                                        the fast-paced digital marketing space.
                                        Let’s turn your vision into reality.
                                    </p>
                                </div>
                            </div>
                        </TextAnimation>
                        <SlideInUp selector=".blog_article_post">
                            <div
                                className="blog_articles_posts"
                                data-cues="slideInUp"
                                data-group="blog_articles_posts"
                            >
                                <div className="blog_article_post">
                                    <div
                                        className="inner position-relative z-1"
                                        style={{
                                            backgroundImage:
                                                "url(assets/images/blogs-two/blog1.jpg)",
                                        }}
                                    >
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <div className="fw-medium date">
                                                    September 22, 2025
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <a
                                                    href="blog-single.html"
                                                    className="title fw-semibold d-inline-block"
                                                >
                                                    Optimizing Search Algorithms
                                                    to Boost Regional Reach
                                                </a>
                                            </div>
                                            <div className="col-lg-3 text-lg-end">
                                                <span className="author fw-medium">
                                                    By{" "}
                                                    <a href="blog.html">
                                                        Maximus Archer
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="col-lg-3 text-lg-end">
                                                <a
                                                    href="blog-single.html"
                                                    className="details_link_btn d-inline-block position-relative"
                                                >
                                                    <span className="d-inline-block position-relative">
                                                        Read More
                                                    </span>
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_article_post">
                                    <div
                                        className="inner position-relative z-1"
                                        style={{
                                            backgroundImage:
                                                "url(assets/images/blogs-two/blog2.jpg)",
                                        }}
                                    >
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <div className="fw-medium date">
                                                    September 21, 2025
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <a
                                                    href="blog-single.html"
                                                    className="title fw-semibold d-inline-block"
                                                >
                                                    Using Cold Emails to Drive
                                                    Business Growth
                                                </a>
                                            </div>
                                            <div className="col-lg-3 text-lg-end">
                                                <span className="author fw-medium">
                                                    By{" "}
                                                    <a href="blog.html">
                                                        Daxel Fenrir
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="col-lg-3 text-lg-end">
                                                <a
                                                    href="blog-single.html"
                                                    className="details_link_btn d-inline-block position-relative"
                                                >
                                                    <span className="d-inline-block position-relative">
                                                        Read More
                                                    </span>
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_article_post">
                                    <div
                                        className="inner position-relative z-1"
                                        style={{
                                            backgroundImage:
                                                "url(assets/images/blogs-two/blog3.jpg)",
                                        }}
                                    >
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <div className="fw-medium date">
                                                    September 20, 2025
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <a
                                                    href="blog-single.html"
                                                    className="title fw-semibold d-inline-block"
                                                >
                                                    Find Engaging Ideas for Your
                                                    Social Media Posts
                                                </a>
                                            </div>
                                            <div className="col-lg-3 text-lg-end">
                                                <span className="author fw-medium">
                                                    By{" "}
                                                    <a href="blog.html">
                                                        Vespera Solenne
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="col-lg-3 text-lg-end">
                                                <a
                                                    href="blog-single.html"
                                                    className="details_link_btn d-inline-block position-relative"
                                                >
                                                    <span className="d-inline-block position-relative">
                                                        Read More
                                                    </span>
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Blog Area */}
                {/* Footer Area */}
                <footer className="footer_area">
                    <div className="white_top_rectangle bg_f8f9fd" />
                    <div className="container pt-150">
                        <div className="footer_content">
                            <TextAnimation className="text-white text_animation fw-bold">
                                Have an Idea?
                            </TextAnimation>
                            <TextAnimation className="text-white text_animation fw-bold">
                                Let&apos;s Work Together!
                            </TextAnimation>
                            <Link
                                href="contact"
                                className="btn primary_btn"
                                data-cue="slideInUp"
                            >
                                <span className="d-inline-block position-relative">
                                    Get Started for Free{" "}
                                    <i className="ri-arrow-right-up-line" />
                                </span>
                            </Link>
                        </div>
                        <div className="pt-150" />
                        <SlideInUp selector=".footer_inner_box" individual>
                            <div
                                className="footer_inner_box"
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
                                            <div className="newsletter_box">
                                                <h4 className="fw-semibold text-white">
                                                    Follow the Newest Trends
                                                </h4>
                                                <form>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Email address"
                                                    />
                                                    <button type="button">
                                                        Subscribe
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="footer_widgets_list">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="footer_widget">
                                                        <h3 className="text-white fw-semibold">
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
                                                        <h3 className="text-white fw-semibold">
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
                                                        <h3 className="text-white fw-semibold">
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
                        <div className="copyright_footer">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <div className="socials d-flex align-items-center">
                                        <a
                                            href="#"
                                            target="_blank"
                                            className="d-block"
                                        >
                                            <i className="ri-twitter-x-line" />
                                        </a>
                                        <a
                                            href="#"
                                            target="_blank"
                                            className="d-block"
                                        >
                                            <i className="ri-facebook-fill" />
                                        </a>
                                        <a
                                            href="#"
                                            target="_blank"
                                            className="d-block"
                                        >
                                            <i className="ri-linkedin-fill" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-7 text-md-end">
                                    <p className="text-uppercase">
                                        ©{" "}
                                        <span className="fw-semibold">
                                            Lunex
                                        </span>
                                        . All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End Footer Area */}
                {/* Back To Top */}
                <BackToTop />
                {/* End Back To Top */}
            </div>
        </div>
    );
};

export default page;
