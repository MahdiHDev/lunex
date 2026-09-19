"use client";

import dynamic from "next/dynamic";

const TestimonialsSectionClient = dynamic(
    () => import("./TestimonialsSectionClient"),
    { ssr: false },
);

const TestimonialsSection = () => {
    return <TestimonialsSectionClient />;
};

export default TestimonialsSection;
