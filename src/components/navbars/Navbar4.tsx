"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import useMountedTheme from "@/hooks/useMountedTheme";
import useSticky from "@/hooks/useSticky";

const Navbar4 = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { mounted, theme, toggleTheme } = useMountedTheme();
    const isSticky = useSticky(100);

    if (!mounted) return null;

    return (
        <div
            className={`navbar-area style-three top-0 start-0 end-0 h-auto ${
                isSticky ? "is-sticky" : ""
            }`}
        >
            <div className="container">
                <nav className="navbar p-0 navbar-expand-lg">
                    {/* Logo */}
                    <Link className="navbar-brand" href="/">
                        <Image
                            src="/assets/images/logo.svg"
                            alt="logo"
                            className="black-logo"
                            width={150}
                            height={50}
                        />

                        <Image
                            src="/assets/images/white-logo.svg"
                            className="d-none"
                            alt="logo"
                            width={150}
                            height={50}
                        />
                    </Link>

                    {/* Menu Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Image
                            src="/assets/images/icons/menu2.svg"
                            alt="menu"
                            width={24}
                            height={24}
                        />
                        <span>Menu</span>
                    </button>

                    {/* Popup Menu */}
                    <div
                        className={`navbar-popup-menu ${
                            menuOpen ? "active" : ""
                        }`}
                    >
                        <div className="top d-flex align-items-center justify-content-between">
                            <span className="d-block">Menu</span>

                            <button
                                type="button"
                                className="bg-transparent p-0 border-0"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <i className="ri-close-fill" />
                            </button>
                        </div>

                        <ul className="ps-0 mb-0 list-unstyled">
                            <li className="fw-medium">
                                <Link
                                    href="/"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="fw-medium">
                                <Link
                                    href="/about"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                            </li>

                            <li className="fw-medium">
                                <Link
                                    href="/works"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Works
                                </Link>
                            </li>

                            <li className="fw-medium">
                                <Link
                                    href="/careers"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Careers
                                </Link>
                            </li>

                            <li className="fw-medium">
                                <Link
                                    href="/blog"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Blog
                                </Link>
                            </li>

                            <li className="fw-medium">
                                <Link
                                    href="/contact"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                        <div className="info">
                            <div className="socials">
                                <a href="#" className="d-inline-block">
                                    <i className="ri-facebook-circle-fill" />
                                </a>

                                <a href="#" className="d-inline-block">
                                    <i className="ri-instagram-line" />
                                </a>

                                <a href="#" className="d-inline-block">
                                    <i className="ri-threads-line" />
                                </a>

                                <a href="#" className="d-inline-block">
                                    <i className="ri-twitter-x-line" />
                                </a>

                                <a href="#" className="d-inline-block">
                                    <i className="ri-youtube-fill" />
                                </a>
                            </div>

                            <a
                                href="mailto:support@lunex.com"
                                className="email"
                            >
                                support@lunex.com
                            </a>
                        </div>
                    </div>

                    {/* Right Options */}
                    <div className="others-option d-flex align-items-center">
                        <button
                            type="button"
                            className="light-dark-btn d-inline-block p-0 bg-transparent border-0 lh-1"
                            onClick={toggleTheme}
                        >
                            <i className="ri-sun-line" />
                        </button>

                        <Link
                            href="/contact"
                            className="link-btn d-inline-block"
                        >
                            Let&apos;s Chat{" "}
                            <i className="ri-arrow-right-line" />
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar4;
