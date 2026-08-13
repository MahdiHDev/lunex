"use client";

import Link from "next/link";
import { useState } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function MenuPopup({ isOpen, onClose }: Props) {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    console.log("isOpen", isOpen);

    if (!isOpen) return null;

    return (
        <div
            className={`menu-popup-area position-fixed start-0 end-0 top-0 bottom-0 ${isOpen ? "active" : ""}`}
        >
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="meanu-popup-nav">
                                    <div
                                        className="accordion"
                                        id="navbarAccordion"
                                    >
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed active"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navbarCollapseOne"
                                                aria-expanded="false"
                                                aria-controls="navbarCollapseOne"
                                            >
                                                Home
                                            </button>
                                            <div
                                                id="navbarCollapseOne"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#navbarAccordion"
                                            >
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                className="accordion-link fw-semibold text-decoration-none active"
                                                                href="index.html"
                                                            >
                                                                Creative Agency
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-2.html"
                                                            >
                                                                Digital Agency
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-3.html"
                                                            >
                                                                Development
                                                                Agency
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-4.html"
                                                            >
                                                                Digital
                                                                Marketing Agency
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-5.html"
                                                            >
                                                                UI/UX Design
                                                                Agency
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-6.html"
                                                            >
                                                                Branding Agency
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-7.html"
                                                            >
                                                                Content Creation
                                                                Agency
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-8.html"
                                                            >
                                                                SEO Agency
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-9.html"
                                                            >
                                                                Cyber Security
                                                                Agency
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navbarCollapseTwo"
                                                aria-expanded="false"
                                                aria-controls="navbarCollapseTwo"
                                            >
                                                Works
                                            </button>
                                            <div
                                                id="navbarCollapseTwo"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#navbarAccordion"
                                            >
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="works.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Works
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="work-single.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Work Single
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navbarCollapseThree"
                                                aria-expanded="false"
                                                aria-controls="navbarCollapseThree"
                                            >
                                                Careers
                                            </button>
                                            <div
                                                id="navbarCollapseThree"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#navbarAccordion"
                                            >
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="careers.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Careers
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="career-single.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Career Single
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navbarCollapseFour"
                                                aria-expanded="false"
                                                aria-controls="navbarCollapseFour"
                                            >
                                                Pages
                                            </button>
                                            <div
                                                id="navbarCollapseFour"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#navbarAccordion"
                                            >
                                                <div className="accordion-body">
                                                    <div
                                                        className="accordion"
                                                        id="navbarAccordion2"
                                                    >
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="about.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                About Us
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="team"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Team
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <button
                                                                className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#navbarCollapseOne1"
                                                                aria-expanded="false"
                                                                aria-controls="navbarCollapseOne1"
                                                            >
                                                                Services
                                                            </button>
                                                            <div
                                                                id="navbarCollapseOne1"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#navbarAccordion2"
                                                            >
                                                                <div className="accordion-body">
                                                                    <div className="accordion">
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <a
                                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                                href="services.html"
                                                                            >
                                                                                Services
                                                                            </a>
                                                                        </div>
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <a
                                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                                href="service-single.html"
                                                                            >
                                                                                Service
                                                                                Single
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="pricing.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Pricing
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="book-a-call.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Book A Call
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <button
                                                                className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#navbarCollapseOne2"
                                                                aria-expanded="false"
                                                                aria-controls="navbarCollapseOne2"
                                                            >
                                                                My Account
                                                            </button>
                                                            <div
                                                                id="navbarCollapseOne2"
                                                                className="accordion-collapse collapse"
                                                                data-bs-parent="#navbarAccordion2"
                                                            >
                                                                <div className="accordion-body">
                                                                    <div className="accordion">
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <a
                                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                                href="signin.html"
                                                                            >
                                                                                Signin
                                                                            </a>
                                                                        </div>
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <a
                                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                                href="signup.html"
                                                                            >
                                                                                Signup
                                                                            </a>
                                                                        </div>
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <a
                                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                                href="forgot-password.html"
                                                                            >
                                                                                Forgot
                                                                                Password?
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="faq.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                FAQ
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="privacy-policy.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Privacy Policy
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="terms-conditions.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Terms &amp;
                                                                Conditions
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="error.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                404 Error Page
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navbarCollapseFive"
                                                aria-expanded="false"
                                                aria-controls="navbarCollapseFive"
                                            >
                                                Blogs
                                            </button>
                                            <div
                                                id="navbarCollapseFive"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#navbarAccordion"
                                            >
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="blog.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Blog
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="blog-single.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Blog Single
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#navbarCollapseSix"
                                                aria-expanded="false"
                                                aria-controls="navbarCollapseSix"
                                            >
                                                Contacts
                                            </button>
                                            <div
                                                id="navbarCollapseSix"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#navbarAccordion"
                                            >
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="contact.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Contact Style 1
                                                            </a>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <a
                                                                href="contact-2.html"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Contact Style 2
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="menu-contact-info">
                                    <div className="location">
                                        <h5>The Empire State</h5>
                                        <p>
                                            Parker Avenue, Kingsley Road, New
                                            York
                                        </p>
                                    </div>
                                    <h4>support@lunex.com</h4>
                                    <div className="socials">
                                        <a
                                            href="#"
                                            className="d-inline-block"
                                            target="_blank"
                                        >
                                            <i className="ri-facebook-circle-fill" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-inline-block"
                                            target="_blank"
                                        >
                                            <i className="ri-instagram-line" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-inline-block"
                                            target="_blank"
                                        >
                                            <i className="ri-threads-line" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-inline-block"
                                            target="_blank"
                                        >
                                            <i className="ri-twitter-x-line" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-inline-block"
                                            target="_blank"
                                        >
                                            <i className="ri-youtube-fill" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={onClose}
                type="button"
                className="menu-popup-close-btn position-absolute rounded-circle text-center border-0 p-0"
            >
                <i className="ri-close-line" />
            </button>
        </div>
    );
}
