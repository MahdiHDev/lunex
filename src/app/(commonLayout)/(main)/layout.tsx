// app/(main)/layout.tsx

import Footer from "@/components/Footer";
import Navbar from "@/components/navbars/Navbar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
