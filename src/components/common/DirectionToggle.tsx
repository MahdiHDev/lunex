"use client";

export default function DirectionToggle() {
    function toggleDirection() {
        const link = document.getElementById(
            "bootstrapStylesheet",
        ) as HTMLLinkElement | null;
        const currentHref = link?.getAttribute("href") ?? "";

        const isCurrentlyLtr =
            currentHref.includes("bootstrap.min.css") &&
            !currentHref.includes("rtl");

        if (isCurrentlyLtr) {
            // Switch to RTL
            link?.setAttribute("href", "/assets/css/bootstrap.rtl.min.css");
            document.documentElement.setAttribute("dir", "rtl");
            localStorage.setItem("directionMode", "rtl");
        } else {
            // Switch to LTR
            link?.setAttribute("href", "/assets/css/bootstrap.min.css");
            document.documentElement.setAttribute("dir", "ltr");
            localStorage.setItem("directionMode", "ltr");
        }
    }

    return (
        <>
            {/* LTR / RTL */}
            <button
                id="toggleBootstrapDirection"
                type="button"
                onClick={toggleDirection}
                className="ltr-rtl-btn border-0 position-fixed d-inline-block text-uppercase fw-semibold"
            >
                <span className="d-block">LTR / RTL</span>
            </button>
            {/* End LTR / RTL */}
        </>
    );
}
