import TextAnimation from "@/components/common/TextAnimation";
import Image from "next/image";

// images import
import caseStudy6 from "public/assets/images/case-studies/case-study6.jpg";
import caseStudy7 from "public/assets/images/case-studies/case-study7.jpg";
import caseStudy8 from "public/assets/images/case-studies/case-study8.jpg";
import codepen from "public/assets/images/icons/codepen.svg";
import codepen2 from "public/assets/images/icons/codepen2.svg";
import dhis from "public/assets/images/icons/dhis.svg";
import dhis2 from "public/assets/images/icons/dhis2.svg";
import tidal from "public/assets/images/icons/tidal.png";
import tida2 from "public/assets/images/icons/tidal2.svg";
import serviceDetails from "public/assets/images/services/service-details.jpg";
import workProcess from "public/assets/images/works-process.jpg";

const page = () => {
    return (
        <div>
            <div>
                {/* Start Service Details Page Banner Area */}
                <div className="service-details-page-banner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="content position-relative">
                                    <TextAnimation
                                        as="h1"
                                        className="text-animation"
                                    >
                                        Brand <span>strategy</span>
                                    </TextAnimation>
                                    <p>
                                        We help define your brand’s identity and
                                        create a roadmap for consistent growth,
                                        positioning, and market presence.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="image">
                                    <Image
                                        src={serviceDetails}
                                        alt="service-details-image"
                                    />
                                    <div className="info d-flex align-items-center">
                                        <div className="number lh-1">
                                            212<span>+</span>
                                        </div>
                                        <span className="d-block title">
                                            Relevant work accomplished
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                {/* End Service Details Page Banner Area */}
                {/* Start Works Process Area */}
                <div className="works-process-area ptb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="works-process-content">
                                    <h1>
                                        Our workflow <span>strategy</span>
                                    </h1>
                                    <Image
                                        src={workProcess}
                                        alt="works-process-image"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="works-process-lines">
                                    <div className="item position-relative">
                                        <div className="number d-flex align-items-center justify-content-center text-center rounded-circle">
                                            01
                                        </div>
                                        <div className="icon position-relative">
                                            <Image src={tidal} alt="icon" />
                                            <Image src={tida2} alt="icon" />
                                        </div>
                                        <h3>Ideation phase</h3>
                                        <p>
                                            We begin by brainstorming and
                                            refining creative ideas that align
                                            with your brand vision. This phase
                                            sets the foundation for a strategic
                                            and impactful execution.
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="item position-relative">
                                        <div className="number d-flex align-items-center justify-content-center text-center rounded-circle">
                                            02
                                        </div>
                                        <div className="icon position-relative">
                                            <Image src={codepen} alt="icon" />
                                            <Image src={codepen2} alt="icon" />
                                        </div>
                                        <h3>Planning &amp; strategy</h3>
                                        <p>
                                            A well-defined roadmap ensures
                                            smooth project execution. We focus
                                            on research, goal-setting, and
                                            structuring a clear strategy
                                            tailored to your objectives.
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="item position-relative">
                                        <div className="number d-flex align-items-center justify-content-center text-center rounded-circle">
                                            03
                                        </div>
                                        <div className="icon position-relative">
                                            <Image src={dhis} alt="icon" />
                                            <Image src={dhis2} alt="icon" />
                                        </div>
                                        <h3>Execution &amp; development</h3>
                                        <p>
                                            Bringing ideas to life with
                                            precision and creativity. Our team
                                            works on design, development, and
                                            content creation while ensuring
                                            quality and consistency.
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="item position-relative">
                                        <div className="number d-flex align-items-center justify-content-center text-center rounded-circle">
                                            04
                                        </div>
                                        <div className="icon position-relative">
                                            <Image src={tidal} alt="icon" />
                                            <Image src={tida2} alt="icon" />
                                        </div>
                                        <h3>Review &amp; optimization</h3>
                                        <p>
                                            We analyze results, gather feedback,
                                            and make refinements to enhance
                                            performance. Continuous improvement
                                            ensures long-term success and
                                            effectiveness.
                                        </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Works Process Area */}
                {/* Start Case Studies Area */}
                <div className="case-studies-area bg-black pt-150 pb-125">
                    <div className="container">
                        <div className="creative-agency-section-title text-white">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-12">
                                    <div className="left-side">
                                        <h2>
                                            Highlighting Our{" "}
                                            <span>case studies</span>
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="right-side top-0">
                                        <a
                                            href="works.html"
                                            className="default-btn mt-0"
                                        >
                                            View Case Studies
                                            <i className="ri-arrow-right-line" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="case-studies-lines">
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12">
                                        <a
                                            href="work-single.html"
                                            className="image d-block"
                                        >
                                            <Image
                                                src={caseStudy6}
                                                alt="case-study-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <div className="content position-relative">
                                            <div className="number d-flex align-items-center justify-content-center text-center rounded-circle">
                                                01
                                            </div>
                                            <h3 className="fw-normal">
                                                <a href="work-single.html">
                                                    Revamping e-commerce success
                                                </a>
                                            </h3>
                                            <p className="fw-medium">
                                                Redefined an online store&apos;s
                                                user experience, leading to
                                                increased conversions and
                                                customer retention.
                                            </p>
                                            <a
                                                href="work-single.html"
                                                className="link-btn d-flex align-items-center fw-medium"
                                            >
                                                Read More{" "}
                                                <i className="ri-arrow-right-up-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12">
                                        <a
                                            href="work-single.html"
                                            className="image d-block"
                                        >
                                            <Image
                                                src={caseStudy7}
                                                alt="case-study-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <div className="content position-relative">
                                            <div className="number d-flex align-items-center justify-content-center text-center rounded-circle">
                                                02
                                            </div>
                                            <h3 className="fw-normal">
                                                <a href="work-single.html">
                                                    Transforming saas user
                                                    experience
                                                </a>
                                            </h3>
                                            <p className="fw-medium">
                                                Designed an intuitive interface
                                                for a SaaS platform, enhancing
                                                usability and client engagement.
                                            </p>
                                            <a
                                                href="work-single.html"
                                                className="link-btn d-flex align-items-center fw-medium"
                                            >
                                                Read More{" "}
                                                <i className="ri-arrow-right-up-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-5 col-md-12">
                                        <a
                                            href="work-single.html"
                                            className="image d-block"
                                        >
                                            <Image
                                                src={caseStudy8}
                                                alt="case-study-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-lg-7 col-md-12">
                                        <div className="content position-relative">
                                            <div className="number d-flex align-items-center justify-content-center text-center rounded-circle">
                                                03
                                            </div>
                                            <h3 className="fw-normal">
                                                <a href="work-single.html">
                                                    Boosting digital agency
                                                    growth
                                                </a>
                                            </h3>
                                            <p className="fw-medium">
                                                Implemented a data-driven
                                                marketing strategy, improving
                                                lead generation and brand
                                                visibility.
                                            </p>
                                            <a
                                                href="work-single.html"
                                                className="link-btn d-flex align-items-center fw-medium"
                                            >
                                                Read More{" "}
                                                <i className="ri-arrow-right-up-line" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Case Studies Area */}
            </div>
        </div>
    );
};

export default page;
