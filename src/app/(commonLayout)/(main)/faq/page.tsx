import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";

const page = () => {
    return (
        <div>
            <div>
                {/* Start Page Banner Area */}
                <div className="page-banner-area">
                    <div className="container">
                        <div className="page-banner-content mx-auto text-center">
                            <span className="sub-title d-block">FAQ</span>
                            <TextAnimation
                                as="h1"
                                className="mb-0 text-animation"
                            >
                                Frequently asked <span>questions</span>
                            </TextAnimation>
                        </div>
                    </div>
                </div>
                {/* End Page Banner Area */}
                {/* Start FAQ Area */}
                <div className="faq-area ptb-150">
                    <div className="container">
                        <SlideInUp selector=".accordion-item" individual>
                            <div
                                className="digital-agency-faq-accordion accordion"
                                id="digitalAgencyFaqAccordion"
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
                                        <span className="number d-inline-block rounded-circle text-center">
                                            01
                                        </span>
                                    </button>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#digitalAgencyFaqAccordion"
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
                                        <span className="number d-inline-block rounded-circle text-center">
                                            02
                                        </span>
                                    </button>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#digitalAgencyFaqAccordion"
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
                                        <span className="number d-inline-block rounded-circle text-center">
                                            03
                                        </span>
                                    </button>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#digitalAgencyFaqAccordion"
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
                                        <span className="number d-inline-block rounded-circle text-center">
                                            04
                                        </span>
                                    </button>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#digitalAgencyFaqAccordion"
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
                                        <span className="number d-inline-block rounded-circle text-center">
                                            05
                                        </span>
                                    </button>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#digitalAgencyFaqAccordion"
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
