"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import upArrow from "public/assets/images/icons/up-arrow.svg";
import whiteUpArrow from "public/assets/images/icons/white-up-arrow.svg";

const BackToTop = ({ isBottonShow = true }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrolledPastThreshold = window.scrollY > 400;

            let nearBottom;

            if (isBottonShow) {
                nearBottom =
                    window.innerHeight + window.scrollY >=
                    document.documentElement.scrollHeight - 300; // px from bottom to hide
            }

            setVisible(scrolledPastThreshold && !nearBottom);
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div
            className={`back-to-top rounded-circle position-fixed text-center rounded-circle ${visible ? "active" : ""}`}
            onClick={scrollToTop}
            role="button"
            aria-label="Back to top"
        >
            <Image src={upArrow} alt="up-arrow" />
            <Image src={whiteUpArrow} alt="white-up-arrow" />
        </div>
    );
};

export default BackToTop;
