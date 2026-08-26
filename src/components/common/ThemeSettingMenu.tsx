"use client";

import { useEffect, useRef } from "react";

const links = [
    {
        href: "https://1.envato.market/lunex-html",
        icon: "ri-shopping-cart-fill",
        label: "Buy Now",
    },
    {
        href: "https://nsatheme.com/support-portal/",
        icon: "ri-customer-service-fill",
        label: "Support",
    },
    {
        href: "mailto:nsatheme@gmail.com",
        icon: "ri-contacts-fill",
        label: "Hire Us",
    },
];

export default function ThemeSettingsMenu() {
    const menuRef = useRef<HTMLDivElement>(null);

    // Bootstrap tooltips have to be explicitly instantiated per-element —
    // that's what `new bootstrap.Tooltip(el)` did in the original jQuery
    // version. `bootstrap` (the JS bundle) touches `document`, so this has
    // to run client-side, after this component's own links are in the DOM.
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let tooltipInstances: any[] = [];
        let cancelled = false;

        import("bootstrap").then(({ Tooltip }) => {
            if (cancelled || !menuRef.current) return;

            const triggerEls = menuRef.current.querySelectorAll(
                '[data-bs-toggle="tooltip"]',
            );
            tooltipInstances = Array.from(triggerEls).map(
                (el) => new Tooltip(el),
            );
        });

        return () => {
            cancelled = true;
            tooltipInstances.forEach((t) => t.dispose());
        };
    }, []);

    return (
        <div className="theme-settings-menu" ref={menuRef}>
            <ul className="p-0 m-0 list-unstyled">
                {links.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title={link.label}
                        >
                            <i className={link.icon}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
