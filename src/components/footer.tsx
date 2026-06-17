import Link from "next/link";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-bg-card flex flex-col">
            <div className="h-px my-10 md:my-16 bg-primary" />

            <div className="px-4 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
                <div className="md:justify-self-start max-w-full md:max-w-75 flex flex-col gap-2 text-center md:text-left">
                    <h2 className="font-display text-xl sm:text-2xl md:text-lg xl:text-2xl">
                        The Confluence Chronicles
                    </h2>
                    <p className="text-sm md:text-xs xl:text-sm  max-w-85 md:max-w-full mx-auto md:mx-0">
                        An Independent physics group exploring theoretical
                        physics and science in today's world.
                    </p>
                </div>

                <div className="md:justify-self-center flex justify-center gap-12 text-sm text-center md:text-left">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm xl:text-base mb-1 underline">
                            About
                        </h3>
                        <Link href={"#"}>Team</Link>
                        <Link href={"#"}>Contact</Link>
                        <Link href={"#"}>Github</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm xl:text-base mb-1 underline">
                            Resources
                        </h3>
                        <Link href={"#"}>Issues</Link>
                        <Link href={"#"}>Latest</Link>
                    </div>
                </div>

                <div className="md:justify-self-end max-w-full md:max-w-60 flex flex-col gap-2 text-xs xl:text-sm text-center md:text-left">
                    <h3 className="text-sm xl:text-base mb-1">Our Socials</h3>
                    <p>
                        Follow us on social media to know about our latest
                        updates.
                    </p>

                    <div className="mt-2 flex justify-center md:justify-start gap-5 md:gap-8 text-lg xl:text-2xl text-primary">
                        <Link href={"#"}>
                            <FaXTwitter className="text-[#000000] text-2xl" />
                        </Link>
                        <Link href={"#"}>
                            <FaFacebook className="text-[#1877F2] text-2xl" />
                        </Link>
                        <Link href={"#"}>
                            <FaInstagram className="text-[#E4405F] text-2xl" />
                        </Link>
                        <Link href={"#"}>
                            <FaGithub className="text-[#181717] text-2xl" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="h-px my-10 md:my-16 bg-primary" />

            <div className="px-4 sm:px-8 md:px-12 mb-6 text-xs flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 text-center">
                <p>© 2026 The Confluence Chronicles</p>
                <div className="flex justify-center gap-6">
                    <Link href={"#"}>Terms of Service</Link>
                    <Link href={"#"}>Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
