"use client";

import useSticky from "@/hooks/useSticky";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuPopup from "../menu/MenuPopup";

import rightTopArrow from "public/assets/images/icons/right-top-arrow.svg";
import logo from "public/assets/images/logo.svg";
import logoWhite from "public/assets/images/white-logo.svg";

const Navbar7 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const isSticky = useSticky(100);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div
            className={`navbar-area top-0 start-0 end-0 h-auto border_bottom ${isSticky ? "is-sticky" : ""}`}
        >
            <div className="container-fluid">
                <nav className="navbar p-0 navbar-expand-lg">
                    <Link className="navbar-brand" href="/">
                        <Image src={logo} alt="logo" className="black-logo" />
                        <Image src={logoWhite} className="d-none" alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="burger-menu">
                            <span className="top-bar" />
                            <span className="middle-bar" />
                            <span className="bottom-bar" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link fw-medium active"
                                >
                                    Home
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link
                                            href="/"
                                            className="nav-link fw-medium"
                                        >
                                            Creative Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/index-2"
                                            className="nav-link fw-medium"
                                        >
                                            Digital Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/index-3"
                                            className="nav-link fw-medium"
                                        >
                                            Development Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/index-4"
                                            className="nav-link fw-medium"
                                        >
                                            Digital Marketing Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/index-5"
                                            className="nav-link fw-medium"
                                        >
                                            UI/UX Design Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/index-6"
                                            className="nav-link fw-medium"
                                        >
                                            Branding Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/index-7"
                                            className="nav-link fw-medium active"
                                        >
                                            Content Creation Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/index-8"
                                            className="nav-link"
                                        >
                                            SEO Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/index-9"
                                            className="nav-link"
                                        >
                                            Cyber Security Agency
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link fw-medium"
                                >
                                    Works
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link
                                            href="/works"
                                            className="nav-link fw-medium"
                                        >
                                            Works
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/work-single"
                                            className="nav-link fw-medium"
                                        >
                                            Work Single
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link fw-medium"
                                >
                                    Careers
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link
                                            href="/careers"
                                            className="nav-link fw-medium"
                                        >
                                            Careers
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/career-single"
                                            className="nav-link fw-medium"
                                        >
                                            Career Single
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link fw-medium"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link
                                            href="/about"
                                            className="nav-link fw-medium"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/team"
                                            className="nav-link fw-medium"
                                        >
                                            Team
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="javascript:void(0)"
                                            className="dropdown-toggle nav-link fw-medium"
                                        >
                                            Services
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    href="/services"
                                                    className="nav-link fw-medium"
                                                >
                                                    Services
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="/service-single"
                                                    className="nav-link fw-medium"
                                                >
                                                    Service Single
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/pricing"
                                            className="nav-link fw-medium"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/book-a-call"
                                            className="nav-link fw-medium"
                                        >
                                            Book A Call
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/my-account"
                                            className="dropdown-toggle nav-link"
                                        >
                                            My Account
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    href="/signin"
                                                    className="nav-link"
                                                >
                                                    Signin
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="/signup"
                                                    className="nav-link"
                                                >
                                                    Signup
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="/forgot-password"
                                                    className="nav-link"
                                                >
                                                    Forgot Password?
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/faq"
                                            className="nav-link fw-medium"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/privacy-policy"
                                            className="nav-link fw-medium"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/terms-conditions"
                                            className="nav-link fw-medium"
                                        >
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/error"
                                            className="nav-link fw-medium"
                                        >
                                            404 Error Page
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link fw-medium"
                                >
                                    Blogs
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link
                                            href="/blog"
                                            className="nav-link fw-medium"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/blog-single"
                                            className="nav-link fw-medium"
                                        >
                                            Blog Single
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link fw-medium"
                                >
                                    Contacts
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link
                                            href="/contact"
                                            className="nav-link fw-medium"
                                        >
                                            Contact Style 1
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/contact-2"
                                            className="nav-link fw-medium"
                                        >
                                            Contact Style 2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="others-option d-flex align-items-center">
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="light-dark-btn d-inline-block p-0 bg-transparent border-0 lh-1"
                                id="light-dark-btn"
                            >
                                <i className="ri-sun-line" />
                            </button>
                            <Link
                                href="/contact"
                                className="link-btn style-two d-flex align-items-center"
                            >
                                <span>
                                    <Image
                                        src={rightTopArrow}
                                        alt="right-top-arrow"
                                    />
                                </span>
                                Talk to Us
                            </Link>
                        </div>
                    </div>
                    <MenuPopup
                        isOpen={menuOpen}
                        onClose={() => setMenuOpen(false)}
                    />
                </nav>
            </div>
        </div>
    );
};

export default Navbar7;
