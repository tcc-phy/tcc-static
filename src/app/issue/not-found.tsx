"use client";

import { Header, Footer, Link, Divider } from "@/components";

const IssueNotFound = () => {
    return (
        <>
            <Header />
            <main className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
                <div className="max-w-6xl w-full text-center">
                    <p className="tracking-widest text-text-muted mb-4">
                        ISSUE NOT FOUND
                    </p>

                    <p className="font-display text text-3xl leading-relaxed mb-10">
                        The article you're looking for doesn't exist, or may
                        have been moved. Explore our archive to discover all
                        past issues.
                    </p>

                    <Divider marginT="mt-8" marginB="mb-10" />

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/archive">Go to Archive</Link>

                        <Link href="/" variant="outline">
                            Back to Home
                        </Link>
                    </div>

                    <p className="text-xs text-text-muted mt-10">
                        If you believe this is a mistake, try searching from the
                        archive instead.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default IssueNotFound;
