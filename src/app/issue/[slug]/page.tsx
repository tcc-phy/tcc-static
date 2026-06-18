import IssuePageClient from "./client";

type Params = Promise<{ slug: string }>;

const IssuePage = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    return (
        <>
            <IssuePageClient slug={slug} />
        </>
    );
};

export default IssuePage;
