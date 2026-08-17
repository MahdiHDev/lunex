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
                                                            <Link
                                                                className="accordion-link fw-semibold text-decoration-none active"
                                                                href="/"
                                                            >
                                                                Creative Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-2"
                                                            >
                                                                Digital Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-3"
                                                            >
                                                                Development
                                                                Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-4"
                                                            >
                                                                Digital
                                                                Marketing Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-5"
                                                            >
                                                                UI/UX Design
                                                                Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-6"
                                                            >
                                                                Branding Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-7"
                                                            >
                                                                Content Creation
                                                                Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-8"
                                                            >
                                                                SEO Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                href="index-9"
                                                            >
                                                                Cyber Security
                                                                Agency
                                                            </Link>
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
                                                            <Link
                                                                href="works"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Works
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="work-single"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Work Single
                                                            </Link>
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
                                                            <Link
                                                                href="careers"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Careers
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="career-single"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Career Single
                                                            </Link>
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
                                                            <Link
                                                                href="about"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                About Us
                                                            </Link>
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
                                                                            <Link
                                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                                href="services"
                                                                            >
                                                                                Services
                                                                            </Link>
                                                                        </div>
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <Link
                                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                                href="service-single"
                                                                            >
                                                                                Service
                                                                                Single
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="pricing"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Pricing
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="book-a-call"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Book A Call
                                                            </Link>
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
                                                                            <Link
                                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                                href="signin"
                                                                            >
                                                                                Signin
                                                                            </Link>
                                                                        </div>
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <Link
                                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                                href="signup"
                                                                            >
                                                                                Signup
                                                                            </Link>
                                                                        </div>
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <Link
                                                                                className="accordion-link fw-semibold text-decoration-none"
                                                                                href="forgot-password"
                                                                            >
                                                                                Forgot
                                                                                Password?
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="faq"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                FAQ
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="privacy-policy"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Privacy Policy
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="terms-conditions"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Terms &amp;
                                                                Conditions
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="error"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                404 Error Page
                                                            </Link>
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
                                                            <Link
                                                                href="blog"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Blog
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="blog-single"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Blog Single
                                                            </Link>
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
                                                            <Link
                                                                href="contact"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Contact Style 1
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="contact-2"
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Contact Style 2
                                                            </Link>
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
