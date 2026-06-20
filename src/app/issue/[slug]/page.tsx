import { getIssueBySlug, getAllReviewsByIssueId } from "@/services";
import IssuePageClient from "./client";

type Params = Promise<{ slug: string }>;

const IssuePage = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const issueFiled = await getIssueBySlug(slug);
    const reviews = issueFiled
        ? await getAllReviewsByIssueId(issueFiled.id)
        : [];

    return (
        <>
            <IssuePageClient issueFilled={issueFiled} reviews={reviews} />
        </>
    );
};

export default IssuePage;
export const revalidate = 60;
