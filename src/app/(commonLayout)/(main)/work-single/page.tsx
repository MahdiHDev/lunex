import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import Image from "next/image";

import designPrinciple from "public/assets/images/design-principles.jpg";
import dissatisfaction from "public/assets/images/icons/dissatisfaction.svg";
import economicGrowth from "public/assets/images/icons/economic-growth.svg";
import touchId from "public/assets/images/icons/touch-id.svg";
import mockup1 from "public/assets/images/mockups/mockup1.jpg";
import mockup2 from "public/assets/images/mockups/mockup2.jpg";
import mockup3 from "public/assets/images/mockups/mockup3.jpg";
import projectDetails from "public/assets/images/projects/project-details.jpg";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            {/* Start Project Details Area */}
            <div className="project-details-area pb-150">
                <div className="container">
                    <div className="project-details-content">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="title">
                                    <span className="sub-title d-block">
                                        Work details
                                    </span>
                                    <TextAnimation
                                        as="h1"
                                        className="mb-0 text-animation"
                                    >
                                        Brand identity &amp;{" "}
                                        <span>web design</span>
                                    </TextAnimation>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="info">
                                    <span className="d-block fw-medium">
                                        Category
                                    </span>
                                    <h3 className="mb-0">Web Design</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SlideInUp selector=".text-center">
                        <div className="text-center" data-cue="slideInUp">
                            <Image
                                src={projectDetails}
                                alt="project-details-image"
                            />
                        </div>
                    </SlideInUp>
                    <SlideInUp selector=".project-details-info">
                        <div
                            className="project-details-info d-md-flex align-items-center justify-content-between"
                            data-cue="slideInUp"
                        >
                            <div>
                                <h3>Client</h3>
                                <span className="d-block fw-medium">
                                    Sarah Thompson
                                </span>
                            </div>
                            <div>
                                <h3>Category</h3>
                                <span className="d-block fw-medium">
                                    Web Design
                                </span>
                            </div>
                            <div>
                                <h3>Website</h3>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="d-inline-block position-relative fw-medium"
                                >
                                    https://lunex.com/{" "}
                                    <i className="ri-arrow-right-up-line" />
                                </a>
                            </div>
                            <div>
                                <h3>Project Timeline</h3>
                                <span className="d-block fw-medium">
                                    1.5 months
                                </span>
                            </div>
                            <div>
                                <h3>Service we offer</h3>
                                <span className="d-block fw-medium">UI/UX</span>
                            </div>
                        </div>
                    </SlideInUp>
                </div>
            </div>
            {/* End Project Details Area */}
            {/* Start Design Principles Area */}
            <div className="design-principles-area ptb-150">
                <div className="container">
                    <div className="creative-agency-section-title text-white">
                        <div className="left-side">
                            <TextAnimation className="text-animation">
                                Core design <span>principles</span>
                            </TextAnimation>
                        </div>
                    </div>
                    <SlideInUp selector=".design-principles-content">
                        <div className="design-principles-content">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="image">
                                        <Image
                                            src={designPrinciple}
                                            alt="design-principles-image"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="content">
                                        <p className="fw-medium">
                                            Our core design principles are
                                            rooted in creating visually stunning
                                            and user-friendly solutions. We
                                            emphasize clarity, consistency, and
                                            functionality at every stage,
                                            ensuring that each design element
                                            enhances the user experience,
                                            fosters engagement, and aligns
                                            seamlessly with your brand’s unique
                                            identity and goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideInUp>
                    <SlideInUp
                        selector=".item"
                        individual
                        delay={0}
                        className="design-principles-list"
                    >
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="title d-flex align-items-center">
                                        <div className="number rounded-circle text-center d-flex align-items-center justify-content-center">
                                            01
                                        </div>
                                        <h3 className="mb-0">Clarity</h3>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="content">
                                        <p className="fw-medium">
                                            Every design element is crafted with
                                            simplicity in mind, ensuring users
                                            can easily understand and navigate
                                            the interface. We remove unnecessary
                                            complexity, so the message and
                                            functionality are clear and
                                            intuitive.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="title d-flex align-items-center">
                                        <div className="number rounded-circle text-center d-flex align-items-center justify-content-center">
                                            02
                                        </div>
                                        <h3 className="mb-0">Consistency</h3>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="content">
                                        <p className="fw-medium">
                                            Consistency in design is key to
                                            building a recognizable and trusted
                                            brand. We maintain uniformity in
                                            typography, colors, and layout to
                                            create a cohesive and predictable
                                            user experience across all platforms
                                            and devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="title d-flex align-items-center">
                                        <div className="number rounded-circle text-center d-flex align-items-center justify-content-center">
                                            03
                                        </div>
                                        <h3 className="mb-0">Functionality</h3>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="content">
                                        <p className="fw-medium">
                                            We prioritize creating user-friendly
                                            and efficient designs. Each element
                                            is strategically placed and
                                            optimized to enhance usability,
                                            allowing users to accomplish their
                                            goals with ease, whether it&apos;s
                                            navigating a website or interacting
                                            with a product.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideInUp>
                </div>
            </div>
            {/* End Design Principles Area */}
            {/* Start Mockups Area */}
            <div className="mockups-area pt-150 pb-125">
                <SlideInUp
                    selector=".single-mockup-item"
                    individual
                    className="container"
                    delay={0.25}
                >
                    <div className="row" data-cues="slideInUp">
                        <div className="col-12">
                            <div className="single-mockup-item text-center">
                                <Image src={mockup1} alt="mockup-image" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="single-mockup-item text-center">
                                <Image src={mockup2} alt="mockup-image" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="single-mockup-item text-center">
                                <Image src={mockup3} alt="mockup-image" />
                            </div>
                        </div>
                    </div>
                </SlideInUp>
            </div>
            {/* End Mockups Area */}
            {/* Start Impact Area */}
            <div className="impact-area pb-150">
                <div className="container">
                    <div className="creative-agency-section-title">
                        <div className="left-side">
                            <TextAnimation className="text-animation">
                                Impact we&apos;ve{" "}
                                <span className="text-primary">made</span>
                            </TextAnimation>
                        </div>
                    </div>
                    <SlideInUp
                        selector=".item"
                        className="impact-list"
                        individual
                        delay={0}
                    >
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-4">
                                    <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                                        <Image src={touchId} alt="icon" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="content">
                                        <h3 className="fw-normal">30%</h3>
                                        <span className="d-block">
                                            Driving engagement
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <p>
                                        Through innovative designs and
                                        strategies, we captivate audiences,
                                        leading to higher interaction and
                                        meaningful connections with the brand.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-4">
                                    <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                                        <Image
                                            src={economicGrowth}
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="content">
                                        <h3 className="fw-normal">40%</h3>
                                        <span className="d-block">
                                            Enhancing user experience
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <p>
                                        By focusing on clarity and usability, we
                                        create intuitive platforms that increase
                                        user satisfaction and promote brand
                                        loyalty.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-4">
                                    <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                                        <Image
                                            src={dissatisfaction}
                                            alt="icon"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="content">
                                        <h3 className="fw-normal">25%</h3>
                                        <span className="d-block">
                                            Boosting business growth
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <p>
                                        Our tailored solutions have helped
                                        businesses scale by improving their
                                        digital presence, increasing
                                        conversions, and fostering long-term
                                        success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SlideInUp>
                </div>
            </div>
            {/* End Impact Area */}

            {/* LTR / RTL */}
            <button
                id="toggleBootstrapDirection"
                className="ltr-rtl-btn border-0 position-fixed d-inline-block text-uppercase fw-semibold"
            >
                <span className="d-block">LTR / RTL</span>
            </button>
        </div>
    );
};

export default page;
