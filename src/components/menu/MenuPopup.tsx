// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// interface Props {
//     isOpen: boolean;
//     onClose: () => void;
// }

// export default function MenuPopup({ isOpen, onClose }: Props) {
//     const pathname = usePathname();

//     if (!isOpen) return null;

//     const isActive = (href: string) => {
//         if (href === "/") {
//             return pathname === "/";
//         }

//         return pathname === href;
//     };

//     const homeActive =
//         isActive("/") ||
//         isActive("/index-2") ||
//         isActive("/index-3") ||
//         isActive("/index-4") ||
//         isActive("/index-5") ||
//         isActive("/index-6") ||
//         isActive("/index-7");
//     const workActive = isActive("/works") || isActive("/work-single");
//     const careerActive = isActive("/careers") || isActive("/career-single");
//     const pageActive =
//         isActive("/about") ||
//         isActive("/team") ||
//         isActive("/services") ||
//         isActive("/service-single") ||
//         isActive("/pricing") ||
//         isActive("/book-a-call") ||
//         isActive("/signin") ||
//         isActive("/signup") ||
//         isActive("/forgot-password") ||
//         isActive("/faq") ||
//         isActive("/privacy-policy") ||
//         isActive("/terms-conditions");
//     const serviceActive = isActive("/services") || isActive("/service-single");
//     const myAccountActive =
//         isActive("/signin") ||
//         isActive("/signup") ||
//         isActive("/forgot-password");
//     const blogActive = isActive("/blog") || isActive("/blog-single");

//     return (
//         <div
//             className={`menu-popup-area position-fixed start-0 end-0 top-0 bottom-0 ${isOpen ? "active" : ""}`}
//         >
//             <div className="d-table">
//                 <div className="d-table-cell">
//                     <div className="container">
//                         <div className="row align-items-center">
//                             <div className="col-lg-8 col-md-12">
//                                 <div className="meanu-popup-nav">
//                                     <div
//                                         className="accordion"
//                                         id="navbarAccordion"
//                                     >
//                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                             <button
//                                                 className={`accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold  ${homeActive ? "active" : ""} `}
//                                                 type="button"
//                                                 data-bs-toggle="collapse"
//                                                 data-bs-target="#navbarCollapseOne"
//                                                 aria-expanded="false"
//                                                 aria-controls="navbarCollapseOne"
//                                             >
//                                                 Home
//                                             </button>
//                                             <div
//                                                 id="navbarCollapseOne"
//                                                 className="accordion-collapse collapse"
//                                                 data-bs-parent="#navbarAccordion"
//                                             >
//                                                 <div className="accordion-body">
//                                                     <div className="accordion">
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/") ? "active" : ""}`}
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 href="/"
//                                                             >
//                                                                 Creative Agency
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-2") ? "active" : ""} `}
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 href="index-2"
//                                                             >
//                                                                 Digital Agency
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-3") ? "active" : ""}`}
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 href="index-3"
//                                                             >
//                                                                 Development
//                                                                 Agency
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-4") ? "active" : ""}`}
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 href="index-4"
//                                                             >
//                                                                 Digital
//                                                                 Marketing Agency
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-5") ? "active" : ""}`}
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 href="index-5"
//                                                             >
//                                                                 UI/UX Design
//                                                                 Agency
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-6") ? "active" : ""}`}
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 href="index-6"
//                                                             >
//                                                                 Branding Agency
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-7") ? "active" : ""}`}
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 href="index-7"
//                                                             >
//                                                                 Content Creation
//                                                                 Agency
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-8") ? "active" : ""}`}
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 href="index-8"
//                                                             >
//                                                                 SEO Agency
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-9") ? "active" : ""}`}
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 href="index-9"
//                                                             >
//                                                                 Cyber Security
//                                                                 Agency
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                             <button
//                                                 className={`accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed ${workActive ? "active" : ""}`}
//                                                 type="button"
//                                                 data-bs-toggle="collapse"
//                                                 data-bs-target="#navbarCollapseTwo"
//                                                 aria-expanded="false"
//                                                 aria-controls="navbarCollapseTwo"
//                                             >
//                                                 Works
//                                             </button>
//                                             <div
//                                                 id="navbarCollapseTwo"
//                                                 className="accordion-collapse collapse"
//                                                 data-bs-parent="#navbarAccordion"
//                                             >
//                                                 <div className="accordion-body">
//                                                     <div className="accordion">
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="works"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/works") ? "active" : ""}`}
//                                                             >
//                                                                 Works
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="work-single"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/work-single") ? "active" : ""}`}
//                                                             >
//                                                                 Work Single
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                             <button
//                                                 className={`accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed ${careerActive ? "active" : ""}`}
//                                                 type="button"
//                                                 data-bs-toggle="collapse"
//                                                 data-bs-target="#navbarCollapseThree"
//                                                 aria-expanded="false"
//                                                 aria-controls="navbarCollapseThree"
//                                             >
//                                                 Careers
//                                             </button>
//                                             <div
//                                                 id="navbarCollapseThree"
//                                                 className="accordion-collapse collapse"
//                                                 data-bs-parent="#navbarAccordion"
//                                             >
//                                                 <div className="accordion-body">
//                                                     <div className="accordion">
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="careers"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/careers") ? "active" : ""}`}
//                                                             >
//                                                                 Careers
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="career-single"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/career-single") ? "active" : ""}`}
//                                                             >
//                                                                 Career Single
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                             <button
//                                                 className={`accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed ${pageActive ? "active" : ""}`}
//                                                 type="button"
//                                                 data-bs-toggle="collapse"
//                                                 data-bs-target="#navbarCollapseFour"
//                                                 aria-expanded="false"
//                                                 aria-controls="navbarCollapseFour"
//                                             >
//                                                 Pages
//                                             </button>
//                                             <div
//                                                 id="navbarCollapseFour"
//                                                 className="accordion-collapse collapse"
//                                                 data-bs-parent="#navbarAccordion"
//                                             >
//                                                 <div className="accordion-body">
//                                                     <div
//                                                         className="accordion"
//                                                         id="navbarAccordion2"
//                                                     >
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="about"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/about") ? "active" : ""}`}
//                                                             >
//                                                                 About Us
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="team"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/team") ? "active" : ""}`}
//                                                             >
//                                                                 Team
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <button
//                                                                 className={`accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed ${serviceActive ? "active" : ""}`}
//                                                                 type="button"
//                                                                 data-bs-toggle="collapse"
//                                                                 data-bs-target="#navbarCollapseOne1"
//                                                                 aria-expanded="false"
//                                                                 aria-controls="navbarCollapseOne1"
//                                                             >
//                                                                 Services
//                                                             </button>
//                                                             <div
//                                                                 id="navbarCollapseOne1"
//                                                                 className="accordion-collapse collapse"
//                                                                 data-bs-parent="#navbarAccordion2"
//                                                             >
//                                                                 <div className="accordion-body">
//                                                                     <div className="accordion">
//                                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                                             <Link
//                                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/services") ? "active" : ""}`}
//                                                                                 onClick={
//                                                                                     onClose
//                                                                                 }
//                                                                                 href="services"
//                                                                             >
//                                                                                 Services
//                                                                             </Link>
//                                                                         </div>
//                                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                                             <Link
//                                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/service-single") ? "active" : ""}`}
//                                                                                 onClick={
//                                                                                     onClose
//                                                                                 }
//                                                                                 href="service-single"
//                                                                             >
//                                                                                 Service
//                                                                                 Single
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="pricing"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/pricing") ? "active" : ""}`}
//                                                             >
//                                                                 Pricing
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="book-a-call"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/book-a-call") ? "active" : ""}`}
//                                                             >
//                                                                 Book A Call
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <button
//                                                                 className={`accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed ${myAccountActive ? "active" : ""}`}
//                                                                 type="button"
//                                                                 data-bs-toggle="collapse"
//                                                                 data-bs-target="#navbarCollapseOne2"
//                                                                 aria-expanded="false"
//                                                                 aria-controls="navbarCollapseOne2"
//                                                             >
//                                                                 My Account
//                                                             </button>
//                                                             <div
//                                                                 id="navbarCollapseOne2"
//                                                                 className="accordion-collapse collapse"
//                                                                 data-bs-parent="#navbarAccordion2"
//                                                             >
//                                                                 <div className="accordion-body">
//                                                                     <div className="accordion">
//                                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                                             <Link
//                                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/signin") ? "active" : ""}`}
//                                                                                 onClick={
//                                                                                     onClose
//                                                                                 }
//                                                                                 href="signin"
//                                                                             >
//                                                                                 Signin
//                                                                             </Link>
//                                                                         </div>
//                                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                                             <Link
//                                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/signup") ? "active" : ""}`}
//                                                                                 onClick={
//                                                                                     onClose
//                                                                                 }
//                                                                                 href="signup"
//                                                                             >
//                                                                                 Signup
//                                                                             </Link>
//                                                                         </div>
//                                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                                             <Link
//                                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/forgot-password") ? "active" : ""}`}
//                                                                                 onClick={
//                                                                                     onClose
//                                                                                 }
//                                                                                 href="forgot-password"
//                                                                             >
//                                                                                 Forgot
//                                                                                 Password?
//                                                                             </Link>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="faq"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/faq") ? "active" : ""}`}
//                                                             >
//                                                                 FAQ
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="privacy-policy"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/privacy-policy") ? "active" : ""}`}
//                                                             >
//                                                                 Privacy Policy
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="terms-conditions"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className={`accordion-link fw-semibold text-decoration-none ${isActive("/terms-conditions") ? "active" : ""}`}
//                                                             >
//                                                                 Terms &amp;
//                                                                 Conditions
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="error"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className="accordion-link fw-semibold text-decoration-none"
//                                                             >
//                                                                 404 Error Page
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                             <button
//                                                 className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
//                                                 type="button"
//                                                 data-bs-toggle="collapse"
//                                                 data-bs-target="#navbarCollapseFive"
//                                                 aria-expanded="false"
//                                                 aria-controls="navbarCollapseFive"
//                                             >
//                                                 Blogs
//                                             </button>
//                                             <div
//                                                 id="navbarCollapseFive"
//                                                 className="accordion-collapse collapse"
//                                                 data-bs-parent="#navbarAccordion"
//                                             >
//                                                 <div className="accordion-body">
//                                                     <div className="accordion">
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="blog"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className="accordion-link fw-semibold text-decoration-none"
//                                                             >
//                                                                 Blog
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="blog-single"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className="accordion-link fw-semibold text-decoration-none"
//                                                             >
//                                                                 Blog Single
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                             <button
//                                                 className="accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold collapsed"
//                                                 type="button"
//                                                 data-bs-toggle="collapse"
//                                                 data-bs-target="#navbarCollapseSix"
//                                                 aria-expanded="false"
//                                                 aria-controls="navbarCollapseSix"
//                                             >
//                                                 Contacts
//                                             </button>
//                                             <div
//                                                 id="navbarCollapseSix"
//                                                 className="accordion-collapse collapse"
//                                                 data-bs-parent="#navbarAccordion"
//                                             >
//                                                 <div className="accordion-body">
//                                                     <div className="accordion">
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="contact"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className="accordion-link fw-semibold text-decoration-none"
//                                                             >
//                                                                 Contact Style 1
//                                                             </Link>
//                                                         </div>
//                                                         <div className="accordion-item border-0 rounded-0 bg-transparent">
//                                                             <Link
//                                                                 href="contact-2"
//                                                                 onClick={
//                                                                     onClose
//                                                                 }
//                                                                 className="accordion-link fw-semibold text-decoration-none"
//                                                             >
//                                                                 Contact Style 2
//                                                             </Link>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-12">
//                                 <div className="menu-contact-info">
//                                     <div className="location">
//                                         <h5>The Empire State</h5>
//                                         <p>
//                                             Parker Avenue, Kingsley Road, New
//                                             York
//                                         </p>
//                                     </div>
//                                     <h4>support@lunex.com</h4>
//                                     <div className="socials">
//                                         <a
//                                             href="#"
//                                             className="d-inline-block"
//                                             target="_blank"
//                                         >
//                                             <i className="ri-facebook-circle-fill" />
//                                         </a>
//                                         <a
//                                             href="#"
//                                             className="d-inline-block"
//                                             target="_blank"
//                                         >
//                                             <i className="ri-instagram-line" />
//                                         </a>
//                                         <a
//                                             href="#"
//                                             className="d-inline-block"
//                                             target="_blank"
//                                         >
//                                             <i className="ri-threads-line" />
//                                         </a>
//                                         <a
//                                             href="#"
//                                             className="d-inline-block"
//                                             target="_blank"
//                                         >
//                                             <i className="ri-twitter-x-line" />
//                                         </a>
//                                         <a
//                                             href="#"
//                                             className="d-inline-block"
//                                             target="_blank"
//                                         >
//                                             <i className="ri-youtube-fill" />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <button
//                 onClick={onClose}
//                 type="button"
//                 className="menu-popup-close-btn position-absolute rounded-circle text-center border-0 p-0"
//             >
//                 <i className="ri-close-line" />
//             </button>
//         </div>
//     );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

type MainKey = "home" | "works" | "careers" | "pages" | "blogs" | "contacts";
type PagesSubKey = "services" | "myAccount";

export default function MenuPopup({ isOpen, onClose }: Props) {
    const pathname = usePathname();

    const [activeMain, setActiveMain] = useState<MainKey | null>(null);
    const [activePagesSub, setActivePagesSub] = useState<PagesSubKey | null>(
        null,
    );

    if (!isOpen) return null;

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href;
    };

    const homeActive =
        isActive("/") ||
        isActive("/index-2") ||
        isActive("/index-3") ||
        isActive("/index-4") ||
        isActive("/index-5") ||
        isActive("/index-6") ||
        isActive("/index-7") ||
        isActive("/index-8") ||
        isActive("/index-9");
    const workActive = isActive("/works") || isActive("/work-single");
    const careerActive = isActive("/careers") || isActive("/career-single");
    const pageActive =
        isActive("/about") ||
        isActive("/team") ||
        isActive("/services") ||
        isActive("/service-single") ||
        isActive("/pricing") ||
        isActive("/book-a-call") ||
        isActive("/signin") ||
        isActive("/signup") ||
        isActive("/forgot-password") ||
        isActive("/faq") ||
        isActive("/privacy-policy") ||
        isActive("/terms-conditions");
    const serviceActive = isActive("/services") || isActive("/service-single");
    const myAccountActive =
        isActive("/signin") ||
        isActive("/signup") ||
        isActive("/forgot-password");

    // toggles a top-level accordion item: clicking the open one closes it,
    // clicking another one switches to it. This is what data-bs-parent
    // used to give you for free — now it's explicit and can't get out of sync.
    const toggleMain = (key: MainKey) => {
        setActiveMain((prev) => (prev === key ? null : key));
    };

    const togglePagesSub = (key: PagesSubKey) => {
        setActivePagesSub((prev) => (prev === key ? null : key));
    };

    const handleClose = () => {
        onClose();
    };

    // Small helpers so the button/panel markup below stays readable
    const buttonClass = (key: MainKey, extraActive: boolean) =>
        `accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold ${
            activeMain === key ? "" : "collapsed"
        } ${extraActive ? "active" : ""}`;

    const panelClass = (key: MainKey) =>
        `acc-panel ${activeMain === key ? "acc-panel-open" : ""}`;

    const subButtonClass = (key: PagesSubKey, extraActive: boolean = false) =>
        `accordion-button d-block w-100 shadow-none position-relative text-decoration-none bg-transparent fw-semibold ${
            activePagesSub === key ? "" : "collapsed"
        } ${extraActive ? "active" : ""}`;

    const subPanelClass = (key: PagesSubKey) =>
        `acc-panel ${activePagesSub === key ? "acc-panel-open" : ""}`;

    return (
        <div
            className={`menu-popup-area position-fixed start-0 end-0 top-0 bottom-0 ${isOpen ? "active" : ""}`}
        >
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="meanu-popup-nav">
                                    <div className="accordion">
                                        {/* Home */}
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className={buttonClass(
                                                    "home",
                                                    homeActive,
                                                )}
                                                type="button"
                                                onClick={() =>
                                                    toggleMain("home")
                                                }
                                                aria-expanded={
                                                    activeMain === "home"
                                                }
                                            >
                                                Home
                                            </button>
                                            <div className={panelClass("home")}>
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/") ? "active" : ""}`}
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                href="/"
                                                            >
                                                                Creative Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-2") ? "active" : ""}`}
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                href="/index-2"
                                                            >
                                                                Digital Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-3") ? "active" : ""}`}
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                href="/index-3"
                                                            >
                                                                Development
                                                                Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-4") ? "active" : ""}`}
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                href="/index-4"
                                                            >
                                                                Digital
                                                                Marketing Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-5") ? "active" : ""}`}
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                href="/index-5"
                                                            >
                                                                UI/UX Design
                                                                Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-6") ? "active" : ""}`}
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                href="/index-6"
                                                            >
                                                                Branding Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-7") ? "active" : ""}`}
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                href="/index-7"
                                                            >
                                                                Content Creation
                                                                Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-8") ? "active" : ""}`}
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                href="/index-8"
                                                            >
                                                                SEO Agency
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/index-9") ? "active" : ""}`}
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                href="/index-9"
                                                            >
                                                                Cyber Security
                                                                Agency
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Works */}
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className={buttonClass(
                                                    "works",
                                                    workActive,
                                                )}
                                                type="button"
                                                onClick={() =>
                                                    toggleMain("works")
                                                }
                                                aria-expanded={
                                                    activeMain === "works"
                                                }
                                            >
                                                Works
                                            </button>
                                            <div
                                                className={panelClass("works")}
                                            >
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/works"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/works") ? "active" : ""}`}
                                                            >
                                                                Works
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/work-single"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/work-single") ? "active" : ""}`}
                                                            >
                                                                Work Single
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Careers */}
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className={buttonClass(
                                                    "careers",
                                                    careerActive,
                                                )}
                                                type="button"
                                                onClick={() =>
                                                    toggleMain("careers")
                                                }
                                                aria-expanded={
                                                    activeMain === "careers"
                                                }
                                            >
                                                Careers
                                            </button>
                                            <div
                                                className={panelClass(
                                                    "careers",
                                                )}
                                            >
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/careers"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/careers") ? "active" : ""}`}
                                                            >
                                                                Careers
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/career-single"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/career-single") ? "active" : ""}`}
                                                            >
                                                                Career Single
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pages */}
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className={buttonClass(
                                                    "pages",
                                                    pageActive,
                                                )}
                                                type="button"
                                                onClick={() =>
                                                    toggleMain("pages")
                                                }
                                                aria-expanded={
                                                    activeMain === "pages"
                                                }
                                            >
                                                Pages
                                            </button>
                                            <div
                                                className={panelClass("pages")}
                                            >
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/about"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/about") ? "active" : ""}`}
                                                            >
                                                                About Us
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/team"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/team") ? "active" : ""}`}
                                                            >
                                                                Team
                                                            </Link>
                                                        </div>

                                                        {/* Services (nested) */}
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <button
                                                                className={subButtonClass(
                                                                    "services",
                                                                    serviceActive,
                                                                )}
                                                                type="button"
                                                                onClick={() =>
                                                                    togglePagesSub(
                                                                        "services",
                                                                    )
                                                                }
                                                                aria-expanded={
                                                                    activePagesSub ===
                                                                    "services"
                                                                }
                                                            >
                                                                Services
                                                            </button>
                                                            <div
                                                                className={subPanelClass(
                                                                    "services",
                                                                )}
                                                                style={{
                                                                    backgroundColor:
                                                                        "#F8F9FD",
                                                                }}
                                                            >
                                                                <div className="accordion-body">
                                                                    <div className="accordion">
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <Link
                                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/services") ? "active" : ""}`}
                                                                                onClick={
                                                                                    handleClose
                                                                                }
                                                                                href="/services"
                                                                            >
                                                                                Services
                                                                            </Link>
                                                                        </div>
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <Link
                                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/service-single") ? "active" : ""}`}
                                                                                onClick={
                                                                                    handleClose
                                                                                }
                                                                                href="/service-single"
                                                                            >
                                                                                Service
                                                                                Single
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/pricing"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/pricing") ? "active" : ""}`}
                                                            >
                                                                Pricing
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/book-a-call"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/book-a-call") ? "active" : ""}`}
                                                            >
                                                                Book A Call
                                                            </Link>
                                                        </div>

                                                        {/* My Account (nested) */}
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <button
                                                                className={subButtonClass(
                                                                    "myAccount",
                                                                    myAccountActive,
                                                                )}
                                                                type="button"
                                                                onClick={() =>
                                                                    togglePagesSub(
                                                                        "myAccount",
                                                                    )
                                                                }
                                                                aria-expanded={
                                                                    activePagesSub ===
                                                                    "myAccount"
                                                                }
                                                            >
                                                                My Account
                                                            </button>
                                                            <div
                                                                className={subPanelClass(
                                                                    "myAccount",
                                                                )}
                                                                style={{
                                                                    backgroundColor:
                                                                        "#F8F9FD",
                                                                }}
                                                            >
                                                                <div className="accordion-body">
                                                                    <div className="accordion">
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <Link
                                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/signin") ? "active" : ""}`}
                                                                                onClick={
                                                                                    handleClose
                                                                                }
                                                                                href="/signin"
                                                                            >
                                                                                Signin
                                                                            </Link>
                                                                        </div>
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <Link
                                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/signup") ? "active" : ""}`}
                                                                                onClick={
                                                                                    handleClose
                                                                                }
                                                                                href="/signup"
                                                                            >
                                                                                Signup
                                                                            </Link>
                                                                        </div>
                                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                                            <Link
                                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/forgot-password") ? "active" : ""}`}
                                                                                onClick={
                                                                                    handleClose
                                                                                }
                                                                                href="/forgot-password"
                                                                            >
                                                                                Forgot
                                                                                Password?
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/faq"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/faq") ? "active" : ""}`}
                                                            >
                                                                FAQ
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/privacy-policy"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/privacy-policy") ? "active" : ""}`}
                                                            >
                                                                Privacy Policy
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/terms-conditions"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className={`accordion-link fw-semibold text-decoration-none ${isActive("/terms-conditions") ? "active" : ""}`}
                                                            >
                                                                Terms &amp;
                                                                Conditions
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/error"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                404 Error Page
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Blogs */}
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className={buttonClass(
                                                    "blogs",
                                                    false,
                                                )}
                                                type="button"
                                                onClick={() =>
                                                    toggleMain("blogs")
                                                }
                                                aria-expanded={
                                                    activeMain === "blogs"
                                                }
                                            >
                                                Blogs
                                            </button>
                                            <div
                                                className={panelClass("blogs")}
                                            >
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/blog"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Blog
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/blog-single"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Blog Single
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contacts */}
                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                            <button
                                                className={buttonClass(
                                                    "contacts",
                                                    false,
                                                )}
                                                type="button"
                                                onClick={() =>
                                                    toggleMain("contacts")
                                                }
                                                aria-expanded={
                                                    activeMain === "contacts"
                                                }
                                            >
                                                Contacts
                                            </button>
                                            <div
                                                className={panelClass(
                                                    "contacts",
                                                )}
                                            >
                                                <div className="accordion-body">
                                                    <div className="accordion">
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/contact"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Contact Style 1
                                                            </Link>
                                                        </div>
                                                        <div className="accordion-item border-0 rounded-0 bg-transparent">
                                                            <Link
                                                                href="/contact-2"
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                className="accordion-link fw-semibold text-decoration-none"
                                                            >
                                                                Contact Style 2
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="menu-contact-info">
                                    <div className="location">
                                        <h5>The Empire State</h5>
                                        <p>
                                            Parker Avenue, Kingsley Road, New
                                            York
                                        </p>
                                    </div>
                                    <h4>support@lunex.com</h4>
                                    <div className="socials">
                                        <a
                                            href="#"
                                            className="d-inline-block"
                                            target="_blank"
                                        >
                                            <i className="ri-facebook-circle-fill" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-inline-block"
                                            target="_blank"
                                        >
                                            <i className="ri-instagram-line" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-inline-block"
                                            target="_blank"
                                        >
                                            <i className="ri-threads-line" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-inline-block"
                                            target="_blank"
                                        >
                                            <i className="ri-twitter-x-line" />
                                        </a>
                                        <a
                                            href="#"
                                            className="d-inline-block"
                                            target="_blank"
                                        >
                                            <i className="ri-youtube-fill" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={onClose}
                type="button"
                className="menu-popup-close-btn position-absolute rounded-circle text-center border-0 p-0"
            >
                <i className="ri-close-line" />
            </button>

            <style jsx>{`
                .acc-panel {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.32s ease;
                    // overflow: hidden;
                }
                .acc-panel-open {
                    grid-template-rows: 1fr;
                    padding: 20px 0 10px 0;
                    margin: 10px 0;
                    background-color: #fff;
                }
                .acc-panel > :global(.accordion-body) {
                    overflow: hidden;
                    min-height: 0;
                    padding-top: 0;
                    padding-bottom: 0;
                }
                .acc-panel :global(.accordion-body .accordion-item) {
                    margin: 0;
                }
                .acc-panel :global(.accordion-link) {
                    margin-bottom: 15px;
                    display: block;
                }
                .meanu-popup-nav .accordion .accordion .accordion-button {
                    font-size: 16px !important;
                    margin-bottom: 15px;
                }
            `}</style>
        </div>
    );
}
