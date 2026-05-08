"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function useMountedTheme() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const mountedTimeout = setTimeout(() => {
            setMounted(true);
        }, 0);

        return () => clearTimeout(mountedTimeout);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return {
        mounted,
        theme,
        setTheme,
        toggleTheme,
    };
}
