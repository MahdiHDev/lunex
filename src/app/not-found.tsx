"use client";
import useMountedTheme from "@/hooks/useMountedTheme";
import Link from "next/link";

const NotFound = () => {
    const { mounted, theme, toggleTheme } = useMountedTheme();

    if (!mounted) return null;

    return (
        <div>
            {/* Start Error Area */}
            <div className="page-banner-area error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-banner-content mx-auto text-center content-404">
                                <h1 className="mb-0 text-animation">
                                    Uh-oh! Page not <span>found</span>!
                                </h1>
                                <Link
                                    href="/"
                                    className="link-btn menu_link text-center d-inline-block rounded-circle"
                                    data-cue="slideInUp"
                                >
                                    <img
                                        src="assets/images/icons/white-right-top-arrow.svg"
                                        alt="right-top-arrow"
                                    />
                                    <span className="menu_link-text">
                                        Back To Home
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    className="light-dark-btn d-inline-block p-0 bg-transparent border-0 lh-1"
                    id="light-dark-btn"
                    onClick={toggleTheme}
                >
                    {theme === "dark" ? (
                        <i className="ri-moon-line" />
                    ) : (
                        <i className="ri-sun-line" />
                    )}
                </button>
            </div>
            {/* End Error Area */}
        </div>
    );
};

export default NotFound;
