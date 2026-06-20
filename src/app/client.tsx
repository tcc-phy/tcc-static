"use client";

import { Button, Divider, Footer, Header, Link } from "@/components";
import {
    SOCIETY_COVER_IMG_HEIGHT,
    SOCIETY_COVER_IMG_WIDTH,
} from "@/config/constants";
import { Issue, Society } from "@/types/data.types";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20 ">
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50"></div>

            <div className="max-w-6xl mx-auto z-10 flex flex-col items-center">
                <span className="text-text-muted uppercase tracking-[0.2em] text-xs font-semibold mb-6 md:mb-8 border border-border px-4 py-1.5 rounded-full bg-bg-card">
                    A Collaborative Academic Journal
                </span>

                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text leading-[1.1] tracking-tight mb-8">
                    <span className="block text-text-muted font-light italic text-3xl sm:text-4xl md:text-5xl mb-4">
                        At the Confluence of
                    </span>
                    Physics{" "}
                    <span className="text-primary italic font-light">&</span>{" "}
                    Creativity
                </h1>

                <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-12 font-light">
                    A collaborative physics newsletter uniting student societies
                    across Indian colleges through rigorous research, visionary
                    ideas, and scientific storytelling.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <Link
                        href="#latest-issue"
                        variant="primary"
                        className="w-full sm:w-auto"
                    >
                        Read Latest Release
                    </Link>
                    <Link
                        href="/archive"
                        variant="outline"
                        className="w-full sm:w-auto"
                    >
                        Browse Archive
                    </Link>
                </div>
            </div>
        </section>
    );
};

const LatestIssueSection = ({ issue }: { issue?: Issue }) => {
    if (!issue) {
        return null;
    }

    return (
        <section
            id="latest-issue"
            className="w-full px-4 sm:px-6 lg:px-8 py-36 bg-bg-base scroll-mt-24"
        >
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center mb-10 text-center">
                    <h2 className="font-display text-3xl md:text-4xl text-text mb-3">
                        Latest Release
                    </h2>
                    <p className="text-text-muted max-w-xl text-sm">
                        Explore our most recent publication.
                    </p>
                </div>

                <div className="max-w-4xl lg:max-w-5xl mx-auto bg-bg-card border border-border flex flex-col md:flex-row overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-full md:w-5/12 bg-border/20 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-border">
                        <div className="relative w-full max-w-55 aspect-1240/1754 border border-border shadow-md">
                            <Image
                                src={issue.coverImageUrl || "/placeholder.png"}
                                alt={`Cover of ${issue.name}`}
                                className="object-cover"
                                width={SOCIETY_COVER_IMG_WIDTH}
                                height={SOCIETY_COVER_IMG_HEIGHT}
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-5">
                            <time className="text-sm text-text-muted">
                                {new Intl.DateTimeFormat("en-US", {
                                    month: "short",
                                    year: "numeric",
                                }).format(issue.releaseDate)}
                            </time>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl text-text mb-4 leading-snug">
                            {issue.name}
                        </h3>

                        <p className="text-base text-text-muted line-clamp-3 leading-relaxed mb-8">
                            {issue.abstract}
                        </p>

                        <div>
                            <Link
                                href={`/issue/${issue.slug}`}
                                variant="primary"
                                className="text-sm px-6 py-2.5"
                            >
                                Read Issue
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-36 bg-bg-base border-y border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-bg-card opacity-50 -skew-x-12 translate-x-16 z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-4 flex flex-col">
                        <h2 className="font-display text-4xl md:text-5xl text-text mb-6">
                            About Us
                        </h2>
                        <div className="w-12 h-px bg-primary mb-6"></div>
                        <p className="text-text-muted text-lg">
                            Preserving depth and rigor while making complex
                            concepts accessible.
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <p className="text-xl md:text-2xl text-text leading-relaxed font-light mb-8">
                            Confluence Chronicles is a collaborative physics
                            newsletter created by student societies across
                            Indian colleges, bringing together diverse academic
                            voices from different institutions.
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed">
                            It serves as a shared platform for students
                            passionate about physics and related fields to
                            contribute and connect. We publish curated insights,
                            essays, and explorations at the intersection of
                            ideas, research, and curiosity, aiming to make
                            complex scientific concepts more accessible while
                            preserving their depth and rigor.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const NetworkSection = ({ societies }: { societies: Society[] }) => {
    const looped = [...societies, ...societies];

    return (
        <section className="w-full py-36 bg-bg-base overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl text-text mb-4">
                    Our Network
                </h2>
                <p className="text-text-muted text-lg">
                    Collaborating societies and clubs.
                </p>
            </div>

            <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-bg-base to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-bg-base to-transparent z-10" />

                <div className="flex w-max animate-marquee gap-12 px-8 items-center">
                    {looped.map((society, index) => (
                        <div
                            key={`${society.id}-${index}`}
                            className="flex flex-col items-center justify-center shrink-0 group w-40 sm:w-48"
                        >
                            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-border">
                                <Image
                                    src={
                                        society.coverImgUrl ||
                                        "/placeholder.png"
                                    }
                                    alt={`${society.name} logo`}
                                    width={SOCIETY_COVER_IMG_WIDTH}
                                    height={SOCIETY_COVER_IMG_HEIGHT}
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="mt-4 text-sm font-medium text-text text-center tracking-wide">
                                {society.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SubscribeSection = () => {
    return (
        <section
            id="subscribe-section"
            className="w-full px-4 sm:px-6 lg:px-8 py-36 bg-bg-card border-t border-border"
        >
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-10">
                    <h2 className="font-display text-4xl md:text-5xl text-text mb-4">
                        Subscribe
                    </h2>
                    <p className="text-text-muted text-lg">
                        Stay connected to new issues, essays, and discoveries.
                    </p>
                </div>

                <form
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="relative w-full">
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full bg-bg-base border border-border px-6 py-4 text-text focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-text-muted/60"
                            placeholder="Enter your email to subscribe..."
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full sm:w-auto py-4 whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </form>
                <p className="mt-6 text-xs text-text-muted uppercase tracking-widest">
                    No spam. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};

interface HomePageClientProps {
    latestIssue?: Issue;
    societies: Society[];
}

const HomePageClient = ({ latestIssue, societies }: HomePageClientProps) => {
    return (
        <>
            <Header />
            <HeroSection />
            <Divider marginB="16" marginT="16" />
            <LatestIssueSection issue={latestIssue} />
            <AboutSection />
            <NetworkSection societies={societies} />
            <SubscribeSection />
            <Footer />
        </>
    );
};

export default HomePageClient;
