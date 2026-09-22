import BackToTop from "@/components/common/BackToTop";
import ScrambleText from "@/components/common/ScrambleText";
import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import Footer2 from "@/components/index4/Footer2";
import MarketingVideoModal from "@/components/index4/MarketingVideoModal";
import PartnerSlider from "@/components/index4/PartnerSlider";
import Testimonialslider3 from "@/components/index4/TestimonialSlider3";
import Navbar4 from "@/components/navbars/Navbar4";
import Link from "next/link";

const page = () => {
    return (
        <div>
            <ScrambleText />
            {/* Navbar section starts Here  */}
            <Navbar4 />
            {/* Navbar section starts Here  */}

            <div>
                {/* Start Marketing Agency Banner Area */}
                <div className="marketing-agency-banner-area position-relative z-1 pb-150">
                    <SlideInUp
                        selector=".sub-title, h1, p, .slide-animation-item"
                        className="container"
                    >
                        <div
                            className="marketing-agency-banner-content mx-auto text-center position-relative z-1"
                            data-cues="slideInUp"
                            data-group="marketingAgencyBannerContent"
                        >
                            <span className="sub-title d-inline-block">
                                11+ awards and counting
                            </span>
                            <h1>Paving your digital path</h1>
                            <p className="mx-auto">
                                We help you navigate the ever-changing digital
                                landscape with innovative solutions, ensuring
                                your business thrives and evolves with the
                                digital age.
                            </p>
                            <div className="slide-animation-item">
                                <a
                                    href="contact.html"
                                    className="link-btn menu_link d-inline-block rounded-circle"
                                >
                                    <span className="menu_link-text">
                                        Let&apos;s Chat
                                    </span>
                                </a>
                            </div>
                        </div>
                    </SlideInUp>
                </div>
                {/* End Marketing Agency Banner Area */}
                {/* Start Partners Area */}
                <PartnerSlider />
                {/* End Partners Area */}
                {/* Start Video Area */}
                <div className="video-area bg-color ptb-150">
                    <SlideInUp
                        selector="h2, .box, .shape5"
                        individual
                        delay={0}
                        className="container"
                    >
                        <div
                            className="video-content position-relative z-1 text-center"
                            data-cues="slideInUp"
                        >
                            <h2 className="fw-normal mx-auto">
                                We view growth as a continuous journey,{" "}
                                <img
                                    src="assets/images/videos/video3.jpg"
                                    alt="image"
                                />{" "}
                                <span>not merely an outcome.</span>
                            </h2>
                            <MarketingVideoModal />
                            <div className="shape5">
                                <img
                                    src="assets/images/shapes/shape5.svg"
                                    alt="shape5"
                                />
                            </div>
                        </div>
                    </SlideInUp>
                </div>
                {/* End Video Area */}
                {/* Start Services Area */}
                <div className="services-area bg-color pb-125 position-relative z-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="marketing-agency-services-section-title">
                                    <TextAnimation className="fw-normal text-animation">
                                        We&apos;re ready to build &amp; grow the
                                        business
                                    </TextAnimation>
                                    <p>
                                        We’re poised to lay the foundation for
                                        success, bringing innovation, strategy,
                                        &amp; expertise to establish &amp; grow
                                        your business, ensuring long-term impact
                                        &amp; growth in the market.
                                    </p>
                                    <Link
                                        href="services"
                                        className="link-btn menu_link d-inline-block text-center rounded-circle"
                                    >
                                        <span className="menu_link-text">
                                            View All
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <SlideInUp
                                    selector=".single-service-item"
                                    individual
                                    delay={0.1}
                                >
                                    <div className="row" data-cues="slideInUp">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single-service-item">
                                                <a
                                                    href="service-single.html"
                                                    className="link-btn d-inline-block rounded-circle text-center"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                                <h3 className="fw-normal">
                                                    <a href="service-single.html">
                                                        Brand strategy
                                                    </a>
                                                </h3>
                                                <p>
                                                    We help define your brand’s
                                                    identity and create a
                                                    roadmap for consistent
                                                    growth, positioning, and
                                                    market presence.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single-service-item">
                                                <a
                                                    href="service-single.html"
                                                    className="link-btn d-inline-block rounded-circle text-center"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                                <h3 className="fw-normal">
                                                    <a href="service-single.html">
                                                        Creative design
                                                    </a>
                                                </h3>
                                                <p>
                                                    From logos to websites, our
                                                    creative design solutions
                                                    bring your brand to life
                                                    with visually stunning and
                                                    user-centric designs.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single-service-item">
                                                <a
                                                    href="service-single.html"
                                                    className="link-btn d-inline-block rounded-circle text-center"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                                <h3 className="fw-normal">
                                                    <a href="service-single.html">
                                                        Digital marketing
                                                    </a>
                                                </h3>
                                                <p>
                                                    We craft tailored digital
                                                    marketing strategies that
                                                    engage your audience, boost
                                                    conversions, &amp; build
                                                    brand loyalty across
                                                    multiple platforms.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single-service-item">
                                                <a
                                                    href="service-single.html"
                                                    className="link-btn d-inline-block rounded-circle text-center"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                                <h3 className="fw-normal">
                                                    <a href="service-single.html">
                                                        Web development
                                                    </a>
                                                </h3>
                                                <p>
                                                    Our expert web development
                                                    team creates
                                                    high-performance websites
                                                    &amp; applications that
                                                    enhance experience &amp;
                                                    functionality.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single-service-item">
                                                <a
                                                    href="service-single.html"
                                                    className="link-btn d-inline-block rounded-circle text-center"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                                <h3 className="fw-normal">
                                                    <a href="service-single.html">
                                                        Social media management
                                                    </a>
                                                </h3>
                                                <p>
                                                    We manage &amp; optimize
                                                    your social media presence,
                                                    creating engaging content
                                                    &amp; strategies to grow
                                                    your audience.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="single-service-item">
                                                <a
                                                    href="service-single.html"
                                                    className="link-btn d-inline-block rounded-circle text-center"
                                                >
                                                    <i className="ri-arrow-right-up-line" />
                                                </a>
                                                <h3 className="fw-normal">
                                                    <a href="service-single.html">
                                                        Content creation
                                                    </a>
                                                </h3>
                                                <p>
                                                    We develop compelling
                                                    content, from copywriting to
                                                    video production, designed
                                                    to tell your story &amp;
                                                    connect with your audience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SlideInUp>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Services Area */}
                {/* Start Case Studies Area */}
                <div className="case-studies-area ptb-150">
                    <div className="container">
                        <div className="marketing-agency-section-title position-relative z-1 text-center mx-auto">
                            <div className="dot rounded-circle" />
                            <span className="sub-title d-inline-block">
                                Project showcase
                            </span>
                            <TextAnimation className="fw-normal text-animation">
                                Proven success in driving growth
                            </TextAnimation>
                            <p className="mx-auto">
                                Achieving consistent growth by implementing
                                proven strategies and delivering effective
                                solutions that drive business success.
                            </p>
                        </div>
                        <SlideInUp
                            selector=".single-case-study-item"
                            individual
                            delay={0.1}
                        >
                            <div className="row" data-cues="slideInUp">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-case-study-item">
                                        <a
                                            href="work-single.html"
                                            className="image d-block"
                                        >
                                            <img
                                                src="assets/images/case-studies/case-study2.jpg"
                                                alt="case-study-image"
                                            />
                                        </a>
                                        <div className="content">
                                            <span className="sub-title d-block">
                                                Branding &amp; design
                                            </span>
                                            <h3>
                                                <a href="work-single.html">
                                                    Comprehensive digital
                                                    rebrand and user experience
                                                    overhaul
                                                </a>
                                            </h3>
                                            <ul className="features-list ps-0 mb-0 list-unstyled">
                                                <li className="position-relative">
                                                    <i className="ri-arrow-up-line" />
                                                    Fresh, modern design with a
                                                    responsive layout
                                                </li>
                                                <li className="position-relative">
                                                    <i className="ri-arrow-down-line" />
                                                    Streamlined user experience
                                                    (UX) across platforms
                                                </li>
                                                <li className="position-relative">
                                                    <i className="ri-arrow-up-line" />
                                                    Consistent brand messaging
                                                    across all digital channels
                                                </li>
                                            </ul>
                                            <a
                                                href="work-single.html"
                                                className="link-btn d-inline-block position-relative"
                                            >
                                                Read more{" "}
                                                <i className="ri-arrow-right-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-case-study-item">
                                        <a
                                            href="work-single.html"
                                            className="image d-block"
                                        >
                                            <img
                                                src="assets/images/case-studies/case-study3.jpg"
                                                alt="case-study-image"
                                            />
                                        </a>
                                        <div className="content">
                                            <span className="sub-title d-block">
                                                E-commerce solutions
                                            </span>
                                            <h3>
                                                <a href="work-single.html">
                                                    E-commerce website
                                                    optimization for higher
                                                    conversions
                                                </a>
                                            </h3>
                                            <ul className="features-list ps-0 mb-0 list-unstyled">
                                                <li className="position-relative">
                                                    <i className="ri-arrow-up-line" />
                                                    User-friendly checkout
                                                    process to reduce cart
                                                    abandonment
                                                </li>
                                                <li className="position-relative">
                                                    <i className="ri-arrow-down-line" />
                                                    Personalized product
                                                    recommendations based on
                                                    user behavior
                                                </li>
                                                <li className="position-relative">
                                                    <i className="ri-arrow-up-line" />
                                                    Mobile-first, responsive
                                                    design for a flawless
                                                    shopping experience
                                                </li>
                                            </ul>
                                            <a
                                                href="work-single.html"
                                                className="link-btn d-inline-block position-relative"
                                            >
                                                Read more{" "}
                                                <i className="ri-arrow-right-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-case-study-item">
                                        <a
                                            href="work-single.html"
                                            className="image d-block"
                                        >
                                            <img
                                                src="assets/images/case-studies/case-study4.jpg"
                                                alt="case-study-image"
                                            />
                                        </a>
                                        <div className="content">
                                            <span className="sub-title d-block">
                                                App development
                                            </span>
                                            <h3>
                                                <a href="work-single.html">
                                                    Mobile app redesign to
                                                    enhance user retention and
                                                    functionality
                                                </a>
                                            </h3>
                                            <ul className="features-list ps-0 mb-0 list-unstyled">
                                                <li className="position-relative">
                                                    <i className="ri-arrow-up-line" />
                                                    Improved UI/UX design for
                                                    easy navigation
                                                </li>
                                                <li className="position-relative">
                                                    <i className="ri-arrow-down-line" />
                                                    Performance optimization for
                                                    fast load times
                                                </li>
                                                <li className="position-relative">
                                                    <i className="ri-arrow-up-line" />
                                                    Integration of user feedback
                                                    to enhance features and
                                                    functionality
                                                </li>
                                            </ul>
                                            <a
                                                href="work-single.html"
                                                className="link-btn d-inline-block position-relative"
                                            >
                                                Read more{" "}
                                                <i className="ri-arrow-right-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-case-study-item">
                                        <a
                                            href="work-single.html"
                                            className="image d-block"
                                        >
                                            <img
                                                src="assets/images/case-studies/case-study5.jpg"
                                                alt="case-study-image"
                                            />
                                        </a>
                                        <div className="content">
                                            <span className="sub-title d-block">
                                                Digital marketing
                                            </span>
                                            <h3>
                                                <a href="work-single.html">
                                                    Holistic seo growth strategy
                                                    for long-term organic
                                                    visibility
                                                </a>
                                            </h3>
                                            <ul className="features-list ps-0 mb-0 list-unstyled">
                                                <li className="position-relative">
                                                    <i className="ri-arrow-up-line" />
                                                    In-depth keyword research
                                                    and optimization
                                                </li>
                                                <li className="position-relative">
                                                    <i className="ri-arrow-down-line" />
                                                    On-page SEO (meta tags,
                                                    headings, and content)
                                                    improvements
                                                </li>
                                                <li className="position-relative">
                                                    <i className="ri-arrow-up-line" />
                                                    Link-building strategy to
                                                    increase domain authority
                                                </li>
                                            </ul>
                                            <a
                                                href="work-single.html"
                                                className="link-btn d-inline-block position-relative"
                                            >
                                                Read more{" "}
                                                <i className="ri-arrow-right-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                        <div className="view-projects-btn text-center text-animation">
                            <Link href="works" className="default-btn">
                                View Projects
                                <i className="ri-arrow-right-line" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* End Case Studies Area */}
                {/* Start Boost Area */}
                <div className="boost-area">
                    <div className="container">
                        <div className="boost-content text-center position-relative">
                            <TextAnimation className="fw-normal mx-auto position-relative text-animation">
                                Effortlessly increase your website&apos;s
                                organic traffic
                                <img
                                    src="assets/images/shapes/border3.svg"
                                    alt="border"
                                />
                            </TextAnimation>
                            <p className="mx-auto">
                                Effortlessly increase your website&apos;s
                                organic traffic with our expert SEO strategies.
                                We optimize your site to attract more visitors,
                                enhance user engagement, and improve search
                                engine rankings, helping you achieve long-term
                                growth and visibility without relying on paid
                                ads.
                            </p>
                            <div className="icons">
                                <div className="rounded-circle text-center">
                                    <i className="ri-instagram-line" />
                                </div>
                                <div className="rounded-circle text-center">
                                    <i className="ri-at-line" />
                                </div>
                                <div className="rounded-circle text-center">
                                    <img
                                        src="assets/images/icons/like.svg"
                                        alt="like"
                                    />
                                </div>
                                <div className="rounded-circle text-center">
                                    <i className="ri-twitter-x-line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Boost Area */}
                {/* Start Testimonials Area */}
                <div className="testimonials-area pt-150">
                    <div className="container">
                        <div className="marketing-agency-section-title position-relative z-1 text-center mx-auto">
                            <TextAnimation className="fw-normal text-animation">
                                Don&apos;t just take our word for it—discover
                                some success stories
                            </TextAnimation>
                        </div>
                    </div>
                    <div className="container-fluid" data-cue="slideInUp">
                        <Testimonialslider3 />
                    </div>
                </div>
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
                                        <a
                                            href="blog-single.html"
                                            className="image d-block"
                                        >
                                            <img
                                                src="assets/images/blogs/blog10.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                        <div className="content">
                                            <span className="sub-title d-block">
                                                Branding
                                            </span>
                                            <h3>
                                                <a href="blog-single.html">
                                                    The power of storytelling in
                                                    branding
                                                </a>
                                            </h3>
                                            <a
                                                href="blog-single.html"
                                                className="link-btn d-flex align-items-center justify-content-between"
                                            >
                                                Read More{" "}
                                                <i className="ri-arrow-right-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-blog-item">
                                        <a
                                            href="blog-single.html"
                                            className="image d-block"
                                        >
                                            <img
                                                src="assets/images/blogs/blog11.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                        <div className="content">
                                            <span className="sub-title d-block">
                                                Design
                                            </span>
                                            <h3>
                                                <a href="blog-single.html">
                                                    Creative campaigns that
                                                    inspire action
                                                </a>
                                            </h3>
                                            <a
                                                href="blog-single.html"
                                                className="link-btn d-flex align-items-center justify-content-between"
                                            >
                                                Read More{" "}
                                                <i className="ri-arrow-right-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-blog-item">
                                        <a
                                            href="blog-single.html"
                                            className="image d-block"
                                        >
                                            <img
                                                src="assets/images/blogs/blog12.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                        <div className="content">
                                            <span className="sub-title d-block">
                                                Development
                                            </span>
                                            <h3>
                                                <a href="blog-single.html">
                                                    The importance of ux/ui in
                                                    building customer trust
                                                </a>
                                            </h3>
                                            <a
                                                href="blog-single.html"
                                                className="link-btn d-flex align-items-center justify-content-between"
                                            >
                                                Read More{" "}
                                                <i className="ri-arrow-right-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                        <div className="view-articles-btn text-center text-animation">
                            <Link href="blog" className="default-btn">
                                More Articles
                                <i className="ri-arrow-right-line" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* End Blog Area */}
                {/* Start FAQ Area */}
                <div className="faq-area">
                    <div className="container">
                        <div className="marketing-agency-section-title position-relative">
                            <span className="sub-title d-inline-block text-uppercase">
                                FAQ
                            </span>
                            <TextAnimation className="fw-normal text-animation">
                                Popular questions
                            </TextAnimation>
                            <Link href="faq" className="default-btn">
                                View FAQ
                                <i className="ri-arrow-right-line" />
                            </Link>
                        </div>
                        <SlideInUp
                            selector=".accordion-item"
                            delay={0}
                            individual
                        >
                            <div
                                className="marketing-agency-faq-accordion accordion"
                                id="marketingAgencyFaqAccordion"
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
                                    </button>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#marketingAgencyFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                We offer a wide range of
                                                services, including branding,
                                                graphic design, web development,
                                                digital marketing, social media
                                                strategy, content creation,
                                                UX/UI design, and advertising
                                                campaigns. Our team tailors each
                                                solution to fit the unique needs
                                                of your business.
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
                                        How can a creative agency help my
                                        business grow?
                                    </button>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#marketingAgencyFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                A creative agency can help your
                                                business by crafting a strong,
                                                unique brand identity, improving
                                                your online presence, engaging
                                                your target audience, and
                                                driving measurable results
                                                through innovative marketing
                                                strategies. We focus on both
                                                creative and strategic solutions
                                                to ensure long-term growth.
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
                                        How long does it take to complete a
                                        project?
                                    </button>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#marketingAgencyFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                The duration of a project
                                                depends on its scope and
                                                complexity. A simple logo design
                                                might take a couple of weeks,
                                                while a full-scale website
                                                redesign could take several
                                                months. We work closely with you
                                                to provide a realistic timeline
                                                and keep you informed throughout
                                                the process.
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
                                    </button>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#marketingAgencyFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Our team combines creativity
                                                with strategy, ensuring that
                                                every project not only looks
                                                great but also drives business
                                                results. We focus on building
                                                long-term partnerships with our
                                                clients, offering personalized
                                                solutions, and staying ahead of
                                                industry trends to ensure your
                                                brand stands out.
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
                                        How do you determine the cost of a
                                        project?
                                    </button>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#marketingAgencyFaqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                The cost of a project depends on
                                                factors like the complexity of
                                                the work, the resources
                                                required, and the timeline. We
                                                provide detailed quotes after
                                                understanding your goals and
                                                project requirements. We ensure
                                                transparency and work with you
                                                to create a budget that fits
                                                your needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End FAQ Area */}

                {/* Start Footer Area  */}
                <Footer2 />
                {/* End Footer Area  */}

                <BackToTop isBottonShow={false} />
            </div>
        </div>
    );
};

export default page;
