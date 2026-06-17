"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [open, setOpen] = useState(false);

    const linkClass =
        "text-sm lg:text-base transition-colors hover:text-primary hover:underline";

    return (
        <header className="bg-bg-card">
            <div className="flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-12 py-4">
                <div className="font-display tracking-wider text-lg md:text-base lg:text-xl">
                    The Confluence Chronicles
                </div>
                <div className="hidden md:flex gap-4 lg:gap-6">
                    <Link className={linkClass} href={"/"}>
                        Home
                    </Link>
                    <Link className={linkClass} href={"/archive"}>
                        Archive
                    </Link>
                    <Link className={linkClass} href={"/team"}>
                        Team
                    </Link>
                </div>

                <div className="hidden md:flex gap-2 lg:gap-3">
                    <div className="px-3 py-1 border border-primary rounded text-sm lg:text-base w-fit">
                        Contact Us
                    </div>
                    <div className="px-3 py-1 bg-primary text-text-inverse rounded text-sm lg:text-base w-fit">
                        Sign Up
                    </div>
                </div>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {open && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
                    <Link
                        className={linkClass}
                        href={"/"}
                        onClick={() => setOpen(false)}
                    >
                        Home
                    </Link>

                    <Link
                        className={linkClass}
                        href={"/archive"}
                        onClick={() => setOpen(false)}
                    >
                        Archive
                    </Link>

                    <Link
                        className={linkClass}
                        href={"/team"}
                        onClick={() => setOpen(false)}
                    >
                        Team
                    </Link>

                    <Link
                        className={linkClass}
                        href={"#"}
                        onClick={() => setOpen(false)}
                    >
                        Contact Us
                    </Link>

                    <Link
                        className={linkClass}
                        href={"#"}
                        onClick={() => setOpen(false)}
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
