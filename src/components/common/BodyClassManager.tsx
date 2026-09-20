"use client";

import { useEffect } from "react";

const BodyClassManager = ({ className }: { className: string }) => {
    useEffect(() => {
        document.body.classList.add(className);

        return () => {
            document.body.classList.remove(className);
        };
    }, [className]);

    return null;
};

export default BodyClassManager;
