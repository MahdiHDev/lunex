import { Dispatch, SetStateAction, useState } from "react";
import { CloseButton, Collapse, Container, Nav, Navbar } from "react-bootstrap";
import { ArrowDown } from "react-bootstrap-icons";
import styles from "./MobileNav.module.css";

type MobileNavProps = {
    openMobileNav: boolean;
    setOpenMobileNav: Dispatch<SetStateAction<boolean>>;
};

const MobileNav = ({ openMobileNav, setOpenMobileNav }: MobileNavProps) => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <Navbar
            className={`bg-white w-100 ${styles.mobileNav} ${
                openMobileNav ? styles.open : ""
            }`}
            // style={{ display: openMobileNav ? "block" : "none" }}
            style={{
                minHeight: "100vh",
                position: "fixed",
                top: 0,
            }}
        >
            <Container className="h-100 w-100">
                <CloseButton
                    style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                    }}
                    onClick={() => setOpenMobileNav(false)}
                />
                <Nav className="flex-column w-100">
                    {/* HOME */}
                    <div>
                        <div
                            className={`w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold ${styles.navFontMain}`}
                            onClick={() => toggleMenu("home")}
                            aria-expanded={openMenu === "home"}
                        >
                            Home
                            <div className="">
                                <ArrowDown
                                    className={
                                        openMenu === "home" ? styles.rotate : ""
                                    }
                                />
                            </div>
                        </div>

                        <Collapse in={openMenu === "home"}>
                            <div>
                                <Nav className="flex-column ps-3 mt-2">
                                    <Nav.Link href="/index">
                                        Creative Agency
                                    </Nav.Link>
                                    <Nav.Link href="/index-2">
                                        Digital Agency
                                    </Nav.Link>
                                    <Nav.Link href="/index-3">
                                        Development Agency
                                    </Nav.Link>
                                    <Nav.Link href="/index-4">
                                        Digital Marketing Agency
                                    </Nav.Link>
                                    <Nav.Link href="/index-5">
                                        UI/UX Design Agency
                                    </Nav.Link>
                                    <Nav.Link href="/index-6">
                                        Branding Agency
                                    </Nav.Link>
                                    <Nav.Link href="/index-7">
                                        Content Creation Agency
                                    </Nav.Link>
                                    <Nav.Link href="/index-8">
                                        SEO Agency
                                    </Nav.Link>
                                    <Nav.Link href="/index-9">
                                        Cyber Security Agency
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Collapse>
                    </div>

                    {/* WORKS */}
                    <div>
                        <div
                            className={`w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold ${styles.navFontMain}`}
                            onClick={() => toggleMenu("works")}
                            aria-expanded={openMenu === "works"}
                        >
                            Works
                            <div className="">
                                <ArrowDown
                                    className={
                                        openMenu === "works"
                                            ? styles.rotate
                                            : ""
                                    }
                                />
                            </div>
                        </div>

                        <Collapse in={openMenu === "works"}>
                            <div>
                                <Nav className="flex-column ps-3 mt-2">
                                    <Nav.Link href="/works">Works</Nav.Link>
                                    <Nav.Link href="/work-single">
                                        Work Single
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Collapse>
                    </div>

                    {/* CAREERS */}
                    <div>
                        <div
                            className={`w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold ${styles.navFontMain}`}
                            onClick={() => toggleMenu("careers")}
                            aria-expanded={openMenu === "careers"}
                        >
                            Careers
                            <div className={``}>
                                <ArrowDown
                                    className={
                                        openMenu === "careers"
                                            ? styles.rotate
                                            : ""
                                    }
                                />
                            </div>
                        </div>

                        <Collapse in={openMenu === "careers"}>
                            <div>
                                <Nav className="flex-column ps-3 mt-2">
                                    <Nav.Link href="/careers">Careers</Nav.Link>
                                    <Nav.Link href="/career-single">
                                        Career Single
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Collapse>
                    </div>

                    {/* PAGES */}
                    <div>
                        <div
                            className={`w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold ${styles.navFontMain}`}
                            onClick={() => toggleMenu("pages")}
                            aria-expanded={openMenu === "pages"}
                        >
                            Pages
                            <div className="">
                                <ArrowDown
                                    className={
                                        openMenu === "pages"
                                            ? styles.rotate
                                            : ""
                                    }
                                />
                            </div>
                        </div>

                        <Collapse in={openMenu === "pages"}>
                            <div>
                                <Nav className="flex-column ps-3 mt-2">
                                    <Nav.Link href="/about">About Us</Nav.Link>
                                    <Nav.Link href="/team">Team</Nav.Link>
                                    <Nav.Link href="/services">
                                        Services
                                    </Nav.Link>
                                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                                    <Nav.Link href="/faq">FAQ</Nav.Link>
                                </Nav>
                            </div>
                        </Collapse>
                    </div>
                    {/* BLOGS */}
                    <div>
                        <div
                            className={`w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold ${styles.navFontMain}`}
                            onClick={() => toggleMenu("blogs")}
                            aria-expanded={openMenu === "blogs"}
                        >
                            Blogs
                            <div className="">
                                <ArrowDown
                                    className={
                                        openMenu === "blogs"
                                            ? styles.rotate
                                            : ""
                                    }
                                />
                            </div>
                        </div>

                        <Collapse in={openMenu === "blogs"}>
                            <div>
                                <Nav className="flex-column ps-3 mt-2">
                                    <Nav.Link href="/blog">Blog</Nav.Link>
                                    <Nav.Link href="/blog-single">
                                        Blog Single
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Collapse>
                    </div>

                    {/* CONTACTS */}
                    <div>
                        <div
                            className={`w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold ${styles.navFontMain}`}
                            onClick={() => toggleMenu("contacts")}
                            aria-expanded={openMenu === "contacts"}
                        >
                            Contacts
                            <div className="">
                                <ArrowDown
                                    className={
                                        openMenu === "contacts"
                                            ? styles.rotate
                                            : ""
                                    }
                                />
                            </div>
                        </div>

                        <Collapse in={openMenu === "contacts"}>
                            <div>
                                <Nav className="flex-column ps-3 mt-2">
                                    <Nav.Link href="/contact">
                                        Contact Style 1
                                    </Nav.Link>
                                    <Nav.Link href="/contact-2">
                                        Contact Style 2
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Collapse>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MobileNav;
