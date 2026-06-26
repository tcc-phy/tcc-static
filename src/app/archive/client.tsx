"use client";

import Image from "next/image";
import { Header, Footer, Link } from "@/components";
import { ISSUE_PAGE_WIDTH, ISSUE_PAGE_HEIGHT } from "@/config/constants";
import { Issue } from "@/types/data.types";

interface ArchiveStatsProps {
    issueCount: number;
    tagCount: number;
}

const ArchiveStats = ({ issueCount, tagCount }: ArchiveStatsProps) => (
    <div className="flex justify-center gap-16 py-8 my-8 border-y border-border">
        <div className="text-center">
            <span className="block font-serif text-4xl text-text mb-1">
                {issueCount}
            </span>
            <span className="text-sm text-text-muted uppercase tracking-wider">
                Issues
            </span>
        </div>
        {/* <div className="text-center">
            <span className="block font-serif text-4xl text-text mb-1">
                {tagCount}
            </span>
            <span className="text-sm text-text-muted uppercase tracking-wider">
                Tags
            </span>
        </div> */}
    </div>
);

interface IssueCardProps {
    issue: Issue;
}

const IssueCard = ({ issue }: IssueCardProps) => {
    return (
        <article className="flex flex-col sm:flex-row bg-bg-card border border-border shadow-sm transition-all hover:shadow-md">
            <div className="w-full sm:w-48 lg:w-56 shrink-0 bg-bg-base border-b sm:border-b-0 sm:border-r border-border p-4 flex items-center justify-center">
                <div className="relative w-full aspect-1240/1754 border border-border shadow-sm">
                    <Image
                        src={issue.coverImageUrl || "/assets/placeholder.png"}
                        alt={`Cover of ${issue.name}`}
                        width={ISSUE_PAGE_WIDTH}
                        height={ISSUE_PAGE_HEIGHT}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            <div className="flex flex-col p-4 grow">
                <div className="grow">
                    <time className="block text-xs text-text-muted mb-2">
                        {new Intl.DateTimeFormat("en-US", {
                            month: "short",
                            year: "numeric",
                        }).format(issue.releaseDate)}
                    </time>
                    <h3 className="font-serif text-3xl text-text mb-4">
                        {issue.name}
                    </h3>
                    <p className="text-text-muted leading-relaxed text-xs sm:text-sm line-clamp-6">
                        {issue.abstract}
                    </p>
                </div>
                <div className="mt-8 flex justify-end">
                    <Link href={`/issue/${issue.slug}`} variant="primary">
                        Read
                    </Link>
                </div>
            </div>
        </article>
    );
};

interface ArchivePageClientProps {
    issues: Issue[];
    allTags: string[];
}

export const ArchivePageClient = ({
    issues,
    allTags,
}: ArchivePageClientProps) => {
    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12">
                    <h1 className="font-display text-5xl text-text mb-4">
                        Archive
                    </h1>
                    <p className="text-xl text-text-muted">
                        Read our past installment of The Confluence Chronicles
                    </p>
                </header>

                <ArchiveStats
                    issueCount={issues.length}
                    tagCount={allTags.length}
                />

                <div className="py-8 grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mt-12">
                    {issues.map((issue) => (
                        <IssueCard key={issue.id} issue={issue} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ArchivePageClient;
