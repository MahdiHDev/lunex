"use client";

import { useEffect, useState } from "react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    // Shows the button once the page has scrolled down a bit — same
    // threshold behavior as the original theme's scroll listener.
    useEffect(() => {
        function handleScroll() {
            setVisible(window.scrollY > 400);
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // in case the page loads already scrolled
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div
            className={`back_to_top position-fixed text-center rounded-circle ${visible ? "active" : ""}`}
            onClick={scrollToTop}
            role="button"
            aria-label="Back to top"
        >
            <i className="ri-arrow-up-s-line" />
        </div>
    );
};

export default BackToTop;
