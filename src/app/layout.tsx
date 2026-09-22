/* eslint-disable @next/next/no-css-tags */
import BootstrapClient from "@/components/BootstrapClient";
// import "@/styles/odometer.css";
import "@/app/globals.css";
import AnimationFailsafe from "@/components/common/AnimationFailsafe";
import DirectionToggle from "@/components/common/DirectionToggle";
import ThemeSettingsMenu from "@/components/common/ThemeSettingMenu";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Script from "next/script";

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
        <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    id="bootstrapStylesheet"
                    href="/assets/css/bootstrap.min.css"
                />

                <link rel="stylesheet" href="/assets/css/remixicon.css" />
                <link rel="stylesheet" href="/assets/css/odometer.min.css" />
                <link
                    rel="stylesheet"
                    href="/assets/css/swiper-bundle.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/magnific-popup.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/owl.carousel.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/assets/css/owl.theme.default.min.css"
                />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/responsive.css" />

                <Script
                    id="direction-init"
                    dangerouslySetInnerHTML={{
                        __html: `
              try {
                var savedDirection = localStorage.getItem("directionMode");
                var link = document.getElementById("bootstrapStylesheet");
                if (savedDirection === "rtl") {
                  if (link) link.setAttribute("href", "/assets/css/bootstrap.rtl.min.css");
                  document.documentElement.setAttribute("dir", "rtl");
                } else {
                  if (link) link.setAttribute("href", "/assets/css/bootstrap.min.css");
                  document.documentElement.setAttribute("dir", "ltr");
                }
              } catch (e) {}
            `,
                    }}
                />

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
                    <AnimationFailsafe />
                    {children}
                    <DirectionToggle />
                    <ThemeSettingsMenu />
                </ThemeProvider>
            </body>
        </html>
    );
}
