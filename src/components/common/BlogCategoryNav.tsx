"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SlideInUp from "./SlideInUp";

const blogCategories = [
    {
        name: "All post",
        href: "/blog",
    },
    {
        name: "Growth",
        href: "/blog-growth",
    },
    {
        name: "Technology",
        href: "/blog-technology",
    },
    {
        name: "Social",
        href: "/blog-social",
    },
    {
        name: "Branding",
        href: "/blog-branding",
    },
];

const BlogCategoryNav = () => {
    const pathname = usePathname();

    return (
        <SlideInUp selector=".main-blog-buttons">
            <ul className="main-blog-buttons text-center ps-0 list-unstyled">
                {blogCategories.map((category) => {
                    const isActive = pathname === category.href;

                    return (
                        <li className="d-inline-block" key={category.href}>
                            <Link
                                href={category.href}
                                className={`d-block ${isActive ? "active" : ""}`}
                            >
                                {category.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </SlideInUp>
    );
};

export default BlogCategoryNav;
