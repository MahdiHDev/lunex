/* eslint-disable @next/next/no-css-tags */
import BootstrapClient from "@/components/BootstrapClient";
// import "@/styles/odometer.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata = {
    title: "Lunex",
    description: "Creative Agency Template",
    icons: {
        icon: "/assets/images/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />

                <link rel="stylesheet" href="assets/css/remixicon.css" />
                <link rel="stylesheet" href="assets/css/odometer.min.css" />
                <link
                    rel="stylesheet"
                    href="assets/css/swiper-bundle.min.css"
                />
                <link
                    rel="stylesheet"
                    href="assets/css/magnific-popup.min.css"
                />
                <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
                <link
                    rel="stylesheet"
                    href="assets/css/owl.theme.default.min.css"
                />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/responsive.css" />
                {/* <link rel="stylesheet" href="assets/css/scrollCue.css" /> */}
            </head>
            <body
            // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    value={{
                        light: "light-mode",
                        dark: "dark-mode",
                    }}
                    enableSystem={false}
                >
                    <BootstrapClient />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
