import { Dispatch, SetStateAction, useState } from "react";
import {
    Button,
    CloseButton,
    Collapse,
    Container,
    Nav,
    Navbar,
} from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

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
            className="bg-white w-100"
            // style={{ display: openMobileNav ? "block" : "none" }}
            style={{
                display: openMobileNav ? "block" : "none",
                minHeight: "100vh",
                zIndex: 1050,
                position: "fixed",
                top: 0,
            }}
        >
            <Container fluid className="h-100">
                <CloseButton
                    style={{ position: "absolute", top: "20px", right: "20px" }}
                    onClick={() => setOpenMobileNav(false)}
                />
                <Nav className="flex-column w-100">
                    {/* HOME */}
                    <div className="py-3">
                        <Button
                            variant="none"
                            className="w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold"
                            onClick={() => toggleMenu("home")}
                            aria-expanded={openMenu === "home"}
                        >
                            Home
                            {openMenu === "home" ? (
                                <ChevronUp />
                            ) : (
                                <ChevronDown />
                            )}
                        </Button>

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
                    <div className="py-3">
                        <Button
                            variant="none"
                            className="w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold"
                            onClick={() => toggleMenu("works")}
                            aria-expanded={openMenu === "works"}
                        >
                            Works
                            {openMenu === "works" ? (
                                <ChevronUp />
                            ) : (
                                <ChevronDown />
                            )}
                        </Button>

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
                    <div className="py-3">
                        <Button
                            variant="none"
                            className="w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold"
                            onClick={() => toggleMenu("careers")}
                            aria-expanded={openMenu === "careers"}
                        >
                            Careers
                            {openMenu === "careers" ? (
                                <ChevronUp />
                            ) : (
                                <ChevronDown />
                            )}
                        </Button>

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
                    <div className="py-3">
                        <Button
                            variant="none"
                            className="w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold"
                            onClick={() => toggleMenu("pages")}
                            aria-expanded={openMenu === "pages"}
                        >
                            Pages
                            {openMenu === "pages" ? (
                                <ChevronUp />
                            ) : (
                                <ChevronDown />
                            )}
                        </Button>

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
                    <div className="py-3">
                        <Button
                            variant="none"
                            className="w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold"
                            onClick={() => toggleMenu("blogs")}
                            aria-expanded={openMenu === "blogs"}
                        >
                            Blogs
                            {openMenu === "blogs" ? (
                                <ChevronUp />
                            ) : (
                                <ChevronDown />
                            )}
                        </Button>

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
                    <div className="py-3">
                        <Button
                            variant="none"
                            className="w-100 border-0 d-flex justify-content-between align-items-center text-start fw-semibold"
                            onClick={() => toggleMenu("contacts")}
                            aria-expanded={openMenu === "contacts"}
                        >
                            Contacts
                            {openMenu === "contacts" ? (
                                <ChevronUp />
                            ) : (
                                <ChevronDown />
                            )}
                        </Button>

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
