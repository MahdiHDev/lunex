import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import TextAnimation2 from "@/components/common/TextAnimation2";
import AwesomeFunfacts from "@/components/index5/AwesomeFunfacts";
import AwesomeTeamSection from "@/components/index5/AwesomeTeamSection";
import AwesomeTestimonials from "@/components/index5/AwesomeTestimonial";
import Navbar5 from "@/components/navbars/Navbar5";
import Image from "next/image";
import Link from "next/link";

import about4 from "public/assets/images/abouts/about4.jpg";
import about5 from "public/assets/images/abouts/about5.jpg";
import awwwards from "public/assets/images/awwwards.svg";
import circle2 from "public/assets/images/banners/circle2.png";
import blog18 from "public/assets/images/blogs/blog18.jpg";
import blog19 from "public/assets/images/blogs/blog19.jpg";
import blog20 from "public/assets/images/blogs/blog20.jpg";
import envato from "public/assets/images/envato.svg";
import logo from "public/assets/images/logo.svg";
import circleText from "public/assets/images/objects/circle_text.png";
import footerBorder from "public/assets/images/objects/footer_border.png";
import heartBeat from "public/assets/images/objects/heart_beat.png";
import partner1 from "public/assets/images/partners/partner1.svg";
import partner2 from "public/assets/images/partners/partner2.svg";
import partner3 from "public/assets/images/partners/partner3.svg";
import partner4 from "public/assets/images/partners/partner4.svg";
import partner5 from "public/assets/images/partners/partner5.svg";
import partner6 from "public/assets/images/partners/partner6.svg";
import productManager from "public/assets/images/product_manager.jpg";
import service13 from "public/assets/images/services/service13.png";

const page = () => {
    return (
        <div>
            <div>
                {/* Start Navbar Area */}
                <Navbar5 />
                {/* End Navbar Area */}

                {/* Main Home Banner Area */}
                <div className="main_home_banner_area position-relative z-1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <SlideInUp selector=".main_home_banner_content">
                                    <div
                                        className="main_home_banner_content"
                                        data-cues="slideInUp"
                                        data-group="main_home_banner_content"
                                    >
                                        <h1 className="text-uppercase">
                                            We{" "}
                                            <Image src={circle2} alt="circle" />{" "}
                                            Design Creative Ideas
                                        </h1>
                                        <Link
                                            href="contact"
                                            className="btn primary_btn"
                                        >
                                            <span className="d-inline-block position-relative">
                                                Start a Project{" "}
                                                <i className="ri-arrow-right-long-line" />
                                            </span>
                                        </Link>
                                        <span className="d-block sub_title fw-medium text-uppercase">
                                            No stress, no long commitments
                                        </span>
                                    </div>
                                </SlideInUp>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="main_home_banner_text position-relative">
                                    <span className="sub_title d-block fw-bold">
                                        Lunex
                                    </span>
                                    <TextAnimation
                                        as="p"
                                        className="fw-medium text_animation"
                                    >
                                        Our conviction was that design wasn’t
                                        just about visuals—it was a powerful
                                        force for business transformation.
                                    </TextAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll_down_text">
                        <div className="dot" />
                        <span className="d-block fw-medium text-uppercase">
                            Scroll down
                        </span>
                    </div>
                </div>
                {/* End Main Home Banner Area */}
                {/* Awesome Works Area */}
                <div className="awesome_about_us_area ptb-150">
                    <div className="container-fluid max_w_1905px">
                        <TextAnimation2
                            as="div"
                            className="awesome_about_us_title text_animation"
                        >
                            <div className="text-animation-item">
                                <h2 className="mb-0">
                                    Our California-based{" "}
                                    <span>creative agency</span> is known for
                                    combining creativity &amp; expertise to
                                    deliver outstanding UI/UX designs with{" "}
                                    <span>innovative</span> ideas and
                                    user-friendly functionality.
                                </h2>
                            </div>
                        </TextAnimation2>
                        <SlideInUp
                            selector="p, .btn, .circle_text"
                            individual
                            delay={0.1}
                        >
                            <div
                                className="awesome_about_us_content position-relative mx-auto"
                                data-cues="slideInUp"
                                data-group="awesome_about_us_content"
                            >
                                <p className="fw-medium">
                                    We provide a world-class creative design
                                    team on demand, ready to design, build,
                                    deliver, and scale your vision with
                                    unmatched efficiency. For us, success is
                                    best measured by clients who choose to
                                    partner with us repeatedly. In fact, over
                                    half of our clients collaborate with us
                                    beyond their initial project.
                                </p>
                                <Link href="about" className="btn black_btn">
                                    <span className="d-inline-block position-relative">
                                        Know More Us{" "}
                                        <i className="ri-arrow-right-long-line" />
                                    </span>
                                </Link>

                                <div className="circle_text text-center">
                                    <Image src={circleText} alt="circle_text" />
                                    <span className="d-block text-uppercase mx-auto">
                                        Since 2010
                                    </span>
                                </div>
                            </div>
                        </SlideInUp>
                        <SlideInUp selector=".row">
                            <div
                                className="awesome_about_us_image mx-auto position-relative"
                                data-cues="slideInUp"
                                data-group="awesome_about_us_image"
                            >
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="image">
                                            <Image src={about4} alt="about4" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="image">
                                            <Image src={about5} alt="about5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>

                {/* End Awesome About Us Area */}
                {/* Awesome Funfacts Area */}
                <AwesomeFunfacts />
                {/* End Awesome Funfacts Area */}
                {/* Awesome Services Area */}
                <div className="awesome_services_area ptb-150">
                    <div className="container-fluid max_w_1905px">
                        <div className="section_title style_five">
                            <TextAnimation className="mb-0 text_animation">
                                Services We Provide to make our client Happy
                            </TextAnimation>
                        </div>
                    </div>
                    <div className="border_bottom_style" />
                    <div className="container-fluid max_w_1905px">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="awesome_services_image text-center position-sticky">
                                    <Image src={service13} alt="service6" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <SlideInUp selector=".item_box">
                                    <div
                                        className="awesome_services_list"
                                        data-cues="slideInUp"
                                        data-group="awesome_services_list"
                                    >
                                        <div className="item_box">
                                            <div className="row">
                                                <div className="col-xl-3">
                                                    <div className="text d-flex align-items-center">
                                                        <div className="dot rounded-circle" />
                                                        <div className="number fw-medium">
                                                            01
                                                        </div>
                                                        <span className="d-block sub_title fw-medium">
                                                            UI/UX
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9">
                                                    <div className="content position-relative">
                                                        <h3 className="text-uppercase">
                                                            <Link href="service-single">
                                                                User Experience
                                                                (UX) Research
                                                            </Link>
                                                        </h3>
                                                        <p>
                                                            Creating product
                                                            concepts that bridge
                                                            great ideas and user
                                                            expectations.
                                                        </p>
                                                        <Link
                                                            href="service-single"
                                                            className="details_link_btn d-flex align-items-center justify-content-center"
                                                        >
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item_box">
                                            <div className="row">
                                                <div className="col-xl-3">
                                                    <div className="text d-flex align-items-center">
                                                        <div className="dot rounded-circle" />
                                                        <div className="number fw-medium">
                                                            02
                                                        </div>
                                                        <span className="d-block sub_title fw-medium">
                                                            UI/UX
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9">
                                                    <div className="content position-relative">
                                                        <h3 className="text-uppercase">
                                                            <Link href="service-single">
                                                                User Interface
                                                                (UI) Design
                                                            </Link>
                                                        </h3>
                                                        <p>
                                                            Creating product
                                                            concepts that bridge
                                                            great ideas and user
                                                            expectations.
                                                        </p>
                                                        <Link
                                                            href="service-single"
                                                            className="details_link_btn d-flex align-items-center justify-content-center"
                                                        >
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item_box">
                                            <div className="row">
                                                <div className="col-xl-3">
                                                    <div className="text d-flex align-items-center">
                                                        <div className="dot rounded-circle" />
                                                        <div className="number fw-medium">
                                                            03
                                                        </div>
                                                        <span className="d-block sub_title fw-medium">
                                                            Graphics Design
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9">
                                                    <div className="content position-relative">
                                                        <h3 className="text-uppercase">
                                                            <Link href="service-single">
                                                                Branding &amp;
                                                                Identity Design
                                                            </Link>
                                                        </h3>
                                                        <p>
                                                            Creating product
                                                            concepts that bridge
                                                            great ideas and user
                                                            expectations.
                                                        </p>
                                                        <Link
                                                            href="service-single"
                                                            className="details_link_btn d-flex align-items-center justify-content-center"
                                                        >
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item_box">
                                            <div className="row">
                                                <div className="col-xl-3">
                                                    <div className="text d-flex align-items-center">
                                                        <div className="dot rounded-circle" />
                                                        <div className="number fw-medium">
                                                            04
                                                        </div>
                                                        <span className="d-block sub_title fw-medium">
                                                            Product Design
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9">
                                                    <div className="content position-relative">
                                                        <h3 className="text-uppercase">
                                                            <Link href="service-single">
                                                                Design System
                                                                Development
                                                            </Link>
                                                        </h3>
                                                        <p>
                                                            Creating product
                                                            concepts that bridge
                                                            great ideas and user
                                                            expectations.
                                                        </p>
                                                        <Link
                                                            href="service-single"
                                                            className="details_link_btn d-flex align-items-center justify-content-center"
                                                        >
                                                            <i className="ri-arrow-right-up-line" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SlideInUp>
                                <div className="awesome_services_btn">
                                    <Link
                                        href="services"
                                        className="btn primary_btn"
                                    >
                                        <span className="d-inline-block position-relative">
                                            View Services{" "}
                                            <i className="ri-arrow-right-long-line" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Awesome Services Area */}
                <div className="border_bottom_style mb_70" />
                {/* Video Area */}
                <div className="video_area pt-150">
                    <div className="container-fluid">
                        <SlideInUp selector=".col-xl-6 , .col-lg-7,  .col-md-8">
                            <div
                                className="row align-items-center"
                                data-cues="slideInUp"
                                data-group="video_area"
                            >
                                <div className="col-xl-6 col-lg-7 col-md-8">
                                    <div className="video_content">
                                        <h3 className="text-uppercase fw-medium">
                                            Their dedication to creativity and
                                            professionalism was evident at every
                                            point in the project.
                                        </h3>
                                        <div className="info d-flex align-items-center">
                                            <Image
                                                src={productManager}
                                                alt="product_manager"
                                            />
                                            <div>
                                                <h4 className="text-uppercase fw-medium">
                                                    David Korren
                                                </h4>
                                                <span className="d-block">
                                                    Product Manager
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-4">
                                    <div className="video_btn_box text-center">
                                        <a
                                            href="https://www.youtube.com/watch?v=ObKsCs5mYGQ"
                                            className="video_btn popup_video popup-youtube"
                                        >
                                            <i className="ri-play-fill" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                    <div className="text_slider_area overflow-hidden pt-150">
                        <TextAnimation className="container-fluid px-0 text_animation">
                            <div className="scroll_text_marquee d-flex align-items-center justify-content-center">
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                                <h3 className="mb-0 text-uppercase fw-semibold lh-1">
                                    Creative <span>Design</span> Agency
                                </h3>
                            </div>
                        </TextAnimation>
                    </div>
                </div>
                {/* Video Area */}
                <div className="border_bottom_style mt_70" />
                {/* Brands Area */}
                <div className="brands_area ptb-150">
                    <div className="container-fluid max_w_1905px">
                        <div className="section_title style_five">
                            <TextAnimation className="mb-0 text_animation">
                                We&apos;re happy to work with largest brands
                            </TextAnimation>
                        </div>
                        <SlideInUp selector=".brands_inner_box">
                            <div
                                className="brands_inner_box"
                                data-cue="slideInUp"
                            >
                                <div className="grid">
                                    <div className="brand_item text-center">
                                        <Image
                                            src={partner1}
                                            alt="brand-image"
                                        />
                                    </div>
                                    <div className="brand_item text-center">
                                        <Image
                                            src={partner2}
                                            alt="brand-image"
                                        />
                                    </div>
                                    <div className="brand_item text-center">
                                        <Image
                                            src={partner3}
                                            alt="brand-image"
                                        />
                                    </div>
                                    <div className="brand_item text-center">
                                        <Image
                                            src={partner4}
                                            alt="brand-image"
                                        />
                                    </div>
                                    <div className="brand_item text-center">
                                        <Image
                                            src={partner5}
                                            alt="brand-image"
                                        />
                                    </div>
                                    <div className="brand_item text-center">
                                        <Image
                                            src={partner6}
                                            alt="brand-image"
                                        />
                                    </div>
                                    <div className="brand_item text-center">
                                        <Image
                                            src={partner6}
                                            alt="brand-image"
                                        />
                                    </div>
                                    <div className="brand_item text-center">
                                        <Image
                                            src={partner5}
                                            alt="brand-image"
                                        />
                                    </div>
                                    <div className="brand_item text-center">
                                        <Image
                                            src={partner4}
                                            alt="brand-image"
                                        />
                                    </div>
                                    <div className="brand_item text-center">
                                        <Image
                                            src={partner3}
                                            alt="brand-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Brands Area */}
                {/* Start Awesome Testimonials Area */}
                <div className="awesome_testimonials_area">
                    <div className="container-fluid max_w_1905px">
                        <div className="awesome_testimonials_inner">
                            <div className="section_title style_five">
                                <TextAnimation className="mb-0 text-animation">
                                    See What Clients Say About Cooperation with
                                    Lunex
                                </TextAnimation>
                            </div>
                            <AwesomeTestimonials />
                        </div>
                    </div>
                </div>
                {/* End Awesome Testimonials Area */}
                {/* Awesome Team Area */}
                <AwesomeTeamSection />
                {/* End Awesome Team Area */}
                {/* Awards Area */}
                <div className="awards_area">
                    <div className="container-fluid max_w_1905px">
                        <div className="section_title style_five">
                            <TextAnimation className="mb-0 text_animation">
                                We prioritize excellence over volume.
                            </TextAnimation>
                        </div>
                    </div>
                    <div className="border_bottom_style" />
                    <div className="container-fluid max_w_1905px">
                        <div className="awards_inner_area">
                            <div className="row align-items-center">
                                <div className="col-xxl-7 col-lg-5">
                                    <div className="content">
                                        <h3 className="text-uppercase">
                                            Awards
                                        </h3>
                                        <p>Agency is a full-service agency</p>
                                        <Link
                                            href="contact"
                                            className="btn primary_btn"
                                        >
                                            <span className="d-inline-block position-relative">
                                                Read More{" "}
                                                <i className="ri-arrow-right-long-line" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xxl-5 col-lg-7">
                                    <div className="box">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="item">
                                                    <Image
                                                        src={envato}
                                                        alt="envato"
                                                    />
                                                    <span className="d-block text-uppercase fw-medium">
                                                        3X SITE OF THE DAY
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="item">
                                                    <Image
                                                        src={awwwards}
                                                        alt="awwwards"
                                                    />
                                                    <span className="d-block text-uppercase fw-medium">
                                                        3X SITE OF THE DAY
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Awards Area */}
                {/* Awesome Blog Area */}
                <div className="awesome_blog_area ptb-150">
                    <div className="container-fluid max_w_1905px">
                        <div className="awesome_blog_inner">
                            <div className="section_title style_five">
                                <TextAnimation className="mb-0 text_animation">
                                    Exclusive insight from visual experts on
                                    design
                                </TextAnimation>
                            </div>
                            <div className="border_bottom_style" />
                            <SlideInUp selector=".awesome_blog_list">
                                <div
                                    className="awesome_blog_list"
                                    data-cues="slideInUp"
                                    data-group="awesome_blog_list"
                                >
                                    <div className="item_box position-relative">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="content">
                                                    <div className="info d-flex align-items-center">
                                                        <Link
                                                            href="blog"
                                                            className="fw-medium text-uppercase"
                                                        >
                                                            Awards
                                                        </Link>
                                                        <span className="d-block fw-medium">
                                                            5 min.
                                                        </span>
                                                    </div>
                                                    <h3 className="text-uppercase">
                                                        <Link href="blog-single">
                                                            Celebrating Four
                                                            Wins in Branding
                                                            &amp; Web Design
                                                        </Link>
                                                    </h3>
                                                    <span className="date d-block fw-medium">
                                                        11.01.2025
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="text">
                                                    <p>
                                                        At Lunex Agency, a
                                                        leading name in branding
                                                        and web design, we’re
                                                        filled with pride and
                                                        excitement as we
                                                        celebrate a remarkable
                                                        achievement. We’re
                                                        delighted to share that
                                                        we’ve been recognized
                                                        with four prestigious
                                                        awards, honoring our
                                                        exceptional expertise in
                                                        UX/UI design,
                                                        innovation, and
                                                        outstanding web design
                                                        excellence.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            href="blog-single"
                                            className="image d-block"
                                        >
                                            <Image src={blog18} alt="blog16" />
                                        </Link>
                                    </div>
                                    <div className="item_box position-relative">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="content">
                                                    <div className="info d-flex align-items-center">
                                                        <Link
                                                            href="blog"
                                                            className="fw-medium text-uppercase"
                                                        >
                                                            News
                                                        </Link>
                                                        <span className="d-block fw-medium">
                                                            3 min.
                                                        </span>
                                                    </div>
                                                    <h3 className="text-uppercase">
                                                        <Link href="blog-single">
                                                            How to Build a
                                                            Distinctive &amp;
                                                            Iconic Brand
                                                            Identity
                                                        </Link>
                                                    </h3>
                                                    <span className="date d-block fw-medium">
                                                        10.01.2025
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="text">
                                                    <p>
                                                        At Lunex Agency, a
                                                        leading name in branding
                                                        and web design, we’re
                                                        filled with pride and
                                                        excitement as we
                                                        celebrate a remarkable
                                                        achievement. We’re
                                                        delighted to share that
                                                        we’ve been recognized
                                                        with four prestigious
                                                        awards, honoring our
                                                        exceptional expertise in
                                                        UX/UI design,
                                                        innovation, and
                                                        outstanding web design
                                                        excellence.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            href="blog-single"
                                            className="image d-block"
                                        >
                                            <Image src={blog19} alt="blog17" />
                                        </Link>
                                    </div>
                                    <div className="item_box position-relative">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="content">
                                                    <div className="info d-flex align-items-center">
                                                        <Link
                                                            href="blog"
                                                            className="fw-medium text-uppercase"
                                                        >
                                                            Lunex
                                                        </Link>
                                                        <span className="d-block fw-medium">
                                                            3 min.
                                                        </span>
                                                    </div>
                                                    <h3 className="text-uppercase">
                                                        <Link href="blog-single">
                                                            Celebrating Four
                                                            Wins in Branding
                                                            &amp; Web Design
                                                        </Link>
                                                    </h3>
                                                    <span className="date d-block fw-medium">
                                                        09.01.2025
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className="text">
                                                    <p>
                                                        At Lunex Agency, a
                                                        leading name in branding
                                                        and web design, we’re
                                                        filled with pride and
                                                        excitement as we
                                                        celebrate a remarkable
                                                        achievement. We’re
                                                        delighted to share that
                                                        we’ve been recognized
                                                        with four prestigious
                                                        awards, honoring our
                                                        exceptional expertise in
                                                        UX/UI design,
                                                        innovation, and
                                                        outstanding web design
                                                        excellence.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            href="blog-single"
                                            className="image d-block"
                                        >
                                            <Image src={blog20} alt="blog18" />
                                        </Link>
                                    </div>
                                </div>
                            </SlideInUp>
                        </div>
                    </div>
                </div>
                {/* End Awesome Blog Area */}
                {/* Text Slider Area */}
                <div className="text_slider_area position-relative bg_black overflow-hidden">
                    <div className="container-fluid px-0">
                        <div className="scroll_text_marquee d-flex align-items-center justify-content-center">
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                            <h3 className="mb-0 text-white text-uppercase fw-medium lh-1">
                                Contact Us
                            </h3>
                            <Image
                                src={heartBeat}
                                className="w-auto d-inline-block"
                                alt="heart_beat"
                            />
                        </div>
                    </div>
                    <Link
                        href="contact"
                        className="d-block position-absolute start-0 top-0 bottom-0 end-0"
                    />
                </div>
                {/* End Text Slider Area */}
                {/* Main Footer Area */}
                <footer className="main_footer_area position-relative z-1 pt-150">
                    <div className="container-fluid max_w_1905px">
                        <div className="main_footer_top">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-6 col-md-6">
                                    <div className="main_footer_title">
                                        <h2 className="mb-0 text-uppercase lh-1">
                                            Let&apos;s Talk.
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="main_footer_btn">
                                        <Link
                                            href="contact"
                                            className="btn primary_btn"
                                        >
                                            <span className="d-inline-block position-relative">
                                                Hire Our Team{" "}
                                                <i className="ri-arrow-right-long-line" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main_footer_middle mx-auto">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="main_footer_widget">
                                        <h3 className="lh-1 text-uppercase">
                                            Social
                                        </h3>
                                        <ul className="custom_links p-0 mb-0 list-unstyled">
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        LinkedIn
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Twitter
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Instagram
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Dribbble
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Behance
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Pinterest
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="main_footer_widget">
                                        <h3 className="lh-1 text-uppercase">
                                            Company
                                        </h3>
                                        <ul className="custom_links p-0 mb-0 list-unstyled">
                                            <li>
                                                <Link href="/">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Home
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="about">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        About Us
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="services">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Services
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="works">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Projects
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="blog">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Blogs
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="contact">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Contact Us
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="main_footer_widget">
                                        <h3 className="lh-1 text-uppercase">
                                            Services
                                        </h3>
                                        <ul className="custom_links p-0 mb-0 list-unstyled">
                                            <li>
                                                <a href="#">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Digital Advertising
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Social Media Graphics
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Web Design
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Branding &amp; Marketing
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Content Marketing
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="ri-arrow-right-up-line" />
                                                    <span className="d-inline-block">
                                                        Email Marketing
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main_footer_bottom">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="back_to_top d-flex align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <i className="ri-arrow-up-line" />
                                        </div>
                                        <span className="d-block lh-1 text-uppercase">
                                            Back to top
                                        </span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="main_footer_logo">
                                        <Link
                                            href="/"
                                            className="d-inline-block"
                                        >
                                            <Image src={logo} alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_border">
                        <Image src={footerBorder} alt="footer_border" />
                    </div>
                </footer>
                {/* End Main Footer Area */}
            </div>
        </div>
    );
};

export default page;
