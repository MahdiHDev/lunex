import { useEffect } from "react";

export function useScrollColorChange() {
    useEffect(() => {
        const scrollTexts = document.querySelectorAll<HTMLElement>(
            ".on-scroll-font-color-change, .on_scroll_color_change",
        );

        const addSpan = (ele: HTMLElement) => {
            const headerText = ele.textContent?.trim() || "";
            const words = headerText.split(" ");
            let html = "";
            words.forEach((w) => {
                html += "<span>" + w + "</span> ";
            });
            ele.innerHTML = html;
        };

        const addChildColorDependsOnPercentage = (
            ele: HTMLElement,
            percentage: number,
        ) => {
            const childs = ele.children;
            const active = (childs.length * percentage) / 100;
            const activeIndex = childs.length - active;

            for (let index = 0; index < childs.length; index++) {
                const child = childs[index] as HTMLElement;
                if (ele.classList.contains("white-version")) {
                    child.style.color =
                        index <= activeIndex
                            ? "white"
                            : "rgba(255, 255, 255, 0.30)";
                } else {
                    child.style.color =
                        index <= activeIndex ? "black" : "rgba(0, 0, 0, 0.30)";
                }
            }
        };

        const addScrollAnimation = (ele: HTMLElement) => {
            const handleScroll = () => {
                const rect = ele.getBoundingClientRect();
                const scrollPercentage = (rect.top / window.innerHeight) * 100;
                if (scrollPercentage > 0 && scrollPercentage < 100) {
                    addChildColorDependsOnPercentage(ele, scrollPercentage);
                }
            };

            window.addEventListener("scroll", handleScroll);
            // return cleanup function
            return () => window.removeEventListener("scroll", handleScroll);
        };

        // Store all cleanup functions
        const cleanups: (() => void)[] = [];

        scrollTexts.forEach((ele) => {
            addSpan(ele);
            const cleanup = addScrollAnimation(ele);
            cleanups.push(cleanup);
        });

        // Cleanup all scroll listeners on unmount
        return () => {
            cleanups.forEach((cleanup) => cleanup());
        };
    }, []);
}
