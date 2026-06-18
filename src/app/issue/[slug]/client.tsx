"use client";

import Image from "next/image";
import { Divider, Button, Footer, Header } from "@/components";
// import { Review } from "@/types/data.types";
import { ISSUE_PAGE_WIDTH, ISSUE_PAGE_HEIGHT } from "@/config/constants";
import contentStore from "@/data/content";
import { notFound } from "next/navigation";

const ReviewForm = () => {
    return (
        <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text mb-2"
                    >
                        Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="w-full bg-bg-card border border-border px-4 py-3 text-text focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                        placeholder="e.g. Isaac Newton"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text mb-2"
                    >
                        Email (Optional)
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full bg-bg-card border border-border px-4 py-3 text-text focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                        placeholder="isaac@cambridge.ac.uk"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label
                    htmlFor="review"
                    className="block text-sm font-medium text-text mb-2"
                >
                    Your Review <span className="text-danger">*</span>
                </label>
                <textarea
                    id="review"
                    rows={7}
                    className="w-full bg-bg-card border border-border px-4 py-3 text-text focus:outline-none focus:ring-1 focus:ring-primary transition-shadow resize-y"
                    placeholder="Share your thoughts on this issue..."
                />
            </div>

            <div className="flex gap-4">
                <Button variant="outline" type="reset">
                    Reset All
                </Button>
                <Button variant="primary" type="submit">
                    Post
                </Button>
            </div>
        </form>
    );
};

// interface ReviewCardProps {
//     review: Review;
// }
//
// const ReviewCard = ({ review }: ReviewCardProps) => {
//     return (
//         <div className="bg-bg-card border border-border p-6 sm:p-8">
//             <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
//                 <h4 className="font-display text-xl text-text">
//                     {review.authorName}
//                 </h4>
//                 <time className="text-sm text-text-muted">
//                     {new Intl.DateTimeFormat("en-US", {
//                         dateStyle: "long",
//                     }).format(review.date)}
//                 </time>
//             </div>
//             <p className="text-text-muted leading-relaxed">{review.content}</p>
//         </div>
//     );
// };

interface IssuePageClientProps {
    slug: string;
}

const IssuePageClient = ({ slug }: IssuePageClientProps) => {
    const issue = contentStore.getIssueBySlug(slug);
    if (!issue) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <h1 className="font-display text-5xl text-text">
                        {issue.name}
                    </h1>
                    <time className="block mt-3 text-lg text-text-muted tracking-wide">
                        {new Intl.DateTimeFormat("en-US", {
                            month: "long",
                            year: "numeric",
                        }).format(issue.releaseDate)}
                    </time>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-5 flex gap-4">
                        <div className="flex flex-col gap-3 pt-8">
                            <Button variant="vertical">Open</Button>
                            <Button variant="verticalOutline">Share It</Button>
                        </div>
                        <div className="relative w-full aspect-1240/1754 border border-border shadow-md bg-bg-card">
                            <Image
                                src={issue.coverImageUrl || "/placeholder.png"}
                                alt={`Cover of ${issue.name}`}
                                width={ISSUE_PAGE_WIDTH}
                                height={ISSUE_PAGE_HEIGHT}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 lg:pt-8">
                        <div className="border-b border-border pb-4 mb-6">
                            <h2 className="font-display text-3xl text-text">
                                Abstract
                            </h2>
                        </div>
                        <div className="prose prose-lg text-text-muted max-w-none">
                            <p className="leading-relaxed whitespace-pre-wrap">
                                {issue.abstract}
                            </p>
                        </div>
                    </div>
                </div>

                <Divider marginT="mt-24" marginB="mb-24" />

                <section className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-xl text-text-muted mb-2">
                            Want to share your Thoughts?
                        </h2>
                        <h3 className="font-display text-4xl text-text">
                            Write a quick review.
                        </h3>
                    </div>

                    <ReviewForm />

                    {/* <div className="mt-16 space-y-6">
                            {reviews.map((review) => (
                                <ReviewCard key={review.id} review={review} />
                            ))}
                        </div> */}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default IssuePageClient;
