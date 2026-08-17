"use client";

import { useState } from "react";

import useMountedTheme from "@/hooks/useMountedTheme";
import useSticky from "@/hooks/useSticky";
import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/images/logo.svg";
import whiteLogo from "public/assets/images/white-logo.svg";
import MenuPopup from "../menu/MenuPopup";

const Navbar3 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { mounted, theme, toggleTheme } = useMountedTheme();
    const isSticky = useSticky(100);

    if (!mounted) return null;

    return (
        <div
            className={`navbar-area style-two top-0 start-0 end-0 h-auto ${isSticky ? "is-sticky" : ""}`}
        >
            <div className="container">
                <nav className="navbar p-0">
                    <Link className="navbar-brand" href="/">
                        <Image src={logo} alt="logo" className="black-logo" />
                        <Image src={whiteLogo} className="d-none" alt="logo" />
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
                        <div className="others-option">
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
                        </div>
                    </div>
                </nav>
            </div>
            <MenuPopup isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>
    );
};

export default Navbar3;
