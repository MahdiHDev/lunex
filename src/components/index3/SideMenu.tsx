"use client";
import Image from "next/image";

import Link from "next/link";
import menu from "public/assets/images/icons/menu.svg";
import logo from "public/assets/images/logo.svg";
import logoWhite from "public/assets/images/white-logo.svg";
import { useState } from "react";
import MenuPopup from "../menu/MenuPopup";

const SideMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="sidemenu-area d-none d-lg-block">
                <Link href="/" className="logo d-inline-block">
                    <Image
                        src={logo}
                        alt="logo"
                        className="black-logo"
                        // width={150}
                        // height={50}
                    />
                    <Image
                        src={logoWhite}
                        className="d-none"
                        alt="logo"
                        // width={150}
                        // height={50}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Image src={menu} alt="menu" />
                </button>
                <div className="socials">
                    <Link href="#" className="d-block" target="_blank">
                        <i className="ri-facebook-circle-fill" />
                    </Link>
                    <Link href="#" className="d-block" target="_blank">
                        <i className="ri-instagram-line" />
                    </Link>
                    <Link href="#" className="d-block" target="_blank">
                        <i className="ri-threads-line" />
                    </Link>
                    <Link href="#" className="d-block" target="_blank">
                        <i className="ri-twitter-x-line" />
                    </Link>
                    <Link href="#" className="d-block" target="_blank">
                        <i className="ri-youtube-fill" />
                    </Link>
                </div>
            </div>
            <MenuPopup isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default SideMenu;
