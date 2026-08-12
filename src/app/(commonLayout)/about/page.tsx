import HowWeWork from "@/components/about/HowWeWork";
import TeamSlider from "@/components/about/TeamSlider";
import TrustedClientSlider from "@/components/about/TrustedClientSlider";
import ScrambleText from "@/components/common/ScrambleText";
import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbars/Navbar";

const page = () => {
    return (
        <div>
            <ScrambleText />
            <Navbar />
            <div>
                {/* Start About Page Banner Area */}
                <div className="about-page-banner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="content">
                                    <span className="sub-title d-block">
                                        About us
                                    </span>
                                    <TextAnimation
                                        as="h1"
                                        className="mb-0 text-animation"
                                    >
                                        Discover who we <span>truly are</span>
                                    </TextAnimation>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <SlideInUp className="image" selector="img">
                                    <img
                                        src="assets/images/abouts/about2.jpg"
                                        alt="about-image"
                                    />
                                </SlideInUp>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Page Banner Area */}
                {/* Start About Area */}
                <div className="about-area">
                    <SlideInUp
                        className="container"
                        selector=".about-funfacts, .about-video-box, .about-features-list"
                        individual
                    >
                        <div className="about-funfacts">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <p>
                                        Explore our journey, values, and
                                        expertise that define who we are. From
                                        innovation to excellence, we are
                                        committed to delivering impactful
                                        solutions that drive success.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="funfacts d-flex align-items-center justify-content-between">
                                        <div className="item">
                                            <div className="number lh-1">
                                                199+
                                            </div>
                                            <span className="d-block">
                                                Proud clients
                                            </span>
                                        </div>
                                        <div className="item">
                                            <div className="number lh-1">
                                                212+
                                            </div>
                                            <span className="d-block">
                                                Completed initiatives
                                            </span>
                                        </div>
                                        <div className="item">
                                            <div className="number lh-1">
                                                20+
                                            </div>
                                            <span className="d-block">
                                                Trophies
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-video-box text-center position-relative">
                            <img
                                src="assets/images/abouts/about3.jpg"
                                alt="about-image"
                            />
                            <a
                                href="https://www.youtube.com/watch?v=HKk4oLIzhhM"
                                className="video-btn popup-youtube d-flex align-items-center justify-content-center rounded-circle"
                            >
                                <i className="ri-play-fill" />
                            </a>
                        </div>
                        <div className="about-features-list">
                            <ul className="ps-0 mb-0 list-unstyled">
                                <li className="position-relative d-inline-block fw-semibold">
                                    Creativity
                                </li>
                                <li className="position-relative d-inline-block fw-semibold">
                                    Partnership
                                </li>
                            </ul>
                        </div>
                    </SlideInUp>
                </div>
                {/* End About Area */}
                {/* Start Our Mission Area */}
                <div className="our-mission-area ptb-150">
                    <div className="container">
                        <div className="creative-agency-section-title">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-6">
                                    <div className="left-side">
                                        <TextAnimation
                                            as="h2"
                                            className="text-animation"
                                        >
                                            Our purpose{" "}
                                            <span className="text-primary">
                                                &amp; journey
                                            </span>
                                        </TextAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="right-side style-two">
                                        <p>
                                            We are dedicated to driving
                                            innovation and helping brands thrive
                                            in the digital world with tailored
                                            solutions that make an impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SlideInUp selector=".accordion-item" individual>
                            <div
                                className="our-mission-accordion accordion"
                                id="missionAccordion"
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
                                        Empowerment
                                    </button>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#missionAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Our mission is to empower brands
                                                with innovative strategies,
                                                creative solutions, and
                                                cutting-edge technologies that
                                                drive sustainable growth and
                                                success. We are committed to
                                                helping brands thrive in an
                                                ever-evolving digital landscape,
                                                providing them with the tools
                                                they need to stay ahead.
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
                                        Transformation
                                    </button>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#missionAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Driven by our passion for
                                                creativity and technology, we
                                                are focused on transforming
                                                ideas into remarkable digital
                                                experiences. We craft solutions
                                                that not only make an impact but
                                                also inspire change, helping
                                                businesses stand out and connect
                                                with their audiences in
                                                meaningful ways.
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
                                        Navigation
                                    </button>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#missionAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                We are dedicated to helping
                                                businesses successfully navigate
                                                the complex digital world. By
                                                combining innovative thinking
                                                with effective strategy, we
                                                provide comprehensive solutions
                                                that foster growth and guide
                                                businesses through their digital
                                                journey, ensuring long-term
                                                success in an ever-changing
                                                marketplace.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Our Mission Area */}

                {/* Start How We Work Area */}
                <HowWeWork />
                {/* End How We Work Area */}

                {/* Start Awards Area */}
                <div className="awards-area ptb-150">
                    <div className="container">
                        <div className="creative-agency-section-title">
                            <div className="left-side">
                                <TextAnimation
                                    as={"h2"}
                                    className="text-animation"
                                >
                                    Our wins &amp;{" "}
                                    <span className="text-primary">honors</span>
                                </TextAnimation>
                            </div>
                        </div>
                        <SlideInUp selector=".item" individual>
                            <div
                                className="awards-recognitions-list"
                                data-cues="slideInUp"
                            >
                                <div className="item position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <span className="title d-block">
                                                Creative Spark
                                            </span>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <span className="title two d-block">
                                                Winner
                                            </span>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <span className="title three d-block">
                                                PixelCrafters
                                            </span>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="link-btn d-flex align-items-center justify-content-md-end"
                                            >
                                                <i className="ri-arrow-right-up-line" />
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img
                                            src="assets/images/recognitions/recognition1.jpg"
                                            alt="recognitions-image"
                                        />
                                    </div>
                                </div>
                                <div className="item position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <span className="title d-block">
                                                Tech Visionary
                                            </span>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <span className="title two d-block">
                                                Winner
                                            </span>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <span className="title three d-block">
                                                VisionaryTech
                                            </span>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="link-btn d-flex align-items-center justify-content-md-end"
                                            >
                                                <i className="ri-arrow-right-up-line" />
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img
                                            src="assets/images/recognitions/recognition2.jpg"
                                            alt="recognitions-image"
                                        />
                                    </div>
                                </div>
                                <div className="item position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <span className="title d-block">
                                                Design Mastery
                                            </span>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <span className="title two d-block">
                                                Nominee
                                            </span>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <span className="title three d-block">
                                                DesignMinds
                                            </span>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="link-btn d-flex align-items-center justify-content-md-end"
                                            >
                                                <i className="ri-arrow-right-up-line" />
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img
                                            src="assets/images/recognitions/recognition3.jpg"
                                            alt="recognitions-image"
                                        />
                                    </div>
                                </div>
                                <div className="item position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <span className="title d-block">
                                                Innovation Leader
                                            </span>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <span className="title two d-block">
                                                Nominee
                                            </span>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <span className="title three d-block">
                                                NextGen Solutions
                                            </span>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="link-btn d-flex align-items-center justify-content-md-end"
                                            >
                                                <i className="ri-arrow-right-up-line" />
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img
                                            src="assets/images/recognitions/recognition4.jpg"
                                            alt="recognitions-image"
                                        />
                                    </div>
                                </div>
                                <div className="item position-relative">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <span className="title d-block">
                                                Brand Power
                                            </span>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <span className="title two d-block">
                                                Winner
                                            </span>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                            <span className="title three d-block">
                                                BrandFlow
                                            </span>
                                        </div>
                                        <div className="col-lg-2 col-md-2">
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="link-btn d-flex align-items-center justify-content-md-end"
                                            >
                                                <i className="ri-arrow-right-up-line" />
                                                View
                                            </a>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img
                                            src="assets/images/recognitions/recognition5.jpg"
                                            alt="recognitions-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Awards Area */}
                {/* Start Team Area */}
                <TeamSlider />
                {/* End Team Area */}
                {/* Start Trusted Clients Area */}
                <div className="trusted-clients-area ptb-150">
                    <div className="container">
                        <div className="creative-agency-section-title">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-6">
                                    <div className="left-side">
                                        <TextAnimation className="text-animation">
                                            Clients we{" "}
                                            <span className="text-primary">
                                                value
                                            </span>
                                        </TextAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="right-side style-two">
                                        <p>
                                            At NsaTheme, we are proud to work
                                            with a diverse range of clients who
                                            trust us to bring their digital
                                            visions to life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TrustedClientSlider />
                </div>
                {/* End Trusted Clients Area */}
            </div>

            <Footer />
        </div>
    );
};

export default page;
