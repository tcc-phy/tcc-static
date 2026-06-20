"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, Footer, Header } from "@/components";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TeamName, Team } from "@/types/data.types";
import {
    USER_PROFILE_IMG_HEIGHT,
    USER_PROFILE_IMG_WIDTH,
} from "@/config/constants";
import Link from "next/link";

interface TeamMemberCardProps {
    member: Team;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
    return (
        <article className="group relative flex flex-col bg-bg-card border border-border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:z-10">
            <div className="relative w-full aspect-square bg-border/20 overflow-hidden border-b border-border">
                <Image
                    src={member.profileImgUrl || "/placeholder.png"}
                    alt={`Profile photo of ${member.name}`}
                    width={USER_PROFILE_IMG_WIDTH}
                    height={USER_PROFILE_IMG_HEIGHT}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-2 right-2 flex flex-col gap-1.5 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    {member.socials.linkedInUrl && (
                        <Link
                            href={member.socials.linkedInUrl}
                            className="p-2 bg-bg-base/50 text-text hover:text-primary shadow-md"
                        >
                            <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
                        </Link>
                    )}

                    {member.socials.twitterUrl && (
                        <Link
                            href={member.socials.twitterUrl}
                            className="p-2 bg-bg-base/50 text-text hover:text-primary shadow-md"
                        >
                            <FaXTwitter className="w-5 h-5 text-[#1DA1F2]" />
                        </Link>
                    )}

                    {member.socials.instagramUrl && (
                        <Link
                            href={member.socials.instagramUrl}
                            className="p-2 bg-bg-base/50 text-text hover:text-primary shadow-md"
                        >
                            <FaInstagram className="w-5 h-5 text-[#E4405F]" />
                        </Link>
                    )}
                </div>
            </div>

            <div className="p-3 text-center bg-bg-card">
                <h3 className="font-serif text-lg text-text font-medium tracking-tight">
                    {member.name}
                </h3>
            </div>
        </article>
    );
};

interface TeamPageClientProps {
    team: Team[];
}

const TeamPageClient = ({ team }: TeamPageClientProps) => {
    type TabOption = "ALL" | TeamName;
    const [activeTab, setActiveTab] = useState<TabOption>("ALL");

    const tabs: { label: string; value: TabOption }[] = [
        { label: "All", value: "ALL" },
        { label: "Design", value: TeamName.DESIGN },
        { label: "Outreach", value: TeamName.OUTREACH },
        { label: "Marketing", value: TeamName.MARKETING },
    ];

    const filteredMembers = team.filter(
        (member) => activeTab === "ALL" || member.teamName === activeTab,
    );

    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <header className="text-center my-12 md:my-16">
                    <h1 className="font-serif text-5xl md:text-6xl text-text mb-6">
                        Meet the people behind it
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
                        A collective of students exploring physics through
                        writing and conversation.
                    </p>
                </header>

                <div className="space-y-8">
                    <nav
                        className="flex flex-wrap gap-2 overflow-x-auto pb-2 hide-scrollbar"
                        aria-label="Team filters"
                    >
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.value;

                            return (
                                <Button
                                    key={tab.value}
                                    onClick={() => setActiveTab(tab.value)}
                                    variant={isActive ? "primary" : "outline"}
                                >
                                    {tab.label}
                                </Button>
                            );
                        })}
                    </nav>

                    <div className="w-full">
                        {filteredMembers.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 transition-all duration-500">
                                {filteredMembers.map((member) => (
                                    <TeamMemberCard
                                        key={member.id}
                                        member={member}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="w-full py-24 text-center border border-dashed border-border text-text-muted">
                                No members found for this team category.
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default TeamPageClient;
export const revalidate = 60;
