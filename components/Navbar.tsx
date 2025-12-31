"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
    const [openMobileNav, setOpenMobileNav] = useState(false);

    return (
        <div className="navbar-area top-0 start-0 end-0 h-auto">
            <div className="container">
                <nav className="navbar p-0 navbar-expand-lg">
                    <Link className="navbar-brand" href={"/"}>
                        <Image
                            src="assets/images/logo.svg"
                            alt="logo"
                            className="black-logo"
                            width={115}
                            height={30}
                        />
                        <Image
                            src="assets/images/white-logo.svg"
                            className="d-none"
                            alt="logo"
                            width={115}
                            height={30}
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span
                            className="burger-menu"
                            onClick={() => setOpenMobileNav(!openMobileNav)}
                        >
                            <span className="top-bar" />
                            <span className="middle-bar" />
                            <span className="bottom-bar" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link active"
                                >
                                    Home
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a
                                            href="index.html"
                                            className="nav-link active"
                                        >
                                            Creative Agency
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="index-2.html"
                                            className="nav-link"
                                        >
                                            Digital Agency
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="index-3.html"
                                            className="nav-link"
                                        >
                                            Development Agency
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="index-4.html"
                                            className="nav-link"
                                        >
                                            Digital Marketing Agency
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="index-5.html"
                                            className="nav-link"
                                        >
                                            UI/UX Design Agency
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="index-6.html"
                                            className="nav-link"
                                        >
                                            Branding Agency
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="index-7.html"
                                            className="nav-link"
                                        >
                                            Content Creation Agency
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="index-8.html"
                                            className="nav-link"
                                        >
                                            SEO Agency
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="index-9.html"
                                            className="nav-link"
                                        >
                                            Cyber Security Agency
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link"
                                >
                                    Works
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a
                                            href="works.html"
                                            className="nav-link"
                                        >
                                            Works
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="work-single.html"
                                            className="nav-link"
                                        >
                                            Work Single
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link"
                                >
                                    Careers
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a
                                            href="careers.html"
                                            className="nav-link"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="career-single.html"
                                            className="nav-link"
                                        >
                                            Career Single
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a
                                            href="about.html"
                                            className="nav-link"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="team.html"
                                            className="nav-link"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="javascript:void(0)"
                                            className="dropdown-toggle nav-link"
                                        >
                                            Services
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a
                                                    href="services.html"
                                                    className="nav-link"
                                                >
                                                    Services
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="service-single.html"
                                                    className="nav-link"
                                                >
                                                    Service Single
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pricing.html"
                                            className="nav-link"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="book-a-call.html"
                                            className="nav-link"
                                        >
                                            Book A Call
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="javascript:void(0)"
                                            className="dropdown-toggle nav-link"
                                        >
                                            My Account
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a
                                                    href="signin.html"
                                                    className="nav-link"
                                                >
                                                    Signin
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="signup.html"
                                                    className="nav-link"
                                                >
                                                    Signup
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="forgot-password.html"
                                                    className="nav-link"
                                                >
                                                    Forgot Password?
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="faq.html" className="nav-link">
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="privacy-policy.html"
                                            className="nav-link"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="terms-conditions.html"
                                            className="nav-link"
                                        >
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="error.html"
                                            className="nav-link"
                                        >
                                            404 Error Page
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link"
                                >
                                    Blogs
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a
                                            href="blog.html"
                                            className="nav-link"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="blog-single.html"
                                            className="nav-link"
                                        >
                                            Blog Single
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link"
                                >
                                    Contacts
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a
                                            href="contact.html"
                                            className="nav-link"
                                        >
                                            Contact Style 1
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="contact-2.html"
                                            className="nav-link"
                                        >
                                            Contact Style 2
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="others-option d-flex align-items-center">
                            <button
                                type="button"
                                className="light-dark-btn d-inline-block p-0 bg-transparent border-0 lh-1"
                                id="light-dark-btn"
                            >
                                <i className="ri-sun-line" />
                            </button>
                            <a
                                href="contact.html"
                                className="link-btn d-flex align-items-center"
                            >
                                <span>
                                    <img
                                        src="assets/images/icons/white-right-top-arrow.svg"
                                        alt="right-top-arrow"
                                    />
                                </span>
                                Talk to Us
                            </a>
                        </div>
                    </div>
                    <MobileNav
                        openMobileNav={openMobileNav}
                        setOpenMobileNav={setOpenMobileNav}
                    />
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
