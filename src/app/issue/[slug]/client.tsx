"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useRef, forwardRef, useEffect } from "react";
import { Divider, Button, Footer, Header } from "@/components";
import { IoIosCloseCircleOutline } from "react-icons/io";
// import { Review } from "@/types/data.types";
import { ISSUE_PAGE_WIDTH, ISSUE_PAGE_HEIGHT } from "@/config/constants";

import { notFound } from "next/navigation";
import { IssueFilled, IssuePage } from "@/types/data.types";
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

const IssueFlipBook = forwardRef<HTMLDivElement, IssuePage>(
    ({ imageUrl, pageNumber }, ref) => {
        return (
            <div
                ref={ref}
                className="bg-bg-card border border-border shadow-inner relative w-full h-full select-none flex flex-col items-center justify-center overflow-hidden"
                data-density="soft"
            >
                <div className="relative w-full h-full aspect-1240/1754 flex items-center justify-center p-2 bg-neutral-900/5">
                    <Image
                        src={imageUrl || "/placeholder.png"}
                        alt={`Page ${pageNumber}`}
                        width={ISSUE_PAGE_WIDTH}
                        height={ISSUE_PAGE_HEIGHT}
                        className="aspect-1240/1754 object-contain pointer-events-none shadow"
                        loading="lazy"
                    />
                </div>
            </div>
        );
    },
);

interface IssueModalProps {
    issue: IssueFilled;
    isOpen: boolean;
    onClose: () => void;
}

const IssueModal = ({ issue, isOpen, onClose }: IssueModalProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const bookRef = useRef<any>(null);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        if (!isOpen) return;

        const checkBreakpoint = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!bookRef.current) return;

            const pageFlipInstance = bookRef.current.pageFlip();
            if (!pageFlipInstance) return;

            if (e.key === "ArrowRight") {
                pageFlipInstance.flipNext();
            } else if (e.key === "ArrowLeft") {
                pageFlipInstance.flipPrev();
            } else if (e.key === "Escape") {
                onClose();
            }
        };

        checkBreakpoint();
        window.addEventListener("resize", checkBreakpoint);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("resize", checkBreakpoint);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const basePageWidth = isMobile ? 340 : 700;
    const basePageHeight = isMobile ? 480 : 990;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-8 transition-opacity duration-350"
            onClick={handleBackdropClick}
        >
            <div className="relative flex flex-col items-center w-full max-w-5xl max-h-[90vh]">
                <div className="w-full flex justify-end mb-4">
                    <Button
                        onClick={onClose}
                        variant="noStyle"
                        aria-label="Close Modal"
                    >
                        <IoIosCloseCircleOutline className="w-8 h-8 text-danger" />
                    </Button>
                </div>

                <div
                    className={`w-full mx-auto flex items-center justify-center max-h-[75vh] overflow-hidden ${
                        isMobile
                            ? "max-w-87.5 aspect-1240/1754"
                            : "max-w-4xl aspect-2480/1754"
                    }`}
                >
                    <HTMLFlipBook
                        key={isMobile ? "portrait" : "landscape"}
                        width={basePageWidth}
                        height={basePageHeight}
                        size="stretch"
                        minWidth={200}
                        maxWidth={1200}
                        minHeight={1860}
                        maxHeight={2360}
                        drawShadow={true}
                        flippingTime={700}
                        usePortrait={isMobile}
                        showCover={false}
                        className="mx-auto"
                        style={{ width: "100%", height: "100%" }}
                        startPage={0}
                        maxShadowOpacity={0.4}
                        mobileScrollSupport={true}
                        clickEventForward={true}
                        autoSize={true}
                        ref={bookRef}
                        startZIndex={0}
                        useMouseEvents={true}
                        swipeDistance={50}
                        showPageCorners={false}
                        disableFlipByClick={false}
                    >
                        {issue.pages.map((page) => (
                            <IssueFlipBook
                                key={page.pageNumber}
                                imageUrl={page.imageUrl}
                                pageNumber={page.pageNumber}
                            />
                        ))}
                    </HTMLFlipBook>
                </div>
            </div>
        </div>
    );
};

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
    issueFilled?: IssueFilled;
}

const IssuePageClient = ({ issueFilled }: IssuePageClientProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!issueFilled) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <h1 className="font-display text-5xl text-text">
                        {issueFilled.name}
                    </h1>
                    <time className="block mt-3 text-lg text-text-muted tracking-wide">
                        {new Intl.DateTimeFormat("en-US", {
                            month: "long",
                            year: "numeric",
                        }).format(issueFilled.releaseDate)}
                    </time>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
                    <div className="md:col-span-5 flex gap-4">
                        <div className="flex flex-col gap-3 pt-8">
                            <Button
                                variant="vertical"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Open
                            </Button>
                            <Button variant="verticalOutline">Share It</Button>
                        </div>
                        <div className="relative w-full aspect-1240/1754 border border-border shadow-md bg-bg-card">
                            <Image
                                src={
                                    issueFilled.coverImageUrl ||
                                    "/placeholder.png"
                                }
                                alt={`Cover of ${issueFilled.name}`}
                                width={ISSUE_PAGE_WIDTH}
                                height={ISSUE_PAGE_HEIGHT}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    <div className="md:col-span-7 md:pt-8">
                        <div className="border-b border-border pb-4 mb-6">
                            <h2 className="font-display text-3xl text-text">
                                Abstract
                            </h2>
                        </div>
                        <div className="prose prose-lg text-text-muted max-w-none">
                            <p className="leading-relaxed whitespace-pre-wrap">
                                {issueFilled.abstract}
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

            <IssueModal
                issue={issueFilled}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default IssuePageClient;
