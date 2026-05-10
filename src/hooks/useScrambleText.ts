import { useEffect } from "react";
import SplitType from "split-type";

export function useScrambleText() {
    useEffect(() => {
        // Wait for DOM
        const links = document.querySelectorAll<HTMLElement>(".menu_link");
        if (!links.length) return;

        // Split text into chars
        const typeSplit = new SplitType(".menu_link-text", {
            types: "words,chars",
            tagName: "span",
        });

        const getRandomLetter = (length: number): string => {
            let result = "";
            const characters = "abcdefghijklmnopqrstuvwxyz";
            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * characters.length),
                );
            }
            return result;
        };

        // Store original letters on each char
        const allChars = document.querySelectorAll<HTMLElement>(".char");
        allChars.forEach((char) => {
            char.setAttribute("letter", char.textContent || "");
        });

        // Add hover effect to each menu_link
        const cleanups: (() => void)[] = [];

        links.forEach((link) => {
            const chars = link.querySelectorAll<HTMLElement>(".char");
            let myInterval: ReturnType<typeof setInterval> | undefined;

            const resetText = () => {
                if (myInterval !== undefined) {
                    clearInterval(myInterval);
                }
                chars.forEach((char) => {
                    char.textContent = char.getAttribute("letter") || "";
                });
            };

            const handleMouseEnter = () => {
                let length = chars.length;

                myInterval = setInterval(() => {
                    chars.forEach((char, index) => {
                        if (index < length) {
                            char.textContent = getRandomLetter(1);
                        } else {
                            char.textContent =
                                char.getAttribute("letter") || "";
                        }
                    });
                    length = length - 1;
                }, 100);

                setTimeout(() => {
                    resetText();
                }, 400);
            };

            const handleMouseLeave = () => {
                resetText();
            };

            link.addEventListener("mouseenter", handleMouseEnter);
            link.addEventListener("mouseleave", handleMouseLeave);

            // Store cleanup
            cleanups.push(() => {
                link.removeEventListener("mouseenter", handleMouseEnter);
                link.removeEventListener("mouseleave", handleMouseLeave);
                resetText();
            });
        });

        return () => {
            cleanups.forEach((cleanup) => cleanup());
            typeSplit.revert();
        };
    }, []);
}
