"use client";

import useMountedTheme from "@/hooks/useMountedTheme";
import useSticky from "@/hooks/useSticky";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import whiteLogo from "public/assets/images/white-logo.svg";
import MenuPopup from "../menu/MenuPopup";

const Navbar5 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { mounted, theme, toggleTheme } = useMountedTheme();
    const isSticky = useSticky(100);

    if (!mounted) return null;

    return (
        <div
            className={`navbar-area white-navbar top-0 start-0 end-0 h-auto ${
                isSticky ? "is-sticky" : ""
            } `}
        >
            <div className="container-fluid">
                <nav className="navbar p-0 navbar-expand-lg">
                    <Link className="navbar-brand" href="/">
                        <Image src={whiteLogo} alt="logo" />
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
                                    className="dropdown-toggle nav-link active"
                                >
                                    Home
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link href="/" className="nav-link">
                                            Creative Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="index-2"
                                            className="nav-link"
                                        >
                                            Digital Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="index-3"
                                            className="nav-link"
                                        >
                                            Development Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="index-4"
                                            className="nav-link"
                                        >
                                            Digital Marketing Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="index-5"
                                            className="nav-link active"
                                        >
                                            UI/UX Design Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="index-6"
                                            className="nav-link"
                                        >
                                            Branding Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="index-7"
                                            className="nav-link"
                                        >
                                            Content Creation Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="index-8"
                                            className="nav-link"
                                        >
                                            SEO Agency
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="index-9"
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
                                    className="dropdown-toggle nav-link"
                                >
                                    Works
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link href="works" className="nav-link">
                                            Works
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="work-single"
                                            className="nav-link"
                                        >
                                            Work Single
                                        </Link>
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
                                        <Link
                                            href="careers"
                                            className="nav-link"
                                        >
                                            Careers
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="career-single"
                                            className="nav-link"
                                        >
                                            Career Single
                                        </Link>
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
                                        <Link href="about" className="nav-link">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="team" className="nav-link">
                                            Team
                                        </Link>
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
                                                <Link
                                                    href="services"
                                                    className="nav-link"
                                                >
                                                    Services
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="service-single"
                                                    className="nav-link"
                                                >
                                                    Service Single
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="pricing"
                                            className="nav-link"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="book-a-call"
                                            className="nav-link"
                                        >
                                            Book A Call
                                        </Link>
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
                                                <Link
                                                    href="signin"
                                                    className="nav-link"
                                                >
                                                    Signin
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="signup"
                                                    className="nav-link"
                                                >
                                                    Signup
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="forgot-password"
                                                    className="nav-link"
                                                >
                                                    Forgot Password?
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="faq" className="nav-link">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="privacy-policy"
                                            className="nav-link"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="terms-conditions"
                                            className="nav-link"
                                        >
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="error" className="nav-link">
                                            404 Error Page
                                        </Link>
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
                                        <Link href="blog" className="nav-link">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="blog-single"
                                            className="nav-link"
                                        >
                                            Blog Single
                                        </Link>
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
                                        <Link
                                            href="contact"
                                            className="nav-link"
                                        >
                                            Contact Style 1
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="contact-2"
                                            className="nav-link"
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
                                className="light-dark-btn d-inline-block p-0 bg-transparent border-0 lh-1"
                                id="light-dark-btn"
                                onClick={toggleTheme}
                            >
                                {theme === "dark" ? (
                                    <i className="ri-sun-line" />
                                ) : (
                                    <i className="ri-sun-line" />
                                )}
                            </button>
                            <Link
                                href="contact"
                                className="link-btn d-flex align-items-center"
                            >
                                <span>
                                    <img
                                        src="assets/images/icons/white-right-top-arrow.svg"
                                        alt="right-top-arrow"
                                    />
                                </span>
                                Talk to Us
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <MenuPopup isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>
    );
};

export default Navbar5;
