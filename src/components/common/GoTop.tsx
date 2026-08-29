"use client";

import Image from "next/image";
import upArrow from "public/assets/images/icons/up-arrow.svg";
import whiteUpArrow from "public/assets/images/icons/white-up-arrow.svg";
import { useEffect, useState } from "react";

export default function GoTop() {
    const [visible, setVisible] = useState(false);

    // Shows the button once the page has scrolled down a bit — same
    // threshold behavior as the original theme's scroll listener.
    useEffect(() => {
        function handleScroll() {
            setVisible(window.scrollY > 300);
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
            className={`go-top rounded-circle${visible ? " active" : ""}`}
            onClick={scrollToTop}
            role="button"
            aria-label="Go to top"
        >
            <Image src={upArrow} alt="up-arrow" />
            <Image src={whiteUpArrow} alt="white-up-arrow" />
        </div>
    );
}
