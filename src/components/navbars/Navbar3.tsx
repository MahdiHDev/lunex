"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar3 = () => {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

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
        <div className="navbar-area style-two top-0 start-0 end-0 h-auto">
            <div className="container">
                <nav className="navbar p-0">
                    <a className="navbar-brand" href="index.html">
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
                    <button className="navbar-toggler" type="button">
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
                                <i className="ri-sun-line" />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar3;
