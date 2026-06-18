"use client";

import Link from "next/link";
import { Divider } from "@/components";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-bg-card border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div className="md:col-span-1 lg:col-span-1">
                        <Link
                            href="/"
                            className="font-display text-2xl tracking-tight text-text block mb-4"
                        >
                            Confluence Chronicles
                        </Link>
                        <p className="text-text-muted leading-relaxed text-sm pr-4">
                            An Independent physics group exploring theoretical
                            physics and science in today's world.
                        </p>
                    </div>

                    <div className="md:col-span-2 flex flex-col sm:flex-row gap-12 sm:gap-24 lg:justify-center">
                        <div>
                            <h3 className="text-text font-medium border-b border-text inline-block pb-1 mb-6">
                                About
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="/team"
                                        className="text-text-muted hover:text-primary text-sm transition-colors"
                                    >
                                        Team
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-muted hover:text-primary text-sm transition-colors"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-text-muted hover:text-primary text-sm transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-text font-medium border-b border-text inline-block pb-1 mb-6">
                                Resources
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="/archive"
                                        className="text-text-muted hover:text-primary text-sm transition-colors"
                                    >
                                        Issues
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/latest"
                                        className="text-text-muted hover:text-primary text-sm transition-colors"
                                    >
                                        Latest Release
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:col-span-1 lg:col-span-1">
                        <h3 className="text-text font-medium mb-4 text-lg">
                            Our socials
                        </h3>
                        <p className="text-text-muted text-sm mb-6">
                            Follow us on social media to know about our latest
                            updates.
                        </p>
                        <div className="flex items-center space-x-5">
                            <a
                                href="#"
                                className="text-primary hover:text-primary-hover transition-colors"
                                aria-label="X (Twitter)"
                            >
                                <FaXTwitter className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-primary hover:text-primary-hover transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-primary hover:text-primary-hover transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-primary hover:text-primary-hover transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <Divider marginB="mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <p>© {currentYear} Confluence Chronicles</p>

                    <div className="flex space-x-8">
                        <Link
                            href="/terms"
                            className="hover:text-text transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/privacy"
                            className="hover:text-text transition-colors"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                    {/* <p>Developed by Neelabh Priyam Jha</p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
