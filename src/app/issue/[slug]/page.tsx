import { getIssueBySlug } from "@/services";
import IssuePageClient from "./client";

type Params = Promise<{ slug: string }>;

const IssuePage = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const issueFiled = await getIssueBySlug(slug);

    return (
        <>
            <IssuePageClient issueFilled={issueFiled} />
        </>
    );
};

export default IssuePage;
export const revalidate = 60;
