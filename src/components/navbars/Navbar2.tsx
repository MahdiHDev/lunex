"use client";

import useSticky from "@/hooks/useSticky";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuPopup from "../menu/MenuPopup";

const Navbar2 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const isSticky = useSticky(100);

    useEffect(() => {
        const mountedTimeout = setTimeout(() => {
            setMounted(true);
        }, 0);

        return () => clearTimeout(mountedTimeout);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div
            className={`navbar-area top-0 start-0 end-0 h-auto ${isSticky ? "is-sticky" : ""}`}
        >
            <div className="container">
                <nav className="navbar p-0 navbar-expand-lg">
                    <a className="navbar-brand" href="">
                        <img
                            src="assets/images/logo.svg"
                            alt="logo"
                            className="black-logo"
                        />
                        <img
                            src="assets/images/white-logo.svg"
                            className="d-none"
                            alt="logo"
                        />
                    </a>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="navbar-toggler"
                        type="button"
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
                                            className="nav-link active"
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
                                            className="nav-link"
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
                                <Link
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link"
                                >
                                    Works
                                </Link>
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
                                <Link
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link"
                                >
                                    Careers
                                </Link>
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
                                <Link
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link"
                                >
                                    Pages
                                </Link>
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
                                        <Link
                                            href="javascript:void(0)"
                                            className="dropdown-toggle nav-link"
                                        >
                                            Services
                                        </Link>
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
                                        <Link
                                            href="javascript:void(0)"
                                            className="dropdown-toggle nav-link"
                                        >
                                            My Account
                                        </Link>
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
                                <Link
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link"
                                >
                                    Blogs
                                </Link>
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
                                <Link
                                    href="javascript:void(0)"
                                    className="dropdown-toggle nav-link"
                                >
                                    Contacts
                                </Link>
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
                                onClick={toggleTheme}
                                className="light-dark-btn d-inline-block p-0 bg-transparent border-0 lh-1"
                                id="light-dark-btn"
                            >
                                {theme === "dark" ? (
                                    <i className="ri-sun-line" />
                                ) : (
                                    <i className="ri-sun-line" />
                                )}
                            </button>
                            <Link
                                href="contact"
                                className="link-btn style-two d-flex align-items-center"
                            >
                                <span>
                                    <img
                                        src="assets/images/icons/right-top-arrow.svg"
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

export default Navbar2;
