"use client";

import { useState } from "react";
import { Link, Button } from "@/components";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-bg-card border-b border-border sticky top-0 z-25 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="shrink-0 flex items-center">
                    <Link
                        href="/"
                        variant="none"
                        className="font-display text-2xl tracking-tight text-text hover:text-text-muted transition-colors"
                    >
                        Confluence Chronicles
                    </Link>
                </div>

                <nav className="hidden md:flex space-x-4 lg:space-x-8">
                    <Link
                        href="/"
                        variant="none"
                        className="text-text hover:text-primary transition-colors font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        href="/archive"
                        variant="none"
                        className="text-text hover:text-primary transition-colors font-medium"
                    >
                        Archive
                    </Link>
                    <Link
                        href="/team"
                        variant="none"
                        className="text-text hover:text-primary transition-colors font-medium"
                    >
                        Team
                    </Link>
                </nav>

                <div className="hidden lg:flex items-center space-x-4">
                    <Link href="/contact" variant="outline">
                        Contact Us
                    </Link>
                    <Link href="/#subscribe-section" variant="primary">
                        Sign Up
                    </Link>
                </div>

                <div className="hidden md:flex lg:hidden items-center space-x-4">
                    <Link href="/contact" variant="outline" size="small">
                        Contact Us
                    </Link>
                    <Link
                        href="/#subscribe-section"
                        variant="primary"
                        size="small"
                    >
                        Sign Up
                    </Link>
                </div>

                <div className="md:hidden relative flex items-center">
                    <Button
                        variant="ghost"
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-text hover:text-primary p-2"
                    >
                        <RxHamburgerMenu className="w-6 h-6" />
                    </Button>

                    {isOpen && (
                        <div className="absolute right-0 top-full mt-2 w-56 z-50 bg-bg-card border border-border rounded-lg shadow-lg p-4 space-y-3">
                            <Link
                                href="/"
                                variant="none"
                                className="text-text hover:text-primary transition-colors font-medium block"
                            >
                                Home
                            </Link>
                            <Link
                                href="/archive"
                                variant="none"
                                className="text-text hover:text-primary transition-colors font-medium block"
                            >
                                Archive
                            </Link>
                            <Link
                                href="/team"
                                variant="none"
                                className="text-text hover:text-primary transition-colors font-medium block"
                            >
                                Team
                            </Link>
                            <Link
                                href="/contact"
                                variant="none"
                                className="text-text hover:text-primary transition-colors font-medium block"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/#subscribe-section"
                                variant="none"
                                className="text-text hover:text-primary transition-colors font-medium block"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
