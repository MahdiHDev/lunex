import OdometerClient from "@/components/common/OdometerClient";

export default function Home() {
    return (
        <div>
            {/* Banner Section Started  */}
            <section className="creative-agency-banner-area position-relative z-1">
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
                            <span className="menu_link-text">
                                Let&apos;s Chat
                            </span>
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
            </section>
            {/* Banner Section End  */}

            {/* Brief Section Started  */}
            <section className="brief-area position-relative z-1 pb-150">
                <div className="container">
                    <div className="brief-content">
                        <div className="title d-flex align-items-center">
                            <div className="number">01</div>
                            Introduction
                        </div>
                        <p className="on-scroll-font-color-change">
                            We specialize in crafting innovative brand
                            experiences that seamlessly blend creativity and
                            strategy. Our team is dedicated to inspiring
                            audiences, driving engagement, and fostering growth
                            through tailored, impactful solutions. 🚀
                        </p>
                        <div
                            className="funfacts d-flex justify-content-between"
                            data-cues="slideInUp"
                        >
                            <div className="box">
                                <div className="number lh-1">
                                    {/* <span className="odometer" data-count={199}> */}
                                    <OdometerClient value={200} />
                                    {/* </span> */}+
                                </div>
                                <span className="sub-title d-block">
                                    Proud clients
                                </span>
                            </div>
                            <div className="box">
                                <div className="number lh-1">
                                    <span className="odometer" data-count={212}>
                                        00
                                    </span>
                                    +
                                </div>
                                <span className="sub-title d-block">
                                    Completed initiatives
                                </span>
                            </div>
                            <div className="box">
                                <div className="number lh-1">
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
            </section>
            {/* Brief Section End  */}

            {/* Service Section started  */}
            <section className="services-area bg-black pt-150 pb-125">
                <div className="container">
                    <div className="creative-agency-section-title text-white">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="left-side">
                                    <div className="number d-flex align-items-center">
                                        <div>02</div>
                                        Services
                                    </div>
                                    <h2 className="text-animation">
                                        Our innovative{" "}
                                        <span>creative solutions</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="right-side">
                                    <p>
                                        We blend strategy, design, and
                                        technology to create impactful brand
                                        experiences that drive growth and engage
                                        audiences.
                                    </p>
                                    <a
                                        href="services.html"
                                        className="default-btn"
                                    >
                                        View Services
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row justify-content-center"
                        data-cues="slideInUp"
                    >
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box position-relative z-1">
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block rounded-circle"
                                >
                                    <img
                                        src="assets/images/icons/white-right-top-arrow2.svg"
                                        alt="right-top-arrow"
                                    />
                                </a>
                                <h3>
                                    <a href="service-single.html">
                                        Brand <span>strategy</span>
                                    </a>
                                </h3>
                                <p>
                                    We help define your brand’s identity and
                                    create a roadmap for consistent growth,
                                    positioning, and market presence.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box position-relative z-1">
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block rounded-circle"
                                >
                                    <img
                                        src="assets/images/icons/white-right-top-arrow2.svg"
                                        alt="right-top-arrow"
                                    />
                                </a>
                                <h3>
                                    <a href="service-single.html">
                                        Creative <span>design</span>
                                    </a>
                                </h3>
                                <p>
                                    From logos to websites, our creative design
                                    solutions bring your brand to life with
                                    visually stunning and user-centric designs.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box position-relative z-1">
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block rounded-circle"
                                >
                                    <img
                                        src="assets/images/icons/white-right-top-arrow2.svg"
                                        alt="right-top-arrow"
                                    />
                                </a>
                                <h3>
                                    <a href="service-single.html">
                                        Digital <span>marketing</span>
                                    </a>
                                </h3>
                                <p>
                                    We craft tailored digital marketing
                                    strategies that engage your audience, boost
                                    conversions, &amp; build brand loyalty
                                    across multiple platforms.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box position-relative z-1">
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block rounded-circle"
                                >
                                    <img
                                        src="assets/images/icons/white-right-top-arrow2.svg"
                                        alt="right-top-arrow"
                                    />
                                </a>
                                <h3>
                                    <a href="service-single.html">
                                        Web <span>development</span>
                                    </a>
                                </h3>
                                <p>
                                    Our expert web development team creates
                                    high-performance websites &amp; applications
                                    that enhance experience &amp; functionality.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box position-relative z-1">
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block rounded-circle"
                                >
                                    <img
                                        src="assets/images/icons/white-right-top-arrow2.svg"
                                        alt="right-top-arrow"
                                    />
                                </a>
                                <h3>
                                    <a href="service-single.html">
                                        Social media <span>management</span>
                                    </a>
                                </h3>
                                <p>
                                    We manage &amp; optimize your social media
                                    presence, creating engaging content &amp;
                                    strategies to grow your audience.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service-box position-relative z-1">
                                <a
                                    href="service-single.html"
                                    className="link-btn d-inline-block rounded-circle"
                                >
                                    <img
                                        src="assets/images/icons/white-right-top-arrow2.svg"
                                        alt="right-top-arrow"
                                    />
                                </a>
                                <h3>
                                    <a href="service-single.html">
                                        Content <span>creation</span>
                                    </a>
                                </h3>
                                <p>
                                    We develop compelling content, from
                                    copywriting to video production, designed to
                                    tell your story &amp; connect with your
                                    audience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Section End  */}

            {/* Project Area Section Started  */}
            <section className="projects-area bg-black pb-150">
                <div className="container">
                    <div className="creative-agency-section-title text-white">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="left-side">
                                    <div className="number d-flex align-items-center">
                                        <div>03</div>
                                        Projects
                                    </div>
                                    <h2 className="text-animation">
                                        Our <span>deliverables</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="right-side">
                                    <p>
                                        We provide high-quality, tailored
                                        solutions that deliver measurable
                                        results, ensuring your brand stands out
                                        and achieves sustained growth and
                                        success.
                                    </p>
                                    <a
                                        href="works.html"
                                        className="default-btn"
                                    >
                                        All Projects
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects-circle-list text-center position-relative">
                        <img
                            src="assets/images/shapes/circle.svg"
                            className="d-none d-lg-inline-block"
                            alt="border-image"
                        />
                        <div className="images text-start">
                            <div className="image">
                                <img
                                    src="assets/images/projects/project5.jpg"
                                    alt="project-image"
                                />
                                <div className="text">
                                    <h3>
                                        <a href="work-single.html">
                                            Digital pulse
                                        </a>
                                    </h3>
                                    <p>
                                        A complete brand refresh, elevating
                                        identity with modern design and
                                        messaging that connects with a global
                                        audience.
                                    </p>
                                    <a
                                        href="work-single.html"
                                        className="link-btn d-flex align-items-center position-relative"
                                    >
                                        View Project
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                                <a
                                    href="work-single.html"
                                    className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                />
                            </div>
                            <div className="image">
                                <img
                                    src="assets/images/projects/project6.jpg"
                                    alt="project-image"
                                />
                                <div className="text">
                                    <h3>
                                        <a href="work-single.html">
                                            Visual impact
                                        </a>
                                    </h3>
                                    <p>
                                        A complete brand refresh, elevating
                                        identity with modern design and
                                        messaging that connects with a global
                                        audience.
                                    </p>
                                    <a
                                        href="work-single.html"
                                        className="link-btn d-flex align-items-center position-relative"
                                    >
                                        View Project
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                                <a
                                    href="work-single.html"
                                    className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                />
                            </div>
                            <div className="image">
                                <img
                                    src="assets/images/projects/project7.jpg"
                                    alt="project-image"
                                />
                                <div className="text">
                                    <h3>
                                        <a href="work-single.html">
                                            Social hub
                                        </a>
                                    </h3>
                                    <p>
                                        A complete brand refresh, elevating
                                        identity with modern design and
                                        messaging that connects with a global
                                        audience.
                                    </p>
                                    <a
                                        href="work-single.html"
                                        className="link-btn d-flex align-items-center position-relative"
                                    >
                                        View Project
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                                <a
                                    href="work-single.html"
                                    className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                />
                            </div>
                            <div className="image">
                                <img
                                    src="assets/images/projects/project8.jpg"
                                    alt="project-image"
                                />
                                <div className="text">
                                    <h3>
                                        <a href="work-single.html">
                                            UI/UX design
                                        </a>
                                    </h3>
                                    <p>
                                        A complete brand refresh, elevating
                                        identity with modern design and
                                        messaging that connects with a global
                                        audience.
                                    </p>
                                    <a
                                        href="work-single.html"
                                        className="link-btn d-flex align-items-center position-relative"
                                    >
                                        View Project
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                                <a
                                    href="work-single.html"
                                    className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                />
                            </div>
                            <div className="image">
                                <img
                                    src="assets/images/projects/project9.jpg"
                                    alt="project-image"
                                />
                                <div className="text">
                                    <h3>
                                        <a href="work-single.html">
                                            Print design
                                        </a>
                                    </h3>
                                    <p>
                                        A complete brand refresh, elevating
                                        identity with modern design and
                                        messaging that connects with a global
                                        audience.
                                    </p>
                                    <a
                                        href="work-single.html"
                                        className="link-btn d-flex align-items-center position-relative"
                                    >
                                        View Project
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                                <a
                                    href="work-single.html"
                                    className="position-absolute z-1 start-0 end-0 top-0 bottom-0"
                                />
                            </div>
                        </div>
                        <div className="contents text-start">
                            <div className="item">
                                <h3>
                                    <a href="work-single.html">Digital pulse</a>
                                </h3>
                                <p>
                                    A complete brand refresh, elevating identity
                                    with modern design and messaging that
                                    connects with a global audience.
                                </p>
                                <a
                                    href="work-single.html"
                                    className="link-btn d-flex align-items-center position-relative"
                                >
                                    View Project
                                    <i className="ri-arrow-right-line" />
                                </a>
                            </div>
                            <div className="item">
                                <h3>
                                    <a href="work-single.html">Visual impact</a>
                                </h3>
                                <p>
                                    A complete brand refresh, elevating identity
                                    with modern design and messaging that
                                    connects with a global audience.
                                </p>
                                <a
                                    href="work-single.html"
                                    className="link-btn d-flex align-items-center position-relative"
                                >
                                    View Project
                                    <i className="ri-arrow-right-line" />
                                </a>
                            </div>
                            <div className="item">
                                <h3>
                                    <a href="work-single.html">Social hub</a>
                                </h3>
                                <p>
                                    A complete brand refresh, elevating identity
                                    with modern design and messaging that
                                    connects with a global audience.
                                </p>
                                <a
                                    href="work-single.html"
                                    className="link-btn d-flex align-items-center position-relative"
                                >
                                    View Project
                                    <i className="ri-arrow-right-line" />
                                </a>
                            </div>
                            <div className="item">
                                <h3>
                                    <a href="work-single.html">UI/UX design</a>
                                </h3>
                                <p>
                                    A complete brand refresh, elevating identity
                                    with modern design and messaging that
                                    connects with a global audience.
                                </p>
                                <a
                                    href="work-single.html"
                                    className="link-btn d-flex align-items-center position-relative"
                                >
                                    View Project
                                    <i className="ri-arrow-right-line" />
                                </a>
                            </div>
                            <div className="item">
                                <h3>
                                    <a href="work-single.html">Print design</a>
                                </h3>
                                <p>
                                    A complete brand refresh, elevating identity
                                    with modern design and messaging that
                                    connects with a global audience.
                                </p>
                                <a
                                    href="work-single.html"
                                    className="link-btn d-flex align-items-center position-relative"
                                >
                                    View Project
                                    <i className="ri-arrow-right-line" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Project Area Section End  */}

            {/* Video Area Section Started  */}
            <section className="video-area pt-150 pb-125">
                <div className="container">
                    <div className="video-box">
                        <h1 className="text-animation">Innovative</h1>
                        <div
                            className="main-video position-relative"
                            data-cue="slideInUp"
                        >
                            <img
                                src="assets/images/videos/video1.jpg"
                                className="image-container"
                                alt="video-image"
                            />
                        </div>
                        <div className="content d-flex align-items-center justify-content-between">
                            <h2 className="text-animation">Design</h2>
                            <h3 className="text-animation">Strategy</h3>
                        </div>
                    </div>
                </div>
            </section>
            {/* Video Area Section End  */}

            {/* Start Blog Area */}
            <div className="blog-area pb-125">
                <div className="container">
                    <div className="creative-agency-section-title">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="left-side">
                                    <div className="number d-flex align-items-center">
                                        <div>04</div>
                                        Insights
                                    </div>
                                    <h2 className="text-animation">
                                        Our recent <span>thoughts</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="right-side">
                                    <p>
                                        Explore our latest insights &amp;
                                        creative perspectives on design,
                                        strategy, &amp; innovation, offering
                                        fresh ideas &amp; trends shaping the
                                        future of business.
                                    </p>
                                    <a href="blog.html" className="default-btn">
                                        View Insights
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row justify-content-center"
                        data-cues="slideInUp"
                    >
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a
                                    href="blog-single.html"
                                    className="d-block image"
                                >
                                    <img
                                        src="assets/images/blogs/blog1.jpg"
                                        alt="blog-image"
                                    />
                                </a>
                                <div className="content">
                                    <span className="date d-block">
                                        21 Mar 2025
                                    </span>
                                    <h3 className="position-relative">
                                        <a href="blog-single.html">
                                            The power of storytelling in
                                            branding
                                        </a>
                                    </h3>
                                    <a
                                        href="blog-single.html"
                                        className="link-btn d-flex align-items-center position-relative"
                                    >
                                        Read More
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a
                                    href="blog-single.html"
                                    className="d-block image"
                                >
                                    <img
                                        src="assets/images/blogs/blog2.jpg"
                                        alt="blog-image"
                                    />
                                </a>
                                <div className="content">
                                    <span className="date d-block">
                                        20 Feb 2025
                                    </span>
                                    <h3 className="position-relative">
                                        <a href="blog-single.html">
                                            Creative campaigns that inspire
                                            action
                                        </a>
                                    </h3>
                                    <a
                                        href="blog-single.html"
                                        className="link-btn d-flex align-items-center position-relative"
                                    >
                                        Read More
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <a
                                    href="blog-single.html"
                                    className="d-block image"
                                >
                                    <img
                                        src="assets/images/blogs/blog3.jpg"
                                        alt="blog-image"
                                    />
                                </a>
                                <div className="content">
                                    <span className="date d-block">
                                        15 Jan 2025
                                    </span>
                                    <h3 className="position-relative">
                                        <a href="blog-single.html">
                                            The importance of ux/ui in building
                                            customer trust
                                        </a>
                                    </h3>
                                    <a
                                        href="blog-single.html"
                                        className="link-btn d-flex align-items-center position-relative"
                                    >
                                        Read More
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Area */}

            {/* Start Awards Area */}
            <div className="awards-area pb-150">
                <div className="container">
                    <div className="creative-agency-section-title">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="left-side">
                                    <div className="number d-flex align-items-center">
                                        <div>05</div>
                                        Trophies
                                    </div>
                                    <h2 className="text-animation">
                                        11+ Trophies
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="right-side">
                                    <a
                                        href="careers.html"
                                        className="default-btn mt-0"
                                    >
                                        View Trophies
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-5">
                            <div className="awards-list-image position-relative">
                                <div className="awards-image text-center">
                                    <img
                                        src="assets/images/awards/award1.jpg"
                                        alt="awards-image"
                                    />
                                </div>
                                <div className="awards-image text-center">
                                    <img
                                        src="assets/images/awards/award2.jpg"
                                        alt="awards-image"
                                    />
                                </div>
                                <div className="awards-image text-center">
                                    <img
                                        src="assets/images/awards/award3.jpg"
                                        alt="awards-image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className="awards-list" data-cues="slideInUp">
                                <div className="single-award d-flex align-items-center justify-content-between position-relative">
                                    <h3 className="mb-0">Maverick</h3>
                                    <div className="number">07</div>
                                    <a
                                        href="careers.html"
                                        target="_blank"
                                        className="link-btn position-absolute start-0 end-0 top-0 bottom-0 z-1"
                                    />
                                </div>
                                <div className="single-award d-flex align-items-center justify-content-between position-relative">
                                    <h3 className="mb-0">Champion</h3>
                                    <div className="number">03</div>
                                    <a
                                        href="careers.html"
                                        target="_blank"
                                        className="link-btn position-absolute start-0 end-0 top-0 bottom-0 z-1"
                                    />
                                </div>
                                <div className="single-award d-flex align-items-center justify-content-between position-relative">
                                    <h3 className="mb-0">Luminary</h3>
                                    <div className="number">01</div>
                                    <a
                                        href="careers.html"
                                        target="_blank"
                                        className="link-btn position-absolute start-0 end-0 top-0 bottom-0 z-1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Awards Area */}

            {/* Start Why Choose Us Area */}
            <div className="why-choose-us-area pb-150">
                <div className="container">
                    <div
                        className="row justify-content-center"
                        data-cues="slideInUp"
                    >
                        <div className="col-lg-3 col-md-6">
                            <div className="why-choose-us-left-side">
                                <div className="sub-title d-flex align-items-center">
                                    <div>06</div>
                                    Why choose us
                                </div>
                                <img
                                    src="assets/images/why-choose-us/why-choose-us1.jpg"
                                    alt="why-choose-us-image"
                                />
                                <span className="d-block title">
                                    Unmatched client support
                                </span>
                                <p>
                                    Our experts bring years of experience,
                                    creativity, &amp; strategic thinking to
                                    deliver results.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="why-choose-us-middle-side">
                                <h2 className="text-animation">
                                    Why <span>trust us</span>
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
                                    <span className="menu_link-text">
                                        {" "}
                                        Let&apos; Chat{" "}
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="why-choose-us-right-side">
                                <img
                                    src="assets/images/why-choose-us/why-choose-us2.jpg"
                                    alt="why-choose-us-image"
                                />
                                <span className="d-block title">
                                    Highly skilled team
                                </span>
                                <p>
                                    We prioritize your needs with personalized
                                    solutions, seamless communication, and a
                                    commitment to exceeding expectations,
                                    ensuring a smooth and rewarding experience
                                    that drives lasting success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Why Choose Us Area */}

            {/* Start Testimonials Area */}
            <div className="testimonials-area bg-image position-relative z-1 bg-black ptb-150">
                <div className="container">
                    <div className="creative-agency-section-title text-white">
                        <div className="left-side">
                            <div className="number d-flex align-items-center">
                                <div>07</div>
                                Client stories
                            </div>
                            <h2 className="text-animation">
                                Client success <span>stories</span>
                            </h2>
                        </div>
                    </div>
                    <div
                        className="swiper testimonialsSwiper"
                        data-cue="slideInUp"
                    >
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        &quote;The team&apos;s creative strategy
                                        transformed our brand&apos;s presence.
                                        With a fresh and engaging design, we
                                        gained a new identity that resonates
                                        deeply with our audience, positioning us
                                        as a standout in a competitive market.
                                        Our brand recognition has skyrocketed
                                        since the launch.&quote;
                                    </p>
                                    <h3 className="fw-normal">
                                        Sarah Thompson
                                    </h3>
                                    <span className="d-block">
                                        CEO, InnovateTech Solutions
                                    </span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        &quot;From initial concepts to final
                                        execution, the team delivered beyond our
                                        expectations. The brand overhaul not
                                        only strengthened our online presence
                                        but also resulted in a significant
                                        increase in customer engagement and
                                        sales. Their creative approach was
                                        exactly what we needed.&quot;
                                    </p>
                                    <h3 className="fw-normal">John Harrison</h3>
                                    <span className="d-block">
                                        Marketing Director, Elite Enterprises
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-navigation d-flex align-items-center justify-content-end">
                            <div className="swiper-button-prev">
                                <img
                                    src="assets/images/icons/white-left-arrow.svg"
                                    alt="white-left-arrow"
                                />
                            </div>
                            <div className="swiper-button-next">
                                <img
                                    src="assets/images/icons/white-right-arrow.svg"
                                    alt="white-right-arrow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape2">
                    <img src="assets/images/shapes/shape2.svg" alt="shape2" />
                </div>
            </div>
            {/* End Testimonials Area */}

            {/* Start FAQ Area */}
            <div className="faq-area ptb-150">
                <div className="container">
                    <div className="creative-agency-section-title">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="left-side">
                                    <div className="number d-flex align-items-center">
                                        <div>08</div>
                                        FAQ
                                    </div>
                                    <h2 className="text-animation">
                                        Frequently <span>asked questions</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="right-side">
                                    <a
                                        href="careers.html"
                                        className="default-btn mt-0"
                                    >
                                        View Jobs
                                        <i className="ri-arrow-right-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="creative-agency-faq-accordion accordion"
                        id="creativeAgencyFaqAccordion"
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
                                What services do you offer as a creative agency?
                                <i className="ri-add-line" />
                            </button>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#creativeAgencyFaqAccordion"
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
                                How can a creative agency help my business grow?
                                <i className="ri-add-line" />
                            </button>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#creativeAgencyFaqAccordion"
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
                                How long does it take to complete a project?
                                <i className="ri-add-line" />
                            </button>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#creativeAgencyFaqAccordion"
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
                                What makes your agency different from others?
                                <i className="ri-add-line" />
                            </button>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                data-bs-parent="#creativeAgencyFaqAccordion"
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
                                How do you determine the cost of a project?
                                <i className="ri-add-line" />
                            </button>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                data-bs-parent="#creativeAgencyFaqAccordion"
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

            {/* LTR / RTL */}
            <button
                id="toggleBootstrapDirection"
                className="ltr-rtl-btn border-0 position-fixed d-inline-block text-uppercase fw-semibold"
            >
                <span className="d-block"> LTR / RTL </span>
            </button>
            {/* End LTR / RTL */}
        </div>
    );
}
