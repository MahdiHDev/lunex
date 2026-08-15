import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import ContactForm1 from "@/components/forms/ContactForm1";
import Image from "next/image";

import contact from "public/assets/images/contact.jpg";
import call from "public/assets/images/icons/call.svg";
import gmail from "public/assets/images/icons/gmail.svg";

const page = () => {
    return (
        <div>
            <div>
                {/* Start Contact Area */}
                <div className="contact-area pb-150">
                    <div className="container">
                        <div className="contact-section-title">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-7">
                                    <div className="left-side">
                                        <span className="sub-title d-block">
                                            Get in touch
                                        </span>
                                        <TextAnimation
                                            as="h1"
                                            className="mb-0 text-animation"
                                        >
                                            Reach out <span>to us</span>
                                        </TextAnimation>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <div className="right-side">
                                        <p>
                                            Have a question or need assistance?
                                            Our team is here to help! Feel free
                                            to reach out to us, and {`we'll`} be
                                            happy to provide the support you
                                            need.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SlideInUp selector=".row">
                            <div className="row" data-cues="slideInUp">
                                <div className="col-lg-6 col-md-12">
                                    <div className="contact-image">
                                        <Image
                                            src={contact}
                                            alt="contact-image"
                                        />
                                        <div className="info d-md-flex justify-content-between">
                                            <div className="item position-relative">
                                                <div className="icon">
                                                    <Image
                                                        src={gmail}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <h3>Email us</h3>
                                                <a
                                                    href="mailto:support@lunex.com"
                                                    className="d-inline-block"
                                                >
                                                    support@lunex.com
                                                </a>
                                            </div>
                                            <div className="item position-relative">
                                                <div className="icon">
                                                    <Image
                                                        src={call}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <h3>Call us</h3>
                                                <a
                                                    href="tel:+1(555)123-4567"
                                                    className="d-inline-block"
                                                >
                                                    +1 (555) 123-4567
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="contact-form">
                                        <ContactForm1 />
                                    </div>
                                </div>
                            </div>
                        </SlideInUp>
                    </div>
                </div>
                {/* End Contact Area */}
                {/* Start FAQ Area */}
                <div className="faq-area pb-150">
                    <div className="container">
                        <div className="creative-agency-section-title">
                            <div className="left-side">
                                <TextAnimation className="text-animation">
                                    Frequently{" "}
                                    <span className="text-primary">
                                        asked questions
                                    </span>
                                </TextAnimation>
                            </div>
                        </div>
                        <SlideInUp
                            selector=".accordion-item"
                            individual
                            delay={0}
                        >
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
                                        What services do you offer as a creative
                                        agency?
                                        <i className="ri-add-line" />
                                    </button>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#creativeAgencyFaqAccordion"
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
                                        <i className="ri-add-line" />
                                    </button>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#creativeAgencyFaqAccordion"
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
                                        <i className="ri-add-line" />
                                    </button>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#creativeAgencyFaqAccordion"
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
                                        <i className="ri-add-line" />
                                    </button>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#creativeAgencyFaqAccordion"
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
                                        <i className="ri-add-line" />
                                    </button>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#creativeAgencyFaqAccordion"
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
            </div>
        </div>
    );
};

export default page;
