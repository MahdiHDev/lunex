import SlideInUp from "@/components/common/SlideInUp";
import TextAnimation from "@/components/common/TextAnimation";
import NavbarContact from "@/components/navbars/NavbarContact";

const page = () => {
    return (
        <div>
            <div>
                {/* Start Navbar Area */}
                <NavbarContact />
                {/* End Navbar Area */}
            </div>

            {/* Page Banner Area */}
            <div className="page_banner_area">
                <div className="container">
                    <div className="page_banner_content text-center">
                        <span className="sub_title d-block fw-medium">
                            Contact Us
                        </span>
                        <TextAnimation as="h1" className="mb-0 text_animation">
                            Thinking of Starting a New Project?
                        </TextAnimation>
                    </div>
                </div>
            </div>
            {/* End Page Banner Area */}
            {/* Contact Area */}
            <div className="contact_area ptb-150">
                <div className="container">
                    <SlideInUp selector=".row">
                        <div className="row gx-0" data-cue="slideInUp">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div
                                    className="contact_image position-relative"
                                    style={{
                                        backgroundImage:
                                            "url(assets/images/girl_with_laptop.jpg)",
                                    }}
                                >
                                    <img
                                        src="assets/images/girl_with_laptop.jpg"
                                        alt="girl_with_laptop"
                                    />
                                    <div className="text_box">
                                        <p className="text-white fw-medium">
                                            “ Simplifying website development,
                                            this software makes managing your
                                            online presence hassle-free. “
                                        </p>
                                        <h3 className="text-white fw-semibold">
                                            Apollo Maddox
                                        </h3>
                                        <span className="d-block text-white">
                                            Founder &amp; CEO
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="contact_form">
                                    <p>
                                        Have questions or feedback? Drop us a
                                        message below, and we’ll get back to you
                                        quickly.
                                    </p>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Full Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Your Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <select
                                                        className="form-select"
                                                        defaultValue={1}
                                                    >
                                                        <option value={1}>
                                                            Select
                                                        </option>
                                                        <option value={2}>
                                                            Web design
                                                        </option>
                                                        <option value={3}>
                                                            Branding &amp;
                                                            identity
                                                        </option>
                                                        <option value={4}>
                                                            Digital marketing
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Message"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <button
                                                    type="submit"
                                                    className="btn primary_btn text-capitalize d-block w-100"
                                                >
                                                    Send Message
                                                </button>
                                                <p>
                                                    Or drop us a message via
                                                    email.
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </SlideInUp>
                </div>
            </div>
            {/* End Contact Area */}
            {/* Reach Us Area */}
            <div className="reach_us_area pb-125">
                <div className="container">
                    <div className="section_title text-center mx-auto">
                        <TextAnimation className="mb-0 text_animation fw-bold">
                            Other Ways to Reach Us
                        </TextAnimation>
                    </div>
                    <SlideInUp selector=".row .reach_us_box">
                        <div
                            className="row justify-content-center"
                            data-cues="slideInUp"
                            data-group="reach_us_list"
                        >
                            <div className="col-lg-3 col-sm-6">
                                <div className="reach_us_box text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <i className="ri-map-pin-line" />
                                    </div>
                                    <h3>Our Office</h3>
                                    <p>
                                        Nenuya Centre Elia Street, New York, USA
                                    </p>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="details_link_btn d-inline-block position-relative fw-medium"
                                    >
                                        Visit Us{" "}
                                        <i className="ri-arrow-right-long-line" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="reach_us_box text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <i className="ri-message-2-line" />
                                    </div>
                                    <h3>Via Chat</h3>
                                    <p>Instant solutions at your fingertips.</p>
                                    <a
                                        href="contact.html"
                                        className="details_link_btn d-inline-block position-relative fw-medium"
                                    >
                                        {`Let's`} Chat{" "}
                                        <i className="ri-arrow-right-long-line" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="reach_us_box text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <i className="ri-question-line" />
                                    </div>
                                    <h3>Report Issue</h3>
                                    <p>Access premium support services.</p>
                                    <a
                                        href="contact.html"
                                        className="details_link_btn d-inline-block position-relative fw-medium"
                                    >
                                        Send Report{" "}
                                        <i className="ri-arrow-right-long-line" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="reach_us_box text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <i className="ri-group-2-line" />
                                    </div>
                                    <h3>Our Community</h3>
                                    <p>
                                        Create meaningful connections with
                                        users.
                                    </p>
                                    <a
                                        href="contact.html"
                                        className="details_link_btn d-inline-block position-relative fw-medium"
                                    >
                                        Join Us{" "}
                                        <i className="ri-arrow-right-long-line" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SlideInUp>
                </div>
            </div>
            {/* End Reach Us Area */}
            {/* FAQ Area */}
            <div className="faq_area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq_content">
                                <div className="sub_title d-inline-block style_two">
                                    <span className="d-flex align-items-center text-uppercase">
                                        FAQ
                                        <img
                                            src="assets/images/icons/white_arrow_long_right.svg"
                                            alt="white_arrow_long_right"
                                        />
                                    </span>
                                </div>
                                <h2 className="text_animation fw-bold">
                                    Have Questions? We’ve got Answers
                                </h2>
                                <SlideInUp selector=".accordion-item">
                                    <div
                                        className="accordion style_two"
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
                                                What is the difference between
                                                SEO and PPC?
                                            </button>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                data-bs-parent="#faqAccordion"
                                            >
                                                <div className="accordion-body px-0 pb-0">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor incidid
                                                        unt ut labo magna.
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
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor incidid
                                                        unt ut labo magna.
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
                                                Do you provide support after the
                                                campaign ends?
                                            </button>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#faqAccordion"
                                            >
                                                <div className="accordion-body px-0 pb-0">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor incidid
                                                        unt ut labo magna.
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
                                <img
                                    src="assets/images/faq.jpg"
                                    alt="faq-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End FAQ Area */}
            {/* Footer Area */}
            <div>
                <footer className="footer_area">
                    <div className="white_top_rectangle" />
                    <div className="container pt-150">
                        <div className="footer_content">
                            <TextAnimation className="text-white text_animation fw-bold">
                                Have an Idea?
                            </TextAnimation>
                            <TextAnimation className="text-white text_animation fw-bold">
                                {`Let's`} Work Together!
                            </TextAnimation>
                            <SlideInUp
                                selector=".primary_btn"
                                individual
                                delay={0}
                            >
                                <a
                                    href="contact.html"
                                    className="btn primary_btn"
                                >
                                    <span className="d-inline-block position-relative">
                                        Get Started for Free{" "}
                                        <i className="ri-arrow-right-up-line" />
                                    </span>
                                </a>
                            </SlideInUp>
                        </div>
                        <div className="pt-150" />
                        <SlideInUp selector=".footer_inner_box">
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
                                                <img
                                                    src="assets/images/white-logo.svg"
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
                <div className="back_to_top position-fixed text-center rounded-circle">
                    <i className="ri-arrow-up-s-line" />
                </div>
                {/* End Back To Top */}
            </div>
        </div>
    );
};

export default page;
