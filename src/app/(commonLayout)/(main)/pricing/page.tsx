import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";

const page = () => {
    return (
        <div className="bg-f8f9fd">
            <div>
                {/* Start Page Banner Area */}
                <div className="page-banner-area">
                    <div className="container">
                        <div className="page-banner-content mx-auto text-center">
                            <span className="sub-title d-block">
                                Our pricing
                            </span>
                            <TextAnimation
                                as="h1"
                                className="mb-0 text-animation"
                            >
                                Choose best <span>pricing plan</span>
                            </TextAnimation>
                        </div>
                    </div>
                </div>
                {/* End Page Banner Area */}
                {/* Start Pricing Area */}
                <div className="pricing-area pt-80 pb-150">
                    <SlideInUp selector=".pricing-tabs" className="container">
                        <div className="pricing-tabs" data-cue="slideInUp">
                            <ul
                                className="nav nav-tabs d-block text-center border-0"
                                id="myTab"
                                role="tablist"
                            >
                                <li
                                    className="nav-item d-inline-block"
                                    role="presentation"
                                >
                                    <button
                                        className="nav-link d-block border-0 active"
                                        id="monthly-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#monthly-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="monthly-tab-pane"
                                        aria-selected="true"
                                    >
                                        Monthly
                                    </button>
                                </li>
                                <li
                                    className="nav-item d-inline-block"
                                    role="presentation"
                                >
                                    <button
                                        className="nav-link d-block border-0"
                                        id="yearly-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#yearly-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="yearly-tab-pane"
                                        aria-selected="false"
                                    >
                                        Yearly
                                    </button>
                                </li>
                            </ul>
                            <span className="discount d-block text-center">
                                Enjoy a <span>17%</span> discount with an annual
                                subscription
                            </span>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="monthly-tab-pane"
                                    role="tabpanel"
                                    tabIndex={0}
                                >
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-pricing-box">
                                                <div className="pricing-header">
                                                    <span className="d-inline-block fw-semibold">
                                                        Starter
                                                    </span>
                                                    <p>
                                                        Select the ideal plan
                                                        that best suits your
                                                        business needs.
                                                    </p>
                                                </div>
                                                <div className="price fw-medium lh-1">
                                                    $19
                                                </div>
                                                <ul className="pricing-features ps-0 list-unstyled mb-0">
                                                    <li className="position-relative">
                                                        1 website
                                                    </li>
                                                    <li className="position-relative">
                                                        Basic support
                                                    </li>
                                                    <li className="position-relative">
                                                        Access to essential
                                                        features
                                                    </li>
                                                    <li className="position-relative">
                                                        Limited customization
                                                        options
                                                    </li>
                                                </ul>
                                                <a
                                                    href="#"
                                                    className="default-btn style-two d-block w-100 text-center"
                                                >
                                                    Get Started
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-pricing-box">
                                                <div className="pricing-header">
                                                    <span className="d-inline-block fw-semibold">
                                                        Standard
                                                    </span>
                                                    <p>
                                                        Select the ideal plan
                                                        that best suits your
                                                        business needs.
                                                    </p>
                                                </div>
                                                <div className="price fw-medium lh-1">
                                                    $39
                                                </div>
                                                <ul className="pricing-features ps-0 list-unstyled mb-0">
                                                    <li className="position-relative">
                                                        3 websites
                                                    </li>
                                                    <li className="position-relative">
                                                        Priority support
                                                    </li>
                                                    <li className="position-relative">
                                                        Advanced analytics
                                                    </li>
                                                    <li className="position-relative">
                                                        Basic SEO tools
                                                    </li>
                                                </ul>
                                                <a
                                                    href="#"
                                                    className="default-btn style-two d-block w-100 text-center"
                                                >
                                                    Get Started
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-pricing-box">
                                                <div className="pricing-header">
                                                    <span className="d-inline-block fw-semibold">
                                                        Pro
                                                    </span>
                                                    <p>
                                                        Select the ideal plan
                                                        that best suits your
                                                        business needs.
                                                    </p>
                                                </div>
                                                <div className="price fw-medium lh-1">
                                                    $69
                                                </div>
                                                <ul className="pricing-features ps-0 list-unstyled mb-0">
                                                    <li className="position-relative">
                                                        10 websites
                                                    </li>
                                                    <li className="position-relative">
                                                        24/7 support
                                                    </li>
                                                    <li className="position-relative">
                                                        Custom integrations
                                                    </li>
                                                    <li className="position-relative">
                                                        Full reporting &amp;
                                                        insights
                                                    </li>
                                                </ul>
                                                <a
                                                    href="#"
                                                    className="default-btn style-two d-block w-100 text-center"
                                                >
                                                    Get Started
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pricing-features-table table-responsive">
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" />
                                                    <th scope="col">Starter</th>
                                                    <th scope="col">
                                                        Standard
                                                    </th>
                                                    <th scope="col">Pro</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        Customizable dashboard
                                                    </th>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Advanced analytics tools
                                                    </th>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Exclusive beta access
                                                    </th>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Priority feature
                                                        requests
                                                    </th>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Dedicated onboarding
                                                        assistance
                                                    </th>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Collaborative tools
                                                    </th>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="yearly-tab-pane"
                                    role="tabpanel"
                                    tabIndex={0}
                                >
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-pricing-box">
                                                <div className="pricing-header">
                                                    <span className="d-inline-block fw-semibold">
                                                        Starter
                                                    </span>
                                                    <p>
                                                        Select the ideal plan
                                                        that best suits your
                                                        business needs.
                                                    </p>
                                                </div>
                                                <div className="price fw-medium lh-1">
                                                    $199
                                                </div>
                                                <ul className="pricing-features ps-0 list-unstyled mb-0">
                                                    <li className="position-relative">
                                                        1 website
                                                    </li>
                                                    <li className="position-relative">
                                                        Basic support
                                                    </li>
                                                    <li className="position-relative">
                                                        Access to essential
                                                        features
                                                    </li>
                                                    <li className="position-relative">
                                                        Limited customization
                                                        options
                                                    </li>
                                                </ul>
                                                <a
                                                    href="#"
                                                    className="default-btn style-two d-block w-100 text-center"
                                                >
                                                    Get Started
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-pricing-box">
                                                <div className="pricing-header">
                                                    <span className="d-inline-block fw-semibold">
                                                        Standard
                                                    </span>
                                                    <p>
                                                        Select the ideal plan
                                                        that best suits your
                                                        business needs.
                                                    </p>
                                                </div>
                                                <div className="price fw-medium lh-1">
                                                    $399
                                                </div>
                                                <ul className="pricing-features ps-0 list-unstyled mb-0">
                                                    <li className="position-relative">
                                                        3 websites
                                                    </li>
                                                    <li className="position-relative">
                                                        Priority support
                                                    </li>
                                                    <li className="position-relative">
                                                        Advanced analytics
                                                    </li>
                                                    <li className="position-relative">
                                                        Basic SEO tools
                                                    </li>
                                                </ul>
                                                <a
                                                    href="#"
                                                    className="default-btn style-two d-block w-100 text-center"
                                                >
                                                    Get Started
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-pricing-box">
                                                <div className="pricing-header">
                                                    <span className="d-inline-block fw-semibold">
                                                        Pro
                                                    </span>
                                                    <p>
                                                        Select the ideal plan
                                                        that best suits your
                                                        business needs.
                                                    </p>
                                                </div>
                                                <div className="price fw-medium lh-1">
                                                    $699
                                                </div>
                                                <ul className="pricing-features ps-0 list-unstyled mb-0">
                                                    <li className="position-relative">
                                                        10 websites
                                                    </li>
                                                    <li className="position-relative">
                                                        24/7 support
                                                    </li>
                                                    <li className="position-relative">
                                                        Custom integrations
                                                    </li>
                                                    <li className="position-relative">
                                                        Full reporting &amp;
                                                        insights
                                                    </li>
                                                </ul>
                                                <a
                                                    href="#"
                                                    className="default-btn style-two d-block w-100 text-center"
                                                >
                                                    Get Started
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pricing-features-table table-responsive">
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" />
                                                    <th scope="col">Starter</th>
                                                    <th scope="col">
                                                        Standard
                                                    </th>
                                                    <th scope="col">Pro</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        Customizable dashboard
                                                    </th>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Advanced analytics tools
                                                    </th>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Exclusive beta access
                                                    </th>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Priority feature
                                                        requests
                                                    </th>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Dedicated onboarding
                                                        assistance
                                                    </th>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Collaborative tools
                                                    </th>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-close-line" />
                                                    </td>
                                                    <td>
                                                        <i className="ri-check-line" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideInUp>
                </div>

                {/* End Pricing Area */}
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
